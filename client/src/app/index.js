import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { ItemList , InsertItem, ItemUpdate, SignIn } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/sign-in" exact component={SignIn} />
                <Route path="/items/list" exact component={ItemList} />
                <Route path="/movies/create" exact component={InsertItem} />
                <Route
                    path="/movies/update/:id"
                    exact
                    component={ItemUpdate}
                />
            </Switch>
        </Router>
    )
}

export default App