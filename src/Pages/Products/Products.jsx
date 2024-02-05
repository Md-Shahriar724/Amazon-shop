import { useLoaderData } from "react-router-dom";
import ProductCart from "./ProductCart";


const Products = () => {

    const {products} = useLoaderData();
    console.log(products)

    return (
        <div className="grid grid-cols-3 gap-6 ml-6 mr-6 my-8">
            {
                products?.map((product)=><ProductCart key={product.id} product={product}></ProductCart>)
            }
        </div>
    );
};

export default Products;