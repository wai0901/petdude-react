import uuid from 'uuid';


  const ItemState = {
    menus: [{
        home: false,
        brands: true
     }],
    items: [
      {
        id: uuid.v4(),
        name: "Blue Buffalo Life Protection Formula",
        imgUrl: 'https://img.chewy.com/is/image/catalog/46861_MAIN._AC_SS190_V1529603537_.jpg',
        price: 48.98,
        description: "Blue Buffalo Life Protection Formula was created for the holistic health and well-being of adult dogs. All formulas start with real meat, whole grains, garden veggies and fruit, plus added LifeSource Bits, a precise blend of nutrients that have been enhanced with a Super 7 package of antioxidant-rich ingredients. This Adult Chicken & Brown Rice Recipe features delicious, protein-rich deboned chicken and other natural ingredients for a healthy meal your dog will love.",
        rating: 4,
      },
      {
        id: uuid.v4(),
        name: "Merrick Grain-Free Real Texas Beef",
        imgUrl: "https://img.chewy.com/is/image/catalog/62201_MAIN._AC_SS190_V1544222269_.jpg",
        price: 59.99,
        description: "Because the best dog ever deserves the best food ever, there’s Merrick Grain-Free Real Texas Beef + Sweet Potato Recipe Dry Dog Food. It delivers allergy-friendly nutrition with a grain-free recipe that features real, deboned beef, along with sweet potatoes, peas, apples, blueberries and more. Formulated with vitamins and minerals for complete and balanced nutrition, it also contains high doses of glucosamine and chondroitin for increased mobility, along with high levels of Omega-3 and 6 fatty acids for healthy skin and a shiny coat.",
        rating: 5,
      },
      {
        id: uuid.v4(),
        name: "Natural Balance L.I.D. Limited Ingredient",
        imgUrl: "https://img.chewy.com/is/image/catalog/76787_MAIN._AC_SS190_V1527709631_.jpg",
        price: 59.67,
        description: "Huckleberry Hound lost his tackle box? Not a problem. Dick Van Patten's Natural Balance L.I.D. Limited Ingredient Diets Sweet Potato & Fish Dry Dog Food brings the fishies to him. Best of all, it's a grain-free formula that is proven nutrition suitable for dogs with sensitive tummies or food-related allergies. Salmon is an easily-digested protein not normally found in common dog foods, reducing the risk of inherited allergic reactions, and fresh sweet potatoes provide premium carbohydrates and potassium.",
        rating: 5,
      },
      {
        id: uuid.v4(),
        name: "Only Natural Pet Canine PowerFood",
        imgUrl: "https://img.chewy.com/is/image/catalog/143587_MAIN._AC_SS190_V1522867789_.jpg",
        price: 50.99,
        description: "Give your pup a boost of power with Only Natural Pet Canine PowerFood Red Meat Feast Dog Food! This grain-free dry dog food is packed with real lamb, pork and other natural ingredients that your doggy will love. This mouthwatering kibble is suitable for all ages and breeds and contains no corn, wheat, soy or grains. Paleo-inspired and vet approved, it’s also coated in a proprietary freeze-dried PowerBoost powder that delivers a blend of pumpkin, digestive enzymes probiotics, turmeric and mussels for enhanced nutrition and improved digestion. Pair this wholesome dry dog food with your pal’s favorite wet food and he’ll feel like a healthy powerful pup in no time!",
        rating: 4,
      },
      {
        id: uuid.v4(),
        name: "Zignature Lamb Limited Ingredient Formula",
        imgUrl: "https://img.chewy.com/is/image/catalog/51586_MAIN._AC_SS190_V1510160007_.jpg",
        price: 67.99,
        description: "Fill your best friend’s bowl with wholesome nutrition when you feed them Zignature Lamb Limited Ingredient Formula Grain-Free Dry Dog Food. Your pup will enjoy a delicious dinner made with real, farm-raised lamb from New Zealand, wholesome peas, chickpeas, and flaxseed. This meat-first recipe offers pups the protein they need to thrive, while Zignature’s limited ingredient recipe throws out troublesome ingredients like chicken, corn, wheat, soy, and potatoes, creating peak hypoallergenic, low-glycemic nutrition. Combine that with key antioxidants, essential fatty acids, and a complete spectrum of vitamins and minerals for a well-rounded meal that goes beyond nature to become your pet’s signature food for life.",
        rating: 4,
      },
      {
        id: uuid.v4(),
        name: "Purina Pro Plan Focus Adult",
        imgUrl: "https://img.chewy.com/is/image/catalog/101143_MAIN._AC_SS190_V1531940242_.jpg",
        price: 47.99,
        description: "Give your pet everything they need to thrive with Purina Pro Plan Focus Adult Sensitive Skin & Stomach Formula. It’s made with nutrient-rich salmon as the first ingredient for a protein-rich recipe your dog will crave and love. Plus, it has prebiotic fiber for sensitive stomach for a highly-digestible formula that nourishes the beneficial bacteria found in your dog's intestine. This special recipe includes ingredients, such as rice and oat meal to provide easily digestible sources of carbohydrates for your pal. Plus, it’s packed with fish oil—a source of omega 3 fatty acids—to help support healthy joints and mobility, and omega 6 fatty acids and zinc to nourish your dog's skin and keep his coat looking healthy. And best of all, it’s made without corn, wheat or soy.",
        rating: 4,
      }
    ],
  } 
             
            

export default ItemState;



