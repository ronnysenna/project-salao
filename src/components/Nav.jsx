import { Typography } from "@mui/material";
import banner from '../assets/images/bg.jpg';
<style>
@import url('https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@400;700&display=swap');
</style>

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
