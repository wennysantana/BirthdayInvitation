import React, { useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import InvitationForm from './components/InvitationForm';
import GuestList from './components/GuestList';
import AdminLogin from './components/AdminLogin';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });

  return (
    <div>
      <InvitationForm />
      {user ? <GuestList /> : <AdminLogin onLogin={setUser} />}
    </div>
  );
}

export default App;
