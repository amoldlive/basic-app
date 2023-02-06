import axios from "axios";

const SearchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID XpVO2YyNP2MU4q9wMX3IlhhRG6dzBHAcBIVn3wZJCpU",
    },
    params: {
      query: term,
    },
  });
  console.log(response.data.results);
  return response.data.results;
};
export default SearchImages;
