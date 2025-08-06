const Card = ({ product }) => {
  return (
    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow hover:shadow-lg transition transform hover:scale-105">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 mx-auto object-contain mb-4"
      />
      <h2 className="font-semibold mb-2 text-gray-900 dark:text-white">
        {product.title}
      </h2>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        {product.description.slice(0, 100)}...
      </p>
      <div className="mt-4 font-bold text-blue-600 dark:text-yellow-400">
        ${product.price}
      </div>
    </div>
  );
};

export default Card;
