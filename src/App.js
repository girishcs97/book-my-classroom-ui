import './App.css';
import Faculty from './Faculty/faculty';
import UserAuth from './UserAuth/userAuth';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  localStorage.clear();
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<UserAuth/>} />
      <Route exact path="/faculty" element={<Faculty/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;