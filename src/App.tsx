import styled from 'styled-components';
import { Navbar } from './COMPONENTS/navbar/Navbar';
import { News } from './COMPONENTS/news/News';
import { Music } from './COMPONENTS/music/Music';
import { Settings } from './COMPONENTS/settings/Settings';
import { Routes, Route } from 'react-router-dom';
import ProfileContainer from './COMPONENTS/profile/ProfileContainer';
import HeaderContainer from './COMPONENTS/header/HeaderContainer';
import DialogsContainer from './COMPONENTS/dialogs/DialogsContainer';
import UsersContainer from './COMPONENTS/users/UsersContainer';
import Login from './COMPONENTS/login/Login';
import { store_redux } from './redux/redux-store';


// Я НЕ СМОГ РАЗОБРАТЬСЯ В 80 УРОКЕ
// ОТ ТУДА APP-REDUCER
// Я ОСТАВИЛ ЗАПРОС О АУТЕНТИФИКАЦИИ В HEADER(componentDidMount)

export const App = () => {
  return (<div>
    <WrapperContent>
      <HeaderContainer />
      <Navbar />
      <PageDialogs>
        <Routes>
          <Route path="/profile?/:userId?" element={<ProfileContainer />} />
          <Route path="dialogs/*" element={<DialogsContainer store={store_redux} />} />
          <Route path="users" element={<UsersContainer store={store_redux} />} />
          <Route path="news" element={<News />} />
          <Route path="music" element={<Music />} />
          <Route path="settings" element={<Settings />} />
          <Route path='login' element={<Login />} />
        </Routes>
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
