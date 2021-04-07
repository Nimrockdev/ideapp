import React, { useState, useMemo } from 'react'

import { useFetchProducts } from '../../hooks/useFetchProducts'
import { AddWord } from './AddWord';
import { ProductList } from './ProductList';

export const ProductsScreen = () => {

   const [word, setWord] = useState(['re']);
   const {data, loading} = useFetchProducts(word);

//    const { data, loading } = useMemo(() => useFetchProducts(word), [word]);

    return (
        <div>
             
            <h2>Busqueda...</h2>
            <AddWord setWord={setWord}/>
            <hr/>
            {loading && <p className= "animate__animated animate__flash">Por favor, espere aque el servidor se ponga en marcha</p>}
            <div className= "card-columns animate__animated animate__fadeIn">
           
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
