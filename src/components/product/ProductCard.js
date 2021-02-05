import React from 'react'
import { Link } from 'react-router-dom'

export const ProductCard = ({img,avaiable,stock,_id, name, price, priceCost, description, category,__v}) => {
      return (
        <div className="card ms-3" style={{maxWidth:420}}>
            <div className="row no-gutters" >
                <div className="col-md-4">
                    <img src={img} className="card-img" alt= {name} />
                    {/* <img src={img} className="card-img-top" alt= {name} /> */}
                </div>
                <div className="col-md-8">
                    <div className="card-body">

                        <h5 className="card-title">{name}</h5>
                                       
                        <p className="card-text">
                            {/* <small className="text-muted"> { description } </small> */}
                            <small className="text-muted"> { description.substr(0,100) } ... </small>
                            
                            <h6 className="card-text">{price} €</h6>
                        </p>

                        <Link to={`./product/${_id}`}>Info</Link>
                      

                    </div>
                </div>
            </div>
        </div>
    )
}
