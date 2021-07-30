import React from 'react'

export default function Introduce ({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}