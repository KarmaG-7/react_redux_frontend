import React from "react";
import { useSelector } from "react-redux";

function SingleProduct() {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((product) => {
    const { title, price, category, image, id } = product;
    return (
      <div className="singleProduct" key={id}>
        <div className="image">
          <img src={image} alt={title} />
        </div>
        <div className="content">
          <p>{title}</p>
          <p>$ {price}</p>
          <p>{category}</p>
        </div>
      </div>
    );
  });
  return <div className="all-the-products">{renderList}</div>;
}

export default SingleProduct;
