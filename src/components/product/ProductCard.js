import React from 'react'
import { Link } from 'react-router-dom'

export const ProductCard = ({img,avaiable,stock,_id, name, price, priceCost, description, category,__v}) => {
  
    console.log(name)
    return (
        <div className="card ms-3" style={{maxWidth:320}}>
            <div className="row no-gutters" >
                <div className="col-md-4">
                    <img src={img} className="card-img" alt= {name} />
                    {/* <img src={img} className="card-img-top" alt= {name} /> */}
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">
                            <h7 className="card-text">{description} €</h7>
                            <h6 className="card-title">{price} €</h6>
                            <Link to={`./product/${_id}`}>Info</Link>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}
