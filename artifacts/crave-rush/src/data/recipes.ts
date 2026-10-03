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