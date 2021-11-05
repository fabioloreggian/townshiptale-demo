import Link from 'next/link';
import styles from './navigationButton.module.css';

export default function NavigationButton({link, index}) {
  return (
    <Link href={link.link}>
      <a className={styles.link} target="_blank" rel="noopener noreferrer">
        {link.svg}
        {link.name}
      </a>
    </Link>
  );

}
