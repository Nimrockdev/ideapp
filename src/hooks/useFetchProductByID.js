
import { useEffect, useState } from 'react'
import { getProductByID } from '../helpers/getProductByID'



export const useFetchProductByID = (word) => {

    const [state, setState] = useState(
        {
            data: [],
            loading: true
        }
    );

    useEffect(() => {

        getProductByID(word).then(
            data => {               
                setState({
                    data: data[0],
                    loading: false
                })
            }
        )

    }, [word]);

    return state; 
    
}
 