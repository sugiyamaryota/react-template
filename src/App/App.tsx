import { hot } from 'react-hot-loader/root'
import { setConfig } from 'react-hot-loader'
import React, { useEffect, useMemo, useState } from 'react'
import Router from './Router'

const App = () => {
    return <Router />
}
export default hot(App)
