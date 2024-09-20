import { Typography } from "@mui/material";
import banner from "../assets/images/bg.jpg";
import AgendarButton from "../components/agendaamento/AgendarButton";

const Nav = () => {
  return (
    <nav>
      <Typography>
        <h1>Tok Sutil</h1>
        <h3>O melhor Salão de Fortaleza.</h3>
        <div>
          <AgendarButton />
        </div>
        <img src={banner} alt="banner" />
      </Typography>
    </nav>
  );
};

export default Nav;
