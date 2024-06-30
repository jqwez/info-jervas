import styles from './Section.module.css';
import { createComponent, children } from 'solid-js';

function Section(props) {
  const bgColor = props.bg ? `background-color: ${props.bg}` : "";
  const resolvedChildren = children(()=>props.children);
  return (
    <div ref={props.ref} class={styles.section} style={bgColor}>
      {resolvedChildren()}
    </div>
  );
}

export default Section;
