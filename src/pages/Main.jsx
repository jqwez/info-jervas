import styles from '../App.module.css';
import Section from '../components/Section.jsx';
import LinkedIn from '../components/LinkedIn.jsx';
import Github from '../components/Github.jsx';
import DownFinger from '../components/DownFinger.jsx'
import Btn from '../components/Btn.jsx';
import Contact from './Contact.jsx';

export default function Main(props) {
  let section2;
  const scrollToElement = (element) => {
        element.scrollIntoView({behavior: 'smooth'});
  }
  return (
    <div class={styles.App}>
      <header>
      </header>
      <main>
        <Section>
          <h1 > Jeremy Vasquez </h1>
          <p> Navy Vet - Sales - Coding </p>
          <div style="display: flex;margin-top: 0.5rem; flex-direction: row;">
            <LinkedIn margin="10" />
            <Github margin="10" />
          </div>
          <DownFinger onClick={()=>scrollToElement(section2)} />
        </Section>
        <Section ref={section2}>
          <h1> Based in Virginia</h1>
        </Section>
        <Section ref={section2}>
          <h1>I like solving problems in the cloud</h1>
        </Section>
        <Section>
          <h1>I like using these</h1>
        </Section>
        <Section>
          <h1> Contact Me for you next Project </h1>
          <img src="img/li_banner2.png" style="width: 100vw" />
          <Btn Text="CONTACT" href="/contact" />
        </Section>
      </main>
    </div>
  );
}

