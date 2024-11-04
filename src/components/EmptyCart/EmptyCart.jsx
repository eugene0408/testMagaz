import React from 'react'
import {Link} from 'react-router-dom'
import { useTranslation } from "react-i18next";
import { Button } from '../Button.style'
import { 
    Content, 
    Orange, 
    Wrapper, 
    Text 
} from './EmptyCart.style'


const EmptyCart = ({text}) => {

  const {t} = useTranslation();

  return (
    <Wrapper>
        <Content>
            <Orange> : </Orange>
            <span> ( </span>
        </Content>
        <Text>
            {text}
        </Text>
        
        <Link to={'/'}>
          <Button>
            {t(`buttons.home`)}
          </Button>
        </Link>

    </Wrapper>
  ) 
}

export default EmptyCart