import Image from 'next/image'
import styles from './page.module.css'
import { Logo } from '@/components/logo/Logo'
import { Footer } from '@/components/footer/Footer'
import { Button } from '@/components/button/Button'
import { Header } from '@/components/header/Header'

export default function Home() {
  return (
    <main>
      <Header></Header>
      <Footer></Footer>
    </main>
  )
}
