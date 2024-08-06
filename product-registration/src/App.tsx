import './App.css'
import { Card } from './components/card';
import { ProductData } from './interface/ProductData';

function App() {

  const data: ProductData[] = [];

  return (
      <div className='container'>
        <h1>Registro de Produtos</h1>
        <div className='card-grid'>
          {data.map(productData => <Card
          price={productData.price}
          title={productData.title}
          image={productData.image}>
          </Card>)}
        </div>
      </div>
  )
}

export default App
