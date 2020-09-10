import React from 'react'

export default function Product({ product }) {
    const { productName,
        productCount,
        productPrice,
        totalPrice,
        producImg } = product
     return (
        <div className="col-md-3">
         
            <img className="card-img-top" src={producImg} alt={productName} />
            <div className="card-body">
                <h5 className="card-title"> { productName } </h5>
                {console.log()}
                <small><strong>Adet : </strong> { productCount }</small>
                <br/>
                    <small><strong>Fiyat : </strong> { productPrice }</small>
                    <br/>
                        <small><strong>Tutar : </strong> { totalPrice }</small>
                </div>

          
        </div>
    )
}
