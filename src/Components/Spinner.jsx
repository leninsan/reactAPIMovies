import {FaSpinner} from 'react-icons/fa';
import styles from "./spinner.module.css";


export default function Spinner() {
  return (
    <div className={styles.spinner}>
      <FaSpinner className={styles.spinning} size={60}/>
    </div>
  )
}
