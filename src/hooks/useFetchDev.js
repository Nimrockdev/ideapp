import { useEffect, useState } from 'react'
import { getDev } from '../helpers/getDev';

export const UseFetchDev = (about) => {

    const[state, setState] = useState(
        {
            data:[],
            loading: true
        }
    );

    useEffect( () => {

        getDev(about).then(data=>{
  
            setState({
                data,
                loading: false
            });

        });


    },[about]);

    return state;


}
