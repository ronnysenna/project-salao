import { BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Section from './components/Section'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <Section/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Footer />
    </Router>
  );
}

export default App;
