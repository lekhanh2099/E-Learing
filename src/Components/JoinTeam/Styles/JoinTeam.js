import styled from 'styled-components'

export const Container = styled.div`
    padding: 80px 0;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: auto 80%;
`

export const Wrap = styled.div`
    display: flex;
    z-index: 1;
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    position: relative;
    width: 100%;
    max-height: 800px;

    @media(max-width: 1023px){
        max-height: 500px;
    }

    @media(max-width: 420px){
        display: block;
    }
`

export const GroupConent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f4f4f4;
    width: 50%;
    text-align: center;

    @media(max-width: 420px){
        width: 100%;
        padding: 50px 15px;
    }

`

export const Content = styled.div`
    margin: 0 105px;

    @media(max-width: 1023px){
        margin: 0 10px;
    }
`

export const Title = styled.p`
    font-size: 32px;
    width: 100%;
    line-height: 34px;
    margin: 0 auto 23px;

    @media(max-width: 1023px){
        font-size: 23px;
    }
`

export const Description = styled.p`
    font-size: 14px;
    font-weight: 300;
    line-height: 22px;

    media(max-width: 1023px){
        font-size: 12px;
    }
`

export const Button = styled.a`
    color: #fff;
    background-color: ${props => props.theme.colorApp};
    border-color: #ec5252;
    height: 44px;
    display: inline-block;
    margin-top: 25px;
    padding: 12px 35px;
    border-radius: 2px;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover{
        background-color: transparent;
        border: 1px solid ${props => props.theme.colorApp};
        color: ${props => props.theme.bgPrimary}
    }
`

export const GroupImage = styled.img`
    width: 50%;
    overflow: hidden;

    @media(max-width: 420px){
        width: 100%;
    }
`