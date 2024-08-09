import './App.css'
import { Card } from './components/card'
import { useProductData } from './hooks/useProductData'

function App() {

  const { data } = useProductData();

  return (
      <div className="container">
        <h1>Registro de Produtos</h1>
        <div className="card-grid">
          {data && data.length > 0 && data.map(productData =>
            <Card
              price={productData.price}
              title={productData.title}
              image={productData.image}
            />
          )}
        </div>
      </div>
  )
}

export default App
