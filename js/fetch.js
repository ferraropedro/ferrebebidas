const params = {
    access_key: "50517312d22b2d55ad072d99adc7d597",
    query: "Buenos Aires",
  };
  
  fetch("http://api.weatherstack.com/current", { params })
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));