import React from 'react'
import { useTranslation } from "react-i18next";
import { 
  Header, 
  Text, 
  TextWrapper, 
  TextWrapperBordered, 
  TextWrapperColored,
  Wrapper, 
  Comment,
  ListWrapper,
  ListItem,
  ListItemTitle,
  ListItemText,
  ColoredHeaderWrapper,
  ColoredHeader
} from './ExtendedDescr.style'

const KratomDescr = () => {
  const {t} = useTranslation('description');
  const list2Items = t('description:kratom.listItems2', {returnObjects: true});
  const list3Items = t('description:kratom.listItems3', {returnObjects: true});
  const list4Items = t('description:kratom.listItems4', {returnObjects: true});

  return (
    <Wrapper>
      <TextWrapper>
        <Header>
          {t('kratom.header1')}
          <span>?</span>
        </Header>
        <Text>
          {t('kratom.text1')}
        </Text>
        <Comment>
          {t('kratom.comment1')}
        </Comment>
      </TextWrapper>

      <TextWrapperBordered style={{marginTop: "2rem"}}>
        <Header>
          {t('kratom.header2')}
          <span>?</span>
        </Header>
        <Text>
          {t('kratom.text2')}
        </Text>
        <Comment>
          {t('kratom.comment2')}
        </Comment>
        <Header>
          {t('kratom.lheader2')}
        </Header>

        <ListWrapper>
          {Array.isArray(list2Items) && 
            list2Items.map((item, index) => (
              <ListItem key={index}>
                <ListItemTitle>
                  {item.title}
                </ListItemTitle>
                <ListItemText>
                  {item.text}
                </ListItemText>
              </ListItem>
            ))
          }
        </ListWrapper>

      </TextWrapperBordered>

      <TextWrapper style={{marginTop: "2rem"}}>
        <Header>
          {t('kratom.header3')}
          <span>?</span>
        </Header>
        {Array.isArray(list3Items) && 
          list3Items.map((item, index) => (
            <ListItem key={index*10}>

              <ColoredHeaderWrapper
                color={item.color}
              >
                <ColoredHeader>
                  {item.title}
                </ColoredHeader>
              </ColoredHeaderWrapper>

              <ListItemText>
                {item.text}
              </ListItemText>

            </ListItem>
          ))
        }

        <Comment>
          {t('kratom.comment3')}
        </Comment>
        
      </TextWrapper>

      <TextWrapperBordered>
        <Header>
          {t('kratom.header4')}
          <span>?</span>
        </Header>
        {Array.isArray(list4Items) &&
          list4Items.map((item, index) => (
            <ListItem key={index*20}>
              <ListItemTitle>
                {item.title}
              </ListItemTitle>
              <ListItemText>
                {item.text}
              </ListItemText>
            </ListItem>
          ))

        }
      </TextWrapperBordered>

      <TextWrapperColored color='#E91E63' style={{marginTop: "1.5rem"}}>
        <Text>
          {t('kratom.coloredText')}
        </Text>
      </TextWrapperColored>
      
    </Wrapper>
  )
}

export default KratomDescr