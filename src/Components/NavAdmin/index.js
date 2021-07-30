import React from 'react'
import {Container, LogoLink, Group, Wrapper} from './Styles/NavAdmin'
import Logo from '../../Assets/Images/logo.svg'



export default function NavAdmin({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

NavAdmin.Group = function NavAdminGroup ({children, ...restProps}){
    return <Group {...restProps}>{children}</Group>
}

NavAdmin.Wrapper = function NavAdminWrapper ({children, ...restProps}){
    return <Wrapper display="block" justify="center" align="center" {...restProps}>
        {children}
    </Wrapper>
}

NavAdmin.Logo = function NavAdminLogo ({to, children, ...restProps}){
    return <LogoLink to={to} {...restProps}>
                 <img src={Logo} alt="Udemy" />
            </LogoLink>
}
