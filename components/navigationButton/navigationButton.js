import Link from 'next/link';
import styles from './navigationButton.module.css';

export default function NavigationButton({link, selected, index, size}) {
  console.log(styles.link);
  const getClassNames = () => {
    return [
      styles.link,
      index === 0 && styles.leftLink,
      index === size - 1 && styles.rightLink,
      selected && styles.selected
    ].join(" ");
  }
  return (
    <Link href={link.link}>
      <a className={getClassNames()} target={link.page ? "_self" : "_blank"}>
        <div className={styles.svg}>{link.svg}</div>
        <div className={styles.text}>{link.name}</div>
      </a>
    </Link>
  );

}
