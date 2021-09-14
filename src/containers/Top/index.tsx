import React, { useState, useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'store/store'
import { Presenter } from './presenter'

export default () => {
    return (
        <Presenter />
    )
}