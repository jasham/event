import React from 'react';
import logo from './logo.svg';
import './App.css';
import KitchenSink from './screens/kitchenSink'
import HomePage from '../src/components/HomePage/Home'
import Register from '../src/components/RegisterPage/Register'
import LogIn from '../src/components/RegisterPage/LogIn'
import ForgotPage from '../src/components/RegisterPage/ForgotPage'
import Attendees from '../src/components/AttendeesPage/Attendees'
import Speakers from '../src/components/SpeakersPage/Speakers'
import Meetings from '../src/components/MyMeetingsPage/Meetings'
import Messages from '../src/components/MessagesPage/Messages'

function App() {
  return (
    // <KitchenSink />
    // <Register />
    // <LogIn/>
    // <ForgotPage />
    // <HomePage />
    // <Attendees />
    // <Speakers />
    // <Meetings />
    <Messages />
  );
}

export default App;
