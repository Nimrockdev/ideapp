import React, { useState } from 'react'
import { useFetchProducts } from '../../hooks/useFetchProducts'
import { AddWord } from './AddWord';
import { ProductCard } from './ProductCard';

export const ProductScreen = () => {

   const [word, setWord] = useState(['Xiaomi']);

   const {data, loading} = useFetchProducts(word);
   console.log(data);
    return (
        <>
            <h1>ProductScreen ....</h1>
            <AddWord setWord={setWord}/>
            <br/>
            <div className="card-columns">
                {
                    data.map (
                        product =>(
                           <ProductCard key= {product.id}
                           {...product}>
                           </ProductCard>
                        )
                    ) 
                }

            </div>
            
        </>
    )
}
