import {useParams} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useTranslation } from "react-i18next";
import { selectCategoriesList } from '../../store/selectors.js';

import { PageContainer } from '../pages.style.js';
import GoodCard from '../../components/GoodCard/GoodCard';
import CategoryCircle from '../../components/CategoryCircle/CategoryCircle';
import AddToCartBtn from '../../components/AddToCartBtn/AddToCartBtn.jsx';
import {
	GoodImage,
	GoodTitle,
	GoodDescription,
	GoodPriceWrapper,
	GoodPrice,
	GoodSize,
	ButtonContainer,
	Header
} from './GoodPage.style.js'
import { Col, Container, Row } from 'react-grid-system';
import {goodsGrid, GoodCol} from '../gridSettings';
import GoodDescrBtn from '../../components/GoodDescrBtn/GoodDescrBtn.jsx';


const GoodPage = () => {
	const {t} = useTranslation();

	const {goodId} = useParams();
	const goods = useSelector(state => state.goods.goods)

	const good = goods.find(good => good.articul === goodId)
	const similarArticuls = () => good.similar ? good.similar : '';

	const similarGoods = () => {
		const similarArr = [];

		if(similarArticuls().length > 0) {
			similarArticuls().forEach(articul => {
			const similarGood = goods.find(good => good.articul === articul);
			similarArr.push(similarGood);
			});
		};

		return similarArr

	}

	const categories = useSelector(selectCategoriesList);



	return (
		<PageContainer>
			<Container justify='center'>
				<Row>
					<Col xs={12} md={8} lg={6}
						offset={{md: 2, lg: 3}}
					>
						<GoodImage image={good.image} />
					</Col>

					<Col xs={12} md={8} lg={6}
						offset={{md: 2, lg: 3}}
					>
						<GoodTitle>
							{t(`goods.${good.articul}.name`)}
						</GoodTitle>

						<GoodDescription>
							{t(`goods.${good.articul}.description`)}
						</GoodDescription>

						<GoodPriceWrapper>
							<GoodSize>
								{good.size}
								<span>{t(`labels.measureSize`)}</span>
							</GoodSize>
							<GoodPrice>
								{good.price}
								<span>₴</span>
							</GoodPrice>
						</GoodPriceWrapper> 


					</Col>

					<Col xs={12}>
						<ButtonContainer>
							{/* <AddToCartBtn
								articul={goodId}
								btnSize={'large'}
							/> */}

							<GoodDescrBtn
								articul={goodId}
							/>
						</ButtonContainer>
					</Col>
				{/* ============= Similar Goods ================*/}
				</Row>	
				{similarGoods().length > 0 &&
					<Row justify='start' style={{marginTop: '4rem'}}>
						<Col xs={12}>			
							<Header>Популярні товари</Header>
						</Col>
						{similarGoods().map(good => (
							<GoodCol
								key={good.articul}
								{...goodsGrid}
							>
								<GoodCard      
								title={t(`goods.${good.articul}.name`)}
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

				{/* ============= Categories ================*/}
				<Row justify='center' style={{marginTop: "5rem"}}>

					<Col xs={12}>			
						<Header>Категорії</Header>
					</Col>

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
			</Container>
		</PageContainer>

		)
}

export default GoodPage