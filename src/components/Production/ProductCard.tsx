import { HorizontalFlexbox } from "../Box.style";
import { ProductColumnItem } from "./Production.style";

interface ProductCardProps {
    photo: string;
    name: string;
    year: string;
    itemNumber: string;
    glassType: string;
    price: number;
}

export function ProductCard(props: ProductCardProps): JSX.Element {
    return (
        <HorizontalFlexbox>
            <ProductColumnItem flex={1}>
                <img src={props.photo} alt={props.name} />
            </ProductColumnItem>
            <ProductColumnItem flex={2}>{props.name}</ProductColumnItem>
            <ProductColumnItem flex={1}>{props.year}</ProductColumnItem>
            <ProductColumnItem flex={1}>{props.itemNumber}</ProductColumnItem>
            <ProductColumnItem flex={1}>{props.glassType}</ProductColumnItem>
            <ProductColumnItem flex={1}>{props.price}</ProductColumnItem>
        </HorizontalFlexbox>
    );
}