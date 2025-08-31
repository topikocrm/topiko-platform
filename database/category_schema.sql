-- =============================================
-- CATEGORY SYSTEM DATABASE SCHEMA
-- =============================================

-- 1. CATEGORIES TABLE (Level 1 - Main Categories)
CREATE TABLE IF NOT EXISTS categories (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name_en VARCHAR(100) NOT NULL,
    name_hi VARCHAR(100),
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    icon_url TEXT,
    image_url TEXT,
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    is_featured BOOLEAN DEFAULT false,
    meta_title VARCHAR(160),
    meta_description VARCHAR(320),
    meta_keywords TEXT[],
    color_scheme JSONB, -- {"primary": "#hex", "secondary": "#hex"}
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    created_by UUID,
    updated_by UUID
);

-- 2. SUBCATEGORIES TABLE (Level 2)
CREATE TABLE IF NOT EXISTS subcategories (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    category_id UUID NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
    name_en VARCHAR(100) NOT NULL,
    name_hi VARCHAR(100),
    slug VARCHAR(100) NOT NULL,
    description TEXT,
    image_url TEXT,
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    is_featured BOOLEAN DEFAULT false,
    target_audience VARCHAR(20) CHECK (target_audience IN ('men', 'women', 'kids', 'unisex', 'all')),
    age_group VARCHAR(20), -- 'baby', 'toddler', 'kids', 'teens', 'adults', 'seniors'
    price_range VARCHAR(20) CHECK (price_range IN ('budget', 'mid', 'premium', 'luxury')),
    commission_rate DECIMAL(5,2) DEFAULT 10.00, -- Platform commission percentage
    meta_title VARCHAR(160),
    meta_description VARCHAR(320),
    meta_keywords TEXT[],
    attributes JSONB, -- Flexible attributes specific to subcategory
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(category_id, slug)
);

-- 3. PRODUCTS TABLE (Level 3)
CREATE TABLE IF NOT EXISTS products (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    subcategory_id UUID NOT NULL REFERENCES subcategories(id) ON DELETE CASCADE,
    vendor_id UUID, -- Reference to vendor/merchant
    sku VARCHAR(100) UNIQUE,
    name_en VARCHAR(255) NOT NULL,
    name_hi VARCHAR(255),
    slug VARCHAR(255) NOT NULL,
    brand VARCHAR(100),
    description TEXT,
    short_description VARCHAR(500),
    base_price DECIMAL(10,2),
    sale_price DECIMAL(10,2),
    cost_price DECIMAL(10,2),
    currency VARCHAR(3) DEFAULT 'INR',
    unit VARCHAR(20), -- 'piece', 'kg', 'gram', 'liter', 'dozen', etc.
    min_order_quantity INTEGER DEFAULT 1,
    max_order_quantity INTEGER,
    stock_quantity INTEGER DEFAULT 0,
    stock_status VARCHAR(20) DEFAULT 'in_stock', -- 'in_stock', 'out_of_stock', 'limited'
    image_urls JSONB, -- Array of image URLs
    thumbnail_url TEXT,
    video_url TEXT,
    specifications JSONB, -- Product specifications as key-value pairs
    features TEXT[], -- Array of product features
    tags TEXT[], -- Array of searchable tags
    weight DECIMAL(10,3), -- In grams
    dimensions JSONB, -- {"length": 0, "width": 0, "height": 0, "unit": "cm"}
    is_active BOOLEAN DEFAULT true,
    is_featured BOOLEAN DEFAULT false,
    is_new BOOLEAN DEFAULT false,
    is_bestseller BOOLEAN DEFAULT false,
    popularity_score INTEGER DEFAULT 0,
    rating_average DECIMAL(2,1) DEFAULT 0.0,
    rating_count INTEGER DEFAULT 0,
    view_count INTEGER DEFAULT 0,
    sold_count INTEGER DEFAULT 0,
    return_policy VARCHAR(50), -- '7days', '15days', '30days', 'no_return'
    warranty_period VARCHAR(50), -- '6months', '1year', etc.
    hsn_code VARCHAR(20), -- HSN/SAC code for GST
    gst_rate DECIMAL(5,2), -- GST percentage
    meta_title VARCHAR(160),
    meta_description VARCHAR(320),
    meta_keywords TEXT[],
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    published_at TIMESTAMP WITH TIME ZONE,
    UNIQUE(subcategory_id, slug)
);

-- 4. CATEGORY LOCATIONS (Which categories are available in which cities)
CREATE TABLE IF NOT EXISTS category_locations (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    category_id UUID NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100),
    pincode VARCHAR(10),
    is_active BOOLEAN DEFAULT true,
    delivery_available BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(category_id, city, pincode)
);

-- 5. PRODUCT VARIANTS (For products with multiple options)
CREATE TABLE IF NOT EXISTS product_variants (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    variant_name VARCHAR(100), -- 'Red L', 'Blue XL', etc.
    variant_type VARCHAR(50), -- 'color', 'size', 'material', etc.
    variant_value VARCHAR(100),
    sku VARCHAR(100) UNIQUE,
    price_adjustment DECIMAL(10,2) DEFAULT 0, -- Added to base price
    stock_quantity INTEGER DEFAULT 0,
    image_url TEXT,
    attributes JSONB, -- Additional variant-specific attributes
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 6. CATEGORY BANNERS (For promotional content)
CREATE TABLE IF NOT EXISTS category_banners (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    category_id UUID REFERENCES categories(id) ON DELETE CASCADE,
    subcategory_id UUID REFERENCES subcategories(id) ON DELETE CASCADE,
    title VARCHAR(200),
    subtitle VARCHAR(300),
    image_url TEXT NOT NULL,
    mobile_image_url TEXT,
    link_url TEXT,
    button_text VARCHAR(50),
    banner_type VARCHAR(20) DEFAULT 'hero', -- 'hero', 'promo', 'sale', 'new'
    position VARCHAR(20) DEFAULT 'top', -- 'top', 'middle', 'bottom'
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    start_date TIMESTAMP WITH TIME ZONE,
    end_date TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 7. PRODUCT_REVIEWS (Customer reviews)
CREATE TABLE IF NOT EXISTS product_reviews (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    user_id UUID NOT NULL,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    title VARCHAR(200),
    comment TEXT,
    pros TEXT[],
    cons TEXT[],
    images JSONB, -- Array of review image URLs
    is_verified_purchase BOOLEAN DEFAULT false,
    is_featured BOOLEAN DEFAULT false,
    helpful_count INTEGER DEFAULT 0,
    unhelpful_count INTEGER DEFAULT 0,
    vendor_reply TEXT,
    vendor_reply_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 8. PRODUCT_QUESTIONS (Q&A for products)
CREATE TABLE IF NOT EXISTS product_questions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    user_id UUID NOT NULL,
    question TEXT NOT NULL,
    answer TEXT,
    answered_by UUID, -- User or vendor who answered
    is_answered BOOLEAN DEFAULT false,
    helpful_count INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    answered_at TIMESTAMP WITH TIME ZONE
);

-- =============================================
-- INDEXES FOR PERFORMANCE
-- =============================================

-- Categories indexes
CREATE INDEX idx_categories_slug ON categories(slug);
CREATE INDEX idx_categories_active ON categories(is_active) WHERE is_active = true;
CREATE INDEX idx_categories_featured ON categories(is_featured) WHERE is_featured = true;
CREATE INDEX idx_categories_display_order ON categories(display_order, id);

-- Subcategories indexes
CREATE INDEX idx_subcategories_category ON subcategories(category_id);
CREATE INDEX idx_subcategories_slug ON subcategories(category_id, slug);
CREATE INDEX idx_subcategories_active ON subcategories(is_active) WHERE is_active = true;
CREATE INDEX idx_subcategories_audience ON subcategories(target_audience) WHERE target_audience IS NOT NULL;
CREATE INDEX idx_subcategories_display_order ON subcategories(category_id, display_order, id);

-- Products indexes
CREATE INDEX idx_products_subcategory ON products(subcategory_id);
CREATE INDEX idx_products_vendor ON products(vendor_id) WHERE vendor_id IS NOT NULL;
CREATE INDEX idx_products_sku ON products(sku) WHERE sku IS NOT NULL;
CREATE INDEX idx_products_slug ON products(slug);
CREATE INDEX idx_products_active ON products(is_active) WHERE is_active = true;
CREATE INDEX idx_products_featured ON products(is_featured) WHERE is_featured = true;
CREATE INDEX idx_products_price ON products(sale_price, base_price);
CREATE INDEX idx_products_stock ON products(stock_status);
CREATE INDEX idx_products_popularity ON products(popularity_score DESC);
CREATE INDEX idx_products_rating ON products(rating_average DESC) WHERE rating_count > 0;
CREATE INDEX idx_products_search ON products USING gin(to_tsvector('english', name_en || ' ' || COALESCE(description, '')));
CREATE INDEX idx_products_tags ON products USING gin(tags);

-- Variants indexes
CREATE INDEX idx_variants_product ON product_variants(product_id);
CREATE INDEX idx_variants_active ON product_variants(is_active) WHERE is_active = true;

-- Location indexes
CREATE INDEX idx_category_locations_category ON category_locations(category_id);
CREATE INDEX idx_category_locations_city ON category_locations(city);
CREATE INDEX idx_category_locations_active ON category_locations(is_active) WHERE is_active = true;

-- Reviews indexes
CREATE INDEX idx_reviews_product ON product_reviews(product_id);
CREATE INDEX idx_reviews_rating ON product_reviews(product_id, rating);
CREATE INDEX idx_reviews_verified ON product_reviews(is_verified_purchase) WHERE is_verified_purchase = true;

-- =============================================
-- TRIGGERS FOR UPDATED_AT
-- =============================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_categories_updated_at BEFORE UPDATE ON categories
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_subcategories_updated_at BEFORE UPDATE ON subcategories
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON products
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_variants_updated_at BEFORE UPDATE ON product_variants
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =============================================
-- VIEWS FOR COMMON QUERIES
-- =============================================

-- Active products with category info
CREATE OR REPLACE VIEW v_active_products AS
SELECT 
    p.*,
    s.name_en as subcategory_name,
    s.slug as subcategory_slug,
    c.name_en as category_name,
    c.slug as category_slug
FROM products p
JOIN subcategories s ON p.subcategory_id = s.id
JOIN categories c ON s.category_id = c.id
WHERE p.is_active = true 
    AND s.is_active = true 
    AND c.is_active = true;

-- Category product counts
CREATE OR REPLACE VIEW v_category_product_counts AS
SELECT 
    c.id as category_id,
    c.name_en as category_name,
    s.id as subcategory_id,
    s.name_en as subcategory_name,
    COUNT(p.id) as product_count,
    COUNT(p.id) FILTER (WHERE p.stock_status = 'in_stock') as in_stock_count
FROM categories c
LEFT JOIN subcategories s ON c.id = s.category_id
LEFT JOIN products p ON s.id = p.subcategory_id AND p.is_active = true
WHERE c.is_active = true AND s.is_active = true
GROUP BY c.id, c.name_en, s.id, s.name_en;

-- =============================================
-- SAMPLE DATA INSERTION FUNCTIONS
-- =============================================

-- Function to add a category with subcategories
CREATE OR REPLACE FUNCTION add_category_with_subcategories(
    p_category_name VARCHAR,
    p_category_slug VARCHAR,
    p_subcategories JSONB
) RETURNS UUID AS $$
DECLARE
    v_category_id UUID;
    v_subcategory JSONB;
BEGIN
    -- Insert category
    INSERT INTO categories (name_en, slug)
    VALUES (p_category_name, p_category_slug)
    RETURNING id INTO v_category_id;
    
    -- Insert subcategories
    FOR v_subcategory IN SELECT * FROM jsonb_array_elements(p_subcategories)
    LOOP
        INSERT INTO subcategories (category_id, name_en, slug)
        VALUES (
            v_category_id,
            v_subcategory->>'name',
            v_subcategory->>'slug'
        );
    END LOOP;
    
    RETURN v_category_id;
END;
$$ LANGUAGE plpgsql;

-- =============================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- =============================================

ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE subcategories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Public read access for active categories
CREATE POLICY "Public can view active categories" ON categories
    FOR SELECT USING (is_active = true);

-- Public read access for active subcategories
CREATE POLICY "Public can view active subcategories" ON subcategories
    FOR SELECT USING (is_active = true);

-- Public read access for active products
CREATE POLICY "Public can view active products" ON products
    FOR SELECT USING (is_active = true);

-- Admin full access (adjust based on your auth system)
-- CREATE POLICY "Admins have full access to categories" ON categories
--     FOR ALL USING (auth.jwt() ->> 'role' = 'admin');

-- =============================================
-- GRANT PERMISSIONS
-- =============================================

-- Grant read access to authenticated users
GRANT SELECT ON categories TO authenticated;
GRANT SELECT ON subcategories TO authenticated;
GRANT SELECT ON products TO authenticated;
GRANT SELECT ON product_variants TO authenticated;
GRANT SELECT ON category_locations TO authenticated;
GRANT SELECT ON v_active_products TO authenticated;
GRANT SELECT ON v_category_product_counts TO authenticated;

-- Grant read access to anonymous users (for public browsing)
GRANT SELECT ON categories TO anon;
GRANT SELECT ON subcategories TO anon;
GRANT SELECT ON products TO anon;
GRANT SELECT ON product_variants TO anon;
GRANT SELECT ON category_locations TO anon;
GRANT SELECT ON v_active_products TO anon;
GRANT SELECT ON v_category_product_counts TO anon;