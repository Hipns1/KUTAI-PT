import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../Components/Home';

const DashboardRoutes = () => {
	return (
		<div >
			<div>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='*' element={<Navigate to='/' />} />
				</Routes>
			</div>
		</div>
	)
}

export default DashboardRoutes
