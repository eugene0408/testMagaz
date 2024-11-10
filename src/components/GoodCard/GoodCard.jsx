import React from 'react'
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom'
// Button
import AddToCartBtn from '../AddToCartBtn/AddToCartBtn';

// Styles
import { 
    CardWrapper,
    CardImage,
    CardContent,
    Title,
    Price,
    LinkArea,
    PriceWrapper,
    Size
} from './GoodCard.styles'


const GoodCard = ({
    image,
    title,
    price,
    size,
    articul
}) => {

    const {t} = useTranslation('common');

    return (

    <CardWrapper>


        <CardImage image={image}/>

        <CardContent>
            <Title>
                {title}
            </Title>

            <PriceWrapper>
                <Size>
                    {size}
                    <span>{t(`labels.measureSize`)}</span> 
                </Size>
                <Price>
                    {price}
                    <span>₴</span>
                </Price>
            </PriceWrapper>
    
            <AddToCartBtn 
                articul={articul}
            />
        </CardContent>
        
        {/* link to description page */}
        <Link to={`/products/${articul}`}>
            <LinkArea />
        </Link>

    </CardWrapper>

    )
}

export default GoodCard