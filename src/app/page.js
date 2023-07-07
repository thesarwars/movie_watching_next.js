'use client'
import { useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { HeroSection } from './components/HeroSection'
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  
  return (
    <main>
      <HeroSection title={"LET'S WATCH MOVIE TOGETHER"} imageUrl={"/home.svg"}/>
    </main>
  )
}
