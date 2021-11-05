import Image from 'next/image';
import styles from './layout.module.css';
import NavigationButton from "../navigationButton/navigationButton";
import Supporter from "../svgs/supporter";
import News from "../svgs/news";
import Discord from "../svgs/discord";
import Creators from "../svgs/creators";
import Presskit from "../svgs/presskit";
import SignUp from "../svgs/signup";
import Logo from "../svgs/logo";

export default function Layout(props) {
  const links = [
    {
      name: '',
      key: 'home',
      page: true,
      link: '/',
      svg: <Logo />
    },
    {
      name: 'Supporter',
      key: 'supporter',
      page: true,
      link: '/supporter',
      svg: <Supporter/>
    },
    {
      name: 'News',
      key: 'news',
      page: true,
      link: '/news',
      svg: <News/>
    },
    {
      name: 'Discord',
      key: 'discord',
      page: false,
      link: 'https://discord.gg/townshiptale',
      svg: <Discord/>
    },
    {
      name: 'Creators',
      key: 'creators',
      page: false,
      link: 'https://form.typeform.com/to/Hjo1URZq',
      svg: <Creators/>
    },
    {
      name: 'Presskit',
      key: 'presskit',
      page: false,
      link: 'https://presskit.townshiptale.com/',
      svg: <Presskit/>
    },
    {
      name: 'Sign Up',
      key: 'signup',
      page: true,
      link: '/account/signup',
      svg: <SignUp/>
    }
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
          {links.map((link, index) => <NavigationButton key={link.key} selected={link.key === props.route} link={link} index={index} size={links.length}/>)}
        </div>
      </div>
      {props.children}
    </div>
  )
}
