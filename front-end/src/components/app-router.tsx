import { HomeScreen, RegisterScreen } from "../pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './navbar';


const AppRouter = () => {
  return (
        <Router>
          <Navbar/>
        <h1>Pessoas APP</h1>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
        </Routes>
      </Router>
  )
}

export default AppRouter;