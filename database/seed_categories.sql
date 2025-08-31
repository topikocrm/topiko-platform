-- =============================================
-- SEED DATA FOR CATEGORY SYSTEM
-- =============================================

-- Clear existing data (be careful in production!)
-- TRUNCATE categories, subcategories, products CASCADE;

-- =============================================
-- 1. FASHION & APPAREL
-- =============================================

INSERT INTO categories (name_en, name_hi, slug, description, display_order, is_featured, meta_keywords)
VALUES 
('Fashion & Apparel', 'फैशन और परिधान', 'fashion-apparel', 'Clothing, footwear, and accessories for all', 1, true, 
 ARRAY['fashion', 'clothing', 'apparel', 'dress', 'shoes']);

-- Get the category ID
WITH fashion_cat AS (
    SELECT id FROM categories WHERE slug = 'fashion-apparel'
)
INSERT INTO subcategories (category_id, name_en, name_hi, slug, target_audience, display_order)
SELECT id, sub.* FROM fashion_cat,
(VALUES
    ('Men''s Clothing', 'पुरुषों के कपड़े', 'mens-clothing', 'men', 1),
    ('Women''s Clothing', 'महिलाओं के कपड़े', 'womens-clothing', 'women', 2),
    ('Kids'' Wear', 'बच्चों के कपड़े', 'kids-wear', 'kids', 3),
    ('Footwear', 'जूते', 'footwear', 'all', 4),
    ('Accessories', 'सहायक उपकरण', 'accessories', 'all', 5)
) AS sub(name_en, name_hi, slug, target_audience, display_order);

-- =============================================
-- 2. FOOD & BEVERAGES
-- =============================================

INSERT INTO categories (name_en, name_hi, slug, description, display_order, is_featured, meta_keywords)
VALUES 
('Food & Beverages', 'खाद्य और पेय', 'food-beverages', 'Restaurants, home food, sweets, and beverages', 2, true,
 ARRAY['food', 'restaurant', 'beverages', 'sweets', 'desserts']);

WITH food_cat AS (
    SELECT id FROM categories WHERE slug = 'food-beverages'
)
INSERT INTO subcategories (category_id, name_en, name_hi, slug, display_order)
SELECT id, sub.* FROM food_cat,
(VALUES
    ('Restaurants', 'रेस्टोरेंट', 'restaurants', 1),
    ('Home Cooked Food', 'घर का बना खाना', 'home-cooked-food', 2),
    ('Sweets & Desserts', 'मिठाई और डेसर्ट', 'sweets-desserts', 3),
    ('Beverages', 'पेय पदार्थ', 'beverages', 4),
    ('Bakery & Snacks', 'बेकरी और स्नैक्स', 'bakery-snacks', 5)
) AS sub(name_en, name_hi, slug, display_order);

-- =============================================
-- 3. GROCERY & ESSENTIALS
-- =============================================

INSERT INTO categories (name_en, name_hi, slug, description, display_order, is_featured, meta_keywords)
VALUES 
('Grocery & Essentials', 'किराना और आवश्यक वस्तुएं', 'grocery-essentials', 'Daily needs, fresh produce, and household items', 3, true,
 ARRAY['grocery', 'vegetables', 'fruits', 'staples', 'household']);

WITH grocery_cat AS (
    SELECT id FROM categories WHERE slug = 'grocery-essentials'
)
INSERT INTO subcategories (category_id, name_en, name_hi, slug, display_order)
SELECT id, sub.* FROM grocery_cat,
(VALUES
    ('Fresh Produce', 'ताजा उत्पाद', 'fresh-produce', 1),
    ('Staples', 'मुख्य खाद्य', 'staples', 2),
    ('Dairy Products', 'डेयरी उत्पाद', 'dairy-products', 3),
    ('Personal Care', 'व्यक्तिगत देखभाल', 'personal-care', 4),
    ('Household Items', 'घरेलू सामान', 'household-items', 5)
) AS sub(name_en, name_hi, slug, display_order);

-- =============================================
-- 4. ELECTRONICS & APPLIANCES
-- =============================================

INSERT INTO categories (name_en, name_hi, slug, description, display_order, is_featured, meta_keywords)
VALUES 
('Electronics & Appliances', 'इलेक्ट्रॉनिक्स और उपकरण', 'electronics-appliances', 'Gadgets, appliances, and electronic items', 4, true,
 ARRAY['electronics', 'mobile', 'laptop', 'appliances', 'gadgets']);

WITH electronics_cat AS (
    SELECT id FROM categories WHERE slug = 'electronics-appliances'
)
INSERT INTO subcategories (category_id, name_en, name_hi, slug, display_order)
SELECT id, sub.* FROM electronics_cat,
(VALUES
    ('Mobile & Accessories', 'मोबाइल और एक्सेसरीज', 'mobile-accessories', 1),
    ('Computers & Laptops', 'कंप्यूटर और लैपटॉप', 'computers-laptops', 2),
    ('Home Appliances', 'घरेलू उपकरण', 'home-appliances', 3),
    ('Kitchen Appliances', 'रसोई उपकरण', 'kitchen-appliances', 4),
    ('Personal Electronics', 'व्यक्तिगत इलेक्ट्रॉनिक्स', 'personal-electronics', 5)
) AS sub(name_en, name_hi, slug, display_order);

-- =============================================
-- 5. HOME & FURNITURE
-- =============================================

INSERT INTO categories (name_en, name_hi, slug, description, display_order, meta_keywords)
VALUES 
('Home & Furniture', 'घर और फर्नीचर', 'home-furniture', 'Furniture, decor, and home essentials', 5, false,
 ARRAY['furniture', 'home decor', 'bedroom', 'kitchen', 'living room']);

WITH home_cat AS (
    SELECT id FROM categories WHERE slug = 'home-furniture'
)
INSERT INTO subcategories (category_id, name_en, name_hi, slug, display_order)
SELECT id, sub.* FROM home_cat,
(VALUES
    ('Furniture', 'फर्नीचर', 'furniture', 1),
    ('Home Decor', 'घर की सजावट', 'home-decor', 2),
    ('Kitchen & Dining', 'रसोई और भोजन', 'kitchen-dining', 3),
    ('Bedroom & Bath', 'शयनकक्ष और स्नान', 'bedroom-bath', 4)
) AS sub(name_en, name_hi, slug, display_order);

-- =============================================
-- 6. BEAUTY & WELLNESS
-- =============================================

INSERT INTO categories (name_en, name_hi, slug, description, display_order, meta_keywords)
VALUES 
('Beauty & Wellness', 'सौंदर्य और कल्याण', 'beauty-wellness', 'Salons, spas, cosmetics, and health services', 6, true,
 ARRAY['beauty', 'salon', 'spa', 'cosmetics', 'wellness', 'health']);

WITH beauty_cat AS (
    SELECT id FROM categories WHERE slug = 'beauty-wellness'
)
INSERT INTO subcategories (category_id, name_en, name_hi, slug, display_order)
SELECT id, sub.* FROM beauty_cat,
(VALUES
    ('Salons & Spas', 'सैलून और स्पा', 'salons-spas', 1),
    ('Cosmetics', 'सौंदर्य प्रसाधन', 'cosmetics', 2),
    ('Skincare', 'त्वचा की देखभाल', 'skincare', 3),
    ('Haircare', 'बालों की देखभाल', 'haircare', 4),
    ('Health & Fitness', 'स्वास्थ्य और फिटनेस', 'health-fitness', 5)
) AS sub(name_en, name_hi, slug, display_order);

-- =============================================
-- 7. SERVICES
-- =============================================

INSERT INTO categories (name_en, name_hi, slug, description, display_order, meta_keywords)
VALUES 
('Services', 'सेवाएं', 'services', 'Professional, home, education, and event services', 7, false,
 ARRAY['services', 'repair', 'education', 'events', 'professional']);

WITH services_cat AS (
    SELECT id FROM categories WHERE slug = 'services'
)
INSERT INTO subcategories (category_id, name_en, name_hi, slug, display_order)
SELECT id, sub.* FROM services_cat,
(VALUES
    ('Professional Services', 'व्यावसायिक सेवाएं', 'professional-services', 1),
    ('Home Services', 'घरेलू सेवाएं', 'home-services', 2),
    ('Education & Training', 'शिक्षा और प्रशिक्षण', 'education-training', 3),
    ('Event Services', 'कार्यक्रम सेवाएं', 'event-services', 4),
    ('Travel & Transport', 'यात्रा और परिवहन', 'travel-transport', 5)
) AS sub(name_en, name_hi, slug, display_order);

-- =============================================
-- SAMPLE PRODUCTS FOR MEN'S CLOTHING
-- =============================================

WITH mens_clothing AS (
    SELECT id FROM subcategories WHERE slug = 'mens-clothing'
)
INSERT INTO products (subcategory_id, name_en, name_hi, slug, brand, base_price, sale_price, stock_quantity, tags, features)
SELECT id, prod.* FROM mens_clothing,
(VALUES
    ('Formal Cotton Shirt', 'औपचारिक सूती शर्ट', 'formal-cotton-shirt', 'Arrow', 1499.00, 1299.00, 50, 
     ARRAY['shirt', 'formal', 'cotton', 'office'], 
     ARRAY['100% Cotton', 'Regular Fit', 'Easy Iron', 'Full Sleeves']),
    
    ('Casual T-Shirt', 'कैजुअल टी-शर्ट', 'casual-tshirt', 'Puma', 799.00, 699.00, 100,
     ARRAY['tshirt', 'casual', 'cotton', 'sports'],
     ARRAY['Cotton Blend', 'Round Neck', 'Comfortable Fit', 'Machine Washable']),
    
    ('Slim Fit Jeans', 'स्लिम फिट जींस', 'slim-fit-jeans', 'Levis', 2499.00, 2199.00, 75,
     ARRAY['jeans', 'denim', 'casual', 'slim'],
     ARRAY['Stretchable Denim', 'Slim Fit', '5 Pockets', 'Fade Resistant']),
    
    ('Cotton Kurta', 'सूती कुर्ता', 'cotton-kurta', 'Fabindia', 1299.00, 1099.00, 60,
     ARRAY['kurta', 'ethnic', 'cotton', 'traditional'],
     ARRAY['Pure Cotton', 'Comfortable Fit', 'Hand Wash', 'Ethnic Wear'])
) AS prod(name_en, name_hi, slug, brand, base_price, sale_price, stock_quantity, tags, features);

-- =============================================
-- SAMPLE PRODUCTS FOR RESTAURANTS
-- =============================================

WITH restaurants AS (
    SELECT id FROM subcategories WHERE slug = 'restaurants'
)
INSERT INTO products (subcategory_id, name_en, name_hi, slug, base_price, sale_price, unit, tags, features)
SELECT id, prod.* FROM restaurants,
(VALUES
    ('Chicken Biryani', 'चिकन बिरयानी', 'chicken-biryani', 250.00, 225.00, 'plate',
     ARRAY['biryani', 'rice', 'chicken', 'north-indian'],
     ARRAY['Basmati Rice', 'Tender Chicken', 'Aromatic Spices', 'Serves 1']),
    
    ('Masala Dosa', 'मसाला डोसा', 'masala-dosa', 80.00, 75.00, 'plate',
     ARRAY['dosa', 'south-indian', 'breakfast', 'vegetarian'],
     ARRAY['Crispy Dosa', 'Potato Filling', 'Sambar & Chutney', 'Pure Veg']),
    
    ('Paneer Butter Masala', 'पनीर बटर मसाला', 'paneer-butter-masala', 180.00, 160.00, 'plate',
     ARRAY['paneer', 'curry', 'north-indian', 'vegetarian'],
     ARRAY['Fresh Paneer', 'Rich Gravy', 'Mild Spices', 'Serves 1'])
) AS prod(name_en, name_hi, slug, base_price, sale_price, unit, tags, features);

-- =============================================
-- SAMPLE PRODUCTS FOR FRESH PRODUCE
-- =============================================

WITH fresh_produce AS (
    SELECT id FROM subcategories WHERE slug = 'fresh-produce'
)
INSERT INTO products (subcategory_id, name_en, name_hi, slug, base_price, sale_price, unit, stock_quantity, tags, features)
SELECT id, prod.* FROM fresh_produce,
(VALUES
    ('Fresh Tomatoes', 'ताजा टमाटर', 'fresh-tomatoes', 40.00, 35.00, 'kg', 100,
     ARRAY['tomato', 'vegetable', 'fresh', 'organic'],
     ARRAY['Farm Fresh', 'Pesticide Free', 'Rich in Vitamins', 'Daily Stock']),
    
    ('Bananas', 'केले', 'bananas', 30.00, 28.00, 'dozen', 200,
     ARRAY['banana', 'fruit', 'fresh', 'healthy'],
     ARRAY['Sweet & Ripe', 'High in Potassium', 'Natural Energy', 'No Chemicals']),
    
    ('Fresh Spinach', 'ताजा पालक', 'fresh-spinach', 25.00, 22.00, 'bunch', 50,
     ARRAY['spinach', 'leafy', 'vegetable', 'iron'],
     ARRAY['Organic', 'Iron Rich', 'Fresh Daily', 'Clean & Washed'])
) AS prod(name_en, name_hi, slug, base_price, sale_price, unit, stock_quantity, tags, features);

-- =============================================
-- ADD SAMPLE CATEGORY LOCATIONS
-- =============================================

INSERT INTO category_locations (category_id, city, state, pincode, delivery_available)
SELECT c.id, loc.*
FROM categories c,
(VALUES
    ('Mumbai', 'Maharashtra', '400001', true),
    ('Delhi', 'Delhi', '110001', true),
    ('Bangalore', 'Karnataka', '560001', true),
    ('Chennai', 'Tamil Nadu', '600001', true),
    ('Hyderabad', 'Telangana', '500001', true),
    ('Pune', 'Maharashtra', '411001', true),
    ('Kolkata', 'West Bengal', '700001', true),
    ('Ahmedabad', 'Gujarat', '380001', true)
) AS loc(city, state, pincode, delivery_available);

-- =============================================
-- CREATE SOME PRODUCT VARIANTS
-- =============================================

-- Add size variants for shirts
WITH shirt_product AS (
    SELECT id FROM products WHERE slug = 'formal-cotton-shirt'
)
INSERT INTO product_variants (product_id, variant_name, variant_type, variant_value, price_adjustment, stock_quantity)
SELECT id, var.* FROM shirt_product,
(VALUES
    ('Small', 'size', 'S', 0, 10),
    ('Medium', 'size', 'M', 0, 15),
    ('Large', 'size', 'L', 0, 15),
    ('Extra Large', 'size', 'XL', 100, 10)
) AS var(variant_name, variant_type, variant_value, price_adjustment, stock_quantity);

-- Add color variants for t-shirts
WITH tshirt_product AS (
    SELECT id FROM products WHERE slug = 'casual-tshirt'
)
INSERT INTO product_variants (product_id, variant_name, variant_type, variant_value, price_adjustment, stock_quantity)
SELECT id, var.* FROM tshirt_product,
(VALUES
    ('Black', 'color', 'black', 0, 25),
    ('White', 'color', 'white', 0, 25),
    ('Navy Blue', 'color', 'navy', 50, 25),
    ('Red', 'color', 'red', 50, 25)
) AS var(variant_name, variant_type, variant_value, price_adjustment, stock_quantity);

-- =============================================
-- UPDATE PRODUCT COUNTS AND SCORES
-- =============================================

-- Update popularity scores based on some logic
UPDATE products SET 
    popularity_score = FLOOR(RANDOM() * 100),
    view_count = FLOOR(RANDOM() * 1000),
    sold_count = FLOOR(RANDOM() * 500),
    rating_average = 3.5 + (RANDOM() * 1.5),
    rating_count = FLOOR(RANDOM() * 100)
WHERE is_active = true;

-- Mark some products as featured
UPDATE products SET is_featured = true
WHERE slug IN ('formal-cotton-shirt', 'chicken-biryani', 'fresh-tomatoes');

-- Mark some products as bestsellers
UPDATE products SET is_bestseller = true
WHERE slug IN ('casual-tshirt', 'masala-dosa', 'bananas');

-- =============================================
-- VERIFY DATA
-- =============================================

-- Check category counts
SELECT 
    'Categories' as entity, 
    COUNT(*) as total,
    COUNT(*) FILTER (WHERE is_active = true) as active,
    COUNT(*) FILTER (WHERE is_featured = true) as featured
FROM categories
UNION ALL
SELECT 
    'Subcategories', 
    COUNT(*),
    COUNT(*) FILTER (WHERE is_active = true),
    COUNT(*) FILTER (WHERE is_featured = true)
FROM subcategories
UNION ALL
SELECT 
    'Products', 
    COUNT(*),
    COUNT(*) FILTER (WHERE is_active = true),
    COUNT(*) FILTER (WHERE is_featured = true)
FROM products
UNION ALL
SELECT 
    'Product Variants', 
    COUNT(*),
    COUNT(*) FILTER (WHERE is_active = true),
    0
FROM product_variants
UNION ALL
SELECT 
    'Category Locations', 
    COUNT(*),
    COUNT(*) FILTER (WHERE is_active = true),
    0
FROM category_locations;

-- Display category hierarchy
SELECT 
    c.name_en as category,
    s.name_en as subcategory,
    COUNT(p.id) as product_count
FROM categories c
LEFT JOIN subcategories s ON c.id = s.category_id
LEFT JOIN products p ON s.id = p.subcategory_id
WHERE c.is_active = true AND s.is_active = true
GROUP BY c.name_en, s.name_en, c.display_order, s.display_order
ORDER BY c.display_order, s.display_order;