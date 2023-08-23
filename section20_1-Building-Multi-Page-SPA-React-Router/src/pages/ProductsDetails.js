import { useParams } from "react-router"; 

const ProductsDetails = () => {

    const params = useParams();

    console.log(params.productId);

    return<secton>
        <h1> Products Details</h1>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        {params.productId}

    </secton>
};

export default ProductsDetails;