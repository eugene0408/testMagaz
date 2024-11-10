import styled, {css} from "styled-components";
import { Field } from "formik";

const inputStyles = css`
    width: 100%;
    height: 3rem;
    border: none;
    border-radius: 10px;
    box-shadow: var(--card-shadow);
    margin-top: .2rem;
    margin-bottom: .5rem;
    font-size: 18px;
    padding-left: .8em;
`

export const Label = styled.label`
    font-size: var(--text-fz);
    color: var(--text-col);
    position: relative;
    width: 100%;
`

export const StyledField = styled(Field)`
    ${inputStyles}
`

export const TextArea = styled.textarea`
    ${inputStyles}
    height: 5em;
    padding-top: .8em;
    resize: none;
`
export const Select = styled.select`
    ${inputStyles}
    background: #fff;
    overflow: scroll;
`
export const Option = styled.option`
    border: none;
    border-radius: 10px;
    box-shadow: var(--card-shadow);
    margin-top: .2rem;
    margin-bottom: .5rem;
    font-size: 18px;
    padding-left: .8em;
    overflow: visible;
`

export const Header = styled.h2`
    color: var(--text-col);
`
export const CityListWrapper = styled.ul`
    display: inline-block;
    width: 100%;
    border: none;
    border-radius: 10px;
    box-shadow: var(--card-shadow);
    margin-top: 0;
    margin-bottom: .5rem;
    font-size: 18px;
    padding-left: .8em;
    max-height: 200px;
    overflow-y: auto;
    background: #fff;
    color: #000;
    list-style-type:  none;
`

export const ButtonWrapper = styled.div`
    margin-top: 2rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ErrorText = styled.div`
  color: #e74c3c;
  font-size: 12px;
  margin-top: -10px;
  margin-left: 10px;
`