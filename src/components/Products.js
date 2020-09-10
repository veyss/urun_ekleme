import React from 'react'
import Pruduct from "./Product"

export default function Products(props) {
    const { products } = props
    return (
        products.products.length > 0 ?
            <React.Fragment>
                <h3 className="text-center">Eklenen Ürünlerin Listesi</h3>
                <hr></hr>
                <div className="row product-container">
                    {
                        products.products.map((product, index) =>

                            <Pruduct key={index} product={product} />
                        )}

                </div>

            </React.Fragment>
            : <div>Product Boş</div>
    )
}
