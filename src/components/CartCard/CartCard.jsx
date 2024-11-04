import React, { useTransition } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import { useDispatch } from 'react-redux'
import { useCurrencyConverter } from '../../hooks/useCurrencyConverter';
// Actions
import { addAmount, reduceAmount, removeItem } from '../../store/cartSlice'
// Icons
import {ReactComponent as DownIcon} from '../../assets/svg/down-arrow.svg'
import {ReactComponent as UpIcon} from '../../assets/svg/up-arrow.svg'
import {ReactComponent as XIcon} from '../../assets/svg/xmark-solid.svg'
// Styles
import { 
    CardWrapper,
    CardImage,
    ContentWrapper,
    TitleWrapper,
    Title,
    Price,
    AmountWrapper,
    AmountButton,
    TotalWrapper,
    TotalLabel,
    TotalPrice,
    DeleteButton,
    LinkArea
 } from './CartCard.styles'

const CartCard = ({
  image,
  title,
  price,
  amount,
  articul
}) => {

  const dispatch = useDispatch();
  const {t} = useTranslation();
  const { convertCurrency } = useCurrencyConverter();
  const convertedPrice = convertCurrency(price).toFixed(2);

  return (
    <CardWrapper>

      <CardImage image={image} />

      <ContentWrapper>

        <TitleWrapper>
          <Title>
            {title}
          </Title>
          <Price>
            {convertedPrice}
            <span>{t(`labels.currency`)}</span>
          </Price>
        </TitleWrapper>

        <AmountWrapper>
          <AmountButton
            value={articul}
            onClick={e => dispatch(addAmount({id: e.currentTarget.value}))}
          >
            <UpIcon />
          </AmountButton>
            {amount}
          <AmountButton
            value={articul}
            onClick={e => dispatch(reduceAmount({id: e.currentTarget.value}))}
          >
            <DownIcon />
          </AmountButton>
        </AmountWrapper>

        <TotalWrapper>
          <TotalLabel>
            {t(`labels.cost`)}:
          </TotalLabel>
          <TotalPrice>
            {(amount * convertedPrice).toFixed(2)}
          </TotalPrice>
        </TotalWrapper>

        <DeleteButton
          value={articul}
          onClick={e => dispatch(removeItem({id: e.currentTarget.value}))}
        >
          <XIcon />
        </DeleteButton>
      </ContentWrapper>

      {/* link to description page */}
      <Link to={`/products/${articul}`}>
        <LinkArea />
      </Link>

    </CardWrapper>

  )
}

export default CartCard