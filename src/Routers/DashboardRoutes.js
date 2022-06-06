import { Navigate, Route, Routes } from 'react-router-dom';
import Characters from '../Components/Characters';
import Detail from '../Components/Detail';
import Episodes from '../Components/Episodes';
import Favorites from '../Components/Favorites';
import Locations from '../Components/Locations';
import NavBar from '../Components/NavBar';

const DashboardRoutes = () => {
	return (
		<div >
			<div>
				<NavBar />
				<Routes>
					<Route path='/home' element={<Characters />} />
					<Route path='*' element={<Navigate to='/home' />} />
					<Route path='/characters/:id' element={<Detail />} />
					<Route path='/locations' element={<Locations />} />
					<Route path='/episodes' element={<Episodes />} />
					<Route path='/favorites' element={<Favorites />} />
				</Routes>
			</div>
		</div>
	)
}

export default DashboardRoutes
