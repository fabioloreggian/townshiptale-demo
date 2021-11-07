import Head from 'next/head';
import Layout from "../../components/layout/layout";
import styles from "./news.module.css";
import NewsItem from "../../components/newsItem/newsItem";

export default function News() {
  const news = [
    {
      title: "ATT Released on the Quest!",
      slug: "att-released-on-the-quest",
      date: "2021-07-16",
      author: "Joel",
      blurb: "Hello peeps, Victor here bearing good news! After a long year of silence, suspense and mystery, we’ve announced that we were officially working on porting A Township Tale to the Oculus Quest back in March.",
      thumbnail: "https://townshiptale.com/_next/image?url=https%3A%2F%2Faltastatic.sfo2.cdn.digitaloceanspaces.com%2Fnews%2Fatt-released-on-the-quest%2Fquest_ship_tale_thumbnail_1280_720.jpg&w=640&q=75",
      authorThumbnail: "https://altastatic.sfo2.cdn.digitaloceanspaces.com/authors/joel.png"
    },
    {
      title: "Quest - Post Early Access Update",
      slug: "quest-post-early-access-update",
      date: "2021-07-13",
      author: "Victor",
      blurb: "So today has been a little bumpy to say the least. We know some of you have been having issues with the game, and we’re doing our best to fix things as fast as possible for you. Alta is a very small team, and we’ve been completely swamped the last eight hours, but we are working through all of your issues as fast as we can. We wanted to make this post to let you know what’s happening, what we’re doing about it, and what you can expect over the next couple days.",
      thumbnail: "https://townshiptale.com/_next/image?url=https%3A%2F%2Faltastatic.sfo2.cdn.digitaloceanspaces.com%2Fnews%2Foculus-quest-launch-post-early-access-update%2Flaunch_post_image_quest.jpg&w=256&q=75",
      authorThumbnail: "https://altastatic.sfo2.cdn.digitaloceanspaces.com/authors/victor.png"
    },
    {
      title: "Pre-Order A Township Tale on Quest!",
      slug: "pre-order-a-township-tale-on-quest",
      date: "2021-06-21",
      author: "Joel",
      blurb: "Two weeks ago we announced A Township Tale is coming on Quest! We've been asked numerous times about if the game will be available for pre-order, and needless to say it is something we indeed thought of! (It may or may not have also been leaked in some of our press releases.)",
      thumbnail: "https://townshiptale.com/_next/image?url=https%3A%2F%2Faltastatic.sfo2.cdn.digitaloceanspaces.com%2Fnews%2Fpre-order-a-township-tale-on-quest%2Fpre_order_thumbnail_1280_720.jpg&w=256&q=75",
      authorThumbnail: "https://altastatic.sfo2.cdn.digitaloceanspaces.com/authors/joel.png"
    }
  ];
  return (
    <Layout route="news">
      <Head>
        <title>Tales of the Township - News</title>
      </Head>
      <div className={styles.background}>
        <div className={styles.newsContainer}>
          <div className={styles.headerContainer}>
            <h1 className={styles.headerTitle}>TALES OF THE TOWNSHIP</h1>
            <p className={styles.headerDescription}>UPDATES, NEWS AND DEV BLOGS</p>
          </div>
          {news.map(newsItem => <NewsItem newsItem={newsItem} key={newsItem.slug}/>)}
        </div>
        <div className={styles.footer}>
          <div className={styles.footerDownloadContainer}>
            <a className={styles.footerDownloadLink} href="/download">DOWNLOAD A TOWNSHIP TALE</a></div>
          <ul className={styles.footerSocialUl}>
            <li>
              <a className={styles.footerSocialLink} href="https://www.facebook.com/townshiptale/" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" className={styles.footerSocialLinkIcon}>
                  <path
                    d="M1024,512C1024,229.23,794.77,0,512,0S0,229.23,0,512c0,255.55,187.23,467.37,432,505.78V660H302V512h130V399.2C432,270.88,508.44,200,625.39,200C681.41,200,740,210,740,210v126h-64.56c-63.6,0-83.44,39.47-83.44,79.96V512h142l-22.7,148H592v357.78C836.77,979.37,1024,767.55,1024,512z"/>
                </svg>
              </a>
            </li>
            <li>
              <a className={styles.footerSocialLink} href="https://www.youtube.com/townshiptale" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.25 511.36"
                     className={styles.footerSocialLinkIcon}>
                  <path
                    d="M255.7,0C114.48,0,0,114.45,0,255.67s114.48,255.7,255.7,255.7,255.7-114.48,255.7-255.7S396.92,0,255.7,0ZM419.56,317.39a76.77,76.77,0,0,1-7.08,24.77c-7.18,14.5-19.61,21.18-35.17,22.5-38.79,3.3-77.7,3.25-116.16,4-36.48-.85-72.56-.86-108.58-3.12a113.06,113.06,0,0,1-19.2-2.77C119,359.39,109.29,351,104.14,337c-4.9-13.32-5.92-27.24-6.72-41.14-2-35.06-2-70.11,1.86-105.07a74.21,74.21,0,0,1,7.7-26.64c7.74-14.73,20.94-20.76,36.75-21.83,57.6-3.91,115.27-3.89,173-2.66,18.27.39,36.54,1.14,54.78,2.38,27.74,1.87,41.24,13.3,46.88,40.6,2.73,13.22,3.5,26.71,3.86,40.14C423,254.34,423.5,285.94,419.56,317.39Z"/>
                  <polygon points="226.19 295.81 314 250.33 226.22 204.54 226.19 295.81"/>
                </svg>
              </a>
            </li>
            <li>
              <a className={styles.footerSocialLink} href="https://www.twitter.com/townshiptale" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" className={styles.footerSocialLinkIcon}>
                  <path
                    d="M200,0C89.54,0,0,89.54,0,200S89.54,400,200,400s200-89.54,200-200S310.46,0,200,0ZM300.45,162.08q.14,3.1.14,6.23c0,63.71-48.5,137.18-137.18,137.18A136.53,136.53,0,0,1,89.5,283.84a99.21,99.21,0,0,0,11.5.66,96.74,96.74,0,0,0,59.88-20.63,48.29,48.29,0,0,1-45-33.49,48.09,48.09,0,0,0,21.78-.83,48.24,48.24,0,0,1-38.69-47.26c0-.22,0-.42,0-.62a47.77,47.77,0,0,0,21.84,6,48.25,48.25,0,0,1-14.92-64.36,136.86,136.86,0,0,0,99.37,50.37,48.25,48.25,0,0,1,82.17-44A96.63,96.63,0,0,0,318,118a48.37,48.37,0,0,1-21.2,26.67,96.64,96.64,0,0,0,27.69-7.59A98.24,98.24,0,0,1,300.45,162.08Z"/>
                </svg>
              </a>
            </li>
            <li>
              <a className={styles.footerSocialLink} href="https://discord.gg/townshiptale" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={styles.footerSocialLinkIcon}>
                  <path
                    d="M61.82,45.51c-3.56,0-6.38,3.21-6.38,7.16s2.88,7.16,6.38,7.16,6.38-3.22,6.38-7.16S65.4,45.51,61.82,45.51Z"
                    className="st0"/>
                  <path
                    d="M38.23,45.51c-3.56,0-6.38,3.21-6.38,7.16s2.88,7.16,6.38,7.16,6.38-3.22,6.38-7.16S41.81,45.51,38.23,45.51Z"
                    className="st0"/>
                  <path
                    d="M50,0a50,50,0,1,0,50,50A50,50,0,0,0,50,0ZM85.19,67.89a.2.2,0,0,1-.09.17,58.75,58.75,0,0,1-17.75,9,.22.22,0,0,1-.25-.09A47.72,47.72,0,0,1,63.47,71a.24.24,0,0,1,.12-.32,36.52,36.52,0,0,0,5.54-2.63.23.23,0,0,0,0-.38c-.37-.28-.74-.57-1.1-.87a.21.21,0,0,0-.23,0,42,42,0,0,1-35.68,0,.2.2,0,0,0-.23,0l-1.1.86a.23.23,0,0,0,0,.38,40.22,40.22,0,0,0,5.54,2.64.22.22,0,0,1,.12.31,41.53,41.53,0,0,1-3.63,5.9.23.23,0,0,1-.25.08,59,59,0,0,1-17.72-9,.27.27,0,0,1-.1-.17c-1.23-13.25,1.29-26.66,10.49-40.41a.16.16,0,0,1,.1-.08,58.23,58.23,0,0,1,14.45-4.48.21.21,0,0,1,.23.11,36.14,36.14,0,0,1,1.83,3.69,53.85,53.85,0,0,1,16.23,0A40.45,40.45,0,0,1,59.92,23a.21.21,0,0,1,.23-.11A58,58,0,0,1,74.6,27.4a.16.16,0,0,1,.1.08A59.58,59.58,0,0,1,85.19,67.89Z"
                    className="st0"/>
                </svg>
              </a>
            </li>
            <li>
              <a className={styles.footerSocialLink} href="https://www.instagram.com/townshiptale/" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" className={styles.footerSocialLinkIcon}>
                  <path
                    d="M18,0A18,18,0,1,0,36,18,18,18,0,0,0,18,0ZM29.93,23c-.2,4.36-2.63,6.78-7,7C21.67,30,21.26,30,18,30s-3.67,0-4.95-.07c-4.36-.2-6.78-2.62-7-7C6,21.67,6,21.26,6,18s0-3.67.07-4.95c.2-4.36,2.63-6.78,7-7C14.33,6,14.74,6,18,6s3.67,0,4.95.07c4.36.2,6.78,2.63,7,7C30,14.33,30,14.74,30,18S30,21.67,29.93,23Z"/>
                  <path
                    d="M22.85,8.23c-1.27-.06-1.65-.07-4.85-.07s-3.58,0-4.85.07c-3.25.15-4.77,1.69-4.92,4.92-.06,1.27-.07,1.65-.07,4.85s0,3.58.07,4.85c.15,3.22,1.66,4.77,4.92,4.92,1.27.06,1.65.07,4.85.07s3.58,0,4.85-.07c3.25-.15,4.77-1.69,4.92-4.92.06-1.26.07-1.64.07-4.85s0-3.58-.07-4.85C27.62,9.92,26.1,8.38,22.85,8.23ZM18,24.16A6.16,6.16,0,1,1,24.16,18,6.16,6.16,0,0,1,18,24.16ZM24.41,13a1.44,1.44,0,1,1,1.43-1.44A1.43,1.43,0,0,1,24.41,13Z"/>
                  <circle cx="18" cy="18" r="4"/>
                </svg>
              </a>
            </li>
            <li>
              <a className={styles.footerSocialLink} href="https://www.reddit.com/r/TownshipTale/" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={styles.footerSocialLinkIcon}>
                  <path
                    d="M14.238 15.348c.085.084.085.221 0 .306-.465.462-1.194.687-2.231.687l-.008-.002-.008.002c-1.036 0-1.766-.225-2.231-.688-.085-.084-.085-.221 0-.305.084-.084.222-.084.307 0 .379.377 1.008.561 1.924.561l.008.002.008-.002c.915 0 1.544-.184 1.924-.561.085-.084.223-.084.307 0zm-3.44-2.418c0-.507-.414-.919-.922-.919-.509 0-.923.412-.923.919 0 .506.414.918.923.918.508.001.922-.411.922-.918zm13.202-.93c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-5-.129c0-.851-.695-1.543-1.55-1.543-.417 0-.795.167-1.074.435-1.056-.695-2.485-1.137-4.066-1.194l.865-2.724 2.343.549-.003.034c0 .696.569 1.262 1.268 1.262.699 0 1.267-.566 1.267-1.262s-.568-1.262-1.267-1.262c-.537 0-.994.335-1.179.804l-2.525-.592c-.11-.027-.223.037-.257.145l-.965 3.038c-1.656.02-3.155.466-4.258 1.181-.277-.255-.644-.415-1.05-.415-.854.001-1.549.693-1.549 1.544 0 .566.311 1.056.768 1.325-.03.164-.05.331-.05.5 0 2.281 2.805 4.137 6.253 4.137s6.253-1.856 6.253-4.137c0-.16-.017-.317-.044-.472.486-.261.82-.766.82-1.353zm-4.872.141c-.509 0-.922.412-.922.919 0 .506.414.918.922.918s.922-.412.922-.918c0-.507-.413-.919-.922-.919z"/>
                </svg>
              </a>
            </li>
          </ul>
          <ul className={styles.footerLinks}>
            <li><a className={styles.footerLinksLink} href="https://www.altavr.io" target="_blank" rel="noreferrer">Alta</a></li>
            <li><a className={styles.footerLinksLink + " " + styles.footerLinksLinkPipe} href="http://feedback.townshiptale.com/" target="_blank" rel="noreferrer">Feedback</a>
            </li>
            <li><a className={styles.footerLinksLink + " " + styles.footerLinksLinkPipe} href="https://townshiptale.gamepedia.com" target="_blank" rel="noreferrer">Wiki</a>
            </li>
            <li><a className={styles.footerLinksLink + " " + styles.footerLinksLinkPipe} href="https://discord.gg/townshiptale" target="_blank" rel="noreferrer">Discord</a>
            </li>
          </ul>
          <div className={styles.footerCopyright}>© 2021 Alta Reality Pty Ltd. All Rights Reserved.</div>
        </div>
      </div>
    </Layout>
  )
}
