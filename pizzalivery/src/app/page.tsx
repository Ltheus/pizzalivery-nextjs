"use client"

import styled from './page.module.css'
import { Button } from '@/components/button/Button'

// ---------------------- Home Page ----------------------

export default function Home() {
  return (
    <div className={styled.homeWrapper}>
      <Button onClick={() => {}}> Iniciar Pedido </Button>
    </div>
  )
}
