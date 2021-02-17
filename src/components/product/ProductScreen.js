import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useFetchProductByID } from '../../hooks/useFetchProductByID';


export const ProductScreen = ({history}) => {
    
    const {productID} = useParams();

    const { data, loading } = useFetchProductByID(productID);
    
    //const { data, loading } = useMemo(() => useFetchProductByID(productID), [productID]);

    

    if (!data){
        return <Redirect to="/" />;
    }
    
    const handleReturn = () => {

        if (history >= 2){
            history.push('/');
        }else{
            history.goBack();
        }

    }

    const {
       img, avaiable, stock, _id, name, price, priceCost, description, category, __v
    } = data;


    return (
        <div className="row mt-5">
            <div className="col-6">
                <img 
                    src={img}
                    alt={name}
                    className="img-thumbmail"
                    width= '320'
                />
            </div>
            <div className="col-6">
                <h3>{name}</h3>
                <p>{description}</p>
                <h5>{stock} Uni.</h5>
                <h5>{price} €</h5>

                <button 
                    className="btn btn-outline-info"
                    onClick= {handleReturn}
                >
                    Return
                </button> 
                
                <button type="button" class="btn btn-primary">Buy</button>


            </div>
        </div>
    )
}
