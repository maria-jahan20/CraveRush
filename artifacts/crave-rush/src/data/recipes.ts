import type { Recipe } from '@/types';

export const recipeBook: Record<string, Recipe> = {
  'midnight-pancakes': {
    chefLine:
      'Stack, drizzle, pretend this was a difficult decision.',
    ingredients: [
      '1 cup pancake mix',
      '1 cup vanilla cloud cream',
      'A handful of berries',
      'Syrup with poor impulse control',
    ],
    steps: [
      'Whisk the mix until it looks committed.',
      'Cook three pancakes, flipping only when bubbles form on top and pop.',
      'Stack them like a tiny edible skyscraper.',
      'Add cream, berries, and an irresponsible syrup drizzle.',
      'Serve immediately, preferably while claiming you made it from scratch.',
    ],
  },

  'crush-burger': {
    chefLine:
      'Smash it flat, add cheese, call the chaos technique.',
    ingredients: [
      '1 brioche bun',
      '1 seasoned beef patty',
      '2 slices molten cheddar',
      'Pickles, onions, and burger sauce',
      '1 tbsp butter',
    ],
    steps: [
      'Heat a pan until it feels emotionally prepared.',
      'Smash the patty thin and cook until dramatically browned and crispy around the edges.',
      'Butter and toast the brioche bun on the hot pan until golden.',
      'Melt cheddar over the patty.',
      'Stack everything. Do not overthink it; the burger certainly did not.',
    ],
  },

  'disco-tacos': {
    chefLine:
      'Put three tiny parties in shells and hope the salsa behaves.',
    ingredients: [
      '3 crispy taco shells',
      'Seasoned filling',
      'Lime crema',
      'Neon salsa and shredded lettuce',
    ],
    steps: [
      'Warm the filling and pretend you measured the seasoning.',
      'Fill each shell with a generous amount of confidence.',
      'Add lettuce, crema, and salsa in colorful layers.',
      'Serve before the shells realize they are structurally doomed.',
    ],
  },

  'soft-serve-cloud': {
    chefLine:
      'Swirl, drizzle, and charge extra for the cloud-shaped delusion.',
    ingredients: [
      'Vanilla soft serve',
      'Burnt caramel sauce',
      'Crunchy topping',
      'One very optimistic cone',
    ],
    steps: [
      'Spin the soft serve into a tall swirl.',
      'Drizzle with caramel like you are signing a dessert contract.',
      'Add crunch and immediately take a photo.',
      'Eat quickly before physics files a complaint.',
    ],
  },

  'green-room-noodles': {
    chefLine:
      'Toss noodles, add chili crisp, look mysteriously well-rested.',
    ingredients: [
      'Glossy noodles',
      'Bok choy',
      'Chili crisp',
      'Soy, garlic, and sesame',
    ],
    steps: [
      'Boil noodles until they stop resisting.',
      'Toss with soy, garlic, sesame, and a suspicious amount of chili crisp.',
      'Fold in bok choy until bright and barely cooperative.',
      'Serve hot and accept compliments you did not earn.',
    ],
  },

  'electric-lemonade': {
    chefLine:
      'Add fizz, add ice, rename lemonade as a personality.',
    ingredients: [
      'Fresh lemon juice',
      'Sparkling water',
      'Ice',
      'Simple syrup and lemon wheels',
    ],
    steps: [
      'Stir lemon juice and syrup until the sourness has a budget.',
      'Fill a glass with ice.',
      'Top with sparkling water and stir gently.',
      'Garnish with a lemon wheel and a sense of superiority.',
    ],
  },

  'kacchi-biryani': {
    chefLine:
      'Layer it carefully, seal the pot, and let the biryani do the dramatic part.',
    ingredients: [
      '500g mutton, preferably bone-in',
      '2 cups basmati rice',
      '2 large potatoes, peeled and halved',
      '1 cup plain yogurt',
      '2 large onions, thinly sliced and fried',
      'Ginger-garlic paste',
      'Biryani spices, salt, and chili powder',
      '1/2 cup milk with saffron',
      'Ghee and mustard oil',
    ],
    steps: [
      'Marinate the mutton with yogurt, ginger-garlic paste, spices, salt, and mustard oil for at least 3-4 hours (or overnight).',
      'Parboil the rice with whole spices until about 60-70% cooked.',
      'Layer marinated raw mutton, fried potatoes, rice, fried onions, ghee, and saffron milk in a heavy pot.',
      'Seal the pot tightly with flour dough or heavy foil to lock in all steam (dum).',
      'Cook on low heat until the mutton is tender and the rice is fragrant.',
      'Gently fluff the layers and serve hot, preferably before everyone starts asking if it is ready.',
    ],
  },

  'chicken-biryani': {
    chefLine:
      'Layer rice, chicken, potatoes, and spices until your kitchen smells suspiciously expensive.',
    ingredients: [
      '500g chicken pieces',
      '2 cups basmati rice',
      '2 medium potatoes',
      '1 cup plain yogurt',
      '2 large onions, thinly sliced',
      'Ginger-garlic paste',
      'Biryani masala and whole spices',
      'Saffron milk',
      'Ghee, oil, and salt',
    ],
    steps: [
      'Marinate the chicken with yogurt, ginger-garlic paste, biryani spices, and salt.',
      'Parboil the rice with whole spices until about 70% cooked.',
      'Brown the potatoes and onions separately until golden.',
      'Layer chicken, potatoes, rice, fried onions, ghee, and saffron milk in a pot.',
      'Cover and cook on low heat until the chicken is tender and the rice is fluffy.',
    ],
  },

  'beef-tehari': {
    chefLine:
      'Cook the beef until tender, add fragrant rice, and let the green chilies handle the attitude.',
    ingredients: [
      '500g beef, cut into small pieces',
      '2 cups fragrant rice',
      '2 large onions, sliced',
      '6-8 green chilies',
      'Ginger-garlic paste',
      'Turmeric and chili powder',
      'Cumin, cinnamon, cardamom, and bay leaves',
      'Mustard oil',
      'Salt and water',
    ],
    steps: [
      'Heat mustard oil and fry the onions until lightly golden.',
      'Add beef, ginger-garlic paste, spices, and salt, then cook until the beef starts browning.',
      'Add water and simmer until the beef is tender and the gravy has reduced.',
      'Add washed rice and enough water for the rice to cook properly.',
      'Add green chilies, cover, and cook until the rice is fluffy and the beef is gloriously tender.',
    ],
  },

  'morog-polao': {
    chefLine:
      'Sweet, savory, buttery, fragrant — basically rice dressed for a wedding.',
    ingredients: [
      '500g chicken',
      '2 cups aromatic rice',
      '1 cup plain yogurt',
      '1 large onion, sliced',
      '2 tablespoons ghee',
      'Raisins and cashews',
      'Cinnamon, cardamom, and bay leaves',
      'Ginger-garlic paste',
      'Salt and sugar',
    ],
    steps: [
      'Marinate the chicken with yogurt, ginger-garlic paste, and salt.',
      'Cook the chicken with whole spices until tender and lightly browned.',
      'Wash and drain the rice, then sauté it briefly in ghee.',
      'Add water, salt, a small amount of sugar, and the cooked chicken.',
      'Cover and cook until the rice is fluffy, then finish with fried onions, raisins, and cashews.',
    ],
  },

  'chicken-roast': {
    chefLine:
      'Give the chicken a rich sauce, a pile of fried onions, and absolutely no reason to behave.',
    ingredients: [
      '4 chicken leg quarters',
      '1 cup plain yogurt',
      'Ginger-garlic paste',
      '1/2 cup milk or cream',
      'Fried onions',
      'Cinnamon, cardamom, and cloves',
      'Chili powder and garam masala',
      'Ghee or oil',
      'Salt and a little sugar',
    ],
    steps: [
      'Marinate the chicken with yogurt, ginger-garlic paste, chili powder, and salt.',
      'Brown the chicken pieces in oil or ghee until golden.',
      'Add whole spices and cook until fragrant.',
      'Add yogurt, milk or cream, fried onions, and a little sugar, then simmer until the sauce thickens.',
      'Cook until the chicken is tender and coated in the rich creamy gravy.',
    ],
  },

  'khabsa': {
    chefLine:
      'Spice the rice, roast the chicken, and make your kitchen smell like a five-star hotel.',
    ingredients: [
      '500g chicken',
      '2 cups long-grain rice',
      '1 onion, chopped',
      '2 tomatoes, chopped',
      'Carrots and bell peppers',
      'Khabsa spice blend',
      'Raisins',
      'Cinnamon, cardamom, and cloves',
      'Salt, oil, and chicken stock',
    ],
    steps: [
      'Brown the chicken in oil with cinnamon, cardamom, and cloves.',
      'Add onion and vegetables and cook until softened.',
      'Add tomatoes and khabsa spices and cook until the mixture becomes rich and fragrant.',
      'Add rice and chicken stock, then return the chicken to the pot.',
      'Cover and simmer until the rice is tender, then finish with raisins and serve hot.',
    ],
  },

  'beef-kala-bhuna': {
    chefLine:
      'Cook it slowly until the beef turns dark, glossy, and completely forgets what hurry means.',
    ingredients: [
      '750g beef, preferably with some fat',
      '3 large onions, sliced',
      'Ginger-garlic paste',
      'Cumin and coriander powder',
      'Chili powder and turmeric',
      'Garam masala and whole spices',
      'Mustard oil',
      'Green chilies',
      'Salt',
      'Sliced shallots and garlic (for tempering)',
    ],
    steps: [
      'Heat mustard oil and cook the onions until deeply golden.',
      'Add beef, ginger-garlic paste, spices, and salt.',
      'Cook uncovered while stirring regularly until the beef releases its juices.',
      'Continue cooking slowly until the liquid reduces and the meat becomes dark and richly coated.',
      'Add green chilies and a little water if needed, then cook until tender.',
      'Finish with a quick tempering (bagar) of garlic and shallots fried in hot mustard oil for that signature dark sheen.',
    ],
  },

  'beef-bhuna': {
    chefLine:
      'Keep stirring until the gravy disappears and the beef realizes it has nowhere left to hide.',
    ingredients: [
      '500g beef cubes',
      '2 large onions, finely sliced',
      'Ginger-garlic paste',
      'Tomato, chopped',
      'Chili powder and turmeric',
      'Cumin and coriander powder',
      'Garam masala',
      'Green chilies',
      'Oil and salt',
    ],
    steps: [
      'Brown the beef in hot oil with ginger-garlic paste.',
      'Add onions and cook until deeply caramelized.',
      'Add tomato and all the ground spices, then cook until the oil begins separating.',
      'Add a little water, cover, and simmer until the beef is tender.',
      'Cook uncovered until the gravy becomes thick and clings to every piece of beef.',
    ],
  },

  'chicken-bhuna': {
    chefLine:
      'Brown the onions, roast the spices, and let the chicken swim in its own delicious consequences.',
    ingredients: [
      '500g chicken pieces',
      '2 onions, finely sliced',
      'Ginger-garlic paste',
      'Tomato, chopped',
      'Turmeric and chili powder',
      'Cumin and coriander powder',
      'Garam masala',
      'Green chilies',
      'Oil and salt',
    ],
    steps: [
      'Heat oil and brown the chicken pieces lightly.',
      'Add onions and cook until golden and soft.',
      'Add ginger-garlic paste, tomato, and spices and cook until the oil separates.',
      'Add a small amount of water and simmer until the chicken is cooked through.',
      'Cook uncovered until the sauce becomes thick, glossy, and deeply flavorful.',
    ],
  },

  'shorshe-ilish': {
    chefLine:
      'Grind the mustard, bring out the hilsa, and let Bengali cuisine do what Bengali cuisine does.',
    ingredients: [
      '4 pieces hilsa fish',
      '3 tablespoons mustard seeds',
      '2 tablespoons mustard oil',
      '4 green chilies',
      '1/2 teaspoon turmeric',
      'Salt',
      'A little water',
    ],
    steps: [
      'Soak mustard seeds briefly and blend them with green chili, a pinch of salt, and water into a smooth paste to avoid bitterness.',
      'Season the hilsa with turmeric and salt.',
      'Heat mustard oil and lightly fry the fish pieces on both sides.',
      'Mix the mustard paste with water, turmeric, and salt and pour it over the fish.',
      'Add green chilies, cover, and simmer gently until cooked.',
      'Drizzle a raw splash of mustard oil right before turning off the heat for that sharp kick.',
    ],
  },

  'rui-fish-curry': {
    chefLine:
      'Fry the fish, build the gravy, and let the potatoes pretend they are the main character.',
    ingredients: [
      '4 pieces rohu fish',
      '2 potatoes, cut into wedges',
      '1 tomato, chopped',
      'Turmeric',
      'Red chili powder',
      'Cumin powder',
      'Green chilies',
      'Mustard or vegetable oil',
      'Salt and water',
    ],
    steps: [
      'Season the fish with turmeric and salt and lightly fry until golden.',
      'Fry the potatoes until lightly browned.',
      'Cook tomato, turmeric, chili, and cumin in oil until fragrant.',
      'Add water and bring the gravy to a simmer.',
      'Add potatoes and fish, then cook until the potatoes are tender and the gravy is flavorful.',
    ],
  },

  'chingri-bhuna': {
    chefLine:
      'Make the onions sweet, make the prawns spicy, and pretend you did not eat three before serving.',
    ingredients: [
      '400g prawns, cleaned',
      '2 onions, sliced',
      '1 tomato, chopped',
      'Ginger-garlic paste',
      'Turmeric and chili powder',
      'Cumin powder',
      'Green chilies',
      'Mustard oil',
      'Salt',
    ],
    steps: [
      'Season the prawns with turmeric and salt and lightly fry them.',
      'Cook onions until golden, then add ginger-garlic paste and tomato.',
      'Add spices and cook until the oil separates from the mixture.',
      'Add the prawns and green chilies and toss everything together.',
      'Cook briefly until the prawns are tender and coated in the thick bhuna sauce.',
    ],
  },

  'alu-bhorta': {
    chefLine:
      'Mash potatoes, add mustard oil, and suddenly plain potatoes have opinions.',
    ingredients: [
      '4 medium potatoes',
      '1 small onion, finely chopped',
      '2-3 green chilies (or roasted dried red chilies)',
      '1 tablespoon mustard oil',
      'Fresh coriander',
      'Salt',
    ],
    steps: [
      'Boil the potatoes until completely tender.',
      'Peel and mash them while still warm.',
      'Optionally roast dried red chilies (sukna morich) in hot mustard oil for a smoky kick.',
      'Add onion, green chilies or roasted chilies, coriander, salt, and mustard oil.',
      'Mix everything thoroughly with your hands or a spoon.',
      'Taste, adjust the mustard oil, and serve with hot rice.',
    ],
  },

  'begun-bhorta': {
    chefLine:
      'Char the eggplant until smoky, mash aggressively, and call it rustic.',
    ingredients: [
      '2 large eggplants',
      '1 small onion, chopped',
      '2-3 green chilies',
      'Fresh coriander',
      '1 tablespoon mustard oil',
      'Salt',
    ],
    steps: [
      'Roast the eggplants over an open flame or under a broiler until the skin is charred and the inside is soft.',
      'Remove the skin and mash the smoky flesh.',
      'Add chopped onion, green chilies, coriander, salt, and mustard oil.',
      'Mix thoroughly until everything becomes one smoky, spicy mixture.',
      'Serve with hot rice and enjoy the fact that eggplant just became interesting.',
    ],
  },

  'khichuri': {
    chefLine:
      'Rice plus lentils plus rain outside equals permission to eat three bowls.',
    ingredients: [
      '1 cup rice',
      '1/2 cup moong or masoor dal',
      '1 cup mixed vegetables',
      '1 onion, sliced',
      'Ginger-garlic paste',
      'Turmeric and cumin',
      'Green chilies',
      'Ghee',
      'Salt and water',
    ],
    steps: [
      'Wash the rice and lentils together until the water runs mostly clear.',
      'Heat ghee and sauté onion, ginger-garlic paste, and spices.',
      'Add vegetables, rice, and lentils and stir everything together.',
      'Add water and salt, then bring to a boil.',
      'Cover and simmer until everything becomes soft, creamy, and comforting.',
    ],
  },

  'shawarma': {
    chefLine:
      'Marinate the chicken, toast the wrap, and roll it tighter than your last life decision.',
    ingredients: [
      '500g chicken breast or thigh',
      'Yogurt',
      'Garlic',
      'Lemon juice',
      'Cumin, paprika, and black pepper',
      'Flatbread',
      'Lettuce and tomato',
      'Garlic sauce',
      'Salt',
    ],
    steps: [
      'Marinate chicken with yogurt, garlic, lemon juice, spices, and salt.',
      'Cook the chicken in a hot pan until browned and fully cooked.',
      'Slice the chicken into thin strips.',
      'Spread garlic sauce over warm flatbread and add chicken and fresh vegetables.',
      'Roll tightly and toast briefly before serving.',
    ],
  },

  'fuchka': {
    chefLine:
      'Punch a hole, stuff the shell, drown it in tamarind water, and eat immediately.',
    ingredients: [
      'Crispy fuchka shells',
      'Boiled potatoes',
      'Cooked chickpeas',
      'Tamarind pulp',
      'Green chilies',
      'Cumin and chili powder',
      'Chopped onion and coriander',
      'Salt',
    ],
    steps: [
      'Mash boiled potatoes with chickpeas, onion, green chili, spices, and salt.',
      'Prepare tangy tamarind water with tamarind pulp, spices, salt, and chilled water.',
      'Make a small hole in each crispy shell.',
      'Fill with the potato-chickpea mixture.',
      'Dip or pour in tamarind water and eat immediately before the shell gives up.',
    ],
  },

  'chotpoti': {
    chefLine:
      'Boil the chickpeas, pile on the toppings, and make tangy chaos in a bowl.',
    ingredients: [
      '2 cups cooked chickpeas',
      '2 potatoes, boiled and cubed',
      '2 eggs, boiled',
      'Tamarind pulp',
      'Chopped onion and cucumber',
      'Green chilies',
      'Coriander',
      'Roasted cumin and chili powder',
      'Salt',
    ],
    steps: [
      'Combine cooked chickpeas and boiled potatoes in a large bowl.',
      'Add tamarind sauce, roasted cumin, chili powder, and salt.',
      'Mix in chopped onion, cucumber, green chilies, and coriander.',
      'Top with sliced boiled eggs.',
      'Serve immediately while the potatoes are warm and the tamarind is aggressively tangy.',
    ],
  },

  'tandoori-chicken': {
    chefLine:
      'Marinate overnight, turn it bright red, and let the grill take all the credit.',
    ingredients: [
      '4 chicken leg quarters',
      '1 cup plain yogurt',
      'Lemon juice',
      'Ginger-garlic paste',
      'Tandoori masala',
      'Kashmiri chili powder',
      'Turmeric',
      'Oil',
      'Salt',
    ],
    steps: [
      'Make deep cuts in the chicken so the marinade can get properly involved.',
      'Mix yogurt, lemon juice, ginger-garlic paste, spices, oil, and salt.',
      'Coat the chicken thoroughly and marinate for several hours or overnight.',
      'Roast or grill at high heat until the chicken is cooked and charred around the edges.',
      'Brush with a little oil and grill for another minute before serving.',
    ],
  },

  'mishti-doi': {
    chefLine:
      'Caramelize the sugar, stir in the yogurt, and then practice the difficult art of waiting.',
    ingredients: [
      '1 liter full-fat milk',
      '1/2 cup sugar',
      '2 tablespoons plain yogurt with live cultures',
      'A little water',
    ],
    steps: [
      'Heat the milk and simmer until it reduces slightly.',
      'Caramelize the sugar in a separate pan until golden, then carefully add a little water.',
      'Mix the caramelized sugar into the warm milk.',
      'Let the milk cool until lukewarm (comfortably warm to the touch), then stir in the yogurt starter.',
      'Pour into clay pots or bowls and leave undisturbed until set, then chill before serving.',
    ],
  },

  'firni': {
    chefLine:
      'Grind the rice, simmer the milk, chill the whole thing, and suddenly dinner has a sequel.',
    ingredients: [
      '1 liter full-fat milk',
      '1/4 cup rice',
      '1/2 cup sugar',
      'Cardamom powder',
      'Crushed pistachios and almonds',
      'Rose water, optional',
    ],
    steps: [
      'Soak the rice, drain it, and grind it into a coarse paste.',
      'Bring milk to a simmer and gradually add the ground rice.',
      'Cook on low heat while stirring until the mixture thickens.',
      'Add sugar and cardamom and cook for another few minutes.',
      'Pour into small bowls, garnish with nuts, chill thoroughly, and serve cold.',
    ],
  },

  'payesh': {
    chefLine:
      'Keep stirring the milk until patience becomes a dessert.',
    ingredients: [
      '1 liter full-fat milk',
      '1/4 cup aromatic rice',
      '1/2 cup sugar',
      'Cardamom',
      'Bay leaf',
      'Raisins and chopped nuts',
    ],
    steps: [
      'Wash the rice and drain it well.',
      'Bring milk to a gentle simmer with a bay leaf and cardamom.',
      'Add the rice and cook slowly, stirring regularly so nothing sticks.',
      'When the rice is soft and the milk has thickened, add sugar.',
      'Finish with raisins and nuts, then chill or serve warm depending on your mood.',
    ],
  },

  'roshogolla': {
    chefLine:
      'Turn milk into chhana, roll tiny clouds, and let sugar syrup do the rest.',
    ingredients: [
      '1 liter full-fat milk',
      '2 tablespoons lemon juice',
      '1 cup sugar',
      '4 cups water',
      '1 teaspoon rose water, optional',
    ],
    steps: [
      'Bring the milk to a boil and add lemon juice gradually until it curdles.',
      'Strain the chhana through a clean cloth, rinse well, and hang for 30 minutes to drain excess whey.',
      'Knead the chhana until completely smooth, then form small balls without cracks.',
      'Boil sugar and water to make a light syrup.',
      'Add the balls to the boiling syrup, cover, and cook until they expand and become spongy.',
      'Cool slightly and serve soaked in syrup.',
    ],
  },
  
  
'smash-burger': {
  chefLine:
    'Smash the beef hard, build those crispy edges, and let melted cheese seal the deal.',
  ingredients: [
    '200 g ground beef',
    '2 burger buns',
    '2 slices cheddar cheese',
    '2 tablespoons mayonnaise',
    '1 tablespoon ketchup',
    '1 small lettuce leaf',
    '2 tomato slices',
    '1 tablespoon butter',
    'Salt and black pepper',
  ],
  steps: [
    'Divide the ground beef into two loose balls without overworking the meat.',
    'Heat a heavy skillet until very hot, place the beef balls in the pan, and press them firmly into thin patties.',
    'Season with salt and black pepper and cook until the edges become deeply browned and crispy.',
    'Flip the patties, place cheese on top, and cook until the cheese melts completely.',
    'Toast the burger buns in butter until lightly golden.',
    'Spread mayonnaise and ketchup on the buns, then layer lettuce, tomato, the cheesy patties, and the top bun.',
    'Serve immediately while the patties are hot and the edges are crisp.',
  ],
},

'mandi': {
  chefLine:
    'Spice the chicken, perfume the rice, and let slow cooking create that unmistakable mandi aroma.',
  ingredients: [
    '500 g chicken pieces',
    '2 cups basmati rice',
    '1 onion, sliced',
    '3 tablespoons oil',
    '1 cinnamon stick',
    '4 cardamom pods',
    '4 cloves',
    '1 teaspoon cumin',
    '1 teaspoon coriander powder',
    '1 teaspoon black pepper',
    '1 teaspoon turmeric',
    '1 teaspoon salt',
    '3 cups chicken stock or water',
    '2 tablespoons raisins, optional',
  ],
  steps: [
    'Wash the basmati rice until the water runs mostly clear and soak for 20 minutes.',
    'Season the chicken with salt, turmeric, cumin, coriander, black pepper, and a little oil.',
    'Brown the chicken in a large pot until lightly golden, then remove and set aside.',
    'In the same pot, sauté the onion with cinnamon, cardamom, and cloves until fragrant.',
    'Add the drained rice and stir gently to coat it with the spices.',
    'Pour in the chicken stock, return the chicken to the pot, and bring everything to a boil.',
    'Cover, reduce the heat, and cook until the rice is fluffy and the chicken is tender.',
    'Rest covered for 10 minutes before fluffing the rice and serving with the chicken.',
  ],
},

'pizza': {
  chefLine:
    'Stretch the dough, layer the sauce, drown it in cheese, and let the oven do the magic.',
  ingredients: [
    '250 g pizza dough',
    '1/2 cup tomato pizza sauce',
    '150 g mozzarella cheese',
    '1 tablespoon olive oil',
    '1 teaspoon dried oregano',
    '1/2 teaspoon chili flakes, optional',
    'Salt to taste',
  ],
  steps: [
    'Preheat the oven to its highest setting, ideally around 240–250°C.',
    'Stretch the pizza dough into a round shape and place it on a baking tray or pizza stone.',
    'Spread tomato sauce evenly over the dough, leaving a small border around the edge.',
    'Cover generously with grated mozzarella and sprinkle with oregano and chili flakes.',
    'Drizzle lightly with olive oil.',
    'Bake until the crust is golden and the cheese is bubbling and lightly browned.',
    'Rest for a minute or two, slice, and serve hot.',
  ],
},

'blue-ocean-mojito': {
  chefLine:
    'Muddle the mint, wake up the lime, and pour in a little blue for a tropical-looking refresher.',
  ingredients: [
    '8–10 fresh mint leaves',
    '1/2 lime, cut into wedges',
    '2 teaspoons sugar',
    '30 ml blue curaçao syrup',
    '150 ml chilled soda water',
    'Ice cubes',
    'Lime slice and mint sprig for garnish',
  ],
  steps: [
    'Place the lime wedges, sugar, and mint leaves in a tall glass.',
    'Gently muddle them to release the lime juice and mint aroma without crushing the mint too aggressively.',
    'Fill the glass with ice.',
    'Pour in the blue curaçao syrup and top with chilled soda water.',
    'Stir gently to combine while keeping the drink fizzy.',
    'Garnish with a lime slice and fresh mint before serving.',
  ],
},

'beef-cheese-burger': {
  chefLine:
    'Build a juicy beef patty, melt the cheese right on top, and stack it high between toasted buns.',
  ingredients: [
    '200 g ground beef',
    '2 burger buns',
    '2 slices cheddar cheese',
    '1 tablespoon mayonnaise',
    '1 tablespoon ketchup',
    'Lettuce leaves',
    '2 tomato slices',
    '2 onion rings',
    '1 tablespoon butter',
    'Salt and black pepper',
  ],
  steps: [
    'Season the ground beef with salt and black pepper and shape it into two patties.',
    'Heat a skillet over medium-high heat and cook the patties until browned and cooked through.',
    'Place a slice of cheese on each patty during the final minute and let it melt.',
    'Toast the burger buns with butter until lightly golden.',
    'Spread mayonnaise and ketchup over the buns.',
    'Layer lettuce, tomato, onion, the cheesy beef patties, and the top bun.',
    'Serve hot with the melted cheese still gooey.',
  ],
},

'egg-sandwich': {
  chefLine:
    'Whisk the eggs, cook them softly, and tuck them into golden toast for the easiest comfort bite.',
  ingredients: [
    '2 eggs',
    '2 slices sandwich bread',
    '1 tablespoon mayonnaise',
    '1 tablespoon butter',
    '1 tablespoon chopped onion',
    '1 tablespoon chopped tomato',
    '1 tablespoon chopped bell pepper',
    'Salt and black pepper',
  ],
  steps: [
    'Beat the eggs with salt and black pepper.',
    'Melt butter in a pan and lightly sauté the onion, tomato, and bell pepper.',
    'Pour in the beaten eggs and gently scramble until just cooked and creamy.',
    'Toast the bread slices until golden.',
    'Spread mayonnaise over the toast and place the cooked egg mixture between the slices.',
    'Cut in half and serve warm.',
  ],
},

'chicken-burger': {
  chefLine:
    'Give the chicken a crunchy coating, fry it golden, and finish it with cool sauce and crisp lettuce.',
  ingredients: [
    '2 chicken breast fillets',
    '2 burger buns',
    '1/2 cup flour',
    '1/2 cup breadcrumbs',
    '1 egg',
    '1/2 teaspoon paprika',
    '1/2 teaspoon garlic powder',
    'Lettuce leaves',
    '2 tablespoons mayonnaise',
    '1 tablespoon ketchup',
    'Oil for frying',
    'Salt and black pepper',
  ],
  steps: [
    'Season the chicken with salt, pepper, paprika, and garlic powder.',
    'Coat each fillet in flour, dip into beaten egg, and cover thoroughly with breadcrumbs.',
    'Heat oil over medium heat and fry the chicken until golden and cooked through.',
    'Mix mayonnaise and ketchup to make a simple burger sauce.',
    'Toast the buns lightly.',
    'Spread the sauce over the buns and add lettuce and the crispy chicken.',
    'Close the burger and serve immediately.',
  ],
},

'faluda': {
  chefLine:
    'Layer creamy milk, sweet syrup, silky vermicelli, and cold toppings until every spoonful feels like dessert.',
  ingredients: [
    '2 cups chilled milk',
    '2 tablespoons rose syrup',
    '1/2 cup cooked vermicelli',
    '2 tablespoons soaked basil seeds',
    '2 scoops vanilla ice cream',
    '1 tablespoon chopped nuts',
    '1 teaspoon sugar, optional',
  ],
  steps: [
    'Cook the vermicelli according to the package instructions, then rinse and chill.',
    'Soak the basil seeds in water for 10–15 minutes until they swell.',
    'Mix the chilled milk with sugar if extra sweetness is desired.',
    'Add rose syrup to the bottom of a tall glass.',
    'Layer in the soaked basil seeds and cooked vermicelli.',
    'Pour in the chilled milk and top with vanilla ice cream.',
    'Finish with chopped nuts and a small drizzle of rose syrup.',
  ],
},

'lassi': {
  chefLine:
    'Blend thick yogurt with cold milk and a touch of sweetness until the glass turns silky and refreshing.',
  ingredients: [
    '1 cup plain yogurt',
    '1/2 cup chilled milk',
    '2 tablespoons sugar',
    '1/4 teaspoon cardamom powder',
    'Ice cubes',
  ],
  steps: [
    'Add yogurt, chilled milk, sugar, and cardamom to a blender.',
    'Blend until completely smooth and lightly frothy.',
    'Add a few ice cubes and blend briefly again.',
    'Taste and adjust the sweetness if needed.',
    'Pour into a chilled glass and serve immediately.',
  ],
},

'americano': {
  chefLine:
    'Pull a bold espresso shot, add hot water, and keep it simple for a clean coffee hit.',
  ingredients: [
    '2 shots espresso',
    '120 ml hot water',
  ],
  steps: [
    'Prepare two fresh shots of espresso.',
    'Heat the water until hot but not boiling.',
    'Pour the hot water into a cup.',
    'Add the espresso shots gently over the water.',
    'Serve immediately.',
  ],
},

'latte': {
  chefLine:
    'Pull rich espresso, steam the milk until silky, and bring the two together under a cloud of foam.',
  ingredients: [
    '2 shots espresso',
    '200 ml milk',
  ],
  steps: [
    'Prepare two fresh shots of espresso and pour them into a large cup.',
    'Heat and steam the milk until hot and silky with a thin layer of foam.',
    'Slowly pour the steamed milk over the espresso.',
    'Spoon a small layer of foam over the top.',
    'Serve hot.',
  ],
},

'espresso': {
  chefLine:
    'Grind the beans fine, pull a short concentrated shot, and let the aroma speak for itself.',
  ingredients: [
    '18 g finely ground espresso coffee',
    '30–40 ml filtered water',
  ],
  steps: [
    'Fill the espresso machine basket with finely ground coffee.',
    'Tamp the coffee evenly and firmly.',
    'Lock the portafilter into the machine.',
    'Extract the espresso for roughly 25–30 seconds.',
    'Serve immediately in a small preheated cup.',
  ],
},

'fruit-salad': {
  chefLine:
    'Cut everything fresh, toss it gently, and let colorful fruit become the dessert.',
  ingredients: [
    '1 apple, diced',
    '1 banana, sliced',
    '1/2 cup grapes',
    '1/2 cup watermelon, diced',
    '1/2 cup pineapple, diced',
    '1/2 cup orange segments',
    '1 tablespoon honey',
    '1 teaspoon lemon juice',
  ],
  steps: [
    'Wash and prepare all the fruits, cutting them into bite-sized pieces.',
    'Place the fruits in a large bowl.',
    'Mix honey and lemon juice in a small bowl.',
    'Pour the dressing over the fruit.',
    'Toss gently so the fruit stays intact.',
    'Chill briefly and serve fresh.',
  ],
},

'cashew-nut-salad': {
  chefLine:
    'Keep the vegetables crisp, toast the cashews, and toss everything with a bright dressing.',
  ingredients: [
    '1 cup lettuce, chopped',
    '1/2 cucumber, sliced',
    '1 tomato, chopped',
    '1/2 carrot, julienned',
    '1/4 cup roasted cashews',
    '1 tablespoon olive oil',
    '1 teaspoon lemon juice',
    'Salt and black pepper',
  ],
  steps: [
    'Wash and prepare all the vegetables.',
    'Place lettuce, cucumber, tomato, and carrot in a bowl.',
    'Whisk olive oil, lemon juice, salt, and black pepper together.',
    'Pour the dressing over the vegetables.',
    'Toss gently until everything is lightly coated.',
    'Top with roasted cashews and serve immediately.',
  ],
},

'shakshuka': {
  chefLine:
    'Let tomatoes and peppers simmer into a rich sauce, then nestle eggs into the bubbling pan.',
  ingredients: [
    '4 eggs',
    '3 tomatoes, chopped',
    '1/2 onion, diced',
    '1 bell pepper, diced',
    '2 cloves garlic, minced',
    '2 tablespoons olive oil',
    '1 teaspoon paprika',
    '1/2 teaspoon cumin',
    '1/2 teaspoon chili flakes',
    'Salt and black pepper',
    'Fresh coriander for garnish',
  ],
  steps: [
    'Heat olive oil in a skillet and sauté the onion and bell pepper until softened.',
    'Add garlic, paprika, cumin, and chili flakes and cook for about 30 seconds.',
    'Add the chopped tomatoes and season with salt and black pepper.',
    'Simmer until the tomatoes break down into a thick sauce.',
    'Make four small wells in the sauce and crack an egg into each one.',
    'Cover the pan and cook until the egg whites are set while the yolks remain slightly soft.',
    'Garnish with fresh coriander and serve hot.',
  ],
},

'luch-alur-dom': {
  chefLine:
    'Fry the luchi until it puffs, simmer the potatoes in Bengali spices, and serve them together while hot.',
  ingredients: [
    '2 cups all-purpose flour',
    '1 tablespoon oil',
    '1/2 teaspoon salt',
    'Water as needed',
    '4 medium potatoes, boiled and cubed',
    '1 onion, chopped',
    '1 tomato, chopped',
    '1 teaspoon ginger paste',
    '1/2 teaspoon turmeric',
    '1 teaspoon cumin',
    '1 teaspoon garam masala',
    '2 tablespoons oil',
    'Salt to taste',
  ],
  steps: [
    'Mix flour, salt, and oil, then gradually add water to make a soft dough.',
    'Rest the dough for 20 minutes and divide it into small balls.',
    'Roll each ball into a thin round.',
    'Heat oil and deep-fry each luchi until puffed and lightly golden.',
    'For the alur dom, heat oil and sauté onion, ginger, and tomato with the spices.',
    'Add the boiled potatoes and enough water to make a thick gravy.',
    'Simmer until the potatoes absorb the spices and the gravy thickens.',
    'Serve the hot alur dom with freshly fried luchi.',
  ],
},

'prawn-sushi': {
  chefLine:
    'Season the rice, roll it around tender prawn, and slice each piece into a neat little ocean bite.',
  ingredients: [
    '1 cup sushi rice',
    '200 g cooked prawns',
    '2 tablespoons rice vinegar',
    '1 teaspoon sugar',
    '1/2 teaspoon salt',
    '2 nori sheets',
    '1/2 cucumber, cut into thin strips',
    'Soy sauce for serving',
  ],
  steps: [
    'Cook the sushi rice according to the package instructions and let it cool slightly.',
    'Mix rice vinegar, sugar, and salt, then gently fold it into the warm rice.',
    'Place a nori sheet on a sushi mat and spread a thin layer of rice over it.',
    'Arrange prawns and cucumber strips along one edge.',
    'Roll firmly using the sushi mat and seal the edge with a little water.',
    'Slice the roll into even pieces using a sharp damp knife.',
    'Serve with soy sauce.',
  ],
},

'salmon-sushi': {
  chefLine:
    'Cool the seasoned rice, pair it with delicate salmon, and roll everything into clean little bites.',
  ingredients: [
    '1 cup sushi rice',
    '150 g sushi-grade salmon',
    '2 tablespoons rice vinegar',
    '1 teaspoon sugar',
    '1/2 teaspoon salt',
    '2 nori sheets',
    '1/2 cucumber, thinly sliced',
    'Soy sauce for serving',
  ],
  steps: [
    'Cook the sushi rice and allow it to cool until just warm.',
    'Mix rice vinegar, sugar, and salt into the rice gently.',
    'Place nori on a sushi mat and spread a thin layer of rice across it.',
    'Arrange thin strips of salmon and cucumber near one edge.',
    'Roll the sushi tightly and seal the nori with a little water.',
    'Slice into even pieces with a sharp damp knife.',
    'Serve chilled with soy sauce.',
  ],
},

'vegetable-sushi': {
  chefLine:
    'Pack seasoned sushi rice with colorful vegetables and roll it tight for a fresh, crunchy bite.',
  ingredients: [
    '1 cup sushi rice',
    '2 nori sheets',
    '1/2 cucumber, thinly sliced',
    '1/2 carrot, thinly sliced',
    '1/2 avocado, sliced',
    '2 tablespoons rice vinegar',
    '1 teaspoon sugar',
    '1/2 teaspoon salt',
    'Soy sauce for serving',
  ],
  steps: [
    'Cook the sushi rice and let it cool slightly.',
    'Mix rice vinegar, sugar, and salt into the rice.',
    'Place a nori sheet on a sushi mat and spread rice evenly over it.',
    'Arrange cucumber, carrot, and avocado across the rice.',
    'Roll firmly and seal the edge with a little water.',
    'Slice into bite-sized pieces with a sharp damp knife.',
    'Serve with soy sauce.',
  ],
},

'sashimi': {
  chefLine:
    'Keep the fish cold, slice it cleanly, and let simple preparation showcase its natural flavor.',
  ingredients: [
    '200 g sushi-grade salmon or tuna',
    'Soy sauce for serving',
    'Wasabi, optional',
    'Pickled ginger for serving',
  ],
  steps: [
    'Keep the fish refrigerated until you are ready to prepare it.',
    'Using a very sharp knife, remove any unwanted skin or connective tissue.',
    'Slice the fish into clean, even pieces against the grain.',
    'Arrange the slices neatly on a chilled plate.',
    'Serve immediately with soy sauce, wasabi, and pickled ginger.',
  ],
},

'fried-tofu': {
  chefLine:
    'Season the tofu, pair it with sticky sushi rice, and roll it into a light plant-based favorite.',
  ingredients: [
    '1 cup sushi rice',
    '150 g firm tofu',
    '2 nori sheets',
    '1/2 cucumber, thinly sliced',
    '2 tablespoons rice vinegar',
    '1 teaspoon sugar',
    '1/2 teaspoon salt',
    '1 tablespoon soy sauce',
    '1 teaspoon sesame oil',
  ],
  steps: [
    'Cook the sushi rice and season it with rice vinegar, sugar, and salt.',
    'Press the tofu to remove excess moisture and cut it into thin strips.',
    'Pan-fry the tofu with soy sauce and sesame oil until lightly browned.',
    'Place nori on a sushi mat and spread the seasoned rice evenly over it.',
    'Arrange the tofu and cucumber along one edge.',
    'Roll firmly and seal the nori with a little water.',
    'Slice into pieces and serve with soy sauce.',
  ],
},

'burritos': {
  chefLine:
    'Warm the tortilla, pile in the filling, fold the edges, and roll it into one seriously loaded bite.',
  ingredients: [
    '2 large flour tortillas',
    '200 g cooked seasoned beef or chicken',
    '1 cup cooked rice',
    '1/2 cup cooked beans',
    '1/2 cup shredded lettuce',
    '1/2 cup diced tomato',
    '1/2 cup shredded cheese',
    '2 tablespoons salsa',
    '2 tablespoons sour cream',
  ],
  steps: [
    'Warm the tortillas briefly so they become soft and flexible.',
    'Place rice and beans in the center of each tortilla.',
    'Add the seasoned meat, lettuce, tomato, and shredded cheese.',
    'Spoon over salsa and sour cream.',
    'Fold the sides inward, then roll the tortilla tightly from the bottom.',
    'Toast the wrapped burrito briefly in a dry pan if desired.',
    'Slice in half and serve warm.',
  ],
},

'tacos': {
  chefLine:
    'Fill warm tortillas with seasoned meat, fresh toppings, and salsa for a messy little Mexican masterpiece.',
  ingredients: [
    '6 taco shells or small tortillas',
    '250 g ground beef or chicken',
    '1/2 onion, diced',
    '1 teaspoon cumin',
    '1 teaspoon paprika',
    '1/2 teaspoon chili powder',
    '1/2 cup shredded lettuce',
    '1 tomato, diced',
    '1/2 cup shredded cheese',
    'Salsa for serving',
    'Salt and black pepper',
  ],
  steps: [
    'Heat a skillet and sauté the onion until softened.',
    'Add the ground meat and cook until browned and fully cooked.',
    'Season with cumin, paprika, chili powder, salt, and black pepper.',
    'Warm the taco shells or tortillas according to their instructions.',
    'Fill each shell with the seasoned meat.',
    'Top with lettuce, tomato, shredded cheese, and salsa.',
    'Serve immediately while the shells and filling are warm.',
  ],
},

'momo-soup': {
  chefLine:
    'Simmer a fragrant broth, drop in tender dumplings, and turn momos into a bowl of warm comfort.',
  ingredients: [
    '10 steamed momos',
    '4 cups chicken or vegetable stock',
    '1/2 onion, sliced',
    '1 small carrot, sliced',
    '1/2 cup cabbage, shredded',
    '2 cloves garlic, minced',
    '1 teaspoon ginger, minced',
    '1 tablespoon soy sauce',
    '1 teaspoon chili sauce',
    'Spring onions for garnish',
  ],
  steps: [
    'Heat the stock in a pot and add onion, garlic, and ginger.',
    'Simmer for several minutes until the broth becomes fragrant.',
    'Add carrot and cabbage and cook until slightly tender.',
    'Stir in soy sauce and chili sauce.',
    'Add the steamed momos to the broth and simmer gently for a few minutes.',
    'Taste and adjust the seasoning.',
    'Garnish with spring onions and serve hot.',
  ],
},

'fried-chicken': {
  chefLine:
    'Season deeply, coat generously, and fry until the outside crackles while the chicken stays juicy inside.',
  ingredients: [
    '500 g chicken pieces',
    '1 cup flour',
    '1/2 cup breadcrumbs',
    '1 egg',
    '1/2 cup milk',
    '1 teaspoon paprika',
    '1 teaspoon garlic powder',
    '1/2 teaspoon black pepper',
    '1 teaspoon salt',
    'Oil for frying',
  ],
  steps: [
    'Season the chicken with salt, paprika, garlic powder, and black pepper.',
    'Whisk the egg and milk together in a bowl.',
    'Dip each chicken piece into the egg mixture, then coat thoroughly with flour and breadcrumbs.',
    'Heat oil over medium heat.',
    'Fry the chicken in batches until deeply golden and cooked through.',
    'Drain on a wire rack or paper towels.',
    'Rest for a few minutes before serving.',
  ],
},

'cream-mushroom-soup': {
  chefLine:
    'Brown the mushrooms, build a silky cream base, and let every spoonful taste earthy and comforting.',
  ingredients: [
    '250 g mushrooms, sliced',
    '1 small onion, diced',
    '2 cloves garlic, minced',
    '2 tablespoons butter',
    '1 tablespoon flour',
    '2 cups vegetable or chicken stock',
    '1 cup milk',
    '1/2 cup cooking cream',
    '1/2 teaspoon black pepper',
    'Salt to taste',
  ],
  steps: [
    'Melt butter in a pot and sauté the onion until soft.',
    'Add garlic and mushrooms and cook until the mushrooms release their moisture and begin to brown.',
    'Sprinkle in the flour and stir for one minute.',
    'Gradually add the stock while stirring to prevent lumps.',
    'Add milk and simmer gently until the soup begins to thicken.',
    'Stir in the cooking cream, salt, and black pepper.',
    'Simmer for a few more minutes without boiling aggressively.',
    'Serve hot.',
  ],
},

'oreo-shake': {
  chefLine:
    'Blend cold milk, creamy ice cream, and plenty of Oreo until the shake is thick enough to deserve a spoon.',
  ingredients: [
    '4 Oreo cookies',
    '2 scoops vanilla ice cream',
    '1 cup chilled milk',
    '1 tablespoon chocolate syrup',
    'Whipped cream, optional',
    '1 crushed Oreo for topping',
  ],
  steps: [
    'Break the Oreo cookies into smaller pieces.',
    'Add Oreo, vanilla ice cream, chilled milk, and chocolate syrup to a blender.',
    'Blend until thick and smooth while keeping some cookie texture.',
    'Pour into a chilled glass.',
    'Top with whipped cream and crushed Oreo if desired.',
    'Serve immediately.',
  ],
},

'momos': {
  chefLine:
    'Fill delicate wrappers, pleat them tightly, and steam until the dumplings turn soft, juicy, and irresistible.',
  ingredients: [
    '20 momo wrappers',
    '250 g minced chicken',
    '1/2 cup finely chopped cabbage',
    '1/4 cup finely chopped onion',
    '2 cloves garlic, minced',
    '1 teaspoon ginger, minced',
    '1 tablespoon soy sauce',
    '1 teaspoon sesame oil',
    'Salt and black pepper',
  ],
  steps: [
    'Combine minced chicken, cabbage, onion, garlic, ginger, soy sauce, sesame oil, salt, and pepper.',
    'Place a small spoonful of filling in the center of each momo wrapper.',
    'Wet the edges and pleat the wrapper around the filling to seal it completely.',
    'Arrange the momos in a lightly greased steamer basket.',
    'Steam for about 10–12 minutes, or until the wrappers are tender and the filling is cooked.',
    'Remove carefully from the steamer.',
    'Serve hot with your favorite momo dipping sauce.',
  ],
},

'tom-yum-soup': {
  chefLine:
    'Wake up the broth with lemongrass, lime, chili, and herbs until every spoonful hits spicy and sour at once.',
  ingredients: [
    '3 cups chicken or vegetable stock',
    '150 g prawns or chicken',
    '1 stalk lemongrass, bruised',
    '3 slices galangal or ginger',
    '3 kaffir lime leaves',
    '100 g mushrooms, sliced',
    '2 tablespoons fish sauce',
    '1 tablespoon lime juice',
    '1 teaspoon chili paste',
    '2 Thai chilies, sliced',
    'Fresh coriander for garnish',
  ],
  steps: [
    'Bring the stock to a gentle boil and add lemongrass, galangal or ginger, and kaffir lime leaves.',
    'Simmer for 5–7 minutes to infuse the broth.',
    'Add mushrooms and cook until slightly tender.',
    'Add prawns or chicken and simmer until completely cooked.',
    'Stir in fish sauce and chili paste.',
    'Turn off the heat and add fresh lime juice so the sour flavor stays bright.',
    'Add sliced chilies according to your preferred heat level.',
    'Garnish with fresh coriander and serve hot.',
  ],
},



  'roshmalai': {
    chefLine:
      'Take the roshogolla, drown it in creamy milk, and somehow make it even more dangerous.',
    ingredients: [
      '8-10 prepared roshogolla',
      '1 liter full-fat milk',
      '1/3 cup sugar',
      'Cardamom powder',
      'Saffron, optional',
      'Chopped pistachios and almonds',
    ],
    steps: [
      'Prepare a thickened sweet milk by simmering milk until it reduces.',
      'Add sugar, cardamom, and saffron and stir until fragrant.',
      'Gently squeeze excess sugar syrup from warm roshogollas so they absorb the thickened milk like sponges.',
      'Place the sweets into the warm thickened milk.',
      'Chill thoroughly and garnish with chopped nuts before serving.',
    ],
  },
};