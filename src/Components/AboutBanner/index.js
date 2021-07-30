import React from 'react'

import { Container, Group, Title, Description, Head } from './Styles/aboutBanner'

export default function AboutBanner ({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

AboutBanner.Group = function AboutBannerGroup({children, ...restProps}){
    return <Group {...restProps}>{children}</Group>
}

AboutBanner.Title = function AboutBannerTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

AboutBanner.Description = function AboutBannerDescription({children, ...restProps}){
    return <Description {...restProps}>{children}</Description>
}

AboutBanner.Head = function AboutBannerHead({children, ...restProps}){
    return <Head {...restProps}>{children}</Head>
}