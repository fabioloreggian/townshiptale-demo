import Link from 'next/link';
import styles from './navigationButton.module.css';

export default function NavigationButton({link, selected, index, size, sideNav}) {
  const getClassNames = () => {
    return [
      styles.link,
      index === 0 && styles.leftLink,
      index === size - 1 && styles.rightLink,
      selected && styles.selected,
      link.centerLogo && styles.centerLogo,
      sideNav && styles.sideNav
    ].join(" ");
  }
  if (link.link) {
    return (
      <Link href={link.link}>
        <a className={getClassNames()} target={link.page ? "_self" : "_blank"}>
          <div className={styles.svg}>{link.svg}</div>
          <div className={styles.text}>{link.name}</div>
        </a>
      </Link>
    );
  } else {
    return <button className={getClassNames() + " logoCenter"} onClick={link.onClick}>
      <div className={styles.svg}>{link.svg}</div>
      <div className={styles.text}>{link.name}</div>
    </button>
  }


}
