import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
    transition: .3s;
    :hover {
        transform: translateX(1rem);
    }
`

export const Title = styled.h1`
    font-size: 1.125rem;
    font-weight: 300;
    ${({ theme }) => css`
        color: ${theme.GRAY_800};
        a {
            font-weight: bold;
            color: ${theme.PRIMARY_500};
            cursor: pointer;
        }
    `}
` 

export const Description = styled.p`
    font-size: 0.875rem;
    color: ${props => props.theme.GRAY_300};
`
export const Information = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`

export const PredominantLanguage = styled.h2`
    font-size: 0.875rem;
    font-weight: 500;
`

export const BranchesIndicator = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
    font-size: 0.875rem;
`