import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import Top from 'containers/Top'

const history = createBrowserHistory()

const BaseRouter = () => (
    <ConnectedRouter history={history}>
        <Switch>
            <Route exact path="/" component={Top} />
        </Switch>
    </ConnectedRouter>
)

export default BaseRouter
