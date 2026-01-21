import ProductList from './components/ProductList';
import Layout from './components/Layout';
import Summary from './components/Summary';

function App() {

  return (
    <Layout>
      <h1>AEM Product Showcase</h1>
      <div>
        <ProductList />
        <Summary />
      </div>
    </Layout>
  )
}

export default App
