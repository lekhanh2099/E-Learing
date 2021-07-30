import React from 'react'
import {Container, GroupConent,Wrap, Content, Title, Description, Button, GroupImage} from './Styles/JoinTeam'

export default function JoinTeam ({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

JoinTeam.GroupContent = function JoinTeamGroupContent({children, ...restProps}){
    return <GroupConent {...restProps}>{children}</GroupConent>
}

JoinTeam.Content = function JoinTeamContent({children, ...restProps}){
    return <Content {...restProps}>{children}</Content>
}

JoinTeam.Title = function JoinTeamTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

JoinTeam.Description = function JoinTeamDescription({children, ...restProps}){
    return <Description {...restProps}>{children}</Description>
}

JoinTeam.Button = function JoinTeamButton({children, ...restProps}){
    return <Button {...restProps}>{children}</Button>
}

JoinTeam.Wrap = function JoinTeamWrap({children, ...restProps}){
    return <Wrap {...restProps}>{children}</Wrap>
}

JoinTeam.GroupImage = function JoinTeamGroupImage({children, ...restProps}){
    return <GroupImage {...restProps}>{children}</GroupImage>
}