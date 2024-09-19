import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../agendaamento/firebaseConfig';

function ListaAgendamentos() {
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    const fetchAgendamentos = async () => {
      const querySnapshot = await getDocs(collection(db, 'agendamentos'));
      setAgendamentos(querySnapshot.docs.map(doc => doc.data()));
    };

    fetchAgendamentos();
  }, []);

  return (
    <div>
      <h2>Agendamentos</h2>
      <ul>
        {agendamentos.map((agendamento, index) => (
          <li key={index}>
            {agendamento.nomeCliente} agendou para {agendamento.data} às {agendamento.hora}.
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaAgendamentos;
