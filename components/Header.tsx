import Link from 'next/link'
import React, { useState } from 'react'
import styles from '../styles/Header.module.css'
import { ReactChildren } from 'react'

const Header: React.FC = ({ children }) => {
    const [ menuIsActive, setMenuIsActive ] = useState(false)


    return (
    <>
        <header className={styles.header}>
            <Link href='/'>
                <h1 className={styles.h1}>RL Skill Book</h1>
            </Link>
            <nav>
                <ul className={styles.ul}>
                    <li>
                        <Link href="/">
                        <a> Home </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Book">
                        <a> Book </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/About">
                        <a> About </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Contact">
                        <a> Contact </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
        {children}
    </>
    );
}

export default Header