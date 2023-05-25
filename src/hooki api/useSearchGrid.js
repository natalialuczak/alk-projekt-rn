import { useQuery } from "@tanstack/react-query";

const URL = "https://rickandmortyapi.com/api/character";

const getPhoto = async () => {
  const response = await fetch(URL);
  return response.json();
};

export const usePhoto = () => {
  return useQuery(["posts"], getPhoto, {
    placeholderData: [],
  });
};