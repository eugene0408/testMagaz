import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from 'react-redux';

import { selectCategoriesList } from '../../store/selectors';
import { changeCategory } from '../../store/categoriesSlice';

import {ReactComponent as CaretIcon} from '../../assets/svg/caret.svg';
import {ReactComponent as XIcon} from '../../assets/svg/xmark-solid.svg';

import { MenuIcons } from './CatalogMenu.icons';
import { 
    MenuButton, 
    MenuList, 
    MenuWrapper, 
    MenuListItem
} from './CatalogMenu.styles';

const CatalogMenu = () => {

const [expanded, setExpanded] = useState(false);

const dispatch = useDispatch()
const menuItems = useSelector(selectCategoriesList)
const {t} = useTranslation();

const menuItemClickHandler = (e) => {
  const category = e.currentTarget.dataset.value;
  dispatch(changeCategory({category}));
  setExpanded(!expanded);
}

  return (
    <MenuWrapper
        expanded={expanded}
    >
        <MenuButton
            onClick={()=> setExpanded(!expanded)}
        >
            {t(`headers.catalog`)}
            {!expanded &&
                <CaretIcon/>   
            }
            {expanded &&
                <XIcon/>   
            }

        </MenuButton>
        {expanded &&
            <MenuList>
                { menuItems.map(item => (
                    <MenuListItem
                        key={item.value}
                        data-value={item.value}
                        onClick={e => menuItemClickHandler(e)}
                    >
                        <Link to={`/categories/${item.value}`}>
                            <MenuIcons name={item.value}/>
                            {t(`categories.${item.value}`)}
                        </Link>
                    </MenuListItem>
                ))}
            </MenuList>
        }
    </MenuWrapper>
  )
}

export default CatalogMenu