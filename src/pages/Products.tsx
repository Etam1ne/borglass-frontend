import { useProducts } from "../hooks/useProducts";
import { VerticalFlexbox, HorizontalFlexbox } from "../components/Box.style";
import { TextInput } from "../components/Inputs.style";
import { ProductCard, ProductCardProps } from "../components/Products/ProductCard";
import { ProductsMain, Filters, ProductsTable, ProductColumnItem } from "../components/Products/Products.style";
import { useEffect, useState } from "react";

export function Products(): JSX.Element {

    const [brand, setBrand] = useState<string>("");
    const [model, setModel] = useState<string>("");
    const [year, setYear] = useState<number>(0);
    const [type, setType] = useState<string>("");
    const [filteredProducts, setFilteredProducts] = useState<ProductCardProps[]>([]);

    const [products, loading] = useProducts();

    useEffect(() => {
        setFilteredProducts(products.filter(item => {
            if 
            (
                item.productName.search(new RegExp(model, "i")) >= 0 &&
                item.productName.search(new RegExp(brand, "i")) >= 0 &&
                ((item.startYear <= year && year <= item.endYear) || year === 0)
            ) {
                return true;
            };
            return false;
        }))
    }, [products, brand, model, year, type])

    return (
        <ProductsMain>

            <Filters>
                <VerticalFlexbox>
                    <label htmlFor="fastSearch">Быстрый поиск:</label>
                    <TextInput id="fastSearch" placeholder="Acura"/>
                </VerticalFlexbox>

                <VerticalFlexbox>
                    <label htmlFor="brand">Марка</label>
                    <TextInput id="brand" placeholder="Acura" onChange={e => setBrand(e.target.value)}/>
                    <label htmlFor="model">Модель</label>
                    <TextInput id="model" placeholder="Acura" onChange={e => setModel(e.target.value)}/>
                    <label htmlFor="year">Год выпуска</label>
                    <TextInput id="year" placeholder="Acura" 
                    onChange={e => {
                        if (isNaN(+e.target.value)) return
                        setYear(+e.target.value)
                        }}/>
                    <label htmlFor="type">Тип стекла</label>
                    <TextInput id="type" placeholder="Acura" onChange={e => setType(e.target.value)}/>
                </VerticalFlexbox>
            </Filters>

            <ProductsTable>
                <HorizontalFlexbox>
                    <ProductColumnItem flex={2}>Наименование</ProductColumnItem>
                    <ProductColumnItem flex={1}>Год</ProductColumnItem>
                    <ProductColumnItem flex={1}>Артикул</ProductColumnItem>
                    <ProductColumnItem flex={1}>Тип</ProductColumnItem>
                    <ProductColumnItem flex={1}>Цена</ProductColumnItem>
                </HorizontalFlexbox>

                {
                loading ? 
                <>
                </> 
                :
                filteredProducts.map((data, index) => (
                    <ProductCard
                    key={index}
                    productName={data.productName}
                    startYear={data.startYear}
                    endYear={data.endYear}
                    productNumber={data.productNumber}
                    productType={data.productType}
                    price={data.price}
                    />
                ))}

            </ProductsTable>
                
        </ProductsMain>
    );
}