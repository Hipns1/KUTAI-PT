import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from '../Components/LandingPage';
import Login from '../Components/Login';
import Register from '../Components/Register';
import DashboardRoutes from './DashboardRoutes';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import styles from "../Styles/Load/Load.module.scss";
import load_ash from "../Styles/Images/load_ash.gif";
import load_pokeball from "../Styles/Images/load_poke_water.gif";


const AppRouters = () => {
	const [checking, setChecking] = useState(true)
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [usuario, setUsuario] = useState('')

	useEffect(() => {
		const auth = getAuth()
		onAuthStateChanged(auth, (user) => {
			if (user?.uid) {
				setIsLoggedIn(true)
				setUsuario(user.email)
			} else {
				setIsLoggedIn(false)
			}
			setTimeout(function () {
				setChecking(false)
			}, 1000)
		})
	}, [setIsLoggedIn, setChecking])

	if (checking) {
		return (
			<div className={styles.load_container}>
				<div className={styles.load_principal}>
					<img src={load_pokeball} alt="load_pokeball"/>
				</div>
				<div className={styles.load_bottom}>
					<img src={load_ash} alt="load_ash" />
				</div>
			</div>
		)
	}

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/landingpage'
					element={
						<PublicRoutes isAuth={isLoggedIn}>
							<LandingPage />
						</PublicRoutes>
					}
				/>

				<Route
					path='/login'
					element={
						<PublicRoutes isAuth={isLoggedIn}>
							<Login />
						</PublicRoutes>
					}
				/>

				<Route
					path='/register'
					element={
						<PublicRoutes isAuth={isLoggedIn}>
							<Register />
						</PublicRoutes>
					}
				/>

				<Route
					path='/*'
					element={
						<PrivateRoutes isAuth={isLoggedIn} email={usuario}>
							<DashboardRoutes />
						</PrivateRoutes>
					}
				/>
			</Routes>
		</BrowserRouter>
	)
}

export default AppRouters
