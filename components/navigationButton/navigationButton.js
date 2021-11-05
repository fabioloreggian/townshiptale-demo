import Link from 'next/link';
import styles from './navigationButton.module.css';
import Image from "next/image";


export default function NavigationButton({link, index}) {
  return (
    <Link href={link.link}>
      <a className={styles.link} target="_blank" rel="noopener noreferrer">
        <img className={styles.svg} src={`/navigation/${link.key}.svg`} alt={link.key}/>
        {link.name}
      </a>
    </Link>
  );

}
