import { VerticalFlexbox, HorizontalFlexbox } from "../components/Box.style";
import { TextInput } from "../components/Inputs.style";
import { ProductCard } from "../components/Production/ProductCard";
import { ProductionMain, Filters, ProductsTable, ProductColumnItem } from "../components/Production/Production.style";
import glassImage from "../images/glass.png";

export function Production(): JSX.Element {
    return (
        <ProductionMain>

            <Filters>
                <VerticalFlexbox>
                    <label htmlFor="fastSearch">Быстрый поиск:</label>
                    <TextInput id="fastSearch" placeholder="Acura"/>
                </VerticalFlexbox>

                <VerticalFlexbox>
                    <label htmlFor="brand">Марка</label>
                    <TextInput id="brand" placeholder="Acura"/>
                    <label htmlFor="model">Модель</label>
                    <TextInput id="model" placeholder="Acura"/>
                    <label htmlFor="year">Год выпуска</label>
                    <TextInput id="year" placeholder="Acura"/>
                    <label htmlFor="type">Тип стекла</label>
                    <TextInput id="type" placeholder="Acura"/>
                </VerticalFlexbox>
            </Filters>

            <ProductsTable>
                <HorizontalFlexbox>
                    <ProductColumnItem flex={1}>Фото</ProductColumnItem>
                    <ProductColumnItem flex={2}>Наименование</ProductColumnItem>
                    <ProductColumnItem flex={1}>Год</ProductColumnItem>
                    <ProductColumnItem flex={1}>Артикул</ProductColumnItem>
                    <ProductColumnItem flex={1}>Тип</ProductColumnItem>
                    <ProductColumnItem flex={1}>Цена</ProductColumnItem>
                </HorizontalFlexbox>

                {products.map((data, index) => (
                    <ProductCard
                    key={index}
                    photo={data.photo}
                    name={data.name}
                    year={data.year}
                    itemNumber={data.itemNumber}
                    glassType={data.glassType}
                    price={data.price}
                    />
                ))}

            </ProductsTable>
                
        </ProductionMain>
    );
}

const products = [
    {
        photo: glassImage,
        name: "Audi 'A6' II (C5) 5D Avant ",
        year: "1997-2004",
        itemNumber: "AUDT0048",
        glassType: "ветровое",
        price: 5700
    }
]