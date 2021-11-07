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
import Hamburger from "../svgs/hamburger";
import BigLogo from "../svgs/bigLogo";
import {useState} from "react";
import Close from "../svgs/close";

export default function Layout(props) {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  const links = [
    {
      name: '',
      key: 'home',
      page: true,
      link: '/',
      sideNav: false,
      svg: <Logo/>
    },
    {
      name: 'Supporter',
      key: 'supporter',
      page: true,
      link: '/supporter',
      sideNav: true,
      svg: <Supporter/>
    },
    {
      name: 'News',
      key: 'news',
      page: true,
      link: '/news',
      sideNav: true,
      svg: <News/>
    },
    {
      name: 'Discord',
      key: 'discord',
      page: false,
      link: 'https://discord.gg/townshiptale',
      sideNav: true,
      svg: <Discord/>
    },
    {
      name: 'Creators',
      key: 'creators',
      page: false,
      link: 'https://form.typeform.com/to/Hjo1URZq',
      sideNav: true,
      svg: <Creators/>
    },
    {
      name: 'Presskit',
      key: 'presskit',
      page: false,
      link: 'https://presskit.townshiptale.com/',
      sideNav: true,
      svg: <Presskit/>
    },
    {
      name: 'Sign Up',
      key: 'signup',
      page: true,
      link: '/account/signup',
      sideNav: true,
      svg: <SignUp/>
    }
  ];

  const linksMobile = [
    {
      name: '',
      key: 'hamburger',
      onClick: () => {
        setSideNavOpen(!sideNavOpen);
      },
      svg: <Hamburger/>
    },
    {
      name: '',
      key: 'home',
      page: true,
      link: '/',
      centerLogo: true,
      svg: <BigLogo/>
    },
    {
      name: 'Sign Up',
      key: 'signup',
      page: true,
      link: '/account/signup',
      svg: <SignUp/>
    }
  ];

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
          {links.map((link, index) => <NavigationButton key={link.key} selected={link.key === props.route} link={link}
                                                        index={index} size={links.length}/>)}
        </div>
        <div className={styles.topBarMobile}>
          {linksMobile

            .map((link, index) => <NavigationButton key={link.key} selected={link.key === props.route}
                                                    link={link} index={index} size={linksMobile.length}/>)}
        </div>
      </div>
      <div className={styles.sideNav + " " + (sideNavOpen ? styles.sideNavActive : styles.sideNavInactive)}>
        <div className={styles.sideNavLogoContainer}>
          <BigLogo className={styles.sideNavLogo}/>
          <a onClick={() => setSideNavOpen(!sideNavOpen)}>
            <Close className={styles.closeButton}/>
          </a>
        </div>
        {links
          .filter(link => link.sideNav)
          .map((link, index) => <NavigationButton key={link.key} selected={link.key === props.route} link={link}
                                                  sideNav={true}/>)}
      </div>
      {props.children}
    </div>
  )
}
