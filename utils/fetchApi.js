// import axios from "axios";

// export const baseUrl = 'https://bayut.p.rapidapi.com'

// export const fetchApi = async (url) => {
//   const { data } = await axios.get((url, {
//     headers: {
//       "X-RapidAPI-Key": "b7a69e63f7msh7ea1f095cd97944p1d4b60jsnb2de5e7976dd",
//       "X-RapidAPI-Host": "bayut.p.rapidapi.com"
//     }
//   })

//   return data;
// }

import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'X-RapidAPI-Key': 'b7a69e63f7msh7ea1f095cd97944p1d4b60jsnb2de5e7976dd',
    },
  });
    
  return data;
}
