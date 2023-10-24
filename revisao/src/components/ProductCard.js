import React from 'react'; 
import '../ProductCard.css'

const ProductCard = ({titulo, imagem, desc, preco, caracteristicas}) => {
    return(
        <div className="card">
            <h2 className='titulo'>{titulo}</h2>
            <img src={imagem} alt="veja" className='imagem'/>
            <p className='descricao'>{desc}</p>
            <h3 className='preco'>{preco}</h3>
            <p className='caracteristicas'>{caracteristicas}</p>

        </div>
    )
}

export default ProductCard;
