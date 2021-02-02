import React, { Fragment } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { devScreen } from '../components/about/devScreen'
import { ProductScreen } from '../components/product/ProductScreen'
import { Navbar } from '../components/ui/Navbar'
import { UserScreen } from '../components/user/UserScreen'

export const DashboardRoutes = () => {
    return (
        <>
           <Navbar/> 
           <div>
               <Switch>
                    <Route exact path="/product" component={ProductScreen} />                   
                    <Route exact path="/product/:productid" component={ProductScreen} /> 
                    <Route exact path="/user" component={UserScreen} /> 
                    <Route exact path="/dev" component={devScreen} /> 
                    <Redirect to="/dev"/>
               </Switch>
           </div>
        </>
    )
}
