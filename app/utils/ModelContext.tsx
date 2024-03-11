'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import * as tmImage from "@teachablemachine/image";

interface ModelContextInterface {
  model: tmImage.CustomMobileNet | null;
}
interface Props {
  children: ReactNode;
}

const ModelContext = createContext<ModelContextInterface>({
  model: null,
});

export const useModel = () => useContext(ModelContext);

const ModelProvider = ({ children }: Props) => {
  const [model, setModel] = useState<tmImage.CustomMobileNet | null>(null);

  useEffect(() => {
    const loadModel = async () => {
      if (!model) {
        const loadedModel = await tmImage.load(
          process.env.NEXT_PUBLIC_MODEL_URL + "model.json",
          process.env.NEXT_PUBLIC_MODEL_URL + "metadata.json"
        );
        setModel(loadedModel);
      }
    };
    loadModel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ModelContext.Provider value={{ model }}>{children}</ModelContext.Provider>
  );
};

export default ModelProvider;
