import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Form from '../src/components/form'
import Fruits from '../src/components/Fruits'
import Products from '../src/pages/Products'
import ColorPack from '../src/components/color-pack'
//import Calculator from '../src/components/temperature-calculator'

const Router = () => {
    return <Switch>
        <Route exact path='/react-redux-navbar' component={Form} />
        <Route exact path='/react-redux-navbar/products' component={Products} />
        <Route exact path='/react-redux-navbar/webpack' component={ColorPack} />
        <Route exact path='/react-redux-navbar/fruits' component={Fruits} />
    </Switch>
}

export default Router