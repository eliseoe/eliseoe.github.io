export const profile = {
  name: "Elise Özalp",
  title: "Machine learning for dynamical systems",
  subtitle: "Physics-informed ML for forecasting partially observed chaotic systems.",
  intro: [
    "I am Elise Özalp, an applied ML researcher working on machine learning for dynamical systems.",
    "I completed my PhD at Imperial College London, where I developed physics-informed ML methods for real-time forecasting of partially observed chaotic systems. My research combines latent-space models, recurrent neural networks, and data assimilation to recover long-term statistics and stability properties.",
    "Most recently, I was an AI Fellow at Faculty.ai and Inigo, where I built a retrieval-augmented generation pipeline for loss analysis.",
  ],
  location: "London, UK",
  email: "eliseoezalp@gmail.com",
  github: "https://github.com/eliseoe",
  scholar: "https://scholar.google.com/citations?user=kiawO90AAAAJ&hl=en",
  linkedin: "https://www.linkedin.com/in/elise-oezalp/",
  cv: "/files/cv.pdf",
};

export const publications = [
  {
    title: "Inferring stability properties of chaotic systems on autoencoders' latent spaces",
    venue: "Machine Learning and the Physical Sciences Workshop, NeurIPS",
    year: "2024",
    url: "https://arxiv.org/abs/2410.18003",
    summary:
      "Uses latent-space models, Lyapunov exponents, and covariant Lyapunov vectors to study stability in chaotic systems.",
  },
  {
    title: "Stability analysis of chaotic systems in latent spaces",
    venue: "arXiv preprint arXiv:2410.00480",
    year: "2024",
    url: "https://arxiv.org/pdf/2410.00480",
    summary:
      "Introduces a latent-space CAE-ESN pipeline for analysing the stability of chaotic PDEs such as Kuramoto-Sivashinsky.",
  },
  {
    title: "Reconstruction, forecasting, and stability of chaotic dynamics from partial data",
    venue: "Chaos: An Interdisciplinary Journal of Nonlinear Science",
    year: "2023",
    url: "https://doi.org/10.1063/5.0159479",
    summary:
      "Studies reconstruction and forecasting from partial chaotic observations and analyses the resulting stability properties.",
  },
  {
    title: "Physics-informed long short-term memory for forecasting and reconstruction of chaos",
    venue: "International Conference on Computational Science",
    year: "2023",
    url: "https://link.springer.com/chapter/10.1007/978-3-031-36027-5_29",
    summary:
      "Presents PI-LSTM models that reconstruct unmeasured variables and improve forecasting under physical constraints.",
  },
  {
    title: "Trends in Explainable Artificial Intelligence for Non-Experts",
    venue: "KI-Kritik/AI Critique Volume 4",
    year: "2023",
    url: "https://doi.org/10.14361/9783839457320",
    summary:
      "Reviews explainable AI techniques aimed at non-experts, including accessibility and bias considerations.",
  },
];

export const experience = [
  {
    role: "AI Fellow",
    place: "Faculty.ai and Inigo",
    year: "Oct 2025 - Dec 2025",
    description: "Built a retrieval-augmented generation pipeline for loss analysis in a real-world insurance setting.",
  },
  {
    role: "PhD Researcher",
    place: "Imperial College London",
    year: "Jan 2022 - Nov 2025",
    description: "Developed physics-informed ML methods for forecasting partially observed chaotic systems.",
  },
  {
    role: "Research Scientist Intern",
    place: "Dassault Systemes, SIMULIA R&D",
    year: "Nov 2020 - Nov 2021",
    description: "Worked on scientific computing and research tooling.",
  },
  {
    role: "Software Architecture Intern",
    place: "Deutsche Bank",
    year: "Jul 2019 - Sep 2019",
    description: "Supported architecture and engineering work in the COO organization.",
  },
];

export const awards = [
  "Amelia Earhart Fellowship (2024/2025)",
  "NeurIPS Travel Grant for Machine Learning and the Physical Sciences Workshop (December 2024)",
  "Fields Institute Travel Grant for Research in Mathematical Sciences (June 2024)",
  "Imperial College Departmental Award Scheme, nominated (December 2023)",
  "Global Fellows Programme, Imperial College London and Nanyang Technological University (June 2023)",
];

export type Recipe = {
  slug: string;
  name: string;
  tag: string;
  note: string;
  date: string;
  image?: string;
  description?: string;
  ingredients: string[];
  steps: string[];
  equipment?: string[];
  comments?: string;
};

export const recipes: Recipe[] = [
  {
    slug: "banana-chocolate-chip-bread",
    name: "Banana Chocolate Chip Bread",
    tag: "baking",
    note: "One-bowl banana bread with extra banana and dark chocolate.",
    date: "October 7, 2024",
    ingredients: [
      "4 ripe bananas",
      "75g melted butter",
      "50g white sugar",
      "1 egg, beaten",
      "1 teaspoon vanilla extract",
      "1 teaspoon baking soda",
      "Pinch of salt",
      "185g all-purpose flour",
      "100g dark chocolate chips",
    ],
    steps: [
      "Preheat the oven to 180C fan and prepare a 22 cm loaf tin.",
      "Mash the bananas until mostly smooth, then stir in the melted butter.",
      "Add the sugar, egg, vanilla, baking soda, salt, and flour and mix until the batter is smooth. Do not overmix.",
      "Fold in 85g of the chocolate chips and pour the batter into a greased loaf tin. Top with the remaining chocolate.",
      "Bake for 50 to 60 minutes, until a toothpick comes out clean.",
    ],
    equipment: ['8" or 22 cm loaf tin'],
    comments:
      "This recipe is inspired by Tasty, but uses more banana and less sugar for a richer, less-sweet loaf.",
  },
  {
    slug: "chocolate-chip-cookies",
    name: "Chocolate Chip Cookies",
    tag: "cookies",
    note: "Crisp edges, gooey center, and a heavy hand with dark chocolate.",
    date: "November 3, 2024",
    ingredients: [
      "115g unsalted butter, melted and cooled",
      "50g light brown sugar",
      "50g granulated sugar",
      "1 large egg",
      "1 tablespoon vanilla extract",
      "155g all-purpose flour",
      "1/2 teaspoon baking soda",
      "200g dark chocolate, chopped",
      "Pinch of salt",
    ],
    steps: [
      "Preheat the oven to 175C and line a baking tray with parchment paper.",
      "Whisk the melted butter with both sugars until it forms a thick, smooth paste.",
      "Add the egg and vanilla and mix well.",
      "Fold the dry ingredients into the wet mixture until just combined, then add the chopped chocolate.",
      "Scoop the dough into roughly 30g portions.",
      "Bake for about 12 minutes, until the edges are golden and the centers stay gooey.",
    ],
    equipment: ["Baking tray"],
    comments:
      "Adapted from iramsfoodstory, with an emphasis on dark chocolate and a soft center.",
  },
  {
    slug: "coconut-vanilla-cake",
    name: "Elise Drømmekage: Coconut Vanilla Cake",
    tag: "cake",
    note: "Soft vanilla sponge finished with a rich coconut topping.",
    date: "October 7, 2024",
    ingredients: [
      "3 eggs",
      "190g caster sugar",
      "1 teaspoon vanilla extract",
      "225g plain flour",
      "2 teaspoons baking powder",
      "150ml milk",
      "75g butter, melted",
      "100g butter for the topping",
      "150g desiccated coconut",
      "200g dark brown sugar",
      "75ml whole milk for the topping",
    ],
    steps: [
      "Preheat the oven to 175C fan. Grease and line a 24 cm round cake tin.",
      "Whisk the eggs, sugar, and vanilla on high speed until pale and airy.",
      "Sift the flour and baking powder together, then gently fold them into the egg mixture.",
      "Slowly fold in the warm butter and then the milk until just incorporated.",
      "Pour into the tin and bake for 35 to 40 minutes, avoiding the oven door in the first 20 minutes.",
      "Near the end of the bake, melt the topping ingredients together in a saucepan.",
      "Spread the topping over the nearly baked cake, raise the oven to 200C, and bake for another 5 minutes.",
    ],
    equipment: ["23 to 25 cm round cake tin or an equivalent rectangular tin"],
    comments:
      "Inspired by ScandiKitchen, but cut back slightly on the sugar to keep the cake balanced.",
  },
  {
    slug: "maple-pecan-pie",
    name: "Maple Pecan Pie",
    tag: "pie",
    note: "A less-sweet maple filling without corn syrup.",
    date: "October 7, 2024",
    image: "/images/pecanpie.jpeg",
    description: "A maple pecan pie without corn syrup, gentler and less sweet than the classic version.",
    ingredients: [
      "1 pie crust",
      "3 eggs",
      "250g maple syrup",
      "1.5 tablespoons vanilla extract",
      "1 tablespoon flour",
      "Pinch of salt",
      "72g butter, melted and slightly cooled",
      "250g pecans",
      "Whipped cream, optional",
    ],
    steps: [
      "Preheat the oven to 175C fan.",
      "Roll out the crust into the pie dish, brush with egg wash if you like, and freeze for 20 minutes to reduce shrinkage.",
      "Blind bake the crust for 15 minutes with parchment and pie weights or sugar.",
      "Roast the pecans at the same time for about 10 minutes.",
      "Whisk the butter and flour together, then add vanilla, salt, eggs, and maple syrup until smooth.",
      "Chop about 200g of the roasted pecans and scatter them in the pie crust. Pour over the filling and arrange the remaining pecans on top.",
      "Bake for 45 to 50 minutes.",
    ],
    equipment: ['9 to 12" pie dish'],
  },
];

export const recipeBySlug = Object.fromEntries(recipes.map((recipe) => [recipe.slug, recipe]));
