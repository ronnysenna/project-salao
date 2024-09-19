import { Typography } from '@mui/material';
import ListaAgendamentos from './agendaamento/ListaAgendamentos'; // Importe o componente

const Footer = () => {
  return (
    <footer>
      <Typography>
        <p>&copy; 2024 Company Name. All rights reserved.</p>
      </Typography>
      <h1>Agendamentos do Salão</h1>
      <ListaAgendamentos />
    </footer>
  );
};

export default Footer;
