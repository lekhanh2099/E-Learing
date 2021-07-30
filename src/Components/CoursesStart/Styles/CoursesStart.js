import styled from 'styled-components/macro';

export const Container = styled.div`
    background-color: ${props => props.theme.bgPrimary};
`

export const Group = styled.div`
    display: flex;
    padding: 50px 0;
`

export const Title = styled.h3`
    color: ${props => props.theme.fcSubTitle};
    margin: 0 auto;
    font-size: 30px;
    position: relative;
    cursor: pointer;

    &:before{
        content: "";
        height: 3px;
        position: absolute;
        left: 25px;
        right: 0;
        bottom: -6px;
        background: #FF9800;
        opacity: 1;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform-origin: center center;
        transform: scaleX(1);
        width: 80%;
    }

    &:hover{
        &:before{
            transform: scaleX(0);
            opacity: 0;
        }
    }

    @media(max-width: 1023px){
        font-size: 24px;

        &:before {
            left: 22px;
        }
    }
`

export const GridContainer = styled.div`
`



