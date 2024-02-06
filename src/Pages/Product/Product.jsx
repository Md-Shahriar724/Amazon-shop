import PropTypes from "prop-types";
import { useLoaderData } from "react-router-dom";

const Product = () => {
  const product = useLoaderData();

  const { description, thumbnail, title, price } = product;

  return (
    <div>
        <section className="grid items-center justify-center mt-40">
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ">
        <img
          className="object-cover w-full rounded-t-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={thumbnail}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <p className="text-xl font-bold my-4">${price}</p>

          <button className="bg-purple-600 w-36 rounded-xl text-pink-50 p-2">
            Add to Cart
          </button>
        </div>
      </div>
      </section>
    </div>
  );
};

Product.propTypes = {};

export default Product;
