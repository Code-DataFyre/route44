/**
 * Services Tabs Data
 * Shared source of truth for the Home page "Services" tabbed section
 * (Transportation Services / Value Added Services).
 */

const img = (id) =>
  `https://images.unsplash.com/photo-${id}?w=1200&h=900&fit=crop`;

export const TRANSPORTATION_SERVICES = [
  {
    slug: "ecommerce-parcels",
    title: "E-commerce & Parcels",
    desc: "Reliable, on-time delivery for high-volume e-commerce orders, even during peak season — backed by our network and technology.",
    image: img("1607166452427-7e4477079cb9"),
  },
  {
    slug: "retail",
    title: "Retail",
    desc: "Secure, scheduled transportation for retail inventory and supermarket goods, with real-time visibility at every step.",
    image: img("1441986300917-64674bd600d8"),
  },
  {
    slug: "healthcare-pharma",
    title: "Healthcare & Pharma",
    desc: "GDP-compliant, secure logistics for temperature-sensitive pharmaceutical products, supported by round-the-clock monitoring.",
    image: img("1584982751601-97dcc096659c"),
  },
  {
    slug: "electronics-hightech",
    title: "Electronics & High-Tech",
    desc: "Maximum-security transport for high-value electronics and tech appliances, preserving integrity from origin to destination.",
    image: img("1518770660439-4636190af475"),
  },
  {
    slug: "food",
    title: "Food & Beverages",
    desc: "Temperature-controlled logistics for fresh, chilled, frozen, and processed foods, preserving quality from pickup to delivery.",
    image: img("1542838132-92c53300491e"),
  },
  {
    slug: "fashion-lifestyle",
    title: "Fashion & Lifestyle",
    desc: "Efficient, digitally-tracked deliveries that keep fashion and lifestyle products moving and on schedule.",
    image: img("1445205170230-053b83016050"),
  },
  {
    slug: "agricultural",
    title: "Agricultural",
    desc: "Temperature-controlled transportation for delicate agricultural cargo, such as flowers, kept fresh and delivered on time.",
    image: img("1490750967868-88aa4486c946"),
  },
  {
    slug: "chemicals",
    title: "Chemicals",
    desc: "Secure, compliant transportation for a wide range of chemical products, from industrial to household applications.",
    image: img("1532187863486-abf9dbad1b69"),
  },
  {
    slug: "fmcg",
    title: "Fast Moving Consumer Goods (FMCG)",
    desc: "Strictly on-time, large-capacity transportation solutions for high-demand consumer goods.",
    image: img("1578916171728-46686eac8d58"),
  },
  {
    slug: "industrial-manufacturing",
    title: "Industrial & Manufacturing",
    desc: "Large-volume transportation for diverse industrial and manufacturing goods, from metals to textiles.",
    image: img("1565043666747-69f6646db940"),
  },
  {
    slug: "cosmetics-hygiene",
    title: "Cosmetics & Hygiene",
    desc: "Specialised handling designed to transport delicate cosmetics, fragrances, and personal care items with care.",
    image: img("1596462502278-27bfdc403348"),
  },
  {
    slug: "automotive",
    title: "Automotive",
    desc: "Supporting your automotive supply chain with FTL deliveries, ensuring timely parts and component distribution across Europe.",
    image: img("1503376780353-7e6692767b70"),
  },
  {
    title: "Beverage",
    desc: "Compliant, temperature-controlled deliveries for alcoholic and non-alcoholic beverages, with a focus on safe handling.",
    image: img("1544145945-f90425340c7e"),
  },
];

export const VALUE_ADDED_SERVICES = [
  {
    title: "CO2 Reporting",
    desc: "Get CO2 reports based on direct data from our vehicles, helping you make informed, data-driven sustainability decisions.",
    image: img("1497435334941-8c899ee9e8e9"),
  },
  {
    title: "Real-Time Visibility",
    desc: "Track your cargo's exact location, ETA, plate numbers, trailer temperature, and more, all in real time.",
    image: img("1611162458324-aae1eb4129a4"),
  },
  {
    title: "Data Integrations",
    desc: "Exchange documents such as orders, PODs, and invoices instantly through direct system integration.",
    image: img("1551288049-bebda4e38f71"),
  },
  {
    title: "Smart Planning",
    desc: "Ensure your cargo travels the most optimal route for cost and emission savings.",
    image: img("1454165804606-c3d57bc86b40"),
  },
];
