var axios = require("axios").default;

//Sephora API connection
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

// var options2 = {
//   method: 'GET',
//   url: 'https://sephora.p.rapidapi.com/reviews/list',
//   params: {ProductId: 'P454378', Limit: '60', Offset: '0'},
//   headers: {
//     'x-rapidapi-host': 'sephora.p.rapidapi.com',
//     'x-rapidapi-key': '515d1aec81msh153c63017303e5cp114fe3jsn837ed8cef344'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });