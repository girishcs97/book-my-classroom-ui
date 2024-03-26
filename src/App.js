import './App.css';
import FacultyPage from './FacultyPage/facultyPage';
import SlotSelect from './SlotSelect/slotSelect';
import UserAuth from './UserAuth/userAuth';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  localStorage.clear();
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<UserAuth/>} />
      <Route exact path="/faculty" element={<FacultyPage/>} />
      <Route exact path="/slotselect" element={<SlotSelect/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;