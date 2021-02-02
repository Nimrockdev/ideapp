import React from 'react'
import { UseFetchDev } from '../../hooks/useFetchDev'

export const devScreen = (about) => {
    
    const {data, loading} = UseFetchDev(about);
    return (    
        <> 
           <h2>DevScreen</h2>
           {loading && <p className= "animate__animated animate__flash">Loading</p>}
           <div>           
                <a href={data.github}>GitHub</a>
                <br/>
                <a href={data.readme}>Readme</a>      
                <br/>
                <a href={data.postman}>Postman</a>
           </div>
        </>
    )
}
