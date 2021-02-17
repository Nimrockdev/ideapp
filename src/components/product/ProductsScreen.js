import React, { useState, useMemo } from 'react'
import { useFetchProducts } from '../../hooks/useFetchProducts'
import { AddWord } from './AddWord';
import { ProductList } from './ProductList';

export const ProductsScreen = () => {

   const [word, setWord] = useState(['xiaomi']);

   const {data, loading} = useFetchProducts(word);

   //const { data, loading } = useMemo(() => useFetchProducts(word), [word])//useFetchProducts(word);
   
    return (
        <div>
             
            <h2>Busqueda ....</h2>
            <AddWord setWord={setWord}/>
            <hr/>
            <div className= "card-columns">
           
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
            
        </div>
    )
}
