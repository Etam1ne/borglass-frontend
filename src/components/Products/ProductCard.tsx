import { HorizontalFlexbox } from "../Box.style";
import { ProductColumnItem } from "./Products.style";

export interface ProductCardProps {
    productName: string;
    startYear: number;
    endYear: number;
    productNumber: string;
    productType: string;
    price: number;
}

export function ProductCard(props: ProductCardProps): JSX.Element {
    return (
        <HorizontalFlexbox>
            <ProductColumnItem flex={2}>{props.productName}</ProductColumnItem>
            <ProductColumnItem flex={1}>{props.startYear} - {props.endYear}</ProductColumnItem>
            <ProductColumnItem flex={1}>{props.productNumber}</ProductColumnItem>
            <ProductColumnItem flex={1}>{props.productType}</ProductColumnItem>
            <ProductColumnItem flex={1}>{props.price}</ProductColumnItem>
        </HorizontalFlexbox>
    );
}