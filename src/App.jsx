import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Capabilities from './components/Capabilities.jsx';
import Approach from './components/Approach.jsx';
import RegistrationForm from './components/RegistrationForm.jsx';
import Footer from './components/Footer.jsx';

// Layout assembly is provided; implement visual design and behavior from DESIGN_REFERENCES.
export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Capabilities />
        <Approach />
        <RegistrationForm />
      </main>
      <Footer />
    </>
  );
}
