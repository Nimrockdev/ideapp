import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getProductByID } from '../../helpers/getProductByID';
import { useFetchProductByID } from '../../hooks/useFetchProductByID';


export const ProductScreen = () => {
    
    const {productID} = useParams();

    const { data, loading } = useFetchProductByID(productID)

    if (!data){
        return <Redirect to="/" />;
    }

    const {
       img, avaiable, stock, _id, name, price, priceCost, description, category, __v
    } = data;


    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}
