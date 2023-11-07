"use client"

import { useRouter } from 'next/navigation'
import styled from './page.module.css'
import { Button } from '@/components/button/Button'

// ---------------------- Home Page ----------------------

export default function Home() {
  const router = useRouter()
  const handleStartOrder = () => {
    router.push('/sizes')
  }

  return (
    <div className={styled.homeWrapper}>
      <Button onClick={handleStartOrder}> Iniciar Pedido </Button>
    </div>
  );
}
