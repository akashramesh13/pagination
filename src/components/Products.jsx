import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./Products.css";
import Pagination from "./Pagination";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/products?limit=500");
      const data = await response.json();
      setProducts(data.products);
    };
    fetchData();
  }, []);
  const PAGE_SIZE = 10;
  const totalNumberOfPages = Math.ceil(products.length / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const handlePageNumberClick = (n) => {
    setCurrentPage(n);
  };
  const handlePrevButtonClick = () => {
    setCurrentPage((prev) => prev - 1);
  };
  const handleNextButtonClick = () => {
    setCurrentPage((prev) => prev + 1);
  };
  return (
    <>
      <Pagination
        handleNextButtonClick={handleNextButtonClick}
        handlePrevButtonClick={handlePrevButtonClick}
        handlePageNumberClick={handlePageNumberClick}
        currentPage={currentPage}
        totalNumberOfPages={totalNumberOfPages}
      />
      <div className="products-container">
        {products.length ? (
          products.slice(start, end).map((product) => {
            return (
              <div>
                <ProductCard
                  id={product.id}
                  title={product.title}
                  image={product.thumbnail}
                ></ProductCard>
              </div>
            );
          })
        ) : (
          <span>No products found!</span>
        )}
      </div>
    </>
  );
};

export default Products;
