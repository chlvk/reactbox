import axios from "axios";

export default async function searchImages(term) {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 8O50V7bNzfKdVixwS9W9nZVdr0VnrCv9gmeimfdvp6Y",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
}
