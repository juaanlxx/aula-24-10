import Imagem from './img/vejalimpezainsana.png'
import './App.css';
import ProductCard from './components/ProductCard';

function App() {
  return (
    <div className="App">
      <h1>Produtos de Limpeza</h1>
      <ProductCard titulo="Veja Limpeza Insana" desc="o Melhor Produto de Limpeza para a sua casa!" preco="R$ 19,90" caracteristicas="Altura: 27cm Comprimento: 5cm Largura: 10cm" imagem={Imagem} alt="teste"  />
    </div>
  );
}

export default App;
