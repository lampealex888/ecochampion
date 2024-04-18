"use client";

import { useEffect, useState, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface Facility {
  name: string;
  vicinity: string;
}

export default function Map() {
  const mapRef = useRef<HTMLDivElement>(null);
  const bootstrapSrc = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_MAPS_API_KEY}&libraries=places`;
  const [places, setPlaces] = useState<google.maps.places.PlaceResult[]>([]);

  useEffect(() => {
    async function fetchFacilities() {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string, 
        version: 'weekly',
      });

      const { Map } = await loader.importLibrary('maps');
      const { PlacesService } = await loader.importLibrary('places');
      const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

      var clientLocation;
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          clientLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

          const mapOptions: google.maps.MapOptions = {
            center: clientLocation,
            zoom: 15,
            mapId: 'ECOLOCATOR_MAP'
          };

          const map = new Map(mapRef.current as HTMLDivElement, mapOptions);
      
          var request = {
            query: 'Recycling',
            fields: ['name', 'geometry'],
          };
        
          var service = new google.maps.places.PlacesService(map);
          
        
          service.findPlaceFromQuery(request, function(results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK && results) {
              for (var i = 0; i < results.length; i++) {
                const marker = new AdvancedMarkerElement({ map, position: results[i].geometry?.location });
              }
              if (results[0].geometry?.location) {
                map.setCenter(results[0].geometry.location);
              }
              setPlaces(results);
            }
          });
        }, function (error) { console.error('Error getting location:' + error)}
      );
      }
    }

    fetchFacilities();
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <div className="border-8" style={{ flex: 6 }}>
        <div style={{width:'100%', height: '450px'}} ref={mapRef}></div>
      </div>
      <div className="hidden md:block flex-4" style={{flex:4, padding:'20px'}}>
        <h2 className="text-lg font-semibold mb-2">Facilities Nearby:</h2>
        <ul>
          {places.map((place, index) => (
            <li key={index} className="mb-2">
              <p className="font-semibold">{index + 1}. {place.name}</p>
              <p>{place.vicinity}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}