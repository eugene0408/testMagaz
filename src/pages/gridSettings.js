import styled from 'styled-components'
import {Col} from 'react-grid-system'

// Grid configuration for all pages
export const gridCofiguration = {
  containerWidths: [540, 740, 960, 1140, 1240, 1340],
}

// Goods grid
export const goodsGrid = {
    xs: 6,
    md: 4 ,
    lg: 3 ,
    xl: 2.4  
  }

// Custom col for goods
export const GoodCol = styled(Col)`
	  position: relative;
    display: flex;
    justify-content: center;
    padding: 10px;
`