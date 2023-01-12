const API = process.env.REACT_APP_API;
const API_TOKEN = process.env.REACT_APP_TOKEN;

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization: "Bearer " + API_TOKEN,
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}

// const API = "https://api.themoviedb.org/3";

// export function get(path) {
//   return fetch(API + path, {
//     headers: {
//       Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDk5MTU2MjBmM2JlODU0MmYzNjYwY2NjZWJiZTY2MiIsInN1YiI6IjYzYWI4YTY1NWFkNzZiMDBhZThlYTJiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VgWNdVA7g2JOqsv0MAq89VvFWqpRxeT6Cuv1NBTrNGk",
//       "Content-Type": "application/json;charset=utf-8",
//     },
//   }).then((result) => result.json());
// }
