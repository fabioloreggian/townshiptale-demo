import Image from 'next/image';
import styles from './layout.module.css';
import NavigationButton from "../navigationButton/navigationButton";
import Supporter from "../svgs/supporter";

export default function Layout(props) {
  const links = [
    /*{
      name: '',
      key: 'home',
      page: true,
      link: '/'
    },*/
    {
      name: 'Supporter',
      key: 'supporter',
      page: true,
      link: '/supporter',
      svg: <Supporter className={styles.svg}/>
    },
    /*{
      name: 'News',
      key: 'news',
      page: true,
      link: '/news'
    },
    {
      name: 'Discord',
      key: 'discord',
      page: false,
      link: 'https://discord.gg/townshiptale'
    },
    {
      name: 'Creators',
      key: 'creators',
      page: false,
      link: 'https://form.typeform.com/to/Hjo1URZq'
    },
    {
      name: 'Presskit',
      key: 'presskit',
      page: false,
      link: 'https://presskit.townshiptale.com/'
    },
    {
      name: 'Sign Up',
      key: 'signup',
      page: true,
      link: '/account/signup'
    }*/
  ]
  return (
    <div className={styles.container}>
      <div className={styles.navigationBar}>
        <div className={styles.header}>
          <div className={styles.topLeft}>
            <Image
              src="/header/top_left.svg"
              layout='fill'
            />
          </div>
          <div className={styles.topCenter}>
            <Image
              src="/header/top_center.svg"
              layout='fill'
            />
          </div>
          <div className={styles.topRight}>
            <Image
              src="/header/top_right.svg"
              layout='fill'
            />
          </div>
        </div>
        <div className={styles.navigationContainer}>
          {links.map((link, index) => <NavigationButton key={link.key} link={link} index={index}/>)}
        </div>
      </div>
      {props.children}
    </div>
  )
}
