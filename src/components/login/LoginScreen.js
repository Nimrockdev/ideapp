import React from 'react'

//history viene del router
export const LoginScreen = ({history}) => {

    const handleLogin = ()=>{
        // history.push('/StartPage');
        history.replace('/StartPage');
    }





    return (
        <div className="container mt-5">
            <h1>LoginScreen</h1> 
            <hr/>
            <button
            className="btn btn-primary"
            onClick={handleLogin}
            >
             Login
            </button>
        </div>
    )
}
