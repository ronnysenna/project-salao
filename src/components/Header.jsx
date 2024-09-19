


import { Typography } from '@mui/material';
import slogan from '../assets/images/icon.png'

const Header = () => {
  return (
    <header>
      
      <Typography>
        <img src={slogan} alt="icon"/>
      
      <ul>
          <li><a href="#">Página Inicial</a></li>
          <li><a href="#">Serviços</a></li>
          <li><a href="#">Produtos</a></li>
          <li><a href="#">Studio</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Contatos</a></li>
        </ul>

      </Typography>
</header>
  );
};

export default Header;
