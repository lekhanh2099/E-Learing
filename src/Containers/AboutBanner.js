import React from 'react';
import {AboutBanner} from '../Components'
import {Container} from "@material-ui/core"


export default function AboutBannerContainer () {
    return(
        <AboutBanner>
            <Container fixed>
                <AboutBanner.Group>
                    <AboutBanner.Title>Học viện Online <span>Udemy</span></AboutBanner.Title>
                    <AboutBanner.Description>Chia sẻ kiến thức và kinh nghiệm thực tế tới hàng triệu người</AboutBanner.Description>
                    <AboutBanner.Head>Học mọi lúc, mọi nơi</AboutBanner.Head>
                </AboutBanner.Group>
            </Container>
        </AboutBanner>
    )
}