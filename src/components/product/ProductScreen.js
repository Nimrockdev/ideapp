import React, { useState } from 'react'
import { useFetchProducts } from '../../hooks/useFetchProducts'
import { AddWord } from './AddWord';

export const ProductScreen = () => {

   const [word, setWord] = useState(['Xiaomi']);

   const {data, loading} = useFetchProducts(word);
   
    return (
        <>
            <h1>ProductScreen ....</h1>
            <AddWord setWord={setWord}/>
            
        </>
    )
}
