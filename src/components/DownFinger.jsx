import styles from './DownFinger.module.css';

export default function DownFinger(props) {
    return (
        <h1 class={styles.finger} onClick={props.onClick} >👇</h1>
    );
}
