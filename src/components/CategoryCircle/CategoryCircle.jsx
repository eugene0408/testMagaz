import React from 'react'
import { useTranslation } from "react-i18next"
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { changeCategory } from '../../store/categoriesSlice'

import { 
    Wrapper,
    Image,
    Title
 } from './CategoryCircle.styles'

const Category = ({
    image,
    value
}) => {
    const dispatch = useDispatch()
    const {t} = useTranslation()

    const changeCategoryHandler = (e) => {
        let category = e.currentTarget.dataset.value;
        dispatch(changeCategory({category}));
      }


  return (
    <Wrapper
        data-value={value}
        onClick={e => changeCategoryHandler(e)}
    >
        <Link to={`/categories/${value}`}>
            <Image image={image} />
            <Title>
                {t(`categories.${value}`)}
            </Title>
        </Link>
    </Wrapper>
  )
}

export default Category