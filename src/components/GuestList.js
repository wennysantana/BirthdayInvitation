import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { database } from '../firebaseConfig';
import "./GuestList.css";

const GuestList = () => {
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const guestsRef = ref(db, "guests");
    onValue(guestsRef, (snapshot) => {
      const data = snapshot.val();
      const guestsArray = data ? Object.values(data) : [];
      setGuests(guestsArray);
    });
  }, []);

  return (
    <div className="guest-list-container">
      <h2>Lista de Convidados</h2>
      <ul className="guest-list">
        {guests.map((guest, index) => (
          <li key={index} className="guest-item">
            <p>Nome: {guest.name}</p>
            <p>Telefone: {guest.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GuestList;
