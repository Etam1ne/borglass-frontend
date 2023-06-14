import styled from "styled-components";

export const ProductsMain = styled.main`
    width: min(1200px, 95vw);
    margin: 0 auto;
    padding-top: 80px;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`

export const Filters = styled.aside`
    flex: 1;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media screen and (max-width: 1000px) and (min-width: 620px) {
        flex-direction: row !important;
    }
`

export const ProductsTable = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    gap: 15px;
`

interface ProductColumnItemProps {
    flex?: number;
}

export const ProductColumnItem = styled.div<ProductColumnItemProps>`
    flex: ${props => props.flex ?? 1};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`

export const ProductColumnButton = styled(ProductColumnItem)`
    background-color: ${props => props.theme.colors.primaryGreen};
    color: ${props => props.theme.colors.primaryLightblue};
    padding: 5px;
    border-radius: 5px;
`