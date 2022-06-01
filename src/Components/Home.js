import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutAsync } from '../Redux/actions/actionLogin'

const Home = () => {

    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logoutAsync())
    }
    return (
        <div>
            Home
            <button onClick={() => { handleLogout() }}>Logout</button>
        </div>
    )
}

export default Home