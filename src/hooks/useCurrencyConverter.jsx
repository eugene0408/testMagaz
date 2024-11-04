import { useTranslation } from "react-i18next";

export const useCurrencyConverter = () => {
    const exRate = 41;
    const {i18n} = useTranslation()

    const convertHrnToUsd = (amountInHrn) => {
        return parseFloat(amountInHrn) / exRate
    };

    const convertCurrency = (amountInHrn) => {
        if(i18n.language === 'en') {
            return convertHrnToUsd(amountInHrn)
        }
        return parseFloat(amountInHrn) //if language is not english return hrn
    };
 

    return { convertCurrency }

}