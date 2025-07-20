import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../Page/Context';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => {
        setProduct(null);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="product-details loading">Loading...</div>;
  if (!product) return <div className="product-details error">Product not found.</div>;

  return (
    <div className="product-details">
      <img src={product.image} alt={product.title} style={{ maxWidth: 300, height: 300, objectFit: 'contain' }} />
      <div className="details">
        <h2>{product.title}</h2>
        <p><strong>Category:</strong> {product.category}</p>
        <p>{product.description}</p>
        <h3>${product.price}</h3>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails; 