import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaRegStar, FaHeart } from 'react-icons/fa';

export default function Wishlist() {
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleRemoveFromWishlist = (productId) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== productId);
    setWishlist(updatedWishlist);
  };

  const handleAddToCart = (product, e) => {
    e.stopPropagation(); // Prevent unwanted navigation
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    alert(`${product.name} added to cart!`);
  };

  const handleCardClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <section className="min-h-screen py-4 px-3 font-sans">
      <h1 className="text-3xl font-bold text-orange-500 text-center mb-6 font-serif">
        Your Wishlist
      </h1>
      <div className="container mx-auto py-2 px-4 sm:py-20 sm:px-14">
        {wishlist.length === 0 ? (
          <p className="text-center text-gray-600 font-sans">
            Your wishlist is empty. Start adding your favorite products!
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 rounded-3xl">
            {wishlist.map((product) => (
              <div
                key={product.id}
                className="bg-white min-w-32 shadow-md rounded-3xl p-4 hover:shadow-2xl hover:scale-105 border-2 border-orange-100 hover:border-orange-400 transition-transform h-auto relative cursor-pointer"
                onClick={() => handleCardClick(product.id)}
              >
                <div className="relative w-full aspect-w-1 aspect-h-1 rounded-md overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <button
                    className="absolute top-1 right-1 rounded-full p-1 text-red-500 hover:text-red-700 transition"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent navigation on remove click
                      handleRemoveFromWishlist(product.id);
                    }}
                  >
                    <FaHeart size={15} />
                  </button>
                </div>

                <h3 className="mt-2 text-base font-semibold text-gray-800 font-serif">
                  {product.name}
                </h3>
                <p className="text-gray-600 font-sans">${product.price.toFixed(2)}</p>
                <p className="text-gray-500 text-xs mb-2 font-sans">
                  {product.description}
                </p>

                <div className="flex items-center mb-2">
                  {Array(5)
                    .fill()
                    .map((_, i) => (
                      <span key={i}>
                        {i < Math.floor(product.rating) ? (
                          <FaStar className="text-yellow-500" />
                        ) : i < product.rating ? (
                          <FaStarHalfAlt className="text-yellow-500" />
                        ) : (
                          <FaRegStar className="text-yellow-500" />
                        )}
                      </span>
                    ))}
                </div>

                <button
                  className="absolute bottom-2 right-2 bg-orange-500 text-white text-[10px] font-medium px-1 py-1 rounded-lg hover:bg-white hover:text-orange-500 transition"
                  onClick={(e) => handleAddToCart(product, e)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
