import { createSelector } from "@reduxjs/toolkit"

export const selectGoodsList = state => state.goods.goods
export const selectGoodsStatus = state => state.goods.status
export const selectGoodsError = state => state.goods.error

export const selectCategoriesList = state => state.categories.list
export const selectCurCategory = state => state.categories.current
export const selectCategoriesStatus = state => state.categories.status
export const selectCategoriesError = state => state.categories.error

export const selectCart = state => state.cart
export const selectTheme = state => state.theme

export const selectPopularGoods = createSelector(
    selectGoodsList,
    goodsList => goodsList.filter(good => good.popular)
);

export const selectGoodsByCategory = createSelector(
    [selectGoodsList, selectCurCategory], 
    (goodsList, curCategory) => goodsList.filter(good => good.category === curCategory)
);

export const selectGoodsInCart = createSelector(
    [selectGoodsList, selectCart],
    (goodsList, cart) => {
        let arr = []
        Object.keys(cart).forEach(key => {
            arr.push(goodsList.find(good => good.articul === key))
          })
        return arr
    }
)