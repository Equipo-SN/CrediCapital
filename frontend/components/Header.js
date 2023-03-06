import Link from 'next/link';
import styles from '../styles/Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <Link href={"#"}>Inicio</Link>
        <Link href={"#"}>Inicio</Link>
        <Link href={"#"}>Inicio</Link>
      </nav>
    </header>
  );
}