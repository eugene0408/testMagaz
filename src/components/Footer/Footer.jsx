import React from 'react'
import { Container, Row, Col } from 'react-grid-system';
import { useTranslation } from "react-i18next";


import {ReactComponent as PhoneIcon} from '../../assets/svg/phone-solid.svg'
import {ReactComponent as FacebookIcon} from '../../assets/svg/facebook-f-brands.svg'
import {ReactComponent as InstaIcon} from '../../assets/svg/instagram.svg'
import {ReactComponent as TelegramIcon} from '../../assets/svg/telega.svg'

import { 
    Wrapper,
    Header,
    PhoneWrapper,
    SocialWrapper,
    SocialLink,
    MapWrapper
 } from './Footer.styles';



const Footer = () => {
    const {t} = useTranslation();
  return (
    <Wrapper>
        <Header>
            {t(`headers.contacts`)}
        </Header>
        <Container>
            <Row>
                <Col
                    xs={8}
                    offset={{xs: 2}}
                >
                    <PhoneWrapper href='#'>
                        <PhoneIcon />
                        <span>099-012-1234</span>
                    </PhoneWrapper>
                    <PhoneWrapper href='#'>
                        <PhoneIcon />
                        <span>096-321-9876</span>
                    </PhoneWrapper>

                    <SocialWrapper>
                        <SocialLink href="#">
                            <FacebookIcon />
                        </SocialLink>
                        <SocialLink href="#">
                            <InstaIcon />
                        </SocialLink>
                        <SocialLink href="#">
                            <TelegramIcon />
                        </SocialLink>
                    </SocialWrapper>

     

                </Col>
            </Row>
        </Container>

    </Wrapper>
  )
}

export default Footer

