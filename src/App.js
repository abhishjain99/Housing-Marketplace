// feedback-app
// import Feedback from './feedback-app/Feedback';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Explore from './house-marketplace/pages/Explore';
import PrivateRoute from './house-marketplace/components/PrivateRoute';
import Profile from './house-marketplace/pages/Profile';
import Offers from './house-marketplace/pages/Offers';
import SignIn from './house-marketplace/pages/SignIn';
import SignUp from './house-marketplace/pages/SignUp';
import ForgotPassword from './house-marketplace/pages/ForgotPassword';
import Navbar from './house-marketplace/components/Navbar';
import './house-marketplace/house-marketplace.css';
import Category from './house-marketplace/pages/Category';


function App() {
  return (
    <>
      {/* Feedback App */}
      {/* <Feedback /> */}

      {/* Housing-Marketplace form here */}
      <Router>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/offers" element={<Offers />} />
          <Route path='/category/:categoryName' element={<Category />} />
          <Route path='/profile' element={<PrivateRoute />}>
            <Route path='/profile' element={<Profile />} />
          </Route>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
        {/* Navbar */}
        <Navbar />
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;