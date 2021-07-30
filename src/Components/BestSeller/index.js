import React from 'react'
import {Container, Title, SubTiTle, Group, Wrap, Headline, GroupText, Text, Description, Detail, Content} from './Styles/BestSeller'

export default function BestSeller({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

BestSeller.Title = function BestSellerTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

BestSeller.SubTiTle = function BestSellerSubTiTle({children, ...restProps}){
    return <SubTiTle {...restProps}>{children}</SubTiTle>
}

BestSeller.Detail = function BestSellerDetail({children, ...restProps}){
    return <Detail {...restProps}>{children}</Detail>
}

BestSeller.Group = function BestSellerGroup({children, ...restProps}){
    return <Group {...restProps}>{children}</Group>
}

BestSeller.Wrap = function BestSellerWrap({children, ...restProps}){
    return <Wrap {...restProps}>{children}</Wrap>
}

BestSeller.Headline = function BestSellerHeadline({children, ...restProps}){
    return <Headline {...restProps}>{children}</Headline>
}

BestSeller.GroupText = function BestSellerGroupText({children, ...restProps}){
    return <GroupText {...restProps}>{children}</GroupText>
}

BestSeller.Text = function BestSellerText({children, ...restProps}){
    return <Text {...restProps}>{children}</Text>
}

BestSeller.Description = function BestSellerDescription({children, ...restProps}){
    return <Description {...restProps}>{children}</Description>
}

BestSeller.Content = function BestSellerContent({children, ...restProps}){
    return <Content {...restProps}>{children}</Content>
}