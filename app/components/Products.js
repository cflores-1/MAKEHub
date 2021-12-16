import React from 'react';
import axios from 'axios';
import {Row, Container, Col} from 'react-bootstrap'



export function Products(){
    const [foundProducts, setFoundProducts] = React.useState([])
    const [searchProducts, setSearch] = React.useState("")

    async function getData(searchTerm) {

        //Sephora API connection to auto-complete
        var options = {
            method: 'GET',
            url: 'https://sephora.p.rapidapi.com/auto-complete',
            params: {q: searchTerm},
            headers: {
            'x-rapidapi-host': 'sephora.p.rapidapi.com',
            'x-rapidapi-key': '515d1aec81msh153c63017303e5cp114fe3jsn837ed8cef344'
            }
        }

        const response = await axios.request(options)
        return response
    }
    
    function handleChange(e){
        setSearch(e.target.value)
    }

    async function handleClick(e) {
        const response = await getData(searchProducts)
        const found_items = response.data.typeAheadTerms.filter(item => {return 'brandName' in item})
        console.log(found_items)
        setFoundProducts(found_items)
        console.log(response.data.typeAheadTerms)

    }

    //when the user types the handle change button it updates the search term state
    //once the button is clicked the handleClick function gets the searched product from the api
return (
    <div class="container">
       <input onChange={handleChange} placeholder="Search Product"/>
       <button onClick={handleClick}>Find Beauty Product</button> {
           foundProducts.map(
               (product, i) => {
                   return <Container key={i}>
                            <Row>
                                <br></br>
                                <Col> {product.brandName} </Col> 
                                <Col> {product.productName}</Col>
                                <Col> {product.productId} </Col> 
                                <Col> <img src={product.defaultSku.skuImages.image50} ></img></Col>
                           </Row>
                         </Container>
               }
           )
       }
    </div>
)

}

