import React, { useState } from 'react'
import { useFetchProducts } from '../../hooks/useFetchProducts'
import { AddWord } from './AddWord';
import { ProductList } from './ProductList';

export const ProductsScreen = () => {

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
                            <ProductList key= {product.id}
                           {...product}>
                            </ProductList>
                        )
                    ) 
                }

           
            
        </div>
    )
}
