import React, { useState } from 'react'
import { useFetchProducts } from '../../hooks/useFetchProducts'
import { AddWord } from './AddWord';
import { ProductCard } from './ProductCard';

export const ProductScreen = () => {

   const [word, setWord] = useState(['Xiaomi']);

   const {data, loading} = useFetchProducts(word);
   
    return (
        <div>
             
            <h2>Busqueda ....</h2>
            <AddWord setWord={setWord}/>
            <hr/>
           
           
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
    )
}
