import React from 'react'
import { Container, Title, GroupInput, GroupSelect, ButtonUpload } from './Styles/CreateUser'

export default function CreateUsersGroup({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

CreateUsersGroup.Title = function CreateUsersGroupTitle ({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

CreateUsersGroup.GroupInput = function CreateUsersGroupGroupInput ({children, ...restProps}){
    return <GroupInput {...restProps}>{children}</GroupInput>
}

CreateUsersGroup.GroupSelect = function CreateUsersGroupGroupSelect ({children, ...restProps}){
    return <GroupSelect {...restProps}>{children}</GroupSelect>
}

CreateUsersGroup.ButtonUpload = function CreateUsersGroupButtonUpload ({children, ...restProps}){
    return <ButtonUpload {...restProps}>{children}</ButtonUpload>
}
