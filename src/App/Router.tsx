import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { store, history } from 'store/store'

const Top = () => import(/* webpackChunkName: 'Top' */ 'containers/Top')

const BaseRouter = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                {/* <Route exact path="/" component={Top} /> */}
                <Route exact path="/">
                    <div>test</div>
                </Route>
            </Switch>
        </ConnectedRouter>
    </Provider>
)

export default BaseRouter
