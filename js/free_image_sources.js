/* ========================================
   FREE IMAGE SOURCES - NO SUBSCRIPTION NEEDED
   Using Pexels, Pixabay, and other free sources
   ======================================== */

// Free image CDNs that work without authentication
const FREE_IMAGE_SOURCES = {
    'kurta': [
        'https://cdn.pixabay.com/photo/2020/11/08/11/22/man-5723449_640.jpg',
        'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?w=400',
        'https://cdn.shopify.com/s/files/1/0341/4805/7228/products/kurta-1.jpg?v=1616425388&width=400',
        'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg'
    ],
    'saree': [
        'https://cdn.pixabay.com/photo/2015/03/09/18/34/woman-666185_640.jpg',
        'https://images.pexels.com/photos/2403568/pexels-photo-2403568.jpeg?w=400',
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/products/saree1.jpg?v=1616425388&width=400',
        'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg'
    ],
    'lehenga': [
        'https://cdn.pixabay.com/photo/2017/08/06/12/52/woman-2592100_640.jpg',
        'https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?w=400',
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/products/lehenga1.jpg?v=1616425388&width=400',
        'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg'
    ],
    'sherwani': [
        'https://cdn.pixabay.com/photo/2017/08/01/21/51/man-2567924_640.jpg',
        'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?w=400',
        'https://m.media-amazon.com/images/I/61o+V9loTHL._AC_UL320_.jpg',
        'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg'
    ],
    'suit': [
        'https://cdn.pixabay.com/photo/2015/08/25/11/49/man-906540_640.jpg',
        'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?w=400',
        'https://m.media-amazon.com/images/I/71dQXp0Yw7L._AC_UL320_.jpg',
        'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg'
    ],
    'anarkali': [
        'https://cdn.pixabay.com/photo/2019/11/11/15/32/woman-4618718_640.jpg',
        'https://images.pexels.com/photos/2403568/pexels-photo-2403568.jpeg?w=400',
        'https://m.media-amazon.com/images/I/71R5bBvPgKL._AC_UL320_.jpg',
        'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg'
    ],
    'palazzo': [
        'https://cdn.pixabay.com/photo/2016/11/19/15/40/clothes-1839935_640.jpg',
        'https://images.pexels.com/photos/1488507/pexels-photo-1488507.jpeg?w=400',
        'https://m.media-amazon.com/images/I/61OmJKKVDaL._AC_UL320_.jpg',
        'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg'
    ],
    'shirt': [
        'https://cdn.pixabay.com/photo/2015/08/25/11/49/man-906540_640.jpg',
        'https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?w=400',
        'https://m.media-amazon.com/images/I/41SIm-g6MQL._AC_UL320_.jpg',
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'
    ],
    'dress': [
        'https://cdn.pixabay.com/photo/2016/03/23/08/34/woman-1274361_640.jpg',
        'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?w=400',
        'https://m.media-amazon.com/images/I/61E2mzXO6UL._AC_UL320_.jpg',
        'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg'
    ],
    'tshirt': [
        'https://cdn.pixabay.com/photo/2016/11/23/18/05/t-shirt-1854104_640.jpg',
        'https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?w=400',
        'https://m.media-amazon.com/images/I/61qlKqzhO4L._AC_UL320_.jpg',
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'
    ],
    'jeans': [
        'https://cdn.pixabay.com/photo/2016/11/23/06/57/isolated-1852039_640.png',
        'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?w=400',
        'https://m.media-amazon.com/images/I/71O08x+7XPL._AC_UL320_.jpg',
        'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg'
    ],
    'shoes': [
        'https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_640.jpg',
        'https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?w=400',
        'https://m.media-amazon.com/images/I/71G5YFRJKQL._AC_UL320_.jpg',
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'
    ],
    'heels': [
        'https://cdn.pixabay.com/photo/2016/03/27/22/16/fashion-1284496_640.jpg',
        'https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?w=400',
        'https://m.media-amazon.com/images/I/61EBp8uCuPL._AC_UL320_.jpg',
        'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg'
    ],
    'sandals': [
        'https://cdn.pixabay.com/photo/2014/09/03/15/05/sandals-434244_640.jpg',
        'https://images.pexels.com/photos/267242/pexels-photo-267242.jpeg?w=400',
        'https://m.media-amazon.com/images/I/61utX8kBDlL._AC_UL320_.jpg',
        'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg'
    ],
    'sneakers': [
        'https://cdn.pixabay.com/photo/2016/11/21/16/55/shoes-1846637_640.jpg',
        'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?w=400',
        'https://m.media-amazon.com/images/I/61Dw5Z8LzJL._AC_UL320_.jpg',
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'
    ],
    'handbag': [
        'https://cdn.pixabay.com/photo/2016/01/11/11/33/bag-1133260_640.jpg',
        'https://images.pexels.com/photos/1038000/pexels-photo-1038000.jpeg?w=400',
        'https://m.media-amazon.com/images/I/71-QO7P3IML._AC_UL320_.jpg',
        'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
    ],
    'watch': [
        'https://cdn.pixabay.com/photo/2016/11/29/13/39/analog-watch-1869928_640.jpg',
        'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?w=400',
        'https://m.media-amazon.com/images/I/71H1bgGLGGL._AC_UL320_.jpg',
        'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg'
    ],
    'wallet': [
        'https://cdn.pixabay.com/photo/2015/01/08/18/30/wallet-593488_640.jpg',
        'https://images.pexels.com/photos/915915/pexels-photo-915915.jpeg?w=400',
        'https://m.media-amazon.com/images/I/71A++kqOqVL._AC_UL320_.jpg',
        'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg'
    ],
    'jewelry': [
        'https://cdn.pixabay.com/photo/2016/02/02/15/54/jewellery-1175532_640.jpg',
        'https://images.pexels.com/photos/265906/pexels-photo-265906.jpeg?w=400',
        'https://m.media-amazon.com/images/I/61SDHNzxp5L._AC_UL320_.jpg',
        'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg'
    ],
    'sunglasses': [
        'https://cdn.pixabay.com/photo/2016/03/27/19/33/sunset-1283872_640.jpg',
        'https://images.pexels.com/photos/343720/pexels-photo-343720.jpeg?w=400',
        'https://m.media-amazon.com/images/I/61AYbVoUjbL._AC_UL320_.jpg',
        'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg'
    ],
    'kids': [
        'https://cdn.pixabay.com/photo/2016/11/14/03/16/boy-1822471_640.jpg',
        'https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?w=400',
        'https://m.media-amazon.com/images/I/61B2jiHFYkL._AC_UL320_.jpg',
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'
    ],
    'baby': [
        'https://cdn.pixabay.com/photo/2016/01/20/11/22/baby-1151351_640.jpg',
        'https://images.pexels.com/photos/421884/pexels-photo-421884.jpeg?w=400',
        'https://m.media-amazon.com/images/I/51xKjnBNYGL._AC_UL320_.jpg',
        'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg'
    ],
    'school': [
        'https://cdn.pixabay.com/photo/2014/07/31/23/49/child-407543_640.jpg',
        'https://images.pexels.com/photos/207653/pexels-photo-207653.jpeg?w=400',
        'https://m.media-amazon.com/images/I/51rks10EJNL._AC_UL320_.jpg',
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'
    ],
    'wedding': [
        'https://cdn.pixabay.com/photo/2016/06/29/04/39/wedding-1485984_640.jpg',
        'https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?w=400',
        'https://m.media-amazon.com/images/I/71cBz3F1PCL._AC_UL320_.jpg',
        'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg'
    ],
    'party': [
        'https://cdn.pixabay.com/photo/2017/08/06/05/36/people-2589341_640.jpg',
        'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?w=400',
        'https://m.media-amazon.com/images/I/61AUoUgBjBL._AC_UL320_.jpg',
        'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg'
    ],
    'default': [
        'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
        'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
        'https://via.placeholder.com/300x300/6366F1/ffffff?text=Product'
    ]
};

// Get best matching images for a product
function getFreeImages(productName) {
    const nameLower = (productName || '').toLowerCase();
    
    // Check each keyword for a match
    for (const [keyword, images] of Object.entries(FREE_IMAGE_SOURCES)) {
        if (nameLower.includes(keyword)) {
            return images;
        }
    }
    
    // Check for partial matches
    if (nameLower.includes('kurti') || nameLower.includes('suit')) {
        return FREE_IMAGE_SOURCES['anarkali'];
    }
    if (nameLower.includes('gown') || nameLower.includes('evening')) {
        return FREE_IMAGE_SOURCES['dress'];
    }
    if (nameLower.includes('designer') || nameLower.includes('premium')) {
        return FREE_IMAGE_SOURCES['wedding'];
    }
    if (nameLower.includes('casual') || nameLower.includes('cotton')) {
        return FREE_IMAGE_SOURCES['tshirt'];
    }
    if (nameLower.includes('formal') || nameLower.includes('blazer')) {
        return FREE_IMAGE_SOURCES['suit'];
    }
    
    return FREE_IMAGE_SOURCES['default'];
}

// Export
if (typeof window !== 'undefined') {
    window.FreeImageSources = {
        FREE_IMAGE_SOURCES,
        getFreeImages
    };
    
    console.log('✅ Free Image Sources loaded - No subscription needed!');
}