import React from 'react';
import './Product.css';
import data from './data.json';
import ProductCard from '../ProductCard/ProductCard';

class Product extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: "default",
            price: "default"
        }


    }

    handlePriceDropdownSelect = (event) => {
        this.setState({
            price: event.target.value,
            type: event.target.value
        })
    }

    render() {
        const { type, price } = this.state;

        return (
            <div>
                <head>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet" />
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
                    integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous" />
                    <link rel="stylesheet" href="https://use.fontwesome.com/releases/v5.4.1/css/all.css" />
                </head>
                <section>
                    <div className="hero-image--product">
                        <div className="container-hero">
                            <h1><span>Products</span></h1>
                        </div>
                    </div>
                </section>
                <div id="myBtnContainer">
            <label style={{padding: "10px"}}>Filter by Product Type: </label>
            <select id="productType" value={type} onChange={this.handlePriceDropdownSelect}>
                <option value="default">Show All</option>
                <option value="games">Games</option>
                <option value="systems">Systems</option>
                <option value="accessories">Accessories</option>
            </select>
            <label style={{padding: "10px"}}>Filter by Price: </label>
            <select id="productPrice" value={price} onChange={this.handlePriceDropdownSelect}>
                <option value="default">Show All</option>
                <option value="price20to60">$20-$60</option>
                <option value="priceOver60">Over $60</option>
                <option value="priceUnder20">Under $20</option>
            </select>
        </div>
            <div className="container">
                {data.map( (ItemInfo, index) => {
                    if ( price === "default" && type === "default" ) {
                        return <ProductCard product={ItemInfo} />
                    } else if ( price === ItemInfo.price || type === ItemInfo.type ) {
                        return <ProductCard product={ItemInfo} />
                    } else if ( price === ItemInfo.price && type === ItemInfo.type ){
                        return <ProductCard product={ItemInfo} />
                    }
                })}

                </div>
            </div>
        )
    }
}


export default Product;