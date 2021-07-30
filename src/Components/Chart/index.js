import React from 'react'
import {Container, Title} from './Styles/Chart'

export default function Chart({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Chart.Title = function ChartTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}