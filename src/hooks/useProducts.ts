import { useEffect, useState } from "react";
import axios from "axios";
import { ProductCardProps } from "../components/Products/ProductCard";

export function useProducts(): [ProductCardProps[], boolean] {
    const [products, setProducts] = useState<ProductCardProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        axios('http://localhost:5000/products')
        .then(res => {
            setLoading(false);
            setProducts(res.data);
        })
        .catch(err => {
            console.error(err);
        })
    }, []);

    return [products, loading];
}