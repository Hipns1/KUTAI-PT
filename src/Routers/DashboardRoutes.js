import { Navigate, Route, Routes } from 'react-router-dom';
import Characters from '../Components/Characters';
import Detail from '../Components/Detail';
import NavBar from '../Components/NavBar';

const DashboardRoutes = () => {
	return (
		<div >
			<div>
				<NavBar />
				<Routes>
					<Route path='/' element={<Characters />} />
					<Route path='*' element={<Navigate to='/' />} />
					<Route path='/characters/:id' element={<Detail />} />
				</Routes>
			</div>
		</div>
	)
}

export default DashboardRoutes
