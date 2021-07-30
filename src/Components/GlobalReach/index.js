import React from 'react'
import {Container, GroupTitle, Title, SubTitle,WrapSubTitle, GroupContent, Wrap} from './Styles/GlobalReach'

export default function GlobalReach ({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

GlobalReach.GroupTitle = function GlobalReachGroupTitle ({children, ...restProps}){
    return <GroupTitle {...restProps}>{children}</GroupTitle>
}

GlobalReach.Title = function GlobalReachTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

GlobalReach.SubTitle = function GlobalReachSubTitle({children, ...restProps}){
    return <SubTitle {...restProps}>{children}</SubTitle>
}

GlobalReach.GroupContent = function GlobalReachGroupContent({children, ...restProps}){
    return <GroupContent {...restProps}>{children}</GroupContent>
}

GlobalReach.Wrap = function GlobalReachWrap ({children, ...restProps}){
    return <Wrap {...restProps}>{children}</Wrap>
}

GlobalReach.WrapSubTitle = function GlobalReachWrapSubTitle ({children, ...restProps}){
    return <WrapSubTitle {...restProps}>{children}</WrapSubTitle>
}

