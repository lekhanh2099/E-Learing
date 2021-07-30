import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { GroupMain } from '../../styles/main'

export const Container = styled.div`
    background-color: ${(props) => props.theme.colorNav};
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 222;
    box-shadow: ${(props) => props.theme.shadow};
`

export const Group = styled.div`
    position: relative;
    margin: 0 20px;
    padding: 20px;
    height: ${(props) => props.theme.height};
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 222;
    @media (max-width: 480px) {
    padding: 0;
    margin: 0;
    height: ${(props) => props.theme.heightMobile};
    }
`

export const LogoLink = styled(NavLink)`
    img {
        width: 100px;
        height: 100%;
    }
    @media (max-width: 480px) {
        width: 100%;
        display: block;
        width: 100%;
        height: 100%;
        img {
        width: 100%;
        height: 100%;
        }
    }
`



export const Wrapper = styled(GroupMain)``