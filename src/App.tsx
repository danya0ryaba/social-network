import React from 'react';
import styled from 'styled-components';
import './App.css';
import { Header } from './COMPONENTS/header/Header';
import { Navbar } from './COMPONENTS/navbar/Navbar';
import { Profile } from './COMPONENTS/profile/Profile';
import { Dialogs } from './COMPONENTS/dialogs/Dialogs';
import { News } from './COMPONENTS/news/News';
import { Music } from './COMPONENTS/music/Music';
import { Settings } from './COMPONENTS/settings/Settings';
import { Routes, Route } from 'react-router-dom';
import { StateType } from './redux/store';

type PropsType = {
  state: StateType
  dispatch: (action: any) => void
}

const App = (props: PropsType) => {
  return (
    <WrapperContent>

      <Header />
      <Navbar />

      <PageDialogs>
        <Routes>
          <Route path="/" element={<Profile
            profilePage={props.state.profilePage.post}
            newPostText={props.state.profilePage.newPostText}
            dispatch={props.dispatch}
          />} />

          <Route path="dialogs/*" element={<Dialogs
            newMessageBody={props.state.dialogsPage.newMessageBody}
            dialogs={props.state.dialogsPage.dialogs}
            messages={props.state.dialogsPage.messages}
            dispatch={props.dispatch}
          />} />

          <Route path="news" element={<News />} />
          <Route path="music" element={<Music />} />
          <Route path="settings" element={<Settings />} />
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