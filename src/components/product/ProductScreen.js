import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useFetchProductByID } from '../../hooks/useFetchProductByID';


export const ProductScreen = ({history}) => {
    
    const {productID} = useParams();

    const { data, loading } = useFetchProductByID(productID);
    
    // const { data, loading } = useMemo(() => useFetchProductByID(productID), [productID]);

    if (!data){
        return <Redirect to="/" />;
    }
    
    const handleReturn = () => {
        console.log(history)
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
                    className="img-thumbmail animate__animated animate__fadeIn"
                    width= '320'
                />
            </div>
            <div className="col-6">
                <h3>{name}</h3>
                <p>{description}</p>
                <h5>{stock} Uni.</h5>
                <h5>{price} €</h5>

                <div class="btn-toolbar">
                    <button id="btnReturn" type="button" class="btn btn-outline-info mr-2 mb-2" onClick= {handleReturn}>Volver</button>
                    <button id="btnADD" type="button" class="btn btn-success mr-2 mb-2">Comprar</button>
                    <button id="btnCancel" type="button" class="btn btn-danger mr-2 mb-2">Cancelar</button>                    
                </div>
            </div>
        </div>
    )
}
