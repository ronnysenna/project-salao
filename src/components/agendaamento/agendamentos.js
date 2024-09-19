import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfig'; // Importe sua configuração do Firebase
import moment from 'moment'; // Para formatar datas e horas
import 'moment/locale/pt-br'; // Para garantir que as datas fiquem no formato brasileiro

function Agendamento() {
  const [nomeCliente, setNomeCliente] = useState('');
  const [emailCliente, setEmailCliente] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [confirmation, setConfirmation] = useState('');

  const handleConfirm = async () => {
    if (selectedDate && selectedTime && nomeCliente && emailCliente) {
      const formattedDate = moment(selectedDate).format('DD/MM/YYYY'); // Formata a data

      try {
        // Adiciona o agendamento no Firestore
        await addDoc(collection(db, 'agendamentos'), {
          data: formattedDate,
          hora: selectedTime,
          nomeCliente: nomeCliente,
          emailCliente: emailCliente
        });

        setConfirmation(`Seu agendamento foi marcado para ${formattedDate} às ${selectedTime}.`);
        setNomeCliente(''); // Limpa o nome
        setEmailCliente(''); // Limpa o email
        setSelectedDate(''); // Limpa a data
        setSelectedTime(''); // Limpa a hora
      } catch (error) {
        console.error('Erro ao salvar agendamento:', error);
        setConfirmation('Erro ao salvar o agendamento. Tente novamente.');
      }
    } else {
      setConfirmation('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div>
      <h2>Agendar Horário</h2>
      <div>
        <label>
          Nome:
          <input 
            type="text" 
            value={nomeCliente} 
            onChange={(e) => setNomeCliente(e.target.value)} 
            placeholder="Digite seu nome" 
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input 
            type="email" 
            value={emailCliente} 
            onChange={(e) => setEmailCliente(e.target.value)} 
            placeholder="Digite seu email" 
          />
        </label>
      </div>
      <div>
        <label>
          Data:
          <input 
            type="date" 
            value={selectedDate} 
            onChange={(e) => setSelectedDate(e.target.value)} 
          />
        </label>
      </div>
      <div>
        <label>
          Hora:
          <input 
            type="time" 
            value={selectedTime} 
            onChange={(e) => setSelectedTime(e.target.value)} 
          />
        </label>
      </div>
      <button onClick={handleConfirm}>Confirmar Agendamento</button>
      {confirmation && <p>{confirmation}</p>}
    </div>
  );
}

export default Agendamento;
