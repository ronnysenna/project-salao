import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../agendaamento/firebaseConfig'; // Certifique-se de importar o db configurado

function ListaAgendamentos() {
  const [agendamentos, setAgendamentos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAgendamentos = async () => {
      try {
        // Acessa a coleção "agendamentos" do Firestore
        const querySnapshot = await getDocs(collection(db, 'agendamentos'));
        
        // Mapeia os documentos para extrair os dados
        const agendamentosData = querySnapshot.docs.map(doc => ({
          id: doc.id, // Pega o ID do documento (caso precise para alterações futuras)
          ...doc.data() // Pega os campos do documento
        }));
        
        // Define o estado com os dados dos agendamentos
        setAgendamentos(agendamentosData);
      } catch (error) {
        console.error("Erro ao buscar agendamentos: ", error);
      } finally {
        setLoading(false); // Quando terminar de buscar, para o loading
      }
    };

    fetchAgendamentos();
  }, []);

  if (loading) {
    return <p>Carregando agendamentos...</p>;
  }

  return (
    <div>
      <h2>Lista de Agendamentos</h2>
      {agendamentos.length === 0 ? (
        <p>Não há agendamentos no momento.</p>
      ) : (
        <ul>
          {agendamentos.map((agendamento) => (
            <li key={agendamento.id}>
              {agendamento.nomeCliente} agendou para {agendamento.data} às {agendamento.hora} ({agendamento.emailCliente})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListaAgendamentos;
