import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';

function SchedulerCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [confirmation, setConfirmation] = useState('');

  const availableTimes = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime(''); // Reseta o horário ao mudar a data
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleConfirm = () => {
    if (selectedDate && selectedTime) {
      const formattedDate = moment(selectedDate).format('DD/MM/YYYY');
      setConfirmation(`Seu agendamento foi marcado para ${formattedDate} às ${selectedTime}.`);
    } else {
      setConfirmation('Por favor, selecione uma data e horário.');
    }
  };

  return (
    <div className="scheduler-calendar">
      <h2>Agendar Horário</h2>

      {/* Calendário */}
      <Calendar 
        onChange={handleDateChange} 
        value={selectedDate} 
      />

      {/* Horários Disponíveis */}
      <div className="time-selector">
        <h3>Horários Disponíveis:</h3>
        <ul className="time-options">
          {availableTimes.map((time) => (
            <li
              key={time}
              className={`time-option ${selectedTime === time ? 'selected' : ''}`}
              onClick={() => handleTimeSelect(time)}
            >
              {time}
            </li>
          ))}
        </ul>
      </div>

      <button onClick={handleConfirm} className="confirm-button">
        Confirmar Agendamento
      </button>

      {confirmation && <p className="confirmation-message">{confirmation}</p>}
    </div>
  );
}

export default SchedulerCalendar;
