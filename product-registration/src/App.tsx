import { useState } from 'react';
import './App.css'
import { Card } from './components/card'
import { useProductData } from './hooks/useProductData'
import { CreateModal } from './components/create-modal/create-modal';

function App() {

  const { data } = useProductData();
  const [ isModalOpen, setIsModalOpen ] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
      <div className="container">
        <h1>Registro de Produtos</h1>
        <div className="card-grid">
          {data?.map(productData =>
            <Card
              price={productData.price}
              title={productData.title}
              image={productData.image}
            />
          )}
        </div>
        {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
        <button className="btn-secondary" onClick={handleOpenModal}>Adicionar produto</button>
      </div>
  )
}

export default App
