#!/bin/bash

# Complete Category Folder Creation Script
# Creates ALL 25 main categories with subcategories from the master plan

BASE_DIR="/Users/murali/Projects/GitCode/topiko-platform/images/products"

echo "Creating complete category structure for all 25 main categories..."

# 1. FASHION & APPAREL (Already exists, ensuring subcategories)
echo "Updating Fashion & Apparel..."
mkdir -p "$BASE_DIR/fashion/mens-clothing/{shirts,tshirts,jeans,trousers,ethnic,winter,sports,innerwear}"
mkdir -p "$BASE_DIR/fashion/womens-clothing/{sarees,kurtis,suits,lehenga,western,fusion,winter,maternity,lingerie}"
mkdir -p "$BASE_DIR/fashion/kids-clothing/{boys,girls,infant,toddler}"
mkdir -p "$BASE_DIR/fashion/plus-size/{mens,womens}"
mkdir -p "$BASE_DIR/fashion/designer-boutique"

# 2. FOOTWEAR & BAGS (Partially exists, adding bags)
echo "Creating Footwear & Bags..."
mkdir -p "$BASE_DIR/footwear/mens/{formal,casual,sports,sandals,ethnic}"
mkdir -p "$BASE_DIR/footwear/womens/{heels,flats,wedges,boots,ethnic}"
mkdir -p "$BASE_DIR/footwear/kids/{boys,girls,school}"
mkdir -p "$BASE_DIR/bags/handbags/{totes,satchels,clutches,hobos}"
mkdir -p "$BASE_DIR/bags/backpacks/{laptop,travel,school}"
mkdir -p "$BASE_DIR/bags/luggage/{suitcases,duffel,organizers}"
mkdir -p "$BASE_DIR/bags/wallets/{mens,womens,cardholders}"

# 3. JEWELRY & WATCHES (Already exists, ensuring subcategories)
echo "Updating Jewelry & Watches..."
mkdir -p "$BASE_DIR/jewelry/gold/{necklaces,earrings,rings,bangles,chains,pendants}"
mkdir -p "$BASE_DIR/jewelry/diamond/{rings,necklaces,earrings,bracelets}"
mkdir -p "$BASE_DIR/jewelry/silver/{ornaments,anklets,rings,chains}"
mkdir -p "$BASE_DIR/jewelry/fashion/{artificial,oxidized,beaded,costume}"
mkdir -p "$BASE_DIR/jewelry/watches/{analog,digital,smart,luxury,sports}"

# 4. BEAUTY & PERSONAL CARE (Already exists, ensuring subcategories)
echo "Updating Beauty & Personal Care..."
mkdir -p "$BASE_DIR/beauty/makeup/{face,eyes,lips,nails}"
mkdir -p "$BASE_DIR/beauty/skincare/{cleansers,moisturizers,treatments,sunprotection}"
mkdir -p "$BASE_DIR/beauty/haircare/{shampoo,conditioner,styling,coloring,treatments}"
mkdir -p "$BASE_DIR/beauty/fragrances/{perfumes,deodorants,mists,attars}"
mkdir -p "$BASE_DIR/beauty/mens-grooming/{shaving,beard,face,hair}"
mkdir -p "$BASE_DIR/beauty/bath-body/{wash,lotions,scrubs,accessories}"

# 5. FOOD & BEVERAGES (Already exists, ensuring subcategories)
echo "Updating Food & Beverages..."
mkdir -p "$BASE_DIR/food/restaurants/{fine-dining,casual,qsr,cafes,bars,cloud-kitchen}"
mkdir -p "$BASE_DIR/food/regional/{north-indian,south-indian,east-indian,west-indian,northeast}"
mkdir -p "$BASE_DIR/food/international/{chinese,continental,italian,mexican,thai,japanese,korean,arabic}"
mkdir -p "$BASE_DIR/food/bakery/{breads,cakes,cookies,indian-breads}"
mkdir -p "$BASE_DIR/food/street-food/{chaat,rolls,dosa,vada-pav,momos}"
mkdir -p "$BASE_DIR/food/sweets/{traditional,modern,chocolates,ice-cream}"

# 6. GROCERY & STAPLES (Already exists, ensuring subcategories)
echo "Updating Grocery & Staples..."
mkdir -p "$BASE_DIR/grocery/fruits-vegetables/{fresh-fruits,fresh-vegetables,organic,hydroponic,cut-cleaned}"
mkdir -p "$BASE_DIR/grocery/staples/{rice,wheat,pulses,oils}"
mkdir -p "$BASE_DIR/grocery/dairy/{milk,cheese,yogurt,butter,eggs}"
mkdir -p "$BASE_DIR/grocery/meat-seafood/{chicken,mutton,fish,prawns,exotic}"
mkdir -p "$BASE_DIR/grocery/packaged/{instant,ready-to-eat,frozen,canned}"

# 7. ELECTRONICS (Already exists, ensuring subcategories)
echo "Updating Electronics..."
mkdir -p "$BASE_DIR/electronics/mobiles/{smartphones,feature-phones,tablets,e-readers}"
mkdir -p "$BASE_DIR/electronics/computers/{laptops,desktops,all-in-one,gaming,workstations}"
mkdir -p "$BASE_DIR/electronics/peripherals/{monitors,keyboards,printers,webcams,speakers}"
mkdir -p "$BASE_DIR/electronics/storage/{hard-drives,ssd,pen-drives,memory-cards}"
mkdir -p "$BASE_DIR/electronics/networking/{routers,modems,switches,extenders}"
mkdir -p "$BASE_DIR/electronics/gaming/{consoles,accessories,pc-components,chairs}"
mkdir -p "$BASE_DIR/electronics/audio-video/{headphones,earphones,speakers,home-theatre,soundbars,projectors}"

# 8. HOME APPLIANCES (Merging with electronics/appliances)
echo "Creating Home Appliances..."
mkdir -p "$BASE_DIR/home-appliances/kitchen/{refrigerators,microwave,mixer,stoves,chimney,dishwashers,purifiers}"
mkdir -p "$BASE_DIR/home-appliances/washing/{washing-machines,dryers,vacuum,irons}"
mkdir -p "$BASE_DIR/home-appliances/cooling-heating/{ac,coolers,fans,heaters,geysers}"
mkdir -p "$BASE_DIR/home-appliances/entertainment/{televisions,set-top-boxes,dvd-players}"

# 9. FURNITURE & HOME DECOR (Updating home)
echo "Updating Furniture & Home Decor..."
mkdir -p "$BASE_DIR/home/living-room/{sofas,tables,tv-units,recliners,ottomans,shoe-racks}"
mkdir -p "$BASE_DIR/home/bedroom/{beds,mattresses,wardrobes,dressing-tables,bedside-tables}"
mkdir -p "$BASE_DIR/home/dining/{dining-tables,dining-chairs,buffet,bar-furniture,kitchen-cabinets}"
mkdir -p "$BASE_DIR/home/study-office/{desks,office-chairs,bookcases,filing-cabinets}"
mkdir -p "$BASE_DIR/home/kids-room/{kids-beds,bunk-beds,kids-desks,kids-storage}"
mkdir -p "$BASE_DIR/home/outdoor-garden/{garden-furniture,swing-chairs,gazebos,planters}"
mkdir -p "$BASE_DIR/home/decor/{wall-art,paintings,clocks,mirrors,showpieces,fountains,artificial-plants}"

# 10. SPORTS & FITNESS (Already exists, ensuring subcategories)
echo "Updating Sports & Fitness..."
mkdir -p "$BASE_DIR/sports/equipment/{cricket,football,badminton,tennis,basketball,volleyball,hockey,table-tennis,swimming,golf}"
mkdir -p "$BASE_DIR/sports/fitness/{cardio,strength,yoga,cross-training,recovery}"
mkdir -p "$BASE_DIR/sports/outdoor/{camping,trekking,cycling,climbing,water-sports}"
mkdir -p "$BASE_DIR/sports/nutrition/{protein,pre-workout,post-workout,energy,vitamins}"

# 11. HEALTH & MEDICAL (Already exists, ensuring subcategories)
echo "Updating Health & Medical..."
mkdir -p "$BASE_DIR/health/medicines/{prescription,otc,ayurvedic,homeopathic}"
mkdir -p "$BASE_DIR/health/devices/{bp-monitors,glucometers,thermometers,nebulizers,oximeters}"
mkdir -p "$BASE_DIR/health/services/{consultation,lab-tests,checkups,vaccination,physiotherapy}"
mkdir -p "$BASE_DIR/health/wellness/{vitamins,supplements,herbal,essential-oils,health-foods}"
mkdir -p "$BASE_DIR/health/senior-care/{mobility-aids,adult-diapers,medical-beds,wheelchairs}"
mkdir -p "$BASE_DIR/health/baby-health/{baby-care,baby-food,baby-medical}"

# 12. AUTOMOTIVE (NEW)
echo "Creating Automotive..."
mkdir -p "$BASE_DIR/automotive/vehicles/{cars-new,cars-used,bikes-scooters,commercial,electric}"
mkdir -p "$BASE_DIR/automotive/spare-parts/{engine,body,electrical,suspension,brake}"
mkdir -p "$BASE_DIR/automotive/accessories/{car-audio,car-electronics,interior,exterior,safety-security}"
mkdir -p "$BASE_DIR/automotive/tyres-batteries/{car-tyres,bike-tyres,batteries,lubricants}"
mkdir -p "$BASE_DIR/automotive/services/{service-centers,car-wash,detailing,insurance,driving-schools}"

# 13. REAL ESTATE (NEW)
echo "Creating Real Estate..."
mkdir -p "$BASE_DIR/real-estate/residential/{apartments,houses,villas,builder-floors,farm-houses,studios}"
mkdir -p "$BASE_DIR/real-estate/commercial/{office-spaces,retail-shops,showrooms,warehouses,industrial}"
mkdir -p "$BASE_DIR/real-estate/land-plots/{residential-plots,commercial-plots,agricultural,industrial}"
mkdir -p "$BASE_DIR/real-estate/pg-rentals/{paying-guest,hostels,service-apartments,co-living}"

# 14. EDUCATION & LEARNING (NEW)
echo "Creating Education & Learning..."
mkdir -p "$BASE_DIR/education/academic/{schools,colleges,universities,distance-learning}"
mkdir -p "$BASE_DIR/education/professional/{engineering,medical,management,law,design}"
mkdir -p "$BASE_DIR/education/competitive/{upsc,banking,ssc,railways,defence}"
mkdir -p "$BASE_DIR/education/skills/{it-software,digital-marketing,data-science,languages,personality}"
mkdir -p "$BASE_DIR/education/hobby/{music,dance,art,photography,cooking}"
mkdir -p "$BASE_DIR/education/kids-learning/{pre-school,tuitions,abacus,vedic-maths,robotics}"

# 15. TRAVEL & TOURISM (NEW)
echo "Creating Travel & Tourism..."
mkdir -p "$BASE_DIR/travel/transportation/{flights,trains,buses,cabs,car-rentals}"
mkdir -p "$BASE_DIR/travel/accommodation/{hotels,resorts,homestays,hostels,villas}"
mkdir -p "$BASE_DIR/travel/packages/{domestic,international,adventure,pilgrimage,honeymoon}"
mkdir -p "$BASE_DIR/travel/services/{visa,travel-insurance,forex,tour-guides}"

# 16. ENTERTAINMENT & MEDIA (NEW)
echo "Creating Entertainment & Media..."
mkdir -p "$BASE_DIR/entertainment/movies-shows/{movie-tickets,ott-subscriptions,dth-services}"
mkdir -p "$BASE_DIR/entertainment/events/{music-concerts,comedy-shows,theatre,sports-events}"
mkdir -p "$BASE_DIR/entertainment/gaming-recreation/{gaming-zones,bowling,amusement-parks,water-parks}"
mkdir -p "$BASE_DIR/entertainment/books-publications/{fiction,non-fiction,magazines,newspapers,ebooks}"

# 17. FINANCIAL SERVICES (NEW)
echo "Creating Financial Services..."
mkdir -p "$BASE_DIR/financial/banking/{savings,current,fixed-deposits,credit-cards,debit-cards}"
mkdir -p "$BASE_DIR/financial/loans/{personal,home,car,education,business}"
mkdir -p "$BASE_DIR/financial/insurance/{life,health,motor,travel,home}"
mkdir -p "$BASE_DIR/financial/investments/{mutual-funds,stocks,bonds,gold,real-estate-investment}"
mkdir -p "$BASE_DIR/financial/digital-payments/{mobile-wallets,upi,payment-gateways,pos}"

# 18. BUSINESS & B2B SERVICES (NEW)
echo "Creating Business & B2B Services..."
mkdir -p "$BASE_DIR/business/office-supplies/{stationery,printing,office-furniture,office-equipment}"
mkdir -p "$BASE_DIR/business/business-services/{accounting,legal,hr,company-registration,gst}"
mkdir -p "$BASE_DIR/business/marketing/{digital-marketing,advertising,branding,pr,event-management}"
mkdir -p "$BASE_DIR/business/it-services/{software-development,web-development,app-development,cloud,cybersecurity}"
mkdir -p "$BASE_DIR/business/industrial/{raw-materials,machinery,tools,safety-equipment,packaging}"

# 19. AGRICULTURE & FARMING (NEW)
echo "Creating Agriculture & Farming..."
mkdir -p "$BASE_DIR/agriculture/seeds-plants/{crop-seeds,vegetable-seeds,flower-seeds,saplings}"
mkdir -p "$BASE_DIR/agriculture/fertilizers-pesticides/{organic,chemical,pesticides,fungicides}"
mkdir -p "$BASE_DIR/agriculture/farm-equipment/{tractors,harvesters,tillers,irrigation}"
mkdir -p "$BASE_DIR/agriculture/animal-husbandry/{cattle-feed,poultry-feed,veterinary,dairy-equipment}"

# 20. PETS & PET CARE (NEW)
echo "Creating Pets & Pet Care..."
mkdir -p "$BASE_DIR/pets/pet-food/{dog-food,cat-food,bird-food,fish-food}"
mkdir -p "$BASE_DIR/pets/pet-accessories/{collars,toys,beds,grooming-tools}"
mkdir -p "$BASE_DIR/pets/pet-services/{grooming,training,boarding,veterinary}"

# 21. WEDDING & EVENTS (NEW)
echo "Creating Wedding & Events..."
mkdir -p "$BASE_DIR/wedding/wedding-services/{venues,planners,catering,decorators,photographers,makeup,mehendi,cards}"
mkdir -p "$BASE_DIR/wedding/party-supplies/{birthday,anniversary,festival-decorations,party-props}"
mkdir -p "$BASE_DIR/wedding/gifts/{personalized,corporate,festival,return-gifts}"

# 22. HANDICRAFTS & ARTISAN (NEW)
echo "Creating Handicrafts & Artisan..."
mkdir -p "$BASE_DIR/handicrafts/traditional-crafts/{pottery,wooden,metal,stone,glass}"
mkdir -p "$BASE_DIR/handicrafts/textiles/{handloom,embroidery,block-printing,tie-dye}"
mkdir -p "$BASE_DIR/handicrafts/paintings-art/{traditional-paintings,modern-art,sculptures,wall-hangings}"

# 23. RECYCLING & WASTE MANAGEMENT (NEW)
echo "Creating Recycling & Waste Management..."
mkdir -p "$BASE_DIR/recycling/waste-collection/{e-waste,paper-waste,plastic-waste,metal-scrap}"
mkdir -p "$BASE_DIR/recycling/recycling-services/{paper,plastic,composting}"
mkdir -p "$BASE_DIR/recycling/eco-products/{biodegradable,reusable,solar}"

# 24. GOVERNMENT & PUBLIC SERVICES (NEW)
echo "Creating Government & Public Services..."
mkdir -p "$BASE_DIR/government/documents/{aadhaar,pan,passport,driving-license}"
mkdir -p "$BASE_DIR/government/bill-payments/{electricity,water,gas,property-tax}"
mkdir -p "$BASE_DIR/government/schemes/{subsidies,scholarships,pension,employment}"

# 25. SPECIALIZED & MISCELLANEOUS (NEW)
echo "Creating Specialized & Miscellaneous..."
mkdir -p "$BASE_DIR/specialized/religious-spiritual/{pooja-items,religious-books,spiritual-services,astrology}"
mkdir -p "$BASE_DIR/specialized/security/{home-security,cctv,security-guards,alarm-systems}"
mkdir -p "$BASE_DIR/specialized/printing-packaging/{digital-printing,offset,packaging,courier}"
mkdir -p "$BASE_DIR/specialized/import-export/{import,export,customs,freight}"
mkdir -p "$BASE_DIR/specialized/rental-services/{equipment,costume,vehicle,property}"

echo "✅ Successfully created all 25 main categories with subcategories!"
echo ""
echo "Summary:"
echo "- 25 Main Categories"
echo "- 250+ Subcategories"
echo "- Ready for 2000+ product types"
echo ""
echo "Categories created:"
echo "1. Fashion & Apparel"
echo "2. Footwear & Bags"
echo "3. Jewelry & Watches"
echo "4. Beauty & Personal Care"
echo "5. Food & Beverages"
echo "6. Grocery & Staples"
echo "7. Electronics"
echo "8. Home Appliances"
echo "9. Furniture & Home Decor"
echo "10. Sports & Fitness"
echo "11. Health & Medical"
echo "12. Automotive"
echo "13. Real Estate"
echo "14. Education & Learning"
echo "15. Travel & Tourism"
echo "16. Entertainment & Media"
echo "17. Financial Services"
echo "18. Business & B2B Services"
echo "19. Agriculture & Farming"
echo "20. Pets & Pet Care"
echo "21. Wedding & Events"
echo "22. Handicrafts & Artisan"
echo "23. Recycling & Waste Management"
echo "24. Government & Public Services"
echo "25. Specialized & Miscellaneous"