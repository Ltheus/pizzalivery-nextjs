"use client"

import { useRouter } from "next/navigation"
import { Button } from "../button/Button"
import { Logo } from "../logo/Logo"
import styled from "./header.module.css"

export const Header = () => {
    const router = useRouter()

    return(
        <header className={styled.header}>
            <div className={styled.headerDiv}>
                <Logo></Logo>
                <Button onClick={() => {router.push('/login')}}> Login </Button>
            </div>
        </header>
    )
}