"use client"

import { Button } from "../button/Button"
import { Logo } from "../logo/Logo"
import styled from "./header.module.css"

export const Header = () => {
    return(
        <header className={styled.header}>
            <div className={styled.headerDiv}>
                <Logo></Logo>
                <Button onClick={() => {}}> Login </Button>
            </div>
        </header>
    )
}