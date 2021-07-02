import Link from 'next/link';
import Head from 'next/head';
import * as S from './header.styles';
import * as GS from '../../styles/global';
import { LINKS } from '../../data/links';
import { useRouter } from 'next/router';
import useWindowSize from '../../hooks/useWindowSize';
import { CgMenuRound, CgCloseO } from 'react-icons/cg';
import { useState, useEffect, createContext } from 'react';
import Menu from '../menu';
import Fade from 'react-reveal/Fade';
import { motion, AnimatePresence } from 'framer-motion';

const INITIAL_STATE = {
    width: undefined,
    height: undefined,
};

const Header = () => {
    const title = 'From the Ground Up';
    const router = useRouter();
    const size = useWindowSize(INITIAL_STATE);
    const [menu, setMenu] = useState(false);
    const [page, setPage] = useState(null);
    const [scroll, setScroll] = useState(null);
    const [invert, setInvert] = useState(false);
    const BACKGROUND_VALUE = 200;

    function toggleMenu() {
        //toggle open/close for menu
        setMenu((prevMenu) => !prevMenu);
    }

    useEffect(() => {
        //dynamically set the title of the page
        const title = window.location.href
            .split('/')
            .pop()
            .replace('-', ' ')
            .replace(/\b\w/g, (l) => l.toUpperCase());
        setPage(title);
    }, []);

    useEffect(() => {
        //when menu is resized more than 700, close the menu
        size.width >= 700 && menu ? setMenu(false) : null;
    }, [size.width]);

    useEffect(() => {
        const scrollInvert = () => {
            setScroll(document.documentElement.scrollTop);
            scroll > BACKGROUND_VALUE ? setInvert(true) : setInvert(false);
        }
        //when scrolled below BACKGROUND_VALUE, setInvert
        document.addEventListener('scroll', () => scrollInvert());
    }, [scroll]);

    useEffect(() => {
        document.documentElement.scrollTop > BACKGROUND_VALUE
            ? setInvert(true)
            : setInvert(false);
    }, []);

	const description = "From The Ground Up Academy is an online training platform where creative entrepreneurs can build a brand and impact the world.";

    return (
        <>
            <Head>
                <title>
                    {title} {page && `- ${page}`}
                </title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <meta name="description" content={description} />
				<meta property="og:url"           content={process.env.WEBSITE_URL + '/' + page} />
				<meta property="og:type"          content="website" />
				<meta property="og:title"         content={title} />
				<meta property="og:description"   content={description} />
				<meta property="og:image"         content="/ftgu-og.jpg" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            {menu && <Menu />}
            <S.Header>
                <S.NavContainer className={invert && 'invert'}>
                    <GS.MaxContainer>
                        <S.Navigation>
                            <div>
                                <Link href="/">
                                    <a>
                                        <img
                                            src={'/ftgu-logo.svg'}
                                            alt="Logo"
                                            className={`logo`}
                                        />
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <ul>
                                    {size.width >= 700 ? (
                                        LINKS.map((link) => {
                                            return (
                                                <li key={link.title}>
                                                    <Link href={link.link}>
                                                        <a
                                                            className={
                                                                router.pathname ===
                                                                link.link
                                                                    ? 'active'
                                                                    : undefined
                                                            }
                                                        >
                                                            {link.title}
                                                        </a>
                                                    </Link>
                                                </li>
                                            );
                                        })
                                    ) : (
                                        <motion.li
                                            variants={GS.fadeInTop}
                                            initial="initial"
                                            animate="animate"
                                        >
                                            {menu ? (
                                                <motion.span
                                                    variants={GS.fadeInTop}
                                                    initial="initial"
                                                    animate="animate"
                                                >
                                                    <CgCloseO
                                                        className="menu"
                                                        onClick={() =>
                                                            toggleMenu()
                                                        }
                                                    />
                                                </motion.span>
                                            ) : (
                                                <AnimatePresence>
                                                    <motion.span
                                                        variants={GS.fadeInTop}
                                                        initial="initial"
                                                        animate="animate"
                                                        exit="exit"
                                                    >
                                                        <CgMenuRound
                                                            className="menu"
                                                            onClick={() =>
                                                                toggleMenu()
                                                            }
                                                        />
                                                    </motion.span>
                                                </AnimatePresence>
                                            )}
                                        </motion.li>
                                    )}
                                </ul>
                            </div>
                        </S.Navigation>
                    </GS.MaxContainer>
                </S.NavContainer>
            </S.Header>
        </>
    );
};

export default Header;
