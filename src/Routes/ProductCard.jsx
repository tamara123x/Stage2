import React from 'react';
import '../Style/ProductCard.css'; // Make sure to create this file for styling

const ProductCard = () => {
  return (
    <div className="product-card">
      <h1>Samsung Galaxy S24 Ultra 5G (12GB+512GB) Dual Sim</h1>
      <div className="product-details">
        <div className="image-section">
          <div className="top-left">image</div>
          <div className="top-bottom">
            <div>image</div>
            <div>image</div>
            <div>image</div>
          </div>
        </div>
        <div className="top-right">
          <div className="favorite">
            <button>
              {/* Add your love icon here */}
              <p>Add to Favourite</p>
            </button>
          </div>
          <div className="description">
            <p>
              The Samsung Galaxy S24 Ultra 5G features a 6.8-inch Dynamic AMOLED 2X display with a 120Hz refresh rate, powered by Snapdragon 8 Gen 3 or Exynos 2400 processors. It boasts a 200 MP quad-camera system, a durable titanium frame, IP68 rating, and a 5000 mAh battery. Running on Android 14 with One UI 6.1, it includes an enhanced S Pen for added functionality.
            </p>
            <div>
              <h2>Main Features</h2>
              <p>Network: 5G</p>
              <p>Display: 6.8 inches</p>
              <p>Camera (rear): 200 MP</p>
              <p>Battery: Li-Ion, 5000 mAh</p>
              <p>Operating System: Android 14</p>
              <p>Memory: 12GB+512GB</p>
            </div>
          </div>
          <div className="color-selection">
            <p>Color:</p>
            <div>image (black grey)</div>
            <div>image (silver)</div>
            <div>
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </div>
          </div>
        </div>
      </div>
      <div className="specifications">
        <p>Specifications</p>
        <div>
          <div className="spec-details">
            <p>Design and Build:</p>
            <ul>
              <li>Frame: Titanium, offering increased durability and resistance to corrosion and accidental bumps.</li>
              <li>Dimensions: 162.3 x 79 x 8.6 mm</li>
              <li>Weight: 233 grams</li>
              <li>Display Protection: Gorilla Glass Armor, the toughest glass protection yet from Corning.</li>
              <li>Water and Dust Resistance: IP68 rating.</li>
            </ul>
            <p>Display:</p>
            <ul>
              <li>Type: Dynamic AMOLED 2X</li>
              <li>Size: 6.8 inches</li>
              <li>Resolution: QHD+ (3200 x 1440)</li>
              <li>Refresh Rate: Up to 120Hz</li>
            </ul>
            <p>Performance:</p>
            <ul>
              <li>Processor: Qualcomm Snapdragon 8 Gen 3 or Exynos 2400 (varies by region)</li>
              <li>RAM: Options for 12GB or 16GB</li>
              <li>Storage: Options for 256GB, 512GB, or 1TB</li>
            </ul>
            <p>Camera System:</p>
            <ul>
              <li>Main Camera: Quad setup</li>
              <li>Primary Sensor: 200 MP</li>
              <li>Ultra-wide Sensor: 12 MP</li>
              <li>Telephoto Sensor: 10 MP (3x optical zoom)</li>
              <li>Periscope Telephoto Sensor: 10 MP (10x optical zoom)</li>
              <li>Front Camera: 40 MP</li>
            </ul>
            <p>Battery:</p>
            <ul>
              <li>Capacity: 5000 mAh</li>
              <li>Charging: 45W wired, 15W wireless, reverse wireless charging</li>
            </ul>
            <p>Software:</p>
            <ul>
              <li>Operating System: Android 14 with One UI 6.1</li>
            </ul>
            <p>Additional Features:</p>
            <ul>
              <li>S Pen: Included, with enhanced design and integration.</li>
              <li>Sustainability: Constructed with more recycled materials, and the packaging is made from 100% recycled paper.</li>
            </ul>
          </div>
          <div className="add-to-cart">
            <button>
              {/* Add your cart icon here */}
              <p>Add to Cart</p>
            </button>
          </div>
        </div>
      </div>
      <div className="recommended-section">
        <h2>Recommended</h2>
        <div className="recommended-cards">
          <div className="recommended-card">
            <div className="love-icon">{/* Add your love icon here */}</div>
            <div className="image">image</div>
            <div className="description">
              <p>Name</p>
              <p>Price</p>
              <p>Rating</p>
              <button>
                {/* Add your cart icon here */}
                <p>Add to Cart</p>
              </button>
            </div>
          </div>
          <div className="recommended-card">
            <div className="love-icon">{/* Add your love icon here */}</div>
            <div className="image">image</div>
            <div className="description">
              <p>Name</p>
              <p>Price</p>
              <p>Rating</p>
              <button>
                {/* Add your cart icon here */}
                <p>Add to Cart</p>
              </button>
            </div>
          </div>
          <div className="recommended-card">
            <div className="love-icon">{/* Add your love icon here */}</div>
            <div className="image">image</div>
            <div className="description">
              <p>Name</p>
              <p>Price</p>
              <p>Rating</p>
              <button>
                {/* Add your cart icon here */}
                <p>Add to Cart</p>
              </button>
            </div>
          </div>
          <div className="recommended-card">
            <div className="love-icon">{/* Add your love icon here */}</div>
            <div className="image">image</div>
            <div className="description">
              <p>Name</p>
              <p>Price</p>
              <p>Rating</p>
              <button>
                {/* Add your cart icon here */}
                <p>Add to Cart</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
