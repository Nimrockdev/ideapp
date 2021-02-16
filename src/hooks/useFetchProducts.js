import { useEffect, useState } from 'react'
import { getProducts } from '../helpers/getProducts';

export const useFetchProducts = (word) => {

    const[state, setState] = useState(
        {
            data:[],
            loading:true
        }
    );
    
    useEffect( ()=>{

        getProducts(word).then(
            data => {

                setState({
                    data,
                    loading:false
                })
            }
        )

    },[word]);

    return state;

}



