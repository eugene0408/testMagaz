import React from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { useTranslation } from "react-i18next";

import { selectCart } from '../../store/selectors';
import { addToCart } from '../../store/cartSlice';

import { ReactComponent as CartIcon} from '../../assets/svg/cart.svg'

import {
    Button,
    IconWrapper,
    IconAmount
} from './AddToCartBtn.styles'

const AddToCartBtn = ({articul, btnSize}) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const cart = useSelector(selectCart)

  return (
    <Button
        value={articul}
        btnSize={btnSize}
        onClick={(e) => dispatch(addToCart({id: [e.currentTarget.value]}))}
    >   
        <IconWrapper btnSize={btnSize}>
            {cart[articul] >= 1 &&
                <IconAmount>
                    {
                        cart[articul] >= 99 ? "99" : cart[articul]
                    }
                </IconAmount>
            }
            <CartIcon />
        </IconWrapper>
        {t(`buttons.buy`)}
    </Button>
  )
}

export default AddToCartBtn