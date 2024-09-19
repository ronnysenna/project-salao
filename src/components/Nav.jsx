import { Typography } from "@mui/material";
import banner from '../assets/images/bg.jpg';


const Nav = () => {
  return (
    <nav>
     
      <Typography>
            <h3>O melhor Salão de Fortaleza</h3>
            <h1>Tok Sutil <br /><button>Agendar</button></h1>
            
            <img src={banner} alt="banner" />
                    
      </Typography>
    </nav>
  );
};

export default Nav;

