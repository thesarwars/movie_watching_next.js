import React from 'react'
import styles from '@/app/styles/navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
// import { Nav } from 'react-bootstrap'
import {Nav} from '@/app/components/Nav'

export const Header = () => {
    return (
        <header className={styles.main_header}>
            <div className={styles.navbar_brand}>
                <Link href='/'>
                    <Image src="/tahaflix_logo.png" alt='Logo' width={150} height={40}></Image>
                </Link>
            </div>
            <Nav/>
        </header>
    )
}
