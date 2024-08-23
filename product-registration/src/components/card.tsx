import "./card.css";

interface CardProps {
    price: number,
    title: string,
    image: string
}

export function Card({ price, image, title } : CardProps) {

    return(
        <div className="card">
            <img src={image}/>
            <p className="cardText">
                <p>{title}</p>
                <p className="price">R$ {Number(price).toFixed(2)}</p>
                <button className="cardButton" onClick={() => { alert('Cartão recusado: pobre') }}>Compre agora!</button>
            </p>
        </div>
    )
}