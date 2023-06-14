import { HorizontalFlexbox } from "../Box.style";
import { ProductColumnButton, ProductColumnItem } from "./Products.style";

export interface ProductCardProps {
    productName: string;
    startYear: number;
    endYear: number;
    productNumber: string;
    productType: string;
    price: number;
    additional?: string;
}

function renderAdditional(type: string | undefined): JSX.Element {
    switch (type) {
        case "edit":
            return <ProductColumnButton>edit</ProductColumnButton>
        case "offer":
            return <ProductColumnButton>Купить</ProductColumnButton>
        default:
            return <></>
    }
}

export function ProductCard(props: ProductCardProps): JSX.Element {
    return (
        <HorizontalFlexbox>
            <ProductColumnItem flex={2}>{props.productName}</ProductColumnItem>
            <ProductColumnItem>{props.startYear} - {props.endYear}</ProductColumnItem>
            <ProductColumnItem>{props.productNumber}</ProductColumnItem>
            <ProductColumnItem>{props.productType}</ProductColumnItem>
            <ProductColumnItem>{props.price}</ProductColumnItem>
            {renderAdditional(props.additional)}
        </HorizontalFlexbox>
    );
}