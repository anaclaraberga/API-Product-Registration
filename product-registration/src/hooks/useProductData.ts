import axios, { AxiosPromise } from "axios";
import { ProductData } from "../interface/ProductData";
import { useQuery } from "@tanstack/react-query";

const API_URL = "https://localhost:8080";

interface IUseProductData {
    data: ProductData[]
}

const fetchData = async (): AxiosPromise<ProductData[]> => {
    const response = axios.get(API_URL + '/product');
    return response;
}

export function useProductData(): IUseProductData {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['product-data'],
        retry: 2
    })

    return {
        data: query.data?.data || []
    }
}