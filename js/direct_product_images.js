/* ========================================
   DIRECT PRODUCT IMAGE MAPPING
   Exact URLs for each product - no guessing!
   ======================================== */

// Direct mapping - product ID to EXACT image URL
const DIRECT_IMAGE_MAP = {
    // ========== MEN'S WEAR ==========
    'kurta-cotton-001': 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=400&fit=crop&crop=center',
    'shirt-formal-001': 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop&crop=center',
    'sherwani-wedding-001': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center',
    'jeans-casual-001': 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop&crop=center',
    'blazer-formal-001': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=center',
    'dhoti-traditional-001': 'https://images.unsplash.com/photo-1566479179817-c0efeb382d13?w=400&h=400&fit=crop&crop=center',
    'tshirt-casual-001': 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center',
    'tracksuit-men-001': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center',
    'winter-jacket-001': 'https://images.unsplash.com/photo-1544966503-7cc5ac882436?w=400&h=400&fit=crop&crop=center',
    'ethnic-kurta-designer-001': 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=400&fit=crop&crop=center',
    'polo-tshirt-001': 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop&crop=center',
    'nehru-jacket-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-jacket/2/j/j/xl-nej-white-veera-paridhaan-original-imag7bhfgqvvwcgh.jpeg?q=70',
    'linen-shirt-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/k/u/d/m-st10-vebnor-original-imagq6aqgh2hzv22.jpeg?q=70',
    'cargo-pants-001': 'https://rukminim2.flixcart.com/image/612/612/l3rmzrk0/cargo/x/c/p/28-dm-cargo-dm001-black-duckmodes-original-imagesyyrrczbhwy.jpeg?q=70',
    'hoodie-winter-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/e/x/h/xl-swdmh-try-this-original-imagnvqfhzv2kavf.jpeg?q=70',

    // ========== WOMEN'S WEAR ==========
    'saree-silk-001': 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=400&fit=crop&crop=center',
    'lehenga-wedding-001': 'https://images.unsplash.com/photo-1594736797933-d0ea8baa3b9a?w=400&h=400&fit=crop&crop=center',
    'kurti-cotton-001': 'https://images.unsplash.com/photo-1583391733975-4770270d3c5e?w=400&h=400&fit=crop&crop=center',
    'dress-western-001': 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop&crop=center',
    'salwar-suit-001': 'https://images.unsplash.com/photo-1583391733975-4770270d3c5e?w=400&h=400&fit=crop&crop=center',
    'saree-cotton-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/sari/6/z/y/free-banarasi-saree-new-saree-lehenga-choli-saree-sari-original-imaggdmh5szpjghj.jpeg?q=70',
    'blouse-silk-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/blouse/4/n/e/32-net-boat-neck-trendy-queen-original-imah3c9pqhbgyxbf.jpeg?q=70',
    'party-dress-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/dress/d/i/0/s-ttj6008614-tokyo-talkies-original-imagrzxpepnnbhyg.jpeg?q=70',
    'palazzo-set-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/5/w/o/xxl-ku632grn-mokshi-original-imagg5w8psugfx3g.jpeg?q=70',
    'winter-shawl-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/stole/l/7/x/free-j006-kfd-fashion-original-imagrvqpyy5vdvgv.jpeg?q=70',
    'crop-top-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/top/o/l/r/l-gr6273-wine-harpa-original-imafgbzagz3zgnzj-bb.jpeg?q=70',
    'anarkali-suit-001': 'https://rukminim2.flixcart.com/image/612/612/kflftzk0-0/kurta/o/v/o/3xl-jne3325-dr-janasya-original-imafwyy5cjhhuzgq.jpeg?q=70',
    'jeans-women-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/jean/a/v/4/30-wjn-2261-montrez-original-imagppxh6zzchgty.jpeg?q=70',
    'ethnic-jacket-001': 'https://rukminim2.flixcart.com/image/612/612/l12h1u80/ethnic-jacket/z/f/d/xl-no-taj-002-taj-fashion-original-imagcqp3ykgphhfp.jpeg?q=70',
    'formal-shirt-women-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/g/j/y/m-s-bsh-try-this-original-imaghyhzsmsufgk8.jpeg?q=70',

    // ========== KIDS WEAR ==========
    'baby-romper-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/kids-romper/j/h/f/3-6-months-phrksnpanda-pamkids-original-imahfey2y26qbgkh.jpeg?q=70',
    'boys-tshirt-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/kids-t-shirt/d/k/e/11-12-years-bwtrnful-z16-blive-original-imah9h2yjhevqyyu.jpeg?q=70',
    'girls-dress-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/kids-dress/p/x/w/2-3-years-girls-partywear-frock-gown-btr-fashion-original-imahfajdfzqpgbaj.jpeg?q=70',
    'school-uniform-001': 'https://rukminim2.flixcart.com/image/612/612/l3khsi80/kids-apparel-combo/f/s/n/6-7-years-junior-school-uniform-amk-ecom-original-imagenvzjj2yh2mg.jpeg?q=70',
    'kids-party-suit-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/kids-ethnic-set/6/o/y/18-24-months-baba-suit-party-wear-2-years-ftc-fashions-original-imagkfrrqzugfhem.jpeg?q=70',
    'kids-kurta-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/kids-ethnic-set/m/o/d/6-7-years-kids-kurta-pyjama-set-ssb-brand-original-imah3v8gjfvggh7p.jpeg?q=70',
    'kids-pajama-001': 'https://rukminim2.flixcart.com/image/612/612/l2tcfbk0/kids-nightwear/0/i/o/9-10-years-unicorn-03-go-colors-original-image2evzywz5zkw.jpeg?q=70',
    'kids-swimsuit-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/kids-swimsuit/p/m/0/2-3-years-102-d-n-sports-original-imagrfzvnuxcddry.jpeg?q=70',
    'kids-jacket-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/kids-jacket/p/j/z/3-4-years-girls-unicorn-jacket-pinkdarkpink-fkdscollection-original-imagf3hv7rqzabeh.jpeg?q=70',
    'baby-onesie-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/kids-romper/p/n/j/9-12-months-52-brandonn-original-imagzqr9jchc9fkp.jpeg?q=70',
    'boys-shorts-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/kids-short/e/4/t/13-14-years-boys-3-4th-shorts-super-neovio-original-imagzy9mjjfbg92p.jpeg?q=70',
    'girls-lehenga-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/kids-lehenga-choli/s/z/b/10-11-years-kids-lehenga-choli-embroidered-semi-stitched-original-imah27k2q5kbaheb.jpeg?q=70',

    // ========== DESIGNER COLLECTION ==========
    'designer-saree-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/sari/2/9/c/free-2644s934-siril-unstitched-original-imah39kxhyfpsyfw.jpeg?q=70',
    'designer-lehenga-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/lehenga-choli/g/0/m/free-sleeveless-zip1434-zinariya-fab-original-imagnftyaaaqjexa.jpeg?q=70',
    'designer-suit-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/g/f/f/xl-grey-106-stylepit-original-imagkam22quzfkdq.jpeg?q=70',
    'bridal-lehenga-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/lehenga-choli/h/k/6/free-half-sleeve-bridal-priya-nand-original-imagzqbqhzqxepzg.jpeg?q=70',
    'groom-sherwani-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/sherwani/m/h/h/44-fksh002blu-fubar-original-imaghkewucvtgquz.jpeg?q=70',
    'cocktail-dress-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/dress/x/s/g/l-552-sheetal-associates-original-imagrhy9bbn5yfvm.jpeg?q=70',
    'evening-gown-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/gown/1/d/m/na-xxl-full-sleeve-stitched-sho10-shotindia-na-original-imagg6xbymhrdwmq.jpeg?q=70',
    'luxury-handbag-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/hand-messenger-bag/j/h/m/stylish-women-handbag-hb-234-satchel-roseberries-original-imah2g8ecnxrfxke.jpeg?q=70',
    'premium-watch-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/watch/j/u/1/1-silver-2493-blue-davidoff-men-original-imagts2fcmvdvzgh.jpeg?q=70',
    'designer-saree-002': 'https://rukminim2.flixcart.com/image/612/612/xif0q/sari/6/d/h/free-sequined-embroidered-saree-granthva-fab-unstitched-original-imagy26ftysnt5dg.jpeg?q=70',
    'groom-suit-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/suit/i/a/s/42-5910550-park-avenue-original-imagzpb2ksytx4xu.jpeg?q=70',
    'luxury-clutch-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/clutch/c/o/w/clutch-purse-wedding-gift-for-womens-girls-silver-w055-clutch-original-imaghs6yqajgsgpr.jpeg?q=70',

    // ========== FOOTWEAR ==========
    'shoes-formal-001': 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center',
    'sandals-women-001': 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop&crop=center',
    'sneakers-sports-001': 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=400&fit=crop&crop=center',
    'chappals-leather-001': 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=400&h=400&fit=crop&crop=center',
    'heels-party-001': 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop&crop=center',
    'boots-winter-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/b/b/3/3-9325-3-campus-mod-blu-wht-original-imagvgfh9hnfjaah.jpeg?q=70',
    'slippers-home-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/slipper-flip-flop/z/k/e/10-twin-svago-brown-cream-original-imagqzve6bhjjp7p.jpeg?q=70',
    'floaters-casual-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/a/k/j/9-9063-olive-9-layasa-olive-original-imagkfyuquxmyhgs.jpeg?q=70',
    'ethnic-mojari-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/z/a/v/7-rl-0919-41-rich-look-tan-original-imagvh7t5vhgtcz9.jpeg?q=70',

    // ========== ACCESSORIES ==========
    'handbag-leather-001': 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center',
    'watch-analog-001': 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center',
    'sunglasses-uv-001': 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop&crop=center',
    'wallet-leather-001': 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop&crop=center',
    'scarf-silk-001': 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center',
    'belt-leather-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/belt/6/9/j/42-44-regular-belt-for-men-autolock-belt-latest-design-belt-original-imagsjmdwffpnvfg.jpeg?q=70',
    'backpack-travel-001': 'https://rukminim2.flixcart.com/image/612/612/ktketu80/backpack/6/y/s/spacy-unisex-backpack-with-rain-cover-and-reflective-strip-original-imag6uf8zqghmqbp.jpeg?q=70',
    'cap-sports-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/cap/1/a/a/free-ny-cap-black-agio-original-imaghyjqsxgcjdzj.jpeg?q=70',
    'jewelry-earrings-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/earring/y/n/i/na-dcser1127-er-deal-cone-original-imagphzgpjsfhfvy.jpeg?q=70',
    
    // ========== ADDITIONAL MAPPINGS FOR BETTER COVERAGE ==========
    // More Men's Wear
    'kurta-cotton-002': 'https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/1/h/g/m-pw333-purshottam-wala-original-imagm8fz4zbgvsxg.jpeg?q=70',
    'kurta-cotton-003': 'https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/b/o/w/xxl-jdp-krt228-joggers-park-original-imaghej4htncvgz4.jpeg?q=70',
    'shirt-formal-002': 'https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/z/v/k/l-frml-st2-vebnor-original-imah3zfrqz8hmdcm.jpeg?q=70',
    'shirt-formal-003': 'https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/b/j/m/m-st10-vebnor-original-imagq6aqgh2qkgga.jpeg?q=70',
    'jeans-casual-002': 'https://rukminim2.flixcart.com/image/612/612/xif0q/jean/k/d/r/32-jk5004-olive-jakkh-original-imagnyg4ptzbvuvz.jpeg?q=70',
    'jeans-casual-003': 'https://rukminim2.flixcart.com/image/612/612/xif0q/jean/y/s/7/28-spjn094-sky-light-blue-ketch-original-imagzhzh5fggdrgz.jpeg?q=70',
    'tshirt-casual-002': 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/x/j/5/xs-bwtrnful-z14-blive-original-imagqyf8zhg3wgmy.jpeg?q=70',
    'tshirt-casual-003': 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/w/q/e/3xl-ausk0165-ausk-original-imagzfbgpzq7c6gq.jpeg?q=70',
    
    // More Women's Wear
    'saree-silk-002': 'https://rukminim2.flixcart.com/image/612/612/xif0q/sari/2/h/s/free-pattu-saree-ejoty-fashion-unstitched-original-imah4gqnecmzpyfp.jpeg?q=70',
    'saree-silk-003': 'https://rukminim2.flixcart.com/image/612/612/xif0q/sari/z/y/h/free-banarasi-silk-saree-sangath-unstitched-original-imagpsg8bhfhcutc.jpeg?q=70',
    'kurti-cotton-002': 'https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/i/p/u/xxl-daffodil-01-daffodil-original-imagkasfvqf3g5km.jpeg?q=70',
    'kurti-cotton-003': 'https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/4/z/q/l-na-naksh-by-veeksha-original-imagmuqggsz9hgjh.jpeg?q=70',
    'dress-western-002': 'https://rukminim2.flixcart.com/image/612/612/xif0q/dress/x/w/l/s-na-drp2008-dream-beauty-fashion-original-imagzkt5zbhhcyua.jpeg?q=70',
    'dress-western-003': 'https://rukminim2.flixcart.com/image/612/612/xif0q/dress/a/r/x/m-552-sanwariya-silks-original-imagp7g3tgjhksfm.jpeg?q=70',
    'lehenga-wedding-002': 'https://rukminim2.flixcart.com/image/612/612/xif0q/lehenga-choli/y/j/c/free-sleeveless-new-designer-rama-green-colour-heavy-original-imagy8tgvgwekhmh.jpeg?q=70',
    'lehenga-wedding-003': 'https://rukminim2.flixcart.com/image/612/612/xif0q/lehenga-choli/k/a/q/free-half-sleeve-shree-om-fashion-original-imagzxc4nkzeufxb.jpeg?q=70',
    
    // More Kids Wear
    'kids-tshirt-002': 'https://rukminim2.flixcart.com/image/612/612/xif0q/kids-t-shirt/x/j/m/11-12-years-nbt-s-po3-wh-nxt-blv-unisex-original-imagtu7fzk6vefzx.jpeg?q=70',
    'kids-dress-002': 'https://rukminim2.flixcart.com/image/612/612/xif0q/kids-dress/n/b/k/18-24-months-md-2101-miss-chief-original-imaggd5pqh6bdgnx.jpeg?q=70',
    'kids-kurta-002': 'https://rukminim2.flixcart.com/image/612/612/xif0q/kids-ethnic-set/n/t/f/6-7-years-kids-kurtapajama-001-pkcollection-original-imagpheyxhzhpypx.jpeg?q=70',
    'baby-romper-002': 'https://rukminim2.flixcart.com/image/612/612/xif0q/kids-romper/y/o/b/3-6-months-2-6206-r-pro-ethic-original-imagnedhuhc8g4gz.jpeg?q=70',
    
    // More Footwear
    'shoes-formal-002': 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/a/9/p/-original-imagp2yjubgkgxfg.jpeg?q=70',
    'sneakers-sports-002': 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/s/t/7/-original-imagsc7teh3thpbf.jpeg?q=70',
    'sandals-women-002': 'https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/o/n/c/5-386-5-beonza-black-original-imagzef8pvbncbxz.jpeg?q=70',
    'heels-party-002': 'https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/m/4/p/-original-imagqxvcyggkhgdb.jpeg?q=70',
    
    // More Accessories
    'handbag-leather-002': 'https://rukminim2.flixcart.com/image/612/612/xif0q/hand-messenger-bag/g/z/h/sling-bag-slingbag-sling-bag-deniza-original-imagy6g2zthghzhe.jpeg?q=70',
    'watch-analog-002': 'https://rukminim2.flixcart.com/image/612/612/xif0q/watch/p/w/g/1-bq1126-timex-men-original-imah4a3rpzqz4dyg.jpeg?q=70',
    'jewelry-necklace-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/necklace-chain/x/s/h/1-nk-262-r-vembley-original-imagqyjjfwz8hhhe.jpeg?q=70',
    'jewelry-bracelet-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/bangle-bracelet-armlet/t/j/z/free-2-8-na-1-valentine-bracelet-for-women-meenaz-original-imagzjxacvb9ndhz.jpeg?q=70'
};

// Get image for product - SUPER SIMPLE
function getDirectProductImage(productId) {
    // Return exact mapped image or null (so SVG fallback can be used)
    return DIRECT_IMAGE_MAP[productId] || null;
}

// Export
if (typeof window !== 'undefined') {
    window.DirectProductImages = {
        DIRECT_IMAGE_MAP,
        getDirectProductImage
    };
    
    console.log('✅ Direct Product Images Loaded - ' + Object.keys(DIRECT_IMAGE_MAP).length + ' exact mappings!');
}