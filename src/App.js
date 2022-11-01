import './App.css';
import CardStack from './CardStack';
import AboutMe from './AboutMe';

function App() {
  return (
    <div>
      <h1 className='title'> Welcome to my Portfolio Website</h1>

      <AboutMe />

      <h1>My Projects</h1>
      <CardStack />

      <h1>Socials</h1>

      <section className='contact-info'>
        <a href="https://www.linkedin.com/in/joshua-camposs" target="_blank">LinkedIn</a>
        <a href="https://github.com/jc0808" target="_blank">Github</a>
      </section>
    </div>
  );
}

export default App;
