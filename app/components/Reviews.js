// import React from 'react';
// import axios from 'axios';



// export function Review(){
//     const [reviewProducts, setReview] = React.useState([])

//     async function getReview(searchReview) {
//         var options2 = {
//             method: 'GET',
//             url: 'https://sephora.p.rapidapi.com/reviews/list',
//             params: {ProductId: searchReview},
//             headers: {
//             'x-rapidapi-host': 'sephora.p.rapidapi.com',
//             'x-rapidapi-key': '515d1aec81msh153c63017303e5cp114fe3jsn837ed8cef344'
//             }
//         };
//         const response = await axios.request(options2)
//         return response
//     }

//     function handleChange(r){
//         setReview(r.target.value)
//     }

//     async function handleClick(r) {
//         const response = await getData(searchReview)
//         const foundReview = response.data.Results.ReviewText.filter(item => {return 'productid' in item})
//         console.log(foundReview)
//         setFoundProducts(foundReview)
//         console.log(response.data.Results)

//     }
//     //when the user types the handle change button it updates the search term state
//     //once the button is clicked the handleClick function gets the searched product from the api
// return (
//     <div class="container">
//        <input onChange={handleChange} placeholder="search term"/>
//        <button onClick={handleClick}>Find Beauty Product</button> {
//            foundProducts.map(
//                (product, i) => {
//                    return <div key={i} class="row">
//                        <br></br>
//                            <div class="col-6">{product.brandName} </div> 
//                            <div class="col-6">{product.productName}</div>
//                            <div class="col-6">{product.productId} </div> 
//                          </div>
//                }
//            )
//        }
//        <br></br>
//        <input onChange={handleChange} placeholder="search term"/>
//        <button onClick={handleClick}>Product review</button> {
//            reviewProducts.map(
//                (review, x) => {
//                    return <div key={x} class ="row">
                       
//                }
//            )
//        }
//     </div>
// )

// }

