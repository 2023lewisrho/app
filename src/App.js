import logo from './logo.svg';
import './App.css';
import LoginPage from './LoginPage';
import { Route, BrowserRouter, Routes  } from "react-router-dom";
import MainPage from './MainPage';
import LearnMorePage from './LearnMorePage'
import Ugly from './Ugly';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/learnmore" element={<LearnMorePage />}/>
          <Route path="/ugly" element={<Ugly />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
