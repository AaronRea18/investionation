import './App.css';
import Header from './screens/header/Header'
import StockScreen from './screens/stock-screen/StockScreen';
import SignIn from './screens/sign-in/SignIn';
import SignUp from './screens/sign-up/SignUp'
import CompanyLandingPage from './screens/company-landing/CompanyLandingPage';
import UserLandingPage from './screens/user-landingpage/UserLandingPage';
import BuyScreen from './screens/buy-screen/BuyScreen';
import EnglishStrings from './resources/strings/en-us.json'
import JapaneseStrings from './resources/strings/ja-jp.json'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import React, { useState } from 'react';

function App() {
  const [langague, setLanguage] = useState(EnglishStrings);
  return (
    <Router>
      <header className="App-header">
      {/* componetize and dropdown */}
<button onClick={()=>(setLanguage(JapaneseStrings))}>Language Change</button>
        <div className="App">
          <Header strings={langague.header}></Header>
          <Routes >
            <Route path="/" element={<SignIn strings={langague.signIn}/>} />
            <Route path="/signUp" element={<SignUp  strings={langague.signUp}/>} />
            <Route path="/companyHome" element={<CompanyLandingPage strings={langague.companyLanding}/>} />
            <Route path="/userHome" element={<UserLandingPage strings={langague.userLanding} />} />
            <Route path="/stockScreen" element={<StockScreen strings={langague.stockScreen} />} />
            <Route path="/buyScreen" element={<BuyScreen />} />

          </Routes >
        </div>
      </header>
    </Router>
  );
}

export default App;
