import React, { useState, useEffect , useContext} from 'react';
import axios from 'axios';
import { CartContext } from "../Page/Context";
import { useNavigate } from 'react-router-dom';
function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state
    const [categories, setCategories] = useState([]);
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('all');
    const { addToCart } = useContext(CartContext);
    const navigate = useNavigate();
  
    useEffect(() => {
      axios.get('https://fakestoreapi.com/products')
        .then((res) => {
          setProducts(res.data);
          setLoading(false);
        })
        .catch(() => {
          alert("Error fetching Products");
          setLoading(false);
        });
      axios.get('https://fakestoreapi.com/products/categories')
        .then(res => setCategories(res.data));
    }, []);

    const filtered = products.filter(product => {
      const matchesCategory = category === 'all' || product.category === category;
      const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  
    return (
      <>
        <div className="product-filters">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="product-search"
          />
          <select value={category} onChange={e => setCategory(e.target.value)} className="product-category">
            <option value="all">All Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
            ))}
          </select>
        </div>
        <div className="product-list">
          {loading
            ? Array(8).fill().map((_, index) => (
                <div key={index} className="product-card loading">
                  <div className="img-skeleton"></div>
                  <div className="text-skeleton short"></div>
                  <div className="text-skeleton long"></div>
                  <div className="button-skeleton"></div>
                </div>
              ))
            : filtered.map((product) => (
                <div key={product.id} className="product-card">
                  <img src={product.image} alt={product.title} style={{cursor:'pointer'}} onClick={() => navigate(`/product/${product.id}`)} />
                  <h3 title={product.title} style={{cursor:'pointer'}} onClick={() => navigate(`/product/${product.id}`)}>{product.title}</h3>
                  <p>${product.price}</p>
                  <button onClick={() => addToCart(product)}>Add to Cart</button> 
                </div>
              ))
          }
        </div>
      </>
    );
  }
  
  export default ProductList;