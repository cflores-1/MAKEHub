var axios = require("axios").default;

//testing connection to API
var options = {
  method: 'GET',
  url: 'https://sephora.p.rapidapi.com/auto-complete',
  params: {q: 'bronzer'},
  headers: {
    'x-rapidapi-host': 'sephora.p.rapidapi.com',
    'x-rapidapi-key': '515d1aec81msh153c63017303e5cp114fe3jsn837ed8cef344'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});