import styled, { css } from "styled-components";
import * as FiltersMenu from "@radix-ui/react-menubar";
import { CheckSquare, IconProps, Square } from "phosphor-react";

export const Container = styled(FiltersMenu.Root)`
    display:flex;
    align-items: center;
    border-radius: 42px;
    overflow: hidden;
`

export const Filter = styled(FiltersMenu.Menu)``

export const FilterIndicator = styled(FiltersMenu.Trigger)`
    all: unset;
    padding: 0.59375rem 1rem;
    color: ${props => props.theme.PRIMARY_500};
    background:${props => props.theme.PRIMARY_100}80;
    font-size: 1.125rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.625rem;
    cursor: pointer;
    flex:1;
    &[data-state='open'] {
        ${({theme}) => css`
            background: linear-gradient(to right, ${theme.PRIMARY_800}, ${theme.PRIMARY_500});
            color: ${theme.GRAY_100};
        `}
    }
`

export const FilterModal = styled(FiltersMenu.Portal)``

export const FilterSelect = styled(FiltersMenu.Content)`
    margin-top: 5px;
    min-width: 220px;
    background-color: ${props => props.theme.LIGHT};
    border-radius: 8px;
    padding: .5rem;
  /* box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2); */
`
export const FilterSelectItem = styled(FiltersMenu.CheckboxItem)`
    display:flex;
    gap: 1rem;
    padding-left: 5px;
    cursor: pointer;
    padding: 5px;
    border-radius: 5px;

    :hover {
        background: ${props => props.theme.GRAY_100}80;
    }
`

export const FilterSelectItemSeparator = styled(FiltersMenu.Separator)`
    height: 1px;
    background: ${props => props.theme.GRAY_200};
    margin: 5px 0;
`

export const FilterSelectItemLabelGroup = styled(FiltersMenu.Label)`
    color: ${props => props.theme.GRAY_300};
    margin-bottom: 5px;
`

export const IconCheck    = styled(CheckSquare).attrs(props => ({size: 20, weight: "fill", color: props.theme.PRIMARY_500} as IconProps))``
export const IconUncheck = styled(Square).attrs(props => ({size: 20, weight: "bold", color: props.theme.GRAY_300} as IconProps))``