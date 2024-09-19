import { Typography } from "@mui/material";
import SchedulerCalendar from '../components/agendaamento/SchedulerCalendar';

const Nav = () => {
  return (
    <nav>
      <Typography class="hero">
        <div>
          <SchedulerCalendar />
        </div>
      </Typography>
    </nav>
  );
};

export default Nav;
