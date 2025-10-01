const axios = require("axios");

axios.get("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => {
    console.log("Título del post:", response.data.title);
  })
  .catch(error => {
    console.error("Error al obtener datos:", error);
  });
