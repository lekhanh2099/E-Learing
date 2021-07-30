import styled from 'styled-components'

export const Container = styled.div`
    background-image: url(../images/About/Banner.png);
    height: 400px;
    position: relative;
    text-align: center;
    background-size: cover;
    padding: 80px 0;
    color: #fff;
    background-position: center;
    margin-top: 70px;
   
`

export const Group = styled.div``

export const Title = styled.h3`
    font-size: 48px;
    font-weight: bold;
    line-height: 1.2;
    text-shadow: 0px 2px 3px rgb(0 0 0 / 70%);
    margin-bottom: 30px;

    span{
        color: ${props => props.theme.colorApp}
    }

    @media(max-width: 1023px){
        font-size: 38px;
    }

    @media(max-width: 420px){
        font-size: 28px;
    }
`

export const Description = styled.p`
    font-size: 24px;
    font-weight: bold;
    text-shadow: 0px 2px 3px rgb(0 0 0 / 70%);
    margin-bottom: 30px;

    @media(max-width: 1023px){
        font-size: 20px;
    }

    @media(max-width: 1023px){
        font-size: 16px;
    }
`

export const Head = styled.h1`
    font-size: 58px;
    text-transform: uppercase;
    font-weight: bold;
    text-shadow: 0px 2px 3px rgb(0 0 0 / 70%);

    @media(max-width: 1023px){
        font-size: 48px;
    }

    @media(max-width: 420px){
        font-size: 38px;
    }

    @media(max-width: 320px){
        font-size: 28px;
    }
`