import React from 'react';
import { Container, Group, Title, GridContainer} from './Styles/CoursesStart'

export default function CoursesStart({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

CoursesStart.Group = function CoursesStartGroup({children, ...restProps}){
    return <Group {...restProps}>{children}</Group>
}

CoursesStart.Title = function CoursesStartTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

CoursesStart.GridContainer = function CoursesStartGridContainer({children, ...restProps}){
    return <GridContainer {...restProps}>{children}</GridContainer>
}

