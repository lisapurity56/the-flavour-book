const starterRecipes = [
  {
    id: "lemon-ricotta-pancakes",
    name: "Lemon ricotta pancakes",
    category: "Breakfast",
    time: 25,
    emoji: "🥞",
    tone: "tone-peach",
    description: "Cloud-soft, bright with lemon, and made for slow Sunday mornings.",
    rating: "4.9",
    ingredients: ["1 cup all-purpose flour", "¾ cup ricotta", "2 eggs", "½ cup milk", "Zest of 1 lemon", "1 tbsp sugar", "1 tsp baking powder", "Butter and maple syrup, to serve"],
    method: ["Whisk the flour, sugar, baking powder, and a pinch of salt in a bowl.", "In another bowl, whisk ricotta, eggs, milk, and lemon zest until smooth.", "Fold the wet ingredients into the dry ingredients until just combined.", "Cook small ladles of batter in a buttered pan over medium heat until bubbles form. Flip and cook until golden.", "Serve warm with maple syrup and a little extra lemon zest."]
  },
  {
    id: "green-goddess-bowl",
    name: "Green goddess bowl",
    category: "Lunch",
    time: 20,
    emoji: "🥑",
    tone: "tone-green",
    description: "A crunchy, herby bowl with a creamy dressing you'll want on everything.",
    rating: "4.8",
    ingredients: ["1 ripe avocado", "1 cup cooked quinoa", "½ cucumber, sliced", "1 cup shredded greens", "2 tbsp Greek yogurt", "1 handful fresh herbs", "Juice of ½ lemon"],
    method: ["Blend the yogurt, herbs, lemon juice, a splash of water, and a pinch of salt into a bright green dressing.", "Add the quinoa, cucumber, and greens to a bowl.", "Top with sliced avocado and drizzle generously with the dressing.", "Finish with cracked black pepper and any extra herbs."]
  },
  {
    id: "tomato-butter-pasta",
    name: "Tomato butter pasta",
    category: "Dinner",
    time: 30,
    emoji: "🍝",
    tone: "tone-lilac",
    description: "Jammy tomatoes, silky butter, and a little parmesan magic.",
    rating: "5.0",
    ingredients: ["300g pasta", "400g ripe cherry tomatoes", "3 tbsp salted butter", "2 garlic cloves, crushed", "½ tsp chili flakes", "½ cup grated parmesan", "Fresh basil"],
    method: ["Cook the pasta in generously salted water until just shy of al dente. Save a mug of pasta water.", "Melt the butter in a wide pan. Add garlic and chili flakes, then tumble in the tomatoes.", "Cook for 12–15 minutes, stirring now and then, until the tomatoes burst into a glossy sauce.", "Add the pasta and a splash of pasta water. Toss until silky, then fold in parmesan.", "Scatter with fresh basil and eat while it's lovely and hot."]
  },
  {
    id: "peach-and-honey-toast",
    name: "Peach & honey toast",
    category: "Breakfast",
    time: 10,
    emoji: "🍑",
    tone: "tone-yellow",
    description: "Sweet summer peaches, whipped yogurt, and golden honey on toast.",
    rating: "4.7",
    ingredients: ["2 thick slices sourdough", "½ cup thick Greek yogurt", "1 ripe peach", "1 tbsp honey", "A pinch of flaky salt"],
    method: ["Toast the sourdough until crisp at the edges.", "Spread each slice with a thick layer of Greek yogurt.", "Slice the peach and arrange it over the yogurt.", "Drizzle with honey and finish with flaky salt."]
  },
  {
    id: "crispy-chickpea-salad",
    name: "Crispy chickpea salad",
    category: "Lunch",
    time: 35,
    emoji: "🥗",
    tone: "tone-blue",
    description: "Smoky golden chickpeas meet crisp greens and a lemony tahini drizzle.",
    rating: "4.8",
    ingredients: ["1 can chickpeas, drained", "1 tsp smoked paprika", "4 cups crisp greens", "½ cucumber, chopped", "2 tbsp tahini", "Juice of 1 lemon", "2 tbsp olive oil"],
    method: ["Pat the chickpeas dry, toss with olive oil and paprika, and roast at 220°C for 25–30 minutes.", "Whisk the tahini and lemon juice with a splash of warm water until pourable.", "Arrange the greens and cucumber in a big bowl.", "Pile the crispy chickpeas on top and drizzle with the tahini dressing."]
  },
  {
    id: "brown-butter-cookies",
    name: "Brown butter cookies",
    category: "Dessert",
    time: 40,
    emoji: "🍪",
    tone: "tone-rose",
    description: "Crisp edges, soft middles, and pools of dark chocolate in every bite.",
    rating: "5.0",
    ingredients: ["115g unsalted butter", "¾ cup brown sugar", "1 egg", "1 tsp vanilla", "1¼ cups flour", "½ tsp baking soda", "¾ cup dark chocolate chunks"],
    method: ["Melt the butter in a small pan and let it turn nutty and amber. Cool for 10 minutes.", "Whisk the browned butter with brown sugar, egg, and vanilla.", "Fold in the flour, baking soda, a pinch of salt, and chocolate chunks.", "Chill the dough for 20 minutes while the oven heats to 180°C.", "Scoop onto a lined tray and bake for 10–12 minutes. Let them settle before sharing."]
  },
  {
    id: "miso-salmon-rice",
    name: "Miso salmon rice",
    category: "Dinner",
    time: 28,
    emoji: "🍣",
    tone: "tone-sage",
    description: "Sticky-sweet miso salmon over rice with a tangle of quick-pickled cucumber.",
    rating: "4.9",
    ingredients: ["2 salmon fillets", "1 tbsp white miso", "1 tbsp honey", "1 tsp soy sauce", "1 cup jasmine rice", "½ cucumber", "1 tbsp rice vinegar"],
    method: ["Cook the rice according to its package directions.", "Mix the miso, honey, and soy sauce, then brush over the salmon.", "Bake at 200°C for 12–15 minutes until just cooked and glossy.", "Thinly slice the cucumber and toss with rice vinegar and a pinch of salt.", "Serve the salmon over rice with the quick-pickled cucumber."]
  },
  {
    id: "strawberry-shortcake",
    name: "Strawberry shortcake",
    category: "Dessert",
    time: 50,
    emoji: "🍓",
    tone: "tone-sky",
    description: "Tender little biscuits, juicy berries, and clouds of softly whipped cream.",
    rating: "4.9",
    ingredients: ["2 cups strawberries, sliced", "2 tbsp sugar", "2 cups flour", "1 tbsp baking powder", "85g cold butter", "¾ cup cream, plus more to whip", "1 tsp vanilla"],
    method: ["Toss the strawberries with half the sugar and leave to get juicy.", "Rub the cold butter into the flour, remaining sugar, and baking powder.", "Stir in the cream just until a soft dough forms. Pat out and cut into rounds.", "Bake at 200°C for 15–18 minutes until golden. Cool slightly.", "Split the biscuits and fill with whipped cream and strawberries."]
  }
];

const westAfricanRecipes = [
  {
    id: "nigerian-jollof-rice", name: "Nigerian party jollof", category: "Dinner", origin: "Nigeria", region: "West African",
    time: 65, emoji: "🍚", tone: "tone-rose", description: "Smoky, peppery Nigerian tomato rice, finished low and slow for that party-style taste.",
    rating: "5.0",
    ingredients: ["3 cups parboiled long-grain rice, rinsed", "4 ripe tomatoes", "2 red bell peppers", "1–2 Scotch bonnet peppers, to taste", "1 large onion, divided", "⅓ cup neutral oil", "2 tbsp tomato paste", "2 cups chicken stock or water", "2 bay leaves", "1 tsp dried thyme", "1 tsp curry powder", "Salt and seasoning powder, to taste"],
    method: ["Blend the tomatoes, bell peppers, Scotch bonnet, and half the onion until smooth.", "Heat the oil in a heavy pot. Cook the remaining sliced onion and tomato paste for 3–4 minutes.", "Add the blended pepper mix. Simmer uncovered, stirring, until reduced and the oil begins to separate, about 20–25 minutes.", "Stir in the stock, bay leaves, thyme, curry powder, and salt. Taste; the sauce should be well seasoned.", "Add the rinsed rice and stir to coat. Cover tightly and cook on low for 30–35 minutes, stirring gently once or twice and adding a splash of stock if needed.", "Rest covered for 10 minutes, then fluff. For a smoky base, let the rice catch very slightly at the bottom before turning off the heat."]
  },
  {
    id: "nigerian-egusi-soup", name: "Egusi soup", category: "Dinner", origin: "Nigeria", region: "West African",
    time: 70, emoji: "🍲", tone: "tone-yellow", description: "A hearty Nigerian melon-seed soup with leafy greens, perfect with swallow.",
    rating: "4.9",
    ingredients: ["1 cup ground egusi (melon seeds)", "500g beef, chicken, or assorted meat", "1 smoked fish, deboned", "½ cup palm oil", "1 small onion, chopped", "2 tbsp ground crayfish", "1–2 Scotch bonnet peppers, blended", "3 cups stock or water", "3 cups chopped spinach or ugu", "Salt and seasoning, to taste"],
    method: ["Season the meat with salt, onion, and seasoning. Add water and simmer until tender; reserve the stock.", "Mix the ground egusi with a little water into a thick paste.", "Warm palm oil in a pot. Add egusi paste in small spoonfuls and fry gently for 8–10 minutes, turning the pieces.", "Add pepper, crayfish, smoked fish, cooked meat, and enough stock for a thick soup. Simmer for 20 minutes.", "Stir in the greens and cook for 3–5 minutes until just tender. Adjust seasoning and serve with eba, fufu, or pounded yam."]
  },
  {
    id: "nigerian-efo-riro", name: "Efo riro", category: "Dinner", origin: "Nigeria · Yoruba", region: "West African",
    time: 55, emoji: "🥬", tone: "tone-green", description: "A richly seasoned Yoruba spinach stew with peppers, smoked fish, and iru.",
    rating: "4.9",
    ingredients: ["500g fresh spinach or ugu, washed and chopped", "3 red bell peppers", "1–2 Scotch bonnet peppers", "1 onion", "⅓ cup palm oil", "1 tbsp ground crayfish", "1 tsp iru (fermented locust beans), rinsed", "200g cooked beef or assorted meat", "1 smoked fish, deboned", "Salt and seasoning, to taste"],
    method: ["Blend the bell peppers, Scotch bonnet, and half the onion coarsely.", "Heat palm oil in a pot. Add the remaining sliced onion and iru; cook for 1 minute.", "Add the pepper blend and simmer until reduced and the oil rises, about 20 minutes.", "Stir in crayfish, cooked meat, smoked fish, and a splash of stock. Simmer for 8 minutes.", "Fold in the greens and cook uncovered for 4–6 minutes. Season to taste and serve with rice, yam, or swallow."]
  },
  {
    id: "nigerian-beef-suya", name: "Beef suya", category: "Dinner", origin: "Nigeria · Hausa", region: "West African",
    time: 35, emoji: "🍢", tone: "tone-peach", description: "Street-style Nigerian beef skewers coated in fragrant yaji peanut spice.",
    rating: "4.8",
    ingredients: ["600g lean beef, thinly sliced", "3 tbsp ground roasted peanuts", "1 tbsp ground ginger", "1 tsp paprika", "1 tsp garlic powder", "½ tsp cayenne, to taste", "1 tsp ground onion", "2 tbsp neutral oil", "Salt, sliced onion, and tomato, to serve"],
    method: ["If using wooden skewers, soak them in water for 20 minutes. Heat the oven grill to high or prepare a hot barbecue.", "Mix the peanuts, ginger, paprika, garlic, cayenne, onion powder, and a pinch of salt.", "Thread the beef onto skewers. Brush lightly with oil, then press the spice mix over both sides.", "Grill, turning once, for 3–5 minutes per side, until browned and cooked through.", "Serve hot with sliced onion and tomato. Keep raw-meat marinade and utensils separate from cooked food."]
  },
  {
    id: "nigerian-akara", name: "Akara (bean fritters)", category: "Breakfast", origin: "Nigeria", region: "West African",
    time: 45, emoji: "🧆", tone: "tone-yellow", description: "Golden Nigerian black-eyed pea fritters, crisp outside and fluffy inside.",
    rating: "4.8",
    ingredients: ["2 cups peeled black-eyed peas or honey beans", "1 small onion, roughly chopped", "1 Scotch bonnet, optional", "½ tsp salt, or to taste", "Neutral oil, for deep frying"],
    method: ["Soak the beans for several hours if using dried beans, then rub off the skins and rinse well.", "Blend the peeled beans with the onion and just enough water to make a very thick, smooth batter. Blend in the pepper if using.", "Transfer to a bowl and beat briskly for 3–4 minutes to incorporate air; season with salt.", "Heat 5–6cm of oil in a deep pot to about 175°C. Carefully drop in spoonfuls of batter.", "Fry in batches for 4–6 minutes, turning, until puffed and deep golden. Drain and serve warm with pap or bread."]
  },
  {
    id: "nigerian-moi-moi", name: "Moi moi", category: "Lunch", origin: "Nigeria", region: "West African",
    time: 80, emoji: "🫘", tone: "tone-rose", description: "A savory steamed bean pudding, gently peppery and lovely with rice or pap.",
    rating: "4.8",
    ingredients: ["2 cups peeled black-eyed peas or honey beans", "1 red bell pepper", "1 small onion", "1 Scotch bonnet, to taste", "⅓ cup vegetable oil", "1½ cups water or stock", "2 hard-boiled eggs, quartered (optional)", "Salt and seasoning, to taste"],
    method: ["Soak and peel the beans, then rinse until the water runs clear.", "Blend the beans with the bell pepper, onion, Scotch bonnet, oil, and enough water to make a very smooth batter.", "Season the batter and stir well. It should pour easily but still feel creamy.", "Pour into heat-safe ramekins or banana-leaf parcels. Add egg pieces if using and cover each portion.", "Set the portions in a pot with a rack and a little hot water. Cover and steam gently for 45–55 minutes, topping up the water as needed.", "Check that the centers are set. Cool slightly before serving."]
  },
  {
    id: "ghanaian-waakye", name: "Waakye", category: "Lunch", origin: "Ghana", region: "West African",
    time: 75, emoji: "🍛", tone: "tone-sage", description: "Ghanaian rice and beans tinted by waakye leaves, served with your favorite sides.",
    rating: "4.9",
    ingredients: ["1 cup black-eyed peas", "2 cups long-grain rice, rinsed", "A handful dried waakye leaves (sorghum leaves), tied in a bundle", "5 cups water, plus more as needed", "½ tsp salt", "Gari, shito, boiled egg, or stew, to serve"],
    method: ["Rinse the beans and simmer in water with the waakye leaves until nearly tender, about 30–40 minutes.", "Add the rinsed rice and salt. Stir once, cover, and cook on low until the rice and beans are tender, about 20 minutes.", "Add a little hot water if the pot gets dry before the rice is done. Remove the leaves when cooking is complete.", "Fluff gently and serve with gari, shito, egg, and stew or your preferred accompaniments."]
  },
  {
    id: "ghanaian-kelewele", name: "Kelewele", category: "Snack", origin: "Ghana", region: "West African",
    time: 30, emoji: "🍌", tone: "tone-yellow", description: "Ghanaian ripe plantain cubes seasoned with ginger and warm spices, crisp at the edges.",
    rating: "4.8",
    ingredients: ["3 ripe but firm plantains", "1 tbsp grated fresh ginger", "½ tsp cayenne or Scotch bonnet, to taste", "½ tsp ground cloves", "½ tsp ground cinnamon", "½ tsp salt", "Neutral oil, for frying"],
    method: ["Peel the plantains and cut into bite-size cubes.", "Toss with ginger, cayenne, cloves, cinnamon, and salt. Rest for 10 minutes.", "Heat a shallow layer of oil in a heavy pan over medium heat.", "Fry the plantain in batches, turning occasionally, until golden and tender, about 4–6 minutes per batch.", "Drain and serve warm, traditionally with roasted peanuts."]
  },
  {
    id: "senegalese-thieboudienne", name: "Thieboudienne", category: "Dinner", origin: "Senegal", region: "West African",
    time: 100, emoji: "🐟", tone: "tone-blue", description: "Senegal’s beloved fish, rice, and vegetable one-pot, fragrant with parsley and tamarind.",
    rating: "5.0",
    ingredients: ["700g firm white fish, cut into large pieces", "2 cups broken rice or short-grain rice", "2 carrots, halved", "1 small cabbage, cut in wedges", "1 eggplant, quartered", "2 tbsp tomato paste", "2 tomatoes, chopped", "1 onion, chopped", "1 handful parsley, garlic, and chili, crushed together", "4 tbsp neutral oil", "1 tbsp tamarind paste", "5 cups water or stock", "Salt and black pepper"],
    method: ["Make a few cuts in the fish and fill them with the parsley, garlic, and chili mixture. Season lightly.", "Warm the oil in a large heavy pot. Brown the fish briefly on both sides, then remove.", "Cook the onion and tomato paste for 3 minutes. Add chopped tomatoes and simmer until thick.", "Add the water or stock, carrots, cabbage, and eggplant. Simmer until the vegetables are just tender; lift them out and keep warm.", "Return the fish to the pot and simmer gently until cooked through. Remove the fish and add tamarind to the broth.", "Stir in the rinsed rice. Cover and cook on low, adding a splash of water if needed, until tender. Serve the rice with fish, vegetables, and broth."]
  },
  {
    id: "west-african-peanut-stew", name: "West African peanut stew", category: "Dinner", origin: "Across West Africa", region: "West African",
    time: 55, emoji: "🥜", tone: "tone-lilac", description: "A cozy tomato and peanut stew with greens; make it with sweet potato for a hearty bowl.",
    rating: "4.9",
    ingredients: ["2 tbsp neutral oil", "1 onion, chopped", "2 garlic cloves, minced", "1 tbsp grated ginger", "2 tbsp tomato paste", "1 large sweet potato, cubed", "4 cups vegetable or chicken stock", "½ cup smooth peanut butter", "1 can chopped tomatoes", "3 cups chopped spinach or kale", "½ tsp chili flakes, to taste", "Salt, to taste"],
    method: ["Warm the oil in a pot. Cook the onion until soft, then add garlic and ginger for 1 minute.", "Stir in the tomato paste and cook for 2 minutes.", "Add sweet potato, stock, tomatoes, and chili flakes. Simmer until the potato is tender, about 20 minutes.", "Whisk the peanut butter with a ladle of hot broth until smooth, then stir it back into the pot.", "Simmer gently for 10 minutes, stirring often. Fold in the greens until wilted, season to taste, and serve with rice."]
  }
];

const internationalSnackRecipes = [
  {
    id: "nigerian-chin-chin", name: "Chin chin", category: "Snack", origin: "Nigeria", region: "West African",
    time: 45, emoji: "🍪", tone: "tone-yellow", description: "Crisp, lightly sweet Nigerian dough bites, perfect for sharing by the handful.",
    rating: "4.9",
    ingredients: ["3 cups all-purpose flour", "½ cup sugar", "½ tsp baking powder", "½ tsp ground nutmeg", "Pinch of salt", "3 tbsp butter", "1 egg", "½ cup milk", "Neutral oil, for frying"],
    method: ["Mix the flour, sugar, baking powder, nutmeg, and salt in a bowl.", "Rub in the butter until the mixture resembles fine crumbs.", "Whisk the egg and milk together, then stir into the flour to make a firm dough. Add a little flour if sticky.", "Roll the dough about ½ cm thick and cut into small squares.", "Fry in batches in medium-hot oil, stirring, until crisp and golden. Drain and cool completely before storing."]
  },
  {
    id: "nigerian-puff-puff", name: "Puff-puff", category: "Snack", origin: "Nigeria", region: "West African",
    time: 90, emoji: "🍩", tone: "tone-peach", description: "Soft, airy Nigerian fried dough balls with a gently golden outside.",
    rating: "4.9",
    ingredients: ["2 cups all-purpose flour", "¼ cup sugar", "2 tsp instant yeast", "¼ tsp salt", "1¼ cups warm water", "Neutral oil, for frying"],
    method: ["Combine flour, sugar, yeast, and salt. Gradually stir in warm water to make a thick, stretchy batter.", "Cover and leave in a warm place until doubled and bubbly, about 60 minutes.", "Heat a few centimeters of oil in a deep pot over medium heat.", "Scoop small portions of batter into the oil. Fry in batches, turning, until puffed and golden all over.", "Drain and serve warm. Check that the centers are cooked through."]
  },
  {
    id: "italian-arancini", name: "Arancini", category: "Snack", origin: "Italy · Sicily", region: "European",
    time: 70, emoji: "🍙", tone: "tone-yellow", description: "Crisp Sicilian rice balls with a savory center and a golden breadcrumb crust.",
    rating: "4.9",
    ingredients: ["3 cups cold cooked risotto or short-grain rice", "½ cup grated parmesan", "1 egg", "½ cup small mozzarella cubes", "¾ cup breadcrumbs", "½ cup flour", "2 eggs, beaten", "Neutral oil, for frying"],
    method: ["Stir the parmesan and one egg into the cold rice. Chill for 20 minutes if the mixture feels soft.", "Take a small handful of rice, flatten it, place a mozzarella cube in the center, and close the rice around it. Shape into a ball.", "Set up bowls of flour, beaten eggs, and breadcrumbs. Coat each rice ball in that order.", "Fry in batches in medium-hot oil, turning carefully, until deeply golden and hot in the center.", "Drain briefly and serve warm."]
  },
  {
    id: "italian-bruschetta", name: "Tomato bruschetta", category: "Snack", origin: "Italy", region: "European",
    time: 20, emoji: "🍅", tone: "tone-rose", description: "Toasted bread piled with ripe tomatoes, basil, garlic, and good olive oil.",
    rating: "4.8",
    ingredients: ["1 small baguette or rustic loaf", "3 ripe tomatoes, diced", "1 handful fresh basil, torn", "2 tbsp extra-virgin olive oil", "1 garlic clove, halved", "1 tsp red wine vinegar, optional", "Salt and black pepper"],
    method: ["Mix the tomatoes with basil, olive oil, vinegar if using, salt, and pepper. Leave to sit while you toast the bread.", "Slice the bread and toast or grill until golden at the edges.", "Rub the cut side of the garlic over the warm toast.", "Spoon the tomato mixture onto each slice just before serving."]
  },
  {
    id: "french-madeleines", name: "Lemon madeleines", category: "Snack", origin: "France", region: "European",
    time: 55, emoji: "🍋", tone: "tone-yellow", description: "Tender little French shell cakes with buttery edges and a bright hint of lemon.",
    rating: "4.9",
    ingredients: ["2 eggs", "⅔ cup sugar", "1 cup all-purpose flour", "½ tsp baking powder", "100g butter, melted and cooled", "Zest of 1 lemon", "1 tsp vanilla", "A little extra butter and flour for the pan"],
    method: ["Whisk the eggs and sugar until pale and fluffy, about 3 minutes.", "Gently fold in the flour and baking powder, followed by the melted butter, lemon zest, and vanilla.", "Cover and chill the batter for at least 30 minutes. Heat the oven to 190°C.", "Butter and flour a madeleine pan. Spoon batter into the molds, filling each about three-quarters full.", "Bake for 9–11 minutes until the edges are golden and the centers spring back. Cool briefly, then turn out."]
  },
  {
    id: "french-gougeres", name: "Gougères", category: "Snack", origin: "France · Burgundy", region: "European",
    time: 45, emoji: "🧀", tone: "tone-peach", description: "Airy French cheese puffs, best served warm from the oven.",
    rating: "4.8",
    ingredients: ["½ cup water", "½ cup milk", "75g butter", "½ tsp salt", "1 cup all-purpose flour", "4 eggs", "1 cup finely grated Gruyère or Comté", "Black pepper and a pinch of nutmeg"],
    method: ["Heat the oven to 200°C and line a baking tray.", "Bring the water, milk, butter, and salt to a boil in a saucepan. Remove from the heat and stir in the flour all at once.", "Return to low heat and stir vigorously for 1–2 minutes, until the dough forms a smooth ball and dries slightly.", "Let cool for 5 minutes. Beat in the eggs one at a time until glossy, then fold in the cheese, pepper, and nutmeg.", "Spoon small mounds onto the tray and bake for 20–25 minutes until puffed and golden. Serve warm."]
  },
  {
    id: "english-scones", name: "Classic English scones", category: "Snack", origin: "England", region: "European",
    time: 30, emoji: "🫖", tone: "tone-peach", description: "Light, tender English scones for a proper tea break with jam and cream.",
    rating: "4.9",
    ingredients: ["2 cups self-raising flour", "¼ tsp salt", "50g cold butter, cubed", "2 tbsp sugar", "⅔ cup milk, plus extra to glaze", "Jam and clotted cream, to serve"],
    method: ["Heat the oven to 220°C and line a baking tray.", "Rub the butter into the flour and salt until it resembles fine crumbs. Stir in the sugar.", "Add most of the milk and mix gently to make a soft dough, adding the rest only if needed.", "Pat the dough about 2cm thick on a floured surface. Cut rounds without twisting the cutter.", "Place on the tray, brush the tops with a little milk, and bake for 10–12 minutes until risen and golden.", "Cool slightly and serve with jam and clotted cream."]
  },
  {
    id: "english-sausage-rolls", name: "Mini sausage rolls", category: "Snack", origin: "England", region: "European",
    time: 40, emoji: "🥐", tone: "tone-yellow", description: "A party-table favorite: seasoned sausage wrapped in crisp, golden puff pastry.",
    rating: "4.8",
    ingredients: ["320g ready-rolled puff pastry", "400g good-quality sausage meat", "1 tsp English mustard, optional", "1 egg, beaten", "1 tsp sesame or poppy seeds, optional"],
    method: ["Heat the oven to 200°C and line a baking tray.", "Unroll the pastry and cut lengthwise into two long strips. If using, spread a thin line of mustard down each center.", "Shape the sausage meat into two even logs and place along the pastry strips.", "Brush one pastry edge with beaten egg, roll around the filling, and press to seal. Place seam-side down.", "Cut each log into bite-size rolls, brush with egg, and sprinkle with seeds if using.", "Bake for 20–25 minutes until puffed, deeply golden, and cooked through."]
  }
];

const categoryNames = ["All recipes", "Breakfast", "Lunch", "Dinner", "Snack", "Dessert"];
const emojiByCategory = { Breakfast: "🥞", Lunch: "🥗", Dinner: "🍲", Snack: "🍌", Dessert: "🍰" };
const toneByCategory = { Breakfast: "tone-peach", Lunch: "tone-green", Dinner: "tone-lilac", Snack: "tone-yellow", Dessert: "tone-yellow" };
const storageKeys = { recipes: "flavor-book-recipes-v1", favorites: "flavor-book-favorites-v1", clientId: "flavor-book-client-id-v1" };

function readStored(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    console.error(`Unable to read ${key} from local storage.`, error);
    return fallback;
  }
}

let recipes = [];
let favorites = [];
let activeView = "all";
let activeCategory = "all";
let activeRegion = "all";
let searchTerm = "";
let toastTimer;

const grid = document.querySelector("#recipe-grid");
const emptyState = document.querySelector("#empty-state");
const filterRow = document.querySelector("#filter-row");
const recipeDialog = document.querySelector("#recipe-dialog");
const formDialog = document.querySelector("#form-dialog");
const toast = document.querySelector("#toast");

async function apiRequest(path, options = {}) {
  const response = await fetch(path, {
    ...options,
    headers: { "Content-Type": "application/json", ...options.headers }
  });
  const result = await response.json();
  if (!response.ok) throw new Error(result.error || "The cookbook request failed.");
  return result;
}

function getClientId() {
  let clientId = localStorage.getItem(storageKeys.clientId);
  if (!clientId) {
    clientId = crypto.randomUUID();
    localStorage.setItem(storageKeys.clientId, clientId);
  }
  return clientId;
}

async function initializeApp() {
  try {
    const legacyRecipes = readStored(storageKeys.recipes, []);
    const legacyFavorites = readStored(storageKeys.favorites, []);
    recipes = await apiRequest("/api/recipes");
    if (!recipes.length || (Array.isArray(legacyRecipes) && legacyRecipes.length)) {
      const seedRecipes = [
        ...(recipes.length ? [] : [...starterRecipes, ...westAfricanRecipes, ...internationalSnackRecipes]),
        ...(Array.isArray(legacyRecipes) ? legacyRecipes : [])
      ];
      recipes = await apiRequest("/api/recipes/seed", {
        method: "POST",
        body: JSON.stringify({ recipes: seedRecipes })
      });
      localStorage.removeItem(storageKeys.recipes);
    }
    const clientId = getClientId();
    favorites = await apiRequest(`/api/favorites?client_id=${encodeURIComponent(clientId)}`);
    if (!favorites.length && Array.isArray(legacyFavorites)) {
      const knownIds = new Set(recipes.map((recipe) => recipe.id));
      for (const recipeId of legacyFavorites.filter((id) => knownIds.has(id))) {
        await apiRequest("/api/favorites", {
          method: "PUT",
          body: JSON.stringify({ clientId, recipeId, favorite: true })
        });
      }
      favorites = await apiRequest(`/api/favorites?client_id=${encodeURIComponent(clientId)}`);
      localStorage.removeItem(storageKeys.favorites);
    }
    renderRecipes();
  } catch (error) {
    console.error("Unable to load the cookbook from the backend.", error);
    renderRecipes();
    showToast(error.message || "Could not connect to the cookbook server. Please refresh and try again.");
  }
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("visible");
  toastTimer = window.setTimeout(() => toast.classList.remove("visible"), 2600);
}

function renderFilters() {
  const categoryFilters = categoryNames.map((name) => {
    const value = name === "All recipes" ? "all" : name;
    const selected = activeCategory === value && activeRegion === "all";
    return `<button class="filter-chip${selected ? " selected" : ""}" type="button" data-filter="${escapeHtml(value)}" aria-pressed="${selected}">${escapeHtml(name)}</button>`;
  }).join("");
  const regionalSelected = activeRegion === "West African";
  filterRow.innerHTML = `${categoryFilters}<button class="filter-chip${regionalSelected ? " selected" : ""}" type="button" data-region-filter="West African" aria-pressed="${regionalSelected}">West African</button>`;
}

function filteredRecipes() {
  let result = [...recipes];
  if (activeView === "favorites") result = result.filter((recipe) => favorites.includes(recipe.id));
  if (activeCategory !== "all") result = result.filter((recipe) => recipe.category === activeCategory);
  if (activeRegion !== "all") result = result.filter((recipe) => recipe.region === activeRegion);
  if (searchTerm) {
    const query = searchTerm.toLocaleLowerCase();
    result = result.filter((recipe) => [recipe.name, recipe.category, recipe.origin, recipe.region, recipe.description, ...(recipe.ingredients || [])]
      .some((value) => String(value).toLocaleLowerCase().includes(query)));
  }
  const sort = document.querySelector("#sort-select").value;
  if (sort === "quickest") result.sort((a, b) => Number(a.time) - Number(b.time));
  if (sort === "name") result.sort((a, b) => a.name.localeCompare(b.name));
  return result;
}

function recipeCard(recipe) {
  const favorite = favorites.includes(recipe.id);
  const emoji = recipe.emoji || emojiByCategory[recipe.category] || "🍽️";
  const tone = recipe.tone || toneByCategory[recipe.category] || "tone-green";
  return `<article class="recipe-card" data-recipe="${escapeHtml(recipe.id)}" tabindex="0" aria-label="View ${escapeHtml(recipe.name)} recipe">
    <div class="card-image ${escapeHtml(tone)}">
      <span class="card-category" title="${escapeHtml(recipe.category)}">${escapeHtml(recipe.origin || recipe.category)}</span>
      <span class="food-emoji" aria-hidden="true">${escapeHtml(emoji)}</span>
      <button class="favorite-button${favorite ? " is-favorite" : ""}" type="button" data-favorite="${escapeHtml(recipe.id)}" aria-label="${favorite ? "Remove from" : "Add to"} favorites" aria-pressed="${favorite}">${favorite ? "♥" : "♡"}</button>
    </div>
    <div class="card-content">
      <div class="card-title-row"><h3 class="card-title">${escapeHtml(recipe.name)}</h3><span class="card-time">${escapeHtml(recipe.time)} min</span></div>
      <p class="card-description">${escapeHtml(recipe.description || "A delicious addition to your collection.")}</p>
      <div class="card-meta"><span>♡ &nbsp; ${recipe.ingredients?.length || 0} ingredients</span><span class="card-rating">★ <span>${escapeHtml(recipe.rating || "5.0")}</span></span></div>
    </div>
  </article>`;
}

function renderRecipes() {
  renderFilters();
  const visibleRecipes = filteredRecipes();
  grid.innerHTML = visibleRecipes.map(recipeCard).join("");
  emptyState.hidden = visibleRecipes.length > 0;
  document.querySelector("#recipe-count").textContent = `(${visibleRecipes.length})`;
  document.querySelector("#all-count").textContent = recipes.length;
  document.querySelector("#recipes-heading").firstChild.textContent =
    activeRegion !== "all" ? "West African favorites " : activeView === "favorites" ? "Recipes you love " : activeCategory !== "all" ? `${activeCategory} favorites ` : "A taste of your collection ";
}

function setView(view, category = "all", region = "all") {
  activeView = view;
  activeCategory = category;
  activeRegion = region;
  document.querySelectorAll(".nav-link").forEach((button) => {
    const selected = button.dataset.view === view || (view === "all" && button.dataset.category === category && category !== "all" && region === "all") || (button.dataset.region === region && region !== "all");
    button.classList.toggle("active", Boolean(selected));
  });
  const current = region !== "all" ? region.toUpperCase() : view === "favorites" ? "FAVORITES" : category === "all" ? "ALL RECIPES" : category.toUpperCase();
  document.querySelector("#breadcrumb-current").textContent = current;
  document.querySelector("#page-title").innerHTML = region !== "all" ? "West African<br /><em>favorites.</em>" : view === "favorites" ? "The ones you<br /><em>love.</em>" : category === "all" ? "Recipes worth<br /><em>keeping.</em>" : `${escapeHtml(category)} worth<br /><em>savoring.</em>`;
  document.querySelector("#page-description").textContent = region !== "all"
    ? "A taste of Nigeria, Ghana, Senegal, and more from across West Africa."
    : view === "favorites"
    ? "All the recipes you’ve saved close to your heart."
    : category === "all"
      ? "The ones passed down, scribbled on napkins, and made again and again."
      : `A little collection of ${category.toLowerCase()} recipes, made with love.`;
  renderRecipes();
}

async function toggleFavorite(id) {
  const favorite = !favorites.includes(id);
  try {
    await apiRequest("/api/favorites", {
      method: "PUT",
      body: JSON.stringify({ clientId: getClientId(), recipeId: id, favorite })
    });
    favorites = favorite ? [...favorites, id] : favorites.filter((item) => item !== id);
    renderRecipes();
    showToast(favorite ? "Saved to your favorites." : "Removed from your favorites.");
  } catch (error) {
    showToast(error.message);
  }
}

function openRecipe(id) {
  const recipe = recipes.find((item) => item.id === id);
  if (!recipe) return;
  const ingredients = (recipe.ingredients || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  const method = (recipe.method || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  document.querySelector("#dialog-content").innerHTML = `
    <div class="detail-hero ${escapeHtml(recipe.tone || toneByCategory[recipe.category] || "tone-green")}"><span class="food-emoji" aria-hidden="true">${escapeHtml(recipe.emoji || emojiByCategory[recipe.category] || "🍽️")}</span></div>
    <div class="detail-body">
      <div class="detail-eyebrow">${escapeHtml(recipe.category)} · A RECIPE TO KEEP</div>
      <h2 class="detail-title" id="dialog-title">${escapeHtml(recipe.name)}</h2>
      <p class="detail-description">${escapeHtml(recipe.description || "")}</p>
      <div class="detail-stats"><span>◷ &nbsp;<strong>${escapeHtml(recipe.time)} min</strong></span><span>✧ &nbsp;<strong>${recipe.ingredients?.length || 0} ingredients</strong></span><span class="card-rating">★ <strong>${escapeHtml(recipe.rating || "5.0")}</strong></span></div>
      <div class="detail-columns"><section><h3>Gather up</h3><ul class="detail-list">${ingredients}</ul></section><section><h3>Make it</h3><ol class="detail-list">${method}</ol></section></div>
    </div>`;
  recipeDialog.showModal();
}

function openRecipeForm() {
  document.querySelector("#recipe-form").reset();
  formDialog.showModal();
}

document.querySelectorAll("[data-view]").forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.view));
});
document.querySelectorAll("[data-category]").forEach((button) => {
  button.addEventListener("click", () => setView("all", button.dataset.category));
});
document.querySelectorAll("[data-region]").forEach((button) => {
  button.addEventListener("click", () => setView("all", "all", button.dataset.region));
});
document.querySelector("#search-input").addEventListener("input", (event) => {
  searchTerm = event.target.value.trim();
  renderRecipes();
});
document.querySelector("#sort-select").addEventListener("change", renderRecipes);
filterRow.addEventListener("click", (event) => {
  const categoryButton = event.target.closest("[data-filter]");
  const regionButton = event.target.closest("[data-region-filter]");
  if (categoryButton) setView(activeView, categoryButton.dataset.filter);
  if (regionButton) setView(activeView, "all", regionButton.dataset.regionFilter);
});
grid.addEventListener("click", (event) => {
  const favoriteButton = event.target.closest("[data-favorite]");
  if (favoriteButton) {
    event.stopPropagation();
    toggleFavorite(favoriteButton.dataset.favorite);
    return;
  }
  const card = event.target.closest("[data-recipe]");
  if (card) openRecipe(card.dataset.recipe);
});
grid.addEventListener("keydown", (event) => {
  const card = event.target.closest("[data-recipe]");
  if (card && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    openRecipe(card.dataset.recipe);
  }
});
document.querySelector("#surprise-button").addEventListener("click", () => {
  const collection = filteredRecipes();
  if (!collection.length) {
    showToast("No recipes to surprise you with just yet.");
    return;
  }
  openRecipe(collection[Math.floor(Math.random() * collection.length)].id);
});
document.querySelector("#add-recipe-button").addEventListener("click", openRecipeForm);
document.querySelector("#empty-add-button").addEventListener("click", openRecipeForm);
document.querySelectorAll("[data-close-dialog]").forEach((button) => {
  button.addEventListener("click", () => button.closest("dialog").close());
});
[recipeDialog, formDialog].forEach((dialog) => dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
}));
document.querySelector("#recipe-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const submitButton = event.currentTarget.querySelector("[type=submit]");
  submitButton.disabled = true;
  const form = new FormData(event.currentTarget);
  const category = String(form.get("category"));
  const name = String(form.get("name")).trim();
  const recipe = {
    name,
    category,
    time: Number(form.get("time")),
    emoji: emojiByCategory[category] || "🍽️",
    tone: toneByCategory[category] || "tone-green",
    description: String(form.get("description")).trim() || "A new little favorite, made with love.",
    rating: "5.0",
    ingredients: String(form.get("ingredients")).split("\n").map((item) => item.trim()).filter(Boolean),
    method: String(form.get("method")).split("\n").map((item) => item.trim()).filter(Boolean)
  };
  if (!recipe.name || !recipe.ingredients.length || !recipe.method.length || recipe.time < 1) {
    showToast("Add a name, ingredients, method, and valid prep time.");
    submitButton.disabled = false;
    return;
  }
  try {
    const savedRecipe = await apiRequest("/api/recipes", {
      method: "POST",
      body: JSON.stringify(recipe)
    });
    recipes = [savedRecipe, ...recipes];
    formDialog.close();
    setView("all", "all");
    showToast(`${name} was added to your collection.`);
  } catch (error) {
    showToast(error.message);
  } finally {
    submitButton.disabled = false;
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "/" && !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    document.querySelector("#search-input").focus();
  }
});

initializeApp();
