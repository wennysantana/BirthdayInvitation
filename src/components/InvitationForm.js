import React, { useState } from 'react';
import { getDatabase, ref, set } from "firebase/database";
import { FaBirthdayCake, FaUser, FaPhone, FaCheckCircle, FaMapMarkerAlt, FaCalendarAlt, FaClock } from 'react-icons/fa';
import './InvitationForm.css';

const InvitationForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const address = "Rua Pratapólis, 39 - Coelhos, Recife";
  const date = "15 de junho de 2024";
  const time = "16:00";

  const handleSubmit = (e) => {
    e.preventDefault();
    const db = getDatabase();
    const reference = ref(db, 'guests/' + phone);
    set(reference, {
      name: name,
      phone: phone
    });
    setName('');
    setPhone('');
    alert('Presença confirmada!');
  };

  // Função para formatar o número de telefone
  const formatPhoneNumber = (value) => {
    // Remove todos os caracteres não numéricos do número de telefone
    const phoneNumber = value.replace(/\D/g, '');
    // Formata o número de telefone no formato (xx) xxxxx-xxxx
    const formattedPhoneNumber = phoneNumber.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    return formattedPhoneNumber;
  };

  // Função para lidar com a mudança no campo de telefone
  const handlePhoneChange = (e) => {
    // Formata o número de telefone enquanto o usuário digita
    const formattedPhone = formatPhoneNumber(e.target.value);
    // Atualiza o estado do número de telefone formatado
    setPhone(formattedPhone);
  };

  return (
    <div className="container">
      <div className="header">
        <h1><FaBirthdayCake className="icon" /> Festa de Aniversário</h1>
      </div>
      <div className="party-details">
        <p><FaMapMarkerAlt className="icon" /> {address}</p>
        <p><FaCalendarAlt className="icon" /> {date}</p>
        <p><FaClock className="icon" /> {time}</p>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <label className="label"><FaUser className="icon" /> Nome:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
          required
        />
        <label className="label"><FaPhone className="icon" /> Telefone:</label>
        <input
          type="text"
          value={phone}
          onChange={handlePhoneChange} // Usamos a função para lidar com a mudança no campo de telefone
          className="input"
          required
        />
        <button type="submit" className="button"><FaCheckCircle /> Confirmar Presença</button>
      </form>
    </div>
  );
};

export default InvitationForm;
