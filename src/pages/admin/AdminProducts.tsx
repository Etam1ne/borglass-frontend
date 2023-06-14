import { ProductCard } from "../../components/Products/ProductCard";
import { useProducts } from "../../hooks/useProducts";

export function AdminProducts(): JSX.Element {
    const [products, loading] = useProducts();

    return (
        <>
            <h1>Products</h1>
            {
            loading ? 
            <>
            </> 
            :
            products.map((data, index) => (
                <ProductCard
                key={index}
                productName={data.productName}
                startYear={data.startYear}
                endYear={data.endYear}
                productNumber={data.productNumber}
                productType={data.productType}
                price={data.price}
                additional="edit"
                />
            ))}
        </>
    );
}