import React from 'react'
import { Container, Title, GroupInput, GroupSelect, ButtonUpload } from './Styles/CreateCourses'

export default function CreateCoursesGroup({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

CreateCoursesGroup.Title = function CreateCoursesGroupTitle ({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

CreateCoursesGroup.GroupInput = function CreateCoursesGroupGroupInput ({children, ...restProps}){
    return <GroupInput {...restProps}>{children}</GroupInput>
}

CreateCoursesGroup.GroupSelect = function CreateCoursesGroupGroupSelect ({children, ...restProps}){
    return <GroupSelect {...restProps}>{children}</GroupSelect>
}

CreateCoursesGroup.ButtonUpload = function CreateCoursesGroupButtonUpload ({children, ...restProps}){
    return <ButtonUpload {...restProps}>{children}</ButtonUpload>
}
