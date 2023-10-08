import React from 'react';
import styled from 'styled-components';
import './App.css';
import { Navbar } from './COMPONENTS/navbar/Navbar';
import { News } from './COMPONENTS/news/News';
import { Music } from './COMPONENTS/music/Music';
import { Settings } from './COMPONENTS/settings/Settings';
import { Routes, Route } from 'react-router-dom';
import { MyContext } from '.';
import ProfileContainer from './COMPONENTS/profile/ProfileContainer';
import HeaderContainer from './COMPONENTS/header/HeaderContainer';
import DialogsContainer from './COMPONENTS/dialogs/DialogsContainer';
import UsersContainer from './COMPONENTS/users/UsersContainer';
import Login from './COMPONENTS/login/Login';


const App = () => {

  const state = React.useContext(MyContext)

  return (
    <WrapperContent>

      <HeaderContainer />

      <Navbar />
      {/* не уверен что нужен ? после profile , но тогда не грузить profile без userId */}
      <PageDialogs>
        <Routes>
          <Route path="/profile?/:userId?" element={<ProfileContainer />} />
          <Route path="dialogs/*" element={<DialogsContainer store={state} />} />
          <Route path="users" element={<UsersContainer store={state} />} />
          <Route path="news" element={<News />} />
          <Route path="music" element={<Music />} />
          <Route path="settings" element={<Settings />} />
          <Route path='login' element={<Login />} />
        </Routes>
      </PageDialogs>

    </WrapperContent>
  );
}

export default App;

const WrapperContent = styled.div`
  a{text-decoration: none;}
  display: grid;
  margin: 0 auto;
  grid-template-areas: "h h" "n c";
  grid-template-rows: 60px 1fr;
  grid-template-columns: 2fr 10fr;
`
const PageDialogs = styled.div`
  grid-area: c;
  background-color: #1e1c1c;
  color: white;
`