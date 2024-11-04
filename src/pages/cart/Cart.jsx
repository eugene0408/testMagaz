import React from 'react'
import { useTranslation } from "react-i18next";
import {Link} from 'react-router-dom'
import {Container, Row, Col} from 'react-grid-system'
import { useSelector } from 'react-redux'
import { useCurrencyConverter } from '../../hooks/useCurrencyConverter'

import { selectCart, selectGoodsInCart } from '../../store/selectors'

import CartCard from '../../components/CartCard/CartCard'
import EmptyCart from '../../components/EmptyCart/EmptyCart'
import { TotalLabel } from '../../components/CartCard/CartCard.styles'
import { PageContainer } from '../pages.style'
import { Button } from '../../components/Button.style'

import { 
  CartHeader, 
  TotalValue, 
  TotalWrapper, 
  SubmitBtnWrapper, 
} from './Cart.styles'


const Cart = () => {
  const {t} = useTranslation();
  const cart = useSelector(selectCart);
  const goodsInCart = useSelector(selectGoodsInCart)
  const {convertCurrency} = useCurrencyConverter()

  // Calculating total prise
  const totalPrice = () => {
    let total = 0;
    goodsInCart.forEach(good => {
      total += cart[good.articul] * good.price
    })
    return total;
  }

  const totalCurrency = convertCurrency(totalPrice()).toFixed(2)


  return (
    <PageContainer>

    {goodsInCart.length >= 1 &&
      <>
        <CartHeader>
          {t(`headers.cartHeader`)}
        </CartHeader>

        <Container>
          <Row>
            {goodsInCart.map(good => (
                <Col
                key={good.articul}
                xs={12} md={10} lg={8} xl={6}
                offset={{md: 1, lg: 2, xl: 3}}
                >
                  <CartCard 
                    image={good.image}
                    title={t(`goods.${good.articul}.name`)}
                    price={good.price}
                    articul={good.articul}
                    amount={cart[good.articul]}
                  />

                </Col>
              ))}                 
          </Row>
        </Container>

        <Container>
          <Row>
            <Col
              md={11} lg={10} xl={9}
            >
              <TotalWrapper>
                <TotalLabel>{t(`labels.total`)}:</TotalLabel>
                <TotalValue>
                  {totalCurrency}
                  <span>{t(`labels.currency`)}</span>
                </TotalValue>
              </TotalWrapper>
            </Col>
          </Row>
        </Container>

        <Container>
          <SubmitBtnWrapper>
            <Link to={'/form'}>
              <Button>
                {t(`buttons.submit`)}
              </Button>
            </Link>
          </SubmitBtnWrapper>
        </Container>
      </>
    }

    {goodsInCart.length < 1 &&
      <EmptyCart
        text={t(`headers.emptyCart`)}
      />
    }


    </PageContainer>
  )
}

export default Cart