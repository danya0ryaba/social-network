import React, { Suspense } from 'react'
import styled from 'styled-components';
import { Navbar } from './COMPONENTS/navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import { store_redux } from './redux/redux-store';
import HeaderContainer from './COMPONENTS/header/HeaderContainer';
import { Preloader } from './COMPONENTS/common/preloader/Preloader';

const DialogsContainer = React.lazy(() => import('./COMPONENTS/dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./COMPONENTS/profile/ProfileContainer'))
const UsersContainer = React.lazy(() => import('./COMPONENTS/users/UsersContainer'))
const News = React.lazy(() => import('./COMPONENTS/news/News'))
const Settings = React.lazy(() => import('./COMPONENTS/settings/Settings'))
const Music = React.lazy(() => import('./COMPONENTS/music/Music'))
const Login = React.lazy(() => import('./COMPONENTS/login/Login'))

export const App = () => {
  return (<div>
    <WrapperContent>
      <HeaderContainer />
      <Navbar />
      <PageDialogs>
        <Suspense fallback={<div><Preloader /></div>}>
          <Routes>
            {/* ТИПИЗИРОВАТЬ В  ProfileContainer profile*/}
            <Route path="/profile?/:userId?" element={<ProfileContainer />} />
            <Route path="dialogs/*" element={<DialogsContainer store={store_redux} />} />
            <Route path="users" element={<UsersContainer store={store_redux} />} />
            <Route path="news" element={<News />} />
            <Route path="music" element={<Music />} />
            <Route path="settings" element={<Settings />} />
            <Route path='login' element={<Login />} />
          </Routes>
        </Suspense>
      </PageDialogs>
    </WrapperContent>
  </div>);
}

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



