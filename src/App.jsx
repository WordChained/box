import { Header } from './components/shared/Header/Header';
import styles from './app.module.css';
import { Footer } from './components/shared/Footer/Footer';
import { LoginPage } from './views/login/LoginPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AboutUs } from './views/about-us/AboutUs';
import { Rooms } from './views/Rooms/Rooms';
import { Home } from './views/home/Home';

import { LoginContextProvider } from './store/contexts/LoginContext';
import { ChatroomLoader } from './store/loaders/ChatroomLoader';
function App() {
  return (
    <LoginContextProvider>
      <div className={styles.app}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='' element={<Home />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/rooms' element={<Rooms />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/rooms/room/:roomName' element={<ChatroomLoader />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </LoginContextProvider>
  );
}

export default App;
{
  /* 
  import { useReducer } from 'react';
  import { Box } from './components/box/Box';
  import { Checkers } from './components/checkers/Checkers';
  import { Messages } from './components/messages/Messages';
  import { EmailChecker } from './components/validation/EmailChecker';


<select name='' id='' onChange={changeComponents}>
        <option value='box'>Box</option>
        <option value='email'>EmailValidator</option>
        <option value='msgs'>Messages</option>
        <option value='checkers'>Checkers</option>
        </select>
        {selectState.showBox && <Box />}
        {selectState.showEmailChecker && <EmailChecker />}
        {selectState.showMessages && <Messages />}
      {selectState.showCheckers && <Checkers />} */
}
// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'box':
//       return {
//         showBox: true,
//         showEmailChecker: false,
//         howMessages: false,
//         showCheckers: false,
//       };
//     case 'email':
//       return {
//         showBox: false,
//         showEmailChecker: true,
//         howMessages: false,
//         showCheckers: false,
//       };
//     case 'msgs':
//       return {
//         showBox: false,
//         showEmailChecker: false,
//         showMessages: true,
//         showCheckers: false,
//       };
//     case 'checkers':
//       return {
//         showBox: false,
//         showEmailChecker: false,
//         showMessages: false,
//         showCheckers: true,
//       };
//     default:
//       return state;
//   }
// };
// const changeComponents = (ev) => {
//   dispatch({ type: ev.target.value });
// };
// const [selectState, dispatch] = useReducer(reducer, {
//   showBox: true,
//   showEmailChecker: false,
//   showMessages: false,
//   showCheckers: false,
// });
