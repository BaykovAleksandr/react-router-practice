import { useParams } from 'react-router-dom';

function ProductDetails() {

const{productsId} = useParams

  return (
    <div>
      <p>ProductDetails Page</p>

      <p>Product param: {productsId}</p>
    </div>
  );
}

export default ProductDetails;
