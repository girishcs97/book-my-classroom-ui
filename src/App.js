import './App.css';
import UserAuth from './UserAuth/userAuth';

const App = () => {
  localStorage.clear();
  return (
    <>
      <UserAuth />
    </>
  )
}

export default App;