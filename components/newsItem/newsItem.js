import styles from "./newsItem.module.css";
import Link from "next/link";

export default function NewsItem({newsItem}) {
  return <Link href={"/news/" + newsItem.slug}>
    <a className={styles.newsItemsContainer}>
      <img className={styles.authorThumbnail} src={newsItem.authorThumbnail}
           alt="Victor"/>
      <div className={styles.informationContainer}>
        <h2 className={styles.informationHeading}>{newsItem.title}</h2>
        <time className={styles.informationDate} dateTime={newsItem.date}>{newsItem.date}</time>
        <div className={styles.informationAuthor}>by {newsItem.author}</div>
        <h3 className={styles.informationBlurb}>{newsItem.blurb}</h3>
      </div>
      <div className={styles.thumbnailContainer}>
        <img className={styles.thumbnail} src={newsItem.thumbnail}/>
      </div>
    </a>
  </Link>;
}
