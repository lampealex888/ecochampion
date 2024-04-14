"use client";

import { useEffect, useState, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface Facility {
  name: string;
  vicinity: string;
}

const Map = () => {
  const [facilities, setFacilities] = useState<Facility[]>([]);
  const mapRef = useRef<HTMLDivElement>(null);
  const bootstrapSrc = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_MAPS_API_KEY}&libraries=places`;

  useEffect(() => {
    async function fetchFacilities() {

      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string, 
        version: 'weekly',
    });

      const { Map } = await loader.importLibrary('maps');
      const { Marker } = await loader.importLibrary('marker');

     
    var initialLocation;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        });
    }

    const mapOptions: google.maps.MapOptions = {
      center: initialLocation,
      mapId: 'ECOLOCATOR_MAP'
    };

    const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

    var request = {
        query: 'Recycling',
        fields: ['name', 'geometry'],
    };
    
    var service = new google.maps.places.PlacesService(map);
    
      service.findPlaceFromQuery(request, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            const marker = new Marker({ map, position: results[i].geometry?.location });
          }
          //map.setCenter(results[0].geometry.location);
        }
      });
  }

    fetchFacilities();
  }, []);

  return (
    
    <div>
      <script async
    src={bootstrapSrc}>
    </script>
      <div style={{width:'100%', height: '450px'}} ref={mapRef}>
        </div>
      <h2 className="text-lg font-semibold mb-2">Facilities Nearby:</h2>
      <ul>
        {facilities.map((facility, index) => (
          <li key={index} className="mb-2">
            <p className="font-semibold">{facility.name}</p>
            <p>{facility.vicinity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Map;
