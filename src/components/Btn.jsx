import styles from './Btn.module.css';

import { A } from '@solidjs/router'

export default function Btn(props) {
    const text = props.Text;
    const href = props.href ? props.href : '';
    const onClick = props.onClick ? props.onClick : '';
    return (
        <A href={href} >
        <button class={styles.btn} onClick={onClick}> {text} </button>
        </A>
    )
}
