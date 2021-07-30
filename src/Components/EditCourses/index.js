import React from 'react'
import { Container, Title, GroupInput, GroupSelect, ButtonUpload } from './Styles/EditCourses'

export default function EditCoursesGroup({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

EditCoursesGroup.Title = function EditCoursesGroupTitle ({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

EditCoursesGroup.GroupInput = function EditCoursesGroupGroupInput ({children, ...restProps}){
    return <GroupInput {...restProps}>{children}</GroupInput>
}

EditCoursesGroup.GroupSelect = function EditCoursesGroupGroupSelect ({children, ...restProps}){
    return <GroupSelect {...restProps}>{children}</GroupSelect>
}

EditCoursesGroup.ButtonUpload = function EditCoursesGroupButtonUpload ({children, ...restProps}){
    return <ButtonUpload {...restProps}>{children}</ButtonUpload>
}
