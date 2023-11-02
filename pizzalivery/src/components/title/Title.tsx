import styled from "./title.module.css"

interface TitleProps extends React.HTMLProps<HTMLHeadingElement>{
    children: React.ReactNode;
    variant?: string
}

export const Title = ({children, variant = "h1",...rest} : TitleProps) => {
    return(
        <h1 as={variant} className={styled.heading1} {...rest}> {children} </h1>
    )
}