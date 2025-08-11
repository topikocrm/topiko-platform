/* ========================================
   DIRECT PRODUCT IMAGE MAPPING
   Exact URLs for each product - no guessing!
   ======================================== */

// Direct mapping - product ID to EXACT image URL
const DIRECT_IMAGE_MAP = {
    // ========== MEN'S WEAR ==========
    'kurta-cotton-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/x/f/6/xxl-new-white-nofilter-original-imaghzggudfezpr8.jpeg?q=70',
    'shirt-formal-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/i/a/z/4xl-white-vtexx-original-imah9hzmxsfcghjg.jpeg?q=70',
    'sherwani-wedding-001': 'https://rukminim2.flixcart.com/image/612/612/kzfvzww0/sherwani/q/z/o/38-sherwani-dulha-collection-original-imagbgfsyhbhkehz.jpeg?q=70',
    'jeans-casual-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/jean/h/y/g/34-jeans-bt008-laheja-original-imagqqbsfgmdhcvn.jpeg?q=70',
    'blazer-formal-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/blazer/m/o/t/m-tttp006383-tokyo-talkies-original-imagj6vzzhfze5hg.jpeg?q=70',
    'dhoti-traditional-001': 'https://rukminim2.flixcart.com/image/612/612/kqfj1jk0/dhoti/k/w/x/free-combo-unstitched-arya-dress-original-imag4fyfjnwgbkht.jpeg?q=70',
    'tshirt-casual-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/j/t/u/3xl-all-rbcrop-white-one-nb-nicky-boy-original-imagq6hqqkzhedbh.jpeg?q=70',
    'tracksuit-men-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/x/z/x/l-22-n-s-r-style-original-imagg4z6zhpbdkc7.jpeg?q=70',
    'winter-jacket-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/h/z/h/xl-1-no-kttilwjacket-kttilaw-original-imagk5ehdh3qsfz2.jpeg?q=70',
    'ethnic-kurta-designer-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/n/p/q/xxl-grey-sws4227-allan-peter-original-imaft8nf7q7c8fpd.jpeg?q=70',
    'polo-tshirt-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/5/e/p/s-bwtrnful-z21-blive-original-imagqfdhuqgphyax.jpeg?q=70',
    'nehru-jacket-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-jacket/2/j/j/xl-nej-white-veera-paridhaan-original-imag7bhfgqvvwcgh.jpeg?q=70',
    'linen-shirt-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/k/u/d/m-st10-vebnor-original-imagq6aqgh2hzv22.jpeg?q=70',
    'cargo-pants-001': 'https://rukminim2.flixcart.com/image/612/612/l3rmzrk0/cargo/x/c/p/28-dm-cargo-dm001-black-duckmodes-original-imagesyyrrczbhwy.jpeg?q=70',
    'hoodie-winter-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/e/x/h/xl-swdmh-try-this-original-imagnvqfhzv2kavf.jpeg?q=70',

    // ========== WOMEN'S WEAR ==========
    'saree-silk-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/sari/x/m/n/free-star-grey-saree-sangath-unstitched-original-imagk5kkbeqztzcy.jpeg?q=70',
    'lehenga-wedding-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/lehenga-choli/m/i/a/free-half-sleeve-new-designer-lehenga-choli-for-women-original-imaghb89fhgvqzzz.jpeg?q=70',
    'kurti-cotton-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/l/7/u/xl-kurta-pant-set-ethnic-wedding-kurta-pajama-for-men-dex-original-imah3yh5zajfgb7m.jpeg?q=70',
    'dress-western-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/dress/j/g/8/s-na-ttj6007610-tokyo-talkies-original-imagzdp2ssvdhbqz.jpeg?q=70',
    'salwar-suit-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/o/h/w/xl-ku794red-mokshi-original-imagguhrafje3xpz.jpeg?q=70',
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
    'shoes-formal-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/m/o/x/-original-imaggutpywbfhefw.jpeg?q=70',
    'sandals-women-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/b/d/f/4-383-4-beonza-black-original-imagzef8gfvwpbjh.jpeg?q=70',
    'sneakers-sports-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/w/a/r/9-rng-2021-43-bruton-blue-original-imagc7fu9gf7tz9h.jpeg?q=70',
    'chappals-leather-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/slipper-flip-flop/b/9/w/7-pu1094-41-kraasa-blue-original-imagg83gbkzhgpys.jpeg?q=70',
    'heels-party-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/q/i/u/3-heels-01-zap-black-original-imagpfqbz89vsggz.jpeg?q=70',
    'boots-winter-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/b/b/3/3-9325-3-campus-mod-blu-wht-original-imagvgfh9hnfjaah.jpeg?q=70',
    'slippers-home-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/slipper-flip-flop/z/k/e/10-twin-svago-brown-cream-original-imagqzve6bhjjp7p.jpeg?q=70',
    'floaters-casual-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/a/k/j/9-9063-olive-9-layasa-olive-original-imagkfyuquxmyhgs.jpeg?q=70',
    'ethnic-mojari-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/z/a/v/7-rl-0919-41-rich-look-tan-original-imagvh7t5vhgtcz9.jpeg?q=70',

    // ========== ACCESSORIES ==========
    'handbag-leather-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/hand-messenger-bag/f/0/v/lino-perros-womens-handbag-lwhb02328black-satchel-lino-perros-original-imahfgj3zar9zzhg.jpeg?q=70',
    'watch-analog-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/watch/y/n/w/1-32-bk-gr-hmtr-men-original-imah97hxgyzf9h9f.jpeg?q=70',
    'sunglasses-uv-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/sunglass/v/h/g/medium-149-c6-elligator-original-imah9uf8qh6j2pgf.jpeg?q=70',
    'wallet-leather-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/wallet-card-wallet/e/o/q/milano-genuine-leather-milano-7-10-genuine-leather-wallet-with-original-imagvngvcvgzhggp.jpeg?q=70',
    'scarf-silk-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/stole/c/j/q/free-gwscf0157pi-get-wrapped-original-imagypqp6ggtmbzh.jpeg?q=70',
    'belt-leather-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/belt/6/9/j/42-44-regular-belt-for-men-autolock-belt-latest-design-belt-original-imagsjmdwffpnvfg.jpeg?q=70',
    'backpack-travel-001': 'https://rukminim2.flixcart.com/image/612/612/ktketu80/backpack/6/y/s/spacy-unisex-backpack-with-rain-cover-and-reflective-strip-original-imag6uf8zqghmqbp.jpeg?q=70',
    'cap-sports-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/cap/1/a/a/free-ny-cap-black-agio-original-imaghyjqsxgcjdzj.jpeg?q=70',
    'jewelry-earrings-001': 'https://rukminim2.flixcart.com/image/612/612/xif0q/earring/y/n/i/na-dcser1127-er-deal-cone-original-imagphzgpjsfhfvy.jpeg?q=70'
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