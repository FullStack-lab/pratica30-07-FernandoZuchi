import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginSignup from '../components/LoginSignup' 

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<LoginSignup/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes