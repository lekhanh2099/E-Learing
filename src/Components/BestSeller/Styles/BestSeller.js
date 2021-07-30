import styled from 'styled-components/macro'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { SubTitleMain, TitleMain } from '../../styles/main';

export  const Container = styled.div`
    background-color: #5C5D64;
    padding: 50px 40px;
`

export const Group = styled.div`
    width: 70%;

    @media(max-width: 1023px){
        width: 100%;
    }
`

export const Title = styled(TitleMain)`
`

export const SubTiTle = styled(SubTitleMain)`
    width: 70%;
    
    @media(max-width: 1023px) {
        width: 100%;
    }
`

export const Detail = styled(Slider)`
    display: flex;
    margin-top: 40px;
    justify-content: center;
    flex-direction: column !important;  

    .slick-slide{
        display: flex !important    ;
        justify-content: center;
    }

    .slick-list {
        overflow: hidden visible;
        padding: 10px 0 50px 0;
    }

    .slick-prev{
        left: -15px;
        top: 111px;
        z-index: 1;

        &:before{
            color: #FF9800;
            font-size: 40px;
        }
    }

    .slick-next {
        right: 4px;
        top: 111px;
        
        &:before{
            color: #FF9800;
            font-size: 40px;
        }
    }

    .slick-dots li button:before{
        color: white;
        font-size: 10px;
    }

    @media(max-width: 1024px){
        .slick-arrow{
            display: none !important;
        }
    }

`

export const Wrap = styled.div`

    background-color: #2F303A;
    border-radius: 20px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    cursor: pointer;
    padding: 20px 20px;
    display: flex !important;
    max-width: 280px;
    font-size: 16px;

    @media(max-width: 1024px){
        max-width: 200px;
        font-size: 14px;

        img {
            width: 40px !important;
            height: 40px !important;
        }

        svg{
            font-size: 16px;
        }

        h3{
            font-size: 16px;
        }
    }

    @media(max-width: 800px){
        max-width: 174px;
    }

    @media(max-width: 600px){
        max-width: 200px;
    }


    img{
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }

    &:hover{
        transform: scale(1.05);
        
        @media(max-width: 1024px){
            transform: none;
        }
    }
`

export const Content = styled.div`
    padding: 0 0 0 10px;
    color: white;
`

export const Headline = styled.h4`
    margin: 0;
    color: #FF9800;
    font-size: 22px;
`

export const Description = styled.p`
    margin: 0;
    font-style: italic;
    margin-top: 4px;
    margin-bottom: 12px;
    font-weight: 200;
`

export const GroupText = styled.div`
    margin-top: 0;

    
    @media(max-width: 1024px){
        margin-top: 10px;
    }

`

export const Text = styled.p`
    margin: 0;
    font-weight: 200;
    line-height:1.5;
    span{
        font-weight: bold;

        &.active{
            color: #FF9800;
            display: flex;
            align-items: center;
        }
    }

    @media(max-width: 400px){
        font-size: 14px;

        span{
            svg{
                font-size: 16px;
            }
        }
    }
`