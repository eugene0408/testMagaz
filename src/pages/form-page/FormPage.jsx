import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

import { useSelector } from 'react-redux'
import { selectCart } from '../../store/selectors'

import { Container, Row, Col } from 'react-grid-system'

import { PageContainer } from '../pages.style'
import {Button} from '../../components/Button.style'
import { 
    ButtonWrapper, 
    Input, 
    Label,
    Header,
    Select,
    Option,
    CityListWrapper
} from './FormPage.style'


const FormPage = () => {

    const cart = useSelector(selectCart);

    const [formData, setFormData] = useState({
        name: '',
        secondName: '',
        phone: '',
        adress: ''
    })

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    // Nova Post integration
    const [cityQuery, setCityQuery] = useState('');
    const [cities, setCities] = useState([]);
    const [cityRef, setCityRef] = useState(null);
    const [warehouses, setWarehouses] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedWarehouse, setSelectedWarehouse] = useState('');

    // Input delay
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
        if (cityQuery) {
            fetchCities(cityQuery);
        } else {
            setCities([]);
        }
        }, 500); 

        return () => clearTimeout(delayDebounceFn);
    }, [cityQuery]);

    useEffect(() => {
        if (warehouses.length === 1) {
          // Автоматично вибираємо єдине відділення
          setSelectedWarehouse(warehouses[0].Description);
        }
      }, [warehouses]);
      

    // Get cities from API
    const fetchCities = async (query) => {
        try {
        const response = await axios.post('https://api.novaposhta.ua/v2.0/json/', {
            "apiKey": "3e48763c47d40dea1f9993ac345f152c",
            "modelName": "Address",
            "calledMethod": "getCities",
            "methodProperties": {
            "FindByString": query,
            },
        });

        if (response.data.success) {
            setCities(response.data.data);
        }
        } catch (error) {
        console.error("Cities loading error:", error);
        }
    };

    // Функція для отримання відділень за CityRef
    const fetchWarehouses = async (cityRef) => {
        try {
        const response = await axios.post('https://api.novaposhta.ua/v2.0/json/', {
            "apiKey": "3e48763c47d40dea1f9993ac345f152c",
            "modelName": "AddressGeneral",
            "calledMethod": "getWarehouses",
            "methodProperties": {
            "CityRef": cityRef,
            },
        });

        if (response.data.success) {
            setWarehouses(response.data.data);
        }
        } catch (error) {
        console.error("Помилка при завантаженні відділень:", error);
        }
    };

    // Обробка вибору міста
    const handleCitySelect = (city) => {
        setSelectedCity(city.Description);
        setCityRef(city.Ref);
        setCities([]);
        setCityQuery(city.Description);
        fetchWarehouses(city.Ref);
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        const data = new FormData();
        data.append('formData[name]', formData.name);
        data.append('formData[surname]', formData.surname);
        data.append('formData[phone]', formData.phone);
        data.append('city', selectedCity);
        data.append('warehouse', selectedWarehouse);
        data.append('cart', JSON.stringify(cart));
        

        // Send data to tg
        axios.post('https://erikshop.local/core/send-to-telegram.php', data)
            .then(response => {
                alert('Успішно надіслано')
                
            })
            .catch(error => {
                console.error('Sending error', error)
            })
    };


  return (
    <PageContainer>
        <Container style={{marginTop: "4rem"}}>
            <Row justify='center'>
                <Col
                    xs={12} md={6} xl={4}
                >
                <form method= "post" onSubmit={handleSubmit}>
                    <Header>Контактні дані</Header>
                    <Label>
                        Імя
                    </Label>
                    <Input 
                        type={'text'}
                        name="name"
                        onChange={handleInputChange}
                    />
           
                    <Label>
                        Прізвище
                    </Label>
                    <Input
                        type={'text'}
                        name='surname'
                        onChange={handleInputChange}
                     />
               
                    <Label>
                        Номер телефону
                    </Label>
                    <Input
                        type={'tel'}
                        name='phone'
                        onChange={handleInputChange}
                     />
                    <Header>Доставка</Header>
                    <Label>
                        Місто / село
                    
                    <Input
                        type={'text'}
                        name='city'
                        onChange={(e) => setCityQuery(e.currentTarget.value)}
                        placeholder='Почніть вводити назву міста'
                        value={cityQuery}
                     />

                    {cities.length > 0 && (
                        <CityListWrapper>
                            {cities.map((city) => (
                            <li
                                key={city.Ref}
                                onClick={() => handleCitySelect(city)}
                                style={{ cursor: 'pointer', padding: '5px' }}
                            >
                                {city.Description}
                            </li>
                            ))}
                        </CityListWrapper>
                        )}
                    </Label>

                    {selectedCity && (
                        <Label>
                            Відділення:
                            <Select 
                                name='warehouse'
                                onChange={(e) => setSelectedWarehouse(e.currentTarget.value)}
                            >
                                {warehouses.map((warehouse) => (
                                <Option 
                                    key={warehouse.Ref} 
                                    value={warehouse.Description}
                                >
                                    {warehouse.Description}
                                </Option>
                                ))}
                            </Select>
                        </Label>
                    )}



                    <ButtonWrapper>
                        <Button type='submit'>
                            Оформити замовлення
                        </Button>
                    </ButtonWrapper>
                    </form>
                </Col>
            </Row>
        </Container>

    </PageContainer>
  )
}

export default FormPage