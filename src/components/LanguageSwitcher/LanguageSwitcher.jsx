import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {ReactComponent as UsFlagIcon} from '../../assets/svg/usa-flag.svg'
import {ReactComponent as UkraineFlagIcon} from '../../assets/svg/ukraine-flag.svg'

import {
    Wrapper,
    Button,
    IconWrapper
} from './LanguageSwitcher.styles'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
    setIsOpen(false);
  };

  return (
    <Wrapper>

        {!isOpen && (
            <Button onClick={toggleDropdown}>
                {selectedLanguage === 'uk' 
                  ? <IconWrapper> <UkraineFlagIcon/> UK </IconWrapper>
                  : <IconWrapper>  RU </IconWrapper>
                }
            </Button>
        )}
        

        {isOpen && (
            <>
             <Button onClick={() => changeLanguage('ru')}>
                <IconWrapper> RU </IconWrapper>
             </Button>
             <Button onClick={() => changeLanguage('uk')}>
                <IconWrapper> <UkraineFlagIcon/> UK </IconWrapper>
             </Button>
            </>
        )}
    </Wrapper>
  );
};

export default LanguageSwitcher