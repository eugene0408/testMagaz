import {React, useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

import { selectCart } from '../../store/selectors';
import { addAmount, reduceAmount, addToCart } from '../../store/cartSlice';

import {
    Wrapper,
    Counter,
    CounterBtnLeft,
    CounterBtnRight,
    CounterValue,
    Button

} from "./GoodDescrBtn.styles"



const GoodDescrBtn = ({articul}) => {

  const {t} = useTranslation();
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);

  const [linkIsActive, setLinkIsActive] = useState(false)

  useEffect(() => {
    if(cart[articul]) {
      setLinkIsActive(true)
    }else {
      setLinkIsActive(false)
    }
  }, [articul]);

  const addButtonHandler = (e) => {
    dispatch(addToCart({id: [e.currentTarget.value]}));
    setLinkIsActive(true);
  };


  return (
    <Wrapper>
        <Counter>
        <CounterBtnLeft
          value={articul}
          onClick={(e) => dispatch(reduceAmount({id: [e.currentTarget.value]}))}
        > 
          - 
        </CounterBtnLeft>

        <CounterValue>
           { cart[articul] > 0 ? cart[articul] : 0 } 
        </CounterValue>

        <CounterBtnRight
          value={articul}
          onClick={(e) => addButtonHandler(e)}
        > 
          + 
        </CounterBtnRight>
        </Counter>


      { !linkIsActive && 
        <Button
          value={articul}
          onClick={(e) => addButtonHandler(e)}
        >
          {t(`buttons.addToCart`)}
        </Button>
      }

      { linkIsActive && 
        <Link to={'/cart'}>
          <Button>
          {t(`buttons.toCart`)}
          </Button>
        </Link>
      }


    </Wrapper>
  )
}

export default GoodDescrBtn
