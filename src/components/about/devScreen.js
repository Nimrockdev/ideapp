import React from 'react'
import { UseFetchDev } from '../../hooks/useFetchDev'

export const devScreen = (about) => {
    
    const {data:data, loading} = UseFetchDev(about);
    return (    
        <>  
           <h3> {data.github}</h3>
           <h3> {data.readme}</h3>
           <h3> {data.postman}</h3>
        </>
    )
}
