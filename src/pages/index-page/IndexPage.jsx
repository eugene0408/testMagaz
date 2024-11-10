import React from 'react';
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-grid-system';

import { 
  selectCategoriesList,
  selectGoodsList,
  selectCategoriesStatus,
  selectCategoriesError, 
  selectGoodsStatus,
  selectGoodsError,
  selectPopularGoods
 } from '../../store/selectors';

import CategoryCircle from '../../components/CategoryCircle/CategoryCircle';
import GoodCard from '../../components/GoodCard/GoodCard';

import { PageContainer} from '../pages.style';
import {goodsGrid, GoodCol} from '../gridSettings';

import MoutainsImg from '../../assets/images/mountains.jpg'

import { 
  AboutText, 
  AboutImage,
  SectionHeader,
  ColCard 
} from './IndexPage.styles';

const IndexPage = () => {
  const {t} = useTranslation(['common', 'tgoods']);

  const categories = useSelector(selectCategoriesList)
  const goods = useSelector(selectGoodsList)
  const categoriesStatus = useSelector(selectCategoriesStatus)
  const categoriesError = useSelector(selectCategoriesError)
  const goodsStatus = useSelector(selectGoodsStatus)
  const goodsError = useSelector(selectGoodsError)
  const popularGoods = useSelector(selectPopularGoods)

  return (

      <PageContainer>
        <Container>
          <SectionHeader>
            {t(`common:headers.categorySelect`)}
          </SectionHeader>

          {categoriesStatus === 'loading' && 
            <p>Завантаження...</p>
          }

          {categoriesStatus === 'rejected' && 
            <h3>{categoriesError}</h3>
          }

          {categoriesStatus === 'resolved' && 
             <Row justify='center'>
             {
               categories.map(category => (
                 <Col
                   key={category.value}
                   xs={6} md={4} lg={1.8} xxl={1.5}   
                 >
                   <CategoryCircle
                     image={category.image}
                     value={category.value}
                   />
                 </Col>
               ))
             }
             </Row>
          }
   


          <SectionHeader>
            {t(`common:headers.popular`)}
          </SectionHeader>


          {goodsStatus === 'loading' && 
            <p>Завантаження...</p>
          }

          {goodsStatus === 'rejected' && 
            <h3>{goodsError}</h3>
          }

          {goodsStatus === 'resolved' && 
            
            <Row>
              {
                popularGoods.map(good => (
                  <GoodCol       
                    key={good.articul}
                    {...goodsGrid}
                  >
                    <GoodCard      
                      title={t(`tgoods:${good.articul}.name`)}
                      image={good.image}
                      articul={good.articul}
                      price={good.price}
                      size={good.size}
                    />
                  </GoodCol>
                ))
              }
            </Row>
            
          }
          

          <SectionHeader>
            {t(`common:headers.about`)}
          </SectionHeader>

          <Row align='center'>
            <Col 
              xs={12} md={6} 
              order={{xs: 2, md: 1}}
            >
              <AboutImage image={MoutainsImg} />
            </Col>

            <Col 
              xs={12} md={6} 
              order={{xs: 1, md: 2}}
            >
              <AboutText>
                {t(`common:text.about`)}
              </AboutText>
            </Col>
          </Row>
        </Container>
      </PageContainer>   

  )
}

export default IndexPage