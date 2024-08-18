import { useEffect, useState } from "react";
import { useProductDataMutate } from "../../hooks/useProductDataMutate";
import { ProductData } from "../../interface/ProductData";

import "./modal.css";

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}   

interface ModalProps {
    closeModal(): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

export function CreateModal({ closeModal } : ModalProps){
const [title, setTitle] = useState("");
const [price, setPrice] = useState(0);
const [image, setImage] = useState("");
const { mutate, isSuccess, isPending } = useProductDataMutate();

const submit = () => {
    const productData: ProductData = {
        title,
        price,
        image
    }
    mutate(productData)
}

    useEffect(() => {
        if(!isSuccess) return 
            closeModal();
}, [isSuccess])

    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre um novo item no cardápio</h2>
                <form className="input-container">
                    <Input label="Nome do Produto" value={title}updateValue={setTitle}></Input>
                    <Input label="Valor em R$" value={price}updateValue={setPrice}></Input>
                    <Input label="Link da Imagem" value={image}updateValue={setImage}></Input>
                </form>
                <button onClick={submit} className="btn-secondary">
                    {isPending ? 'postando...' : 'postar'}
                </button>
            </div>
        </div>
    )
}