import ProductItem from './ProductItem';
import classes from './Products.module.css';


const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'My first React course',
    description: 'The first React course learning'
  },
  {
    id: 'p2',
    price: 12,
    title: 'My second React course',
    description: 'The second React course learning'
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        { DUMMY_PRODUCTS.map( (product) => (

          <ProductItem
          key = {product.id}
          id = { product.id }
          price = {product.price}
          title = { product.title}
          description = { product.description}
          />
        ))}
        
      </ul>
    </section>
  );
};

export default Products;
