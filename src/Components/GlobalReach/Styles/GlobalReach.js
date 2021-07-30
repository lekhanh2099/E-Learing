import styled from 'styled-components'

export const Container = styled.div`
    padding: 80px 0;
    background-color: rgba(47, 48, 58, 1);
`

export const GroupTitle = styled.div`
    display: block;
    margin-right: auto;
    margin-left: auto;
    position: relative;
    width: 100%;
    max-width: 1144px;
    z-index: 1;
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
`

export const Title = styled.h2`
    font-size: 35px;
    width: 100%;
    position: relative;
    font-size: 35px;
    color: #fff;
    text-align: center;
    
`

export const WrapSubTitle = styled.div`
    width: 52%;
    margin: 0 auto;

    @media(max-width: 1023px){
        width: 72%;
    }

    @media(max-width: 420px){
        width: 90%;
    }
`

export const SubTitle = styled.p`
    text-align: center;
    font-size: 16px;
    font-weight: 300;
    line-height: 30px;
    padding: 0;
    display: inline-block;
    color: #fff;
    margin: 40px 0 30px 0;

    @media(max-width: 1023px){
        margin: 30px 0 20px 0;
    }

`

export const GroupContent = styled.div`
    position: relative;
    width: 100%;
    z-index: 1;
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

export const Wrap = styled.div`
    flex: 1 1 22%;
    margin: 20px 0;
    font-size: 50px;
    color: #fff;
    font-weight: 700;
    text-align: center;

    span{
        margin-top: 8px;
        display: block;
        font-size: 16px;
        color: #fff;
        font-weight: 400;
    }

    @media(max-width: 1023px){
        flex: 1 1 30%;
    }

    @media(max-width: 420px){
        flex: 1 1 40%;
    }

    @media(max-width: 320px){
        flex: 1 1 60%;
    }
`