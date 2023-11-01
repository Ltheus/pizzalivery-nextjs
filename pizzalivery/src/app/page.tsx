import Image from 'next/image'
import styles from './page.module.css'
import { Logo } from '@/components/logo/Logo'
import { Footer } from '@/components/footer/Footer'

export default function Home() {
  return (
    <main>
      {/* <Logo></Logo> */}
      <Footer></Footer>
    </main>
  )
}
