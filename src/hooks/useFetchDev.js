import { useEffect, useState } from 'react'
import { getDev } from '../components/helpers/getDev';

export const UseFetchDev = (about) => {

    const[state, setState] = useState(
        {
            data:[],
            loading: true
        }
    );

    useEffect( () => {

        getDev(about).then(urlDevarc=>{
  
            setState({
                data: urlDevarc,
                loading: false
            });
        });


    },[about]);

    return state;


}
