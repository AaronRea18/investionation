import './App.css';
import Header from './screens/header/Header'
import StockScreen from './screens/stock-screen/StockScreen';
import SignIn from './screens/sign-in/SignIn';
import SignUp from './screens/sign-up/SignUp'
import CompanyLandingPage from './screens/company-landing/CompanyLandingPage';
import UserLandingPage from './screens/user-landingpage/UserLandingPage';
import BuyScreen from './screens/buy-screen/BuyScreen';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <header className="App-header">

        <div className="App">
          <Header></Header>
          <Routes >
            <Route path="/" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/companyHome" element={<CompanyLandingPage />} />
            <Route path="/userHome" element={<UserLandingPage />} />
            <Route path="/stockScreen" element={<StockScreen />} />
            <Route path="/buyScreen" element={<BuyScreen />} />

          </Routes >
        </div>
      </header>
    </Router>
  );
}

export default App;
