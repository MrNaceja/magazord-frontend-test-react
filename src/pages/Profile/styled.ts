import styled from "styled-components";

export const Header = styled.header`
    height: 4.5rem;
    width:100%;
    background: ${props => props.theme.GRAY_800};
    padding:1.3125rem 14.25rem;
    
    /** Notebooks / Tablets */
    @media screen and (max-width: 960px) {
        padding: 1.3125rem 1.5rem;
    }
`

export const GridUserProfile = styled.main`
    display: grid;
    padding:0 14.25rem;
    grid-template-columns: 250px 1fr;
    gap: 4.0625rem;
    align-items: flex-start;

    /** Notebooks / Tablets */
    @media screen and (max-width: 960px) {
        padding:1.5rem;
        gap: 1.5rem;
    }

    /** Tablets */
    @media screen and (max-width: 748px) {
        grid-template-columns: 100%;
        gap: 2.5rem;
    }
`

export const Container = styled.section`
        gap:2rem;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    
        /** Mobile */
        @media screen and (max-width: 480px) {
            ${Header} {
                display: none;
            }
        }
    
    `


