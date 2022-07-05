import axios from "axios";

const client = axios.create({
  baseURL: "https://swapi.dev/api/",
});

export const getStarships = async () => {
  const response = await client.get("starships");
  return response.data.results;
};

export const getStarshipsItem = async (id) => {
  const response = await client.get(`starships/${id}`);
  return response.data;
};
