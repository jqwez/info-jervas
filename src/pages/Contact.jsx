import styles from '../App.module.css';
import Section from '../components/Section.jsx';
import Btn from '../components/Btn.jsx';
import Main from './Main.jsx';

import { createSignal } from 'solid-js';
import { A } from '@solidjs/router';

export default function Contact() {
  const [response, setResponse] = createSignal(null);
  const sendMessage = () => {
    setResponse("Sending Message...");
    const name = document.getElementById("nametag").value;
    const email = document.getElementById("emailtag").value;
    const message = document.getElementById("messagetag").value;
    fetch("/api/v1/contact", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(response => {
      if (response.ok) {
          setResponse("Message Sent. Click Here To Return Home");
        } else {
          setResponse("Message Failed to Send, Please Email me@jervas.com");
        }
      }
      ).catch(error => {
        setResponse("Message Failed. If this persists, please email me@jervas.com");
        })
  }
  const messageSent = response(); 
  return (
    <div class={styles.App}>
      <header>
      </header>
      <main>
        <Section>
          { response() ? <A href="/" style="text-decoration: none; color: orange;"> { response() } </A> : '' } 
          <h1> Leave me a message </h1>
          <label for="name">Name</label>
          <input style="background-color:rgb(22,22,27); padding: 0.5rem; margin-bottom: 10px; color: white; height: 2rem; width: 60vw;" type="text" id="nametag" name="name"/>
          <label for="email">Email</label>
          <input style="background-color:rgb(22,22,27); padding: 0.5rem; margin-bottom: 10px;color: white; height: 2rem; width: 60vw;" type="text" id="emailtag" name="email" />
          <label for="message">Message</label>
          <textarea style="background-color:rgb(22,22,27); padding: 0.5rem; color: white; height: 10rem; width: 60vw;" type="text" id="messagetag" name="message" />
          <Btn Text="Send" onClick={sendMessage} />
        </Section>
      </main>
    </div>
  );
}

