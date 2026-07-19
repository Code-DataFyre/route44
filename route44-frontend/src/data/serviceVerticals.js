/**
 * Service Verticals Data
 * Detail-page content for the industry verticals listed under
 * "Transportation Services" on the Home page.
 */

const img = (id) =>
  `https://images.unsplash.com/photo-${id}?w=1600&h=1000&fit=crop`;

export const SERVICE_VERTICALS = [
  {
    slug: "ecommerce-parcels",
    title: "E-commerce & Parcels",
    tagline:
      "Time-sensitive, high-volume e-commerce deliveries across the UK and mainland Europe, powered by our road network and digital technology.",
    image: img("1607166452427-7e4477079cb9"),
    detail: {
      intro: {
        heading: "Reliable Deliveries. Every Order. Every Time.",
        paragraphs: [
          "We understand the pressure of e-commerce logistics — getting every order to its destination on time and in perfect condition. Our solutions are built for the fast-paced demands of online retail, so your products arrive intact, every time.",
        ],
      },
      whyUs: {
        heading: "Why Us?",
        intro:
          "Route 44 brings deep expertise in e-commerce logistics, offering fast, reliable solutions that scale with your business. We provide end-to-end support that keeps operations running smoothly, even during peak season, so you can stay ahead in a competitive market.",
        features: [
          {
            title: "Uncompromising security",
            desc: "Eliminate concerns about cargo theft and damage with TAPA TSR 1 & 2 certified equipment, secure parking, driver screening, 24/7 monitoring, and intelligent route risk assessment.",
          },
          {
            title: "Streamlined efficiency",
            desc: "Simplify your logistics operations with dedicated account management, expert customer support, and seamless data integrations into your existing supply chain systems.",
          },
          {
            title: "Stay in control 24/7",
            desc: "Gain full visibility over your shipments with real-time tracking and proactive issue resolution, ensuring your cargo arrives on time and in full.",
          },
          {
            title: "Scale your business across Europe",
            desc: "Expand with confidence, backed by our extensive European network, regulatory expertise, and a large fleet of modern trucks and trailers built to support your growth.",
          },
          {
            title: "Capacity you can count on",
            desc: "Rely on our high-capacity fleet of trucks and trailers to keep your cargo moving smoothly across the European continent.",
          },
          {
            title: "Optimised costs",
            desc: "Benefit from transparent pricing and flexible service options, letting you optimise logistics costs while maintaining the highest security standards.",
          },
        ],
      },
      segments: {
        heading: "E-commerce & Parcels Operating Segments",
        subheading:
          "Explore the cargo types we deliver and the tailored solutions we build to optimise your supply chain.",
        items: [
          {
            title: "E-commerce",
            desc: "Reliable, flawless freight transportation for e-commerce and online marketplace orders across the UK, mainland Europe, and Scandinavia.",
            image: img("1586528116311-ad8dd3c8310d"),
          },
          {
            title: "Parcels",
            desc: "Fast, reliable full truckload (FTL) parcel and package delivery services that simplify your supply chain operations across Europe.",
            image: img("1601599963565-b7f49b6e5aca"),
          },
        ],
      },
      valueAdded: {
        heading: "Value Added Services",
        subheading:
          "Route 44 takes a holistic approach to road transportation. Our sustainable, digital solutions integrate effortlessly with your existing systems, streamlining operations, transparency, and efficiency.",
        items: [
          {
            title: "Alternative Fuel Program (HVO100)",
            desc: "Save up to 90% of CO2 emissions by using HVO100 instead of conventional diesel.",
            image: img("1660145954339-b94968afca8f"),
          },
          {
            title: "Transportation Optimisation",
            desc: "Reduce emissions through eco-driving, advanced fleet management, and innovative route optimisation.",
            image: img("1533055640609-24b498dfd74c"),
          },
          {
            title: "Green Corridors",
            desc: "Cut your carbon footprint while keeping your supply chain uninterrupted, with our intermodal solutions.",
            image: img("1708109353962-3b8262147aa6"),
          },
          {
            title: "Data Integrations",
            desc: "Exchange documents such as orders, PODs, and invoices instantly through direct system integration.",
            image: img("1551288049-bebda4e38f71"),
          },
        ],
      },
    },
  },
  {
    slug: "retail",
    title: "Retail",
    tagline:
      "Secure, on-schedule transportation for retail inventory and supermarket goods, with real-time visibility every step of the way.",
    image: img("1441986300917-64674bd600d8"),
    detail: {
      intro: {
        heading: "On-Time Transportation & Scalable Capacity",
        paragraphs: [
          "We offer timely, efficient, and secure logistics — with dedicated peak-season support — for retail inventory and supermarket goods. With deep expertise across the retail sector, we support small, medium, and large businesses and manufacturers throughout Europe.",
        ],
      },
      stats: {
        heading: "Built for Retail's Pace",
        items: [
          {
            icon: "thermostat",
            label: "Temperature Control Range",
            sub: "-25°C to +25°C",
          },
          {
            icon: "device_thermostat",
            label: "Temperature Monitoring",
            sub: "On loading & in transit",
          },
          {
            icon: "inventory_2",
            label: "High-Volume Shipments",
            sub: "From single to multiple FTLs",
          },
          {
            icon: "hub",
            label: "Network Density",
            sub: "Trucks available around your warehouses and peak flows",
          },
          {
            icon: "monitoring",
            label: "Non-Stop Control",
            sub: "Real-time shipment visibility and 24/7 monitoring",
          },
          {
            icon: "lock",
            label: "TAPA TSR 1 Standard",
            sub: "Secure owned fleet & certified locks",
          },
          {
            icon: "support_agent",
            label: "Expert Support",
            sub: "Dedicated team & account managers",
          },
          {
            icon: "schedule",
            label: "24/7 Human Oversight",
            sub: "Day, night, and weekend support",
          },
          {
            icon: "local_shipping",
            label: "Dedicated Fleet",
            sub: "Solutions for round trips",
          },
          {
            icon: "door_sliding",
            label: "Hard-Sided & Rear Access",
            sub: "Owned box & reefer trailers",
          },
          {
            icon: "verified",
            label: "Guaranteed Capacity",
            sub: "For seasonal & high-demand needs",
          },
        ],
      },
      geography: {
        heading: "Extensive Transportation Geography Covering All of Europe",
        subheading:
          "Excellence in temperature-controlled logistics, powered by Route 44's owned fleet and network.",
        image: img("1758549683132-72ac09a3d5b5"),
        bullets: [
          "High truck concentration in every region",
          "Short-notice deliveries (24–48 hours)",
          "Flexible loading schedule",
          "Intermodal rail and ferry network",
          "Any volume, anywhere in Europe",
          "Contractual or spot-based capacity",
        ],
      },
      trailerSpec: {
        heading: "Refrigerated Trailer",
        intro:
          "Refrigerated trailers provide precise temperature control for goods like fresh produce and frozen foods, preserving their quality and extending their shelf life.",
        image: img("1773126378189-9186d697b797"),
        groups: [
          {
            title: "Thermo-Mapped",
            sub: "-25°C to +25°C temperature control capabilities",
            bullets: [
              "Annually calibrated",
              "24/7 temperature monitoring",
              "Online thermograph reports",
              "Flexible airflow distribution",
            ],
          },
          {
            title: "Standard Trailer",
            sub: "Dimensions & size",
            bullets: [
              "33/66 euro pallets can be loaded",
              "Single or double deck, secure bars",
              "Up to 86m³ loading capacity",
              "Up to 24 tonnes maximum cargo weight",
              "Rear access for cargo loading & unloading",
            ],
          },
          {
            title: "Secure",
            sub: "Enhanced protection & strict protocols",
            bullets: [
              "Hard-sided walls",
              "TAPA TSR Level 1 locks",
              "24/7 real-time visibility",
              "Secure parking",
              "Route deviation alerts",
              "Classified route planning",
            ],
          },
        ],
      },
      benefits: {
        heading: "Why Retailers Choose Route 44",
        items: [
          {
            icon: "savings",
            title: "Cost-Effective",
            desc: "Save by working directly with an end-to-end logistics provider.",
          },
          {
            icon: "bolt",
            title: "Efficient",
            desc: "Ship any volume, from single to multiple FTLs — we handle it all.",
          },
          {
            icon: "verified",
            title: "Reliable",
            desc: "Fast, timely deliveries backed by guaranteed owned-fleet capacity.",
          },
          {
            icon: "tune",
            title: "Flexible",
            desc: "Work on a contractual or spot basis, with flexible loading and unloading anywhere in Europe.",
          },
          {
            icon: "shield",
            title: "Secure",
            desc: "Protect your high-value goods in transit across the continent.",
          },
        ],
      },
    },
  },
  {
    slug: "healthcare-pharma",
    title: "Healthcare & Pharma",
    tagline:
      "GDP-compliant, secure logistics for temperature-sensitive pharmaceutical products, supported by round-the-clock monitoring.",
    image: img("1584982751601-97dcc096659c"),
    detail: {
      intro: {
        heading: "Driven by Your Goals, Guided by Your Needs",
        paragraphs: [
          "With long-standing expertise in pharmaceutical and healthcare logistics, we ensure compliant, timely deliveries across Europe — maintaining optimal conditions to protect your products and your reputation.",
          "We recognise that the safe, timely delivery of temperature-sensitive products isn't just a logistical matter — it's about the integrity of your brand and the wellbeing of the communities you serve.",
        ],
      },
      whyUs: {
        heading: "Why Us?",
        intro:
          "Given our scope and expertise, we understand the unique challenges and stringent requirements faced by pharmaceutical manufacturers and distributors. Choosing Route 44 for your pharmaceutical transportation means choosing a long-term partner that shares your commitment to quality, safety, and sustainability.",
        features: [
          {
            title: "Your goods are in capable hands",
            desc: "Rest assured your shipments are handled in full regulatory compliance. Our GDP-compliant transportation is supported by a dedicated GDP team, reducing the risk of costly errors and delays.",
          },
          {
            title: "Uncompromising security",
            desc: "Eliminate concerns about cargo theft and damage with TAPA TSR 1 & 2 certified equipment, secure parking, 24/7 monitoring, and intelligent route risk assessment.",
          },
          {
            title: "Stay in control 24/7",
            desc: "Gain full visibility over your shipments with real-time tracking and proactive issue resolution, ensuring your cargo arrives on time and in full.",
          },
          {
            title: "Effortless temperature control",
            desc: "Keep your goods in perfect condition with our cold-chain management solutions, providing continuous real-time temperature monitoring from -25°C to +25°C, source to destination.",
          },
          {
            title: "Streamlined efficiency",
            desc: "Simplify your logistics operations with dedicated account management, expert customer support, and seamless EDI integration into your existing supply chain.",
          },
          {
            title: "Optimised costs",
            desc: "Benefit from transparent pricing and flexible service options, letting you optimise logistics costs while maintaining the highest security standards.",
          },
          {
            title: "Care Plus",
            desc: "Experience personalised attention and dedicated support from our team, ensuring your high-value cargo receives the specialised care it deserves.",
          },
          {
            title: "Timely deliveries",
            desc: "Eliminate concerns about late arrivals. Meticulous planning and fast solutions ensure your time-critical goods reach any destination on schedule, with options for two-driver crews and intermediary-free transport.",
          },
          {
            title: "Your sustainability vision, realised",
            desc: "Demonstrate your commitment to environmental responsibility with our sustainable transport solutions, including battery-electric vehicles, intermodal rail transport, and HVO fuel.",
          },
          {
            title: "Scale your business across Europe",
            desc: "Expand with confidence, backed by our extensive European network, regulatory expertise, and a large fleet of modern trucks and trailers built to support your growth.",
          },
        ],
      },
      segments: {
        heading: "Healthcare & Pharma Operating Segments",
        subheading:
          "Explore the cargo types we deliver and the tailored solutions we build to optimise your supply chain.",
        items: [
          {
            title: "Medicaments",
            desc: "Temperature-controlled, compliant transportation for medicaments, vaccines, ambient medicines, and pharmaceutical products across Europe.",
            image: img("1587854692152-cbe660dbde88"),
          },
          {
            title: "Nutritional Supplements",
            desc: "Refrigerated delivery of nutraceuticals, vitamins, dietary supplements, and wellness products, ensuring consistent quality and regulatory compliance.",
            image: img("1550572017-edd951b55104"),
          },
          {
            title: "Veterinary Products",
            desc: "Specialised delivery for temperature-sensitive veterinary medicines, supplies, and animal health products, safeguarding quality from pickup to delivery.",
            image: img("1583912267670-6b0f4d0c7830"),
          },
        ],
      },
      valueAdded: {
        heading: "Value Added Services",
        subheading:
          "Route 44 takes a holistic approach to road transportation. Our sustainable, digital solutions integrate effortlessly with your existing systems, streamlining operations, transparency, and efficiency.",
        items: [
          {
            title: "Transportation Optimisation",
            desc: "Reduce emissions through eco-driving, advanced fleet management, and innovative route optimisation.",
            image: img("1533055640609-24b498dfd74c"),
          },
          {
            title: "Green Corridors",
            desc: "Cut your carbon footprint while keeping your supply chain uninterrupted, with our intermodal solutions.",
            image: img("1708109353962-3b8262147aa6"),
          },
          {
            title: "Data Integrations",
            desc: "Exchange documents such as orders, PODs, and invoices instantly through direct system integration.",
            image: img("1551288049-bebda4e38f71"),
          },
          {
            title: "Smart Planning",
            desc: "Ensure your cargo is transported on the most optimal route for cost and emission savings.",
            image: img("1454165804606-c3d57bc86b40"),
          },
        ],
      },
    },
  },
  {
    slug: "electronics-hightech",
    title: "Electronics & High-Tech",
    tagline:
      "Maximum-security transport for high-value electronics and tech appliances, preserving integrity from origin to destination.",
    image: img("1518770660439-4636190af475"),
    detail: {
      intro: {
        heading: "Secure Transport for High-Value Goods & End-to-End Control",
        paragraphs: [
          "We provide secure FTL transportation for high-value and theft-sensitive cargo such as consumer electronics, home appliances, and electric components, using our own TAPA TSR 1 certified fleet of trucks and trailers. Through advanced digital and physical security measures, we ensure real-time shipment visibility, controlled transport, and 24/7 human oversight while your cargo is in transit.",
        ],
      },
      stats: {
        heading: "Built for High-Value Cargo",
        items: [
          {
            icon: "local_shipping",
            label: "Owned Fleet",
            sub: "Euro 6 trucks & reefer trailers",
          },
          {
            icon: "lock",
            label: "TAPA TSR 1 Standard",
            sub: "Secure owned fleet & certified locks",
          },
          {
            icon: "door_sliding",
            label: "Hard-Sided & Rear Access",
            sub: "Owned box & reefer trailers",
          },
          {
            icon: "route",
            label: "Route Planning",
            sub: "Planned in advance before the journey",
          },
          {
            icon: "local_parking",
            label: "Secured Parking Areas",
            sub: "Across the EU",
          },
          {
            icon: "fence",
            label: "Geo-Fencing & Deviation Alerts",
            sub: "Monitoring in transit",
          },
          {
            icon: "shield",
            label: "Secure Transit",
            sub: "Across international & domestic EU routes",
          },
          {
            icon: "monitoring",
            label: "Non-Stop Control",
            sub: "Real-time shipment visibility and 24/7 monitoring",
          },
          {
            icon: "verified",
            label: "Quality & Safety",
            sub: "Auditable quality for regulated and sensitive cargo",
          },
          {
            icon: "badge",
            label: "Trained & Experienced Drivers",
            sub: "Certified in TAPA TSR & cargo security",
          },
          {
            icon: "schedule",
            label: "24/7 Human Oversight",
            sub: "Day, night, and weekend support",
          },
          {
            icon: "support_agent",
            label: "Expert Support",
            sub: "Dedicated team & account managers",
          },
        ],
      },
      geography: {
        heading: "Secure Transportation for High-Value Goods Across Europe",
        subheading:
          "Excellence in secure, controlled logistics, powered by Route 44's owned fleet and network.",
        image: img("1758549683132-72ac09a3d5b5"),
        bullets: [
          "High truck concentration in every region",
          "Short-notice deliveries (24–48 hours)",
          "Flexible loading schedule",
          "Intermodal rail and ferry network",
          "Any volume, anywhere in Europe",
          "Contractual or spot-based capacity",
        ],
      },
      trailerSpec: {
        heading: "Box Trailer",
        intro:
          "Box trailers offer enhanced security and protection for cargo in transit, ideal for high-value or theft-prone goods such as consumer electronics, luxury or brand items, and clothing.",
        image: img("1601599963565-b7f49b6e5aca"),
        groups: [
          {
            title: "Secure",
            sub: "Enhanced protection & strict protocols",
            bullets: [
              "Hard-sided walls",
              "TAPA TSR Level 1 locks",
              "24/7 real-time visibility",
              "Secure parking",
              "Route deviation alerts",
              "Classified route planning",
            ],
          },
          {
            title: "Standard Trailer",
            sub: "Dimensions & size",
            bullets: [
              "33/66 euro pallets can be loaded",
              "Single or double deck, secure bars",
              "Up to 86m³ loading capacity",
              "Up to 24 tonnes maximum cargo weight",
              "Rear access for cargo loading & unloading",
            ],
          },
        ],
      },
      segments: {
        heading: "Electronics & High-Tech Products We Transport Across Europe",
        subheading:
          "Explore the cargo types we deliver and the tailored solutions we build to optimise your supply chain.",
        items: [
          {
            title: "Home Appliances",
            desc: "Secure transportation for large and small home appliances, protected from origin to destination.",
            image: img("1584568694244-14fbdf83bd30"),
          },
          {
            title: "Consumer Electronics",
            desc: "Secure logistics for consumer electronics and devices, backed by TAPA-certified handling and monitoring.",
            image: img("1518770660439-4636190af475"),
          },
          {
            title: "Electric Components",
            desc: "Controlled road transport for electric components, safeguarding integrity throughout the journey.",
            image: img("1518623489648-a173ef7824f3"),
          },
        ],
      },
      benefits: {
        heading: "Why High-Tech Shippers Choose Route 44",
        items: [
          {
            icon: "savings",
            title: "Cost-Effective",
            desc: "Save by working directly with an end-to-end logistics provider.",
          },
          {
            icon: "bolt",
            title: "Efficient",
            desc: "Ship any volume, from single to multiple FTLs — we handle it all.",
          },
          {
            icon: "verified",
            title: "Reliable",
            desc: "Fast, timely deliveries backed by guaranteed owned-fleet capacity.",
          },
          {
            icon: "tune",
            title: "Flexible",
            desc: "Work on a contractual or spot basis, with flexible loading and unloading anywhere in Europe.",
          },
          {
            icon: "shield",
            title: "Secure",
            desc: "Protect your high-value goods in transit across the continent.",
          },
        ],
      },
    },
  },
  {
    slug: "food",
    title: "Food & Beverages",
    tagline:
      "Temperature-controlled logistics for fresh, chilled, frozen, and processed foods, preserving quality from pickup to delivery.",
    image: img("1542838132-92c53300491e"),
    detail: {
      intro: {
        heading: "Temperature-Controlled Transport & Seasonal Support",
        paragraphs: [
          "We offer temperature-controlled logistics and seasonal capacity support for fresh, chilled, frozen, and processed foods. With decades of experience and deep knowledge of the perishable goods industry, we ensure safe, efficient road transportation across domestic and international European routes.",
        ],
      },
      stats: {
        heading: "Built to Protect Perishable Cargo",
        items: [
          {
            icon: "thermostat",
            label: "Temperature Control Range",
            sub: "-25°C to +25°C",
          },
          {
            icon: "device_thermostat",
            label: "Temperature Monitoring",
            sub: "On loading & in transit",
          },
          {
            icon: "monitoring",
            label: "Non-Stop Control",
            sub: "Real-time shipment visibility and 24/7 monitoring",
          },
          {
            icon: "hub",
            label: "Network Density",
            sub: "Trucks available around your warehouses and peak flows",
          },
          {
            icon: "lock",
            label: "TAPA TSR 1 Standard",
            sub: "Secure owned fleet & certified locks",
          },
          {
            icon: "support_agent",
            label: "Expert Support",
            sub: "Dedicated team & account managers",
          },
          {
            icon: "schedule",
            label: "24/7 Human Oversight",
            sub: "Day, night, and weekend support",
          },
          {
            icon: "verified",
            label: "Guaranteed Capacity",
            sub: "For seasonal & high-demand needs",
          },
        ],
      },
      geography: {
        heading: "Refrigerated Transport Network Covering All of Europe",
        subheading:
          "Excellence in temperature-controlled logistics, powered by Route 44's owned fleet and network.",
        image: img("1758549683132-72ac09a3d5b5"),
        bullets: [
          "High truck concentration in every region",
          "Short-notice deliveries (24–48 hours)",
          "Flexible loading schedule",
          "Intermodal rail and ferry network",
          "Any volume, anywhere in Europe",
          "Contractual or spot-based capacity",
        ],
      },
      trailerSpec: {
        heading: "Refrigerated Trailer",
        intro:
          "Refrigerated trailers provide precise temperature control for goods like fresh produce and frozen foods, preserving their quality and extending their shelf life.",
        image: img("1773126378189-9186d697b797"),
        groups: [
          {
            title: "Thermo-Mapped",
            sub: "-25°C to +25°C temperature control capabilities",
            bullets: [
              "Annually calibrated",
              "24/7 temperature monitoring",
              "Online thermograph reports",
              "Flexible airflow distribution",
            ],
          },
          {
            title: "Standard Trailer",
            sub: "Dimensions & size",
            bullets: [
              "33/66 euro pallets can be loaded",
              "Single or double deck, secure bars",
              "Up to 86m³ loading capacity",
              "Up to 24 tonnes maximum cargo weight",
              "Rear access for cargo loading & unloading",
            ],
          },
          {
            title: "Secure",
            sub: "Enhanced protection & strict protocols",
            bullets: [
              "Hard-sided walls",
              "TAPA TSR Level 1 locks",
              "24/7 real-time visibility",
              "Secure parking",
              "Route deviation alerts",
              "Classified route planning",
            ],
          },
        ],
      },
      segments: {
        heading: "Food & Beverages We Transport Across Europe",
        subheading:
          "Explore the cargo types we deliver and the tailored solutions we build to optimise your supply chain.",
        items: [
          {
            title: "Fruits & Vegetables — Fresh",
            desc: "Temperature-controlled transport for fresh produce, preserving quality from farm to shelf.",
            image: img("1610832958506-aa56368176cf"),
          },
          {
            title: "Fruits & Vegetables — Processed",
            desc: "Reliable, compliant logistics for processed fruit and vegetable products.",
            image: img("1607301405390-d831c242f59b"),
          },
          {
            title: "Dairy — Chilled",
            desc: "Precise cold-chain transport for chilled dairy products, keeping quality consistent end to end.",
            image: img("1550583724-b2692b85b150"),
          },
          {
            title: "Dairy — Ambient",
            desc: "Efficient, compliant transportation for ambient dairy products across Europe.",
            image: img("1563636619-e9143da7973b"),
          },
        ],
      },
      benefits: {
        heading: "Why Food & Beverage Shippers Choose Route 44",
        items: [
          {
            icon: "savings",
            title: "Cost-Effective",
            desc: "Save by working directly with an end-to-end logistics provider.",
          },
          {
            icon: "bolt",
            title: "Efficient",
            desc: "Ship any volume, from single to multiple FTLs — we handle it all.",
          },
          {
            icon: "verified",
            title: "Reliable",
            desc: "Fast, timely deliveries backed by guaranteed owned-fleet capacity.",
          },
          {
            icon: "tune",
            title: "Flexible",
            desc: "Work on a contractual or spot basis, with flexible loading and unloading anywhere in Europe.",
          },
          {
            icon: "shield",
            title: "Secure",
            desc: "Protect your high-value goods in transit across the continent.",
          },
        ],
      },
    },
  },
  {
    slug: "fashion-lifestyle",
    title: "Fashion & Lifestyle",
    tagline:
      "Efficient, digitally-tracked deliveries that keep fashion and lifestyle products moving and on schedule.",
    image: img("1445205170230-053b83016050"),
    detail: {
      intro: {
        heading: "Supporting Your Needs Across Europe",
        paragraphs: [
          "Delivering fashion and lifestyle goods is more than transportation — it's about quality, timing, and reliability. With a focus on precision and care, we help you bring your products to customers without compromise.",
        ],
      },
      whyUs: {
        heading: "Why Us?",
        intro:
          "Route 44 offers solutions designed to keep pace with your business. Our advanced digital tools and extensive European network let us handle high-demand shipments efficiently, while dedicated teams ensure every delivery meets your standards, arriving on time and in perfect condition. Our priority is helping you optimise your supply chain and deliver the excellence your customers expect.",
        features: [
          {
            title: "Capacity you can count on",
            desc: "Rely on our high-capacity fleet of trucks and trailers to keep your cargo moving smoothly across the European continent.",
          },
          {
            title: "Streamlined efficiency",
            desc: "Simplify your logistics operations with dedicated account management, expert customer support, and seamless data integrations into your existing supply chain systems.",
          },
          {
            title: "Stay in control 24/7",
            desc: "Gain full visibility over your shipments with real-time tracking and proactive issue resolution, ensuring your cargo arrives on time and in full.",
          },
          {
            title: "Uncompromising security",
            desc: "Eliminate concerns about cargo theft and damage with TAPA TSR 1 & 2 certified equipment, secure parking, 24/7 monitoring, and intelligent route risk assessment.",
          },
          {
            title: "Scale your business across Europe",
            desc: "Expand with confidence, backed by our extensive European network, regulatory expertise, and a large fleet of modern trucks and trailers built to support your growth.",
          },
          {
            title: "Flexible insurance options",
            desc: "Choose between insurance options that best suit your interests.",
          },
        ],
      },
      segments: {
        heading: "Fashion & Lifestyle Operating Segments",
        subheading:
          "Explore the cargo types we deliver and the tailored solutions we build to optimise your supply chain.",
        items: [
          {
            title: "Toys",
            desc: "Reliable, efficient transportation for toys and games, ensuring safe delivery, intact packaging, and on-time arrivals.",
            image: img("1558877385-8c1b6a35bb56"),
          },
          {
            title: "Sports & Leisure Products",
            desc: "Deliveries of sports, fitness, and leisure products across Europe, with timely delivery and proper handling.",
            image: img("1517649763962-0c623066013b"),
          },
          {
            title: "Clothing",
            desc: "Fast, reliable transport for clothing and apparel, ensuring safe handling, timely delivery, and protection of high-quality textiles.",
            image: img("1445205170230-053b83016050"),
          },
          {
            title: "Footwear",
            desc: "Secure, efficient delivery solutions for footwear, designed to protect product quality and packaging integrity in transit.",
            image: img("1549298916-b41d501d3772"),
          },
          {
            title: "Accessories",
            desc: "Safe, dependable transport for fashion and beauty accessories, ensuring on-time delivery and proper handling.",
            image: img("1611085583191-a3b181a88401"),
          },
        ],
      },
      valueAdded: {
        heading: "Value Added Services",
        subheading:
          "Route 44 takes a holistic approach to road transportation. Our sustainable, digital solutions integrate effortlessly with your existing systems, streamlining operations, transparency, and efficiency.",
        items: [
          {
            title: "Intermodal Rail Transport",
            desc: "Reduce your carbon footprint while keeping your supply chain uninterrupted, with our intermodal solutions.",
            image: img("1708109353962-3b8262147aa6"),
          },
          {
            title: "Alternative Fuel Program (HVO100)",
            desc: "Save up to 90% of CO2 emissions by using HVO100 instead of conventional diesel.",
            image: img("1660145954339-b94968afca8f"),
          },
          {
            title: "Transportation Optimisation",
            desc: "Reduce emissions through eco-driving, advanced fleet management, and innovative route optimisation.",
            image: img("1533055640609-24b498dfd74c"),
          },
          {
            title: "Green Corridors",
            desc: "Cut your carbon footprint while ensuring your supply chain remains uninterrupted, with our intermodal solutions.",
            image: img("1521295121783-8a321d551ad2"),
          },
        ],
      },
    },
  },
  {
    slug: "agricultural",
    title: "Agricultural",
    tagline:
      "Temperature-controlled transportation for delicate agricultural cargo, such as flowers, kept fresh and delivered on time.",
    image: img("1490750967868-88aa4486c946"),
    detail: {
      intro: {
        heading: "Your Trusted Partner in Agricultural Logistics",
        paragraphs: [
          "When it comes to agricultural deliveries, timing and handling make all the difference. We ensure that even the most delicate cargo is delivered exactly as intended, supporting your business with dependable, precise logistics solutions.",
        ],
      },
      whyUs: {
        heading: "Why Us?",
        intro:
          "Our temperature-controlled transportation solutions preserve the freshness and quality of your goods, while advanced digital and tracking systems provide real-time visibility, keeping you informed every step of the way. We deliver your shipments on time and in perfect condition, meeting the unique demands of agricultural transportation across Europe.",
        features: [
          {
            title: "Effortless temperature control",
            desc: "Keep your goods in perfect condition with our cold-chain management solutions, providing continuous real-time temperature monitoring from -25°C to +25°C, source to destination.",
          },
          {
            title: "Timely deliveries",
            desc: "Eliminate concerns about late arrivals. Meticulous planning and fast solutions ensure your time-critical goods reach any destination on schedule, with options for two-driver crews and intermediary-free transport.",
          },
          {
            title: "Capacity you can count on",
            desc: "Rely on our high-capacity fleet of trucks and trailers to keep your cargo moving smoothly across the European continent, even during peak season.",
          },
          {
            title: "Stay in control 24/7",
            desc: "Gain full visibility over your shipments with real-time tracking and proactive issue resolution, ensuring your cargo arrives on time and in full.",
          },
          {
            title: "Streamlined efficiency",
            desc: "Simplify your logistics operations with dedicated account management, expert customer support, and seamless data integrations into your existing supply chain systems.",
          },
          {
            title: "Scale your business across Europe",
            desc: "Expand with confidence, backed by our extensive European network, regulatory expertise, and a large fleet of modern trucks and trailers built to support your growth.",
          },
        ],
      },
      segments: {
        heading: "Agricultural Operating Segments",
        subheading:
          "Explore the cargo types we deliver and the tailored solutions we build to optimise your supply chain.",
        items: [
          {
            title: "Seeds & Grain",
            desc: "Cold-chain logistics for harvested products and crops, maintaining optimal temperature and ensuring timely deliveries.",
            image: img("1574943320219-553eb213f72d"),
          },
          {
            title: "Animal Byproducts (ABPs)",
            desc: "Deliveries across Europe for animal by-products not intended for human consumption.",
            image: img("1500595046743-cd271d694d30"),
          },
          {
            title: "Plants & Flowers",
            desc: "Refrigerated transport for plants and fresh flowers, ensuring optimal conditions and on-time delivery to preserve freshness.",
            image: img("1490750967868-88aa4486c946"),
          },
        ],
      },
      valueAdded: {
        heading: "Value Added Services",
        subheading:
          "Route 44 takes a holistic approach to road transportation. Our sustainable, digital solutions integrate effortlessly with your existing systems, streamlining operations, transparency, and efficiency.",
        items: [
          {
            title: "Intermodal Rail Transport",
            desc: "Reduce your carbon footprint while keeping your supply chain uninterrupted, with our intermodal solutions.",
            image: img("1708109353962-3b8262147aa6"),
          },
          {
            title: "Alternative Fuel Program (HVO100)",
            desc: "Save up to 90% of CO2 emissions by using HVO100 instead of conventional diesel.",
            image: img("1660145954339-b94968afca8f"),
          },
          {
            title: "Transportation Optimisation",
            desc: "Reduce emissions through eco-driving, advanced fleet management, and innovative route optimisation.",
            image: img("1533055640609-24b498dfd74c"),
          },
          {
            title: "Green Corridors",
            desc: "Cut your carbon footprint while ensuring your supply chain remains uninterrupted, with our intermodal solutions.",
            image: img("1521295121783-8a321d551ad2"),
          },
        ],
      },
    },
  },
  {
    slug: "chemicals",
    title: "Chemicals",
    tagline:
      "Secure, compliant transportation for a wide range of chemical products, from industrial to household applications.",
    image: img("1532187863486-abf9dbad1b69"),
    detail: {
      intro: {
        heading: "Chemical Logistics Simplified",
        paragraphs: [
          "Navigating the complexities of chemical transportation requires expertise, compliance, and care. Our tailored solutions make it seamless to transport industrial and household chemicals securely and efficiently, ensuring safety every step of the way.",
        ],
      },
      whyUs: {
        heading: "Why Us?",
        intro:
          "Our chemical transportation services prioritise safety, compliance, and reliability. With advanced handling protocols, trained professionals, and a commitment to meeting stringent regulations, we deliver non-hazardous products securely across Europe. Whether industrial or household chemicals, we simplify the process while maintaining the highest standards.",
        features: [
          {
            title: "Uncompromising security",
            desc: "Eliminate concerns about cargo theft and damage with TAPA TSR 1 & 2 certified equipment, secure parking, driver screening, 24/7 monitoring, and intelligent route risk assessment.",
          },
          {
            title: "Streamlined efficiency",
            desc: "Simplify your logistics operations with dedicated account management, expert customer support, and seamless EDI integration.",
          },
          {
            title: "Stay in control 24/7",
            desc: "Gain full visibility over your shipments with real-time tracking and proactive issue resolution, ensuring your cargo arrives on time and in full.",
          },
          {
            title: "Capacity you can count on",
            desc: "Rely on our high-capacity fleet of trucks and trailers to keep your cargo moving smoothly across the European continent.",
          },
          {
            title: "Scale your business across Europe",
            desc: "Expand with confidence, backed by our extensive European network, regulatory expertise, and a large fleet of modern trucks and trailers built to support your growth.",
          },
          {
            title: "Flexible insurance options",
            desc: "Choose between insurance options that best suit your interests.",
          },
        ],
      },
      segments: {
        heading: "Chemicals Operating Segments",
        subheading:
          "Explore the cargo types we deliver and the tailored solutions we build to optimise your supply chain.",
        items: [
          {
            title: "Household Chemicals",
            desc: "Compliant, secure deliveries for household chemicals and cleaners across mainland Europe, Scandinavia, and the UK.",
            image: img("1585421514738-01798e348b17"),
          },
        ],
      },
    },
  },
  {
    slug: "fmcg",
    title: "Fast Moving Consumer Goods (FMCG)",
    tagline:
      "Strictly on-time, large-capacity transportation solutions for high-demand consumer goods.",
    image: img("1578916171728-46686eac8d58"),
    detail: {
      intro: {
        heading: "Scalable Cross-European Transport & Peak Season Coverage",
        paragraphs: [
          "We support high-frequency, high-volume distribution flows across Europe with on-time, secure FTL road transportation. Using our own fleet of trucks and trailers, we provide stable capacity, seasonal support during demand peaks, and operational expertise across European markets.",
        ],
      },
      stats: {
        heading: "Built for High-Frequency Distribution",
        items: [
          {
            icon: "inventory_2",
            label: "High-Volume Shipments",
            sub: "From single to multiple FTLs",
          },
          {
            icon: "thermostat",
            label: "Temperature Control Range",
            sub: "-25°C to +25°C",
          },
          {
            icon: "device_thermostat",
            label: "Temperature Monitoring",
            sub: "On loading & in transit",
          },
          {
            icon: "hub",
            label: "Network Density",
            sub: "Trucks available around your warehouses and peak flows",
          },
          {
            icon: "monitoring",
            label: "Non-Stop Control",
            sub: "Real-time shipment visibility and 24/7 monitoring",
          },
          {
            icon: "lock",
            label: "TAPA TSR 1 Standard",
            sub: "Secure owned fleet & certified locks",
          },
          {
            icon: "support_agent",
            label: "Expert Support",
            sub: "Dedicated team & account managers",
          },
          {
            icon: "schedule",
            label: "24/7 Human Oversight",
            sub: "Day, night, and weekend support",
          },
          {
            icon: "door_sliding",
            label: "Hard-Sided & Rear Access",
            sub: "Owned box & reefer trailers",
          },
          {
            icon: "verified",
            label: "Guaranteed Capacity",
            sub: "For seasonal & high-demand needs",
          },
          {
            icon: "local_shipping",
            label: "Dedicated Fleet",
            sub: "Solutions for round trips",
          },
        ],
      },
      geography: {
        heading: "Extensive Transportation Geography Covering All of Europe",
        subheading:
          "Excellence in temperature-controlled logistics, powered by Route 44's owned fleet and network.",
        image: img("1758549683132-72ac09a3d5b5"),
        bullets: [
          "High truck concentration in every region",
          "Short-notice deliveries (24–48 hours)",
          "Flexible loading schedule",
          "Intermodal rail and ferry network",
          "Any volume, anywhere in Europe",
          "Contractual or spot-based capacity",
        ],
      },
      trailerSpec: {
        heading: "Refrigerated Trailer",
        intro:
          "Refrigerated trailers provide precise temperature control for goods like fresh produce and frozen foods, preserving their quality and extending their shelf life.",
        image: img("1773126378189-9186d697b797"),
        groups: [
          {
            title: "Thermo-Mapped",
            sub: "-25°C to +25°C temperature control capabilities",
            bullets: [
              "Annually calibrated",
              "24/7 temperature monitoring",
              "Online thermograph reports",
              "Flexible airflow distribution",
            ],
          },
          {
            title: "Standard Trailer",
            sub: "Dimensions & size",
            bullets: [
              "33/66 euro pallets can be loaded",
              "Single or double deck, secure bars",
              "Up to 86m³ loading capacity",
              "Up to 24 tonnes maximum cargo weight",
              "Rear access for cargo loading & unloading",
            ],
          },
          {
            title: "Secure",
            sub: "Enhanced protection & strict protocols",
            bullets: [
              "Hard-sided walls",
              "TAPA TSR Level 1 locks",
              "24/7 real-time visibility",
              "Secure parking",
              "Route deviation alerts",
              "Classified route planning",
            ],
          },
        ],
      },
    },
  },
  {
    slug: "industrial-manufacturing",
    title: "Industrial & Manufacturing",
    tagline:
      "Large-volume transportation for diverse industrial and manufacturing goods, from metals to textiles.",
    image: img("1565043666747-69f6646db940"),
    detail: {
      intro: {
        heading: "Your Reliable Partner in Industrial Logistics",
        paragraphs: [
          "Transporting industrial and manufacturing goods requires scalable, precise solutions. With advanced infrastructure and expertise, we ensure seamless operations and timely deliveries across Europe.",
        ],
      },
      whyUs: {
        heading: "Why Us?",
        intro:
          "We specialise in supporting complex industrial supply chains with reliable, large-scale transportation solutions. Backed by a high-capacity fleet of trucks and trailers, plus expert drivers and dedicated teams, we ensure seamless, efficient, and dependable deliveries that keep your business moving smoothly.",
        features: [
          {
            title: "Capacity you can count on",
            desc: "Rely on our high-capacity fleet of trucks and trailers to keep your cargo moving smoothly across the European continent, even during peak season.",
          },
          {
            title: "Stay in control 24/7",
            desc: "Gain full visibility over your shipments with real-time tracking and proactive issue resolution, ensuring your cargo arrives on time and in full.",
          },
          {
            title: "Streamlined efficiency",
            desc: "Simplify your logistics operations with dedicated account management, expert customer support, and seamless data integrations into your existing supply chain systems.",
          },
          {
            title: "Optimised costs",
            desc: "Benefit from transparent pricing and flexible service options, letting you optimise logistics costs while maintaining the highest security standards.",
          },
          {
            title: "Scale your business across Europe",
            desc: "Expand with confidence, backed by our extensive European network, regulatory expertise, and a large fleet of modern trucks and trailers built to support your growth.",
          },
          {
            title: "Timely deliveries",
            desc: "Eliminate concerns about late arrivals. Meticulous planning and fast solutions ensure your time-critical goods reach any destination on schedule, with options for two-driver crews and intermediary-free transport.",
          },
        ],
      },
      segments: {
        heading: "Industrial & Manufacturing Operating Segments",
        subheading:
          "Explore the cargo types we deliver and the tailored solutions we build to optimise your supply chain.",
        items: [
          {
            title: "Textile Industry",
            desc: "Delivery services for textile products, garments, and fabrics, ensuring on-time deliveries and expert handling.",
            image: img("1558618666-fcd25c85cd64"),
          },
          {
            title: "Packaging Industry",
            desc: "Freight deliveries for packaging materials — from plastic and cardboard to corrugated boxes and wrapping solutions — designed to protect goods in transit.",
            image: img("1607166452427-7e4477079cb9"),
          },
        ],
      },
    },
  },
  {
    slug: "cosmetics-hygiene",
    title: "Cosmetics & Hygiene",
    tagline:
      "Specialised handling designed to transport delicate cosmetics, fragrances, and personal care items with care.",
    image: img("1596462502278-27bfdc403348"),
    detail: {
      intro: {
        heading: "GDP-Compliant & Secure Transport for Temperature-Controlled Cargo",
        paragraphs: [
          "We offer GDP-compliant, secure transportation for temperature-sensitive and theft-prone cargo such as cosmetics, makeup, personal care, and hygiene goods. With decades of expertise and deep knowledge of industry and market trends, we ensure safe, reliable, efficient deliveries across Europe.",
        ],
      },
      stats: {
        heading: "Built for Sensitive, High-Value Cargo",
        items: [
          {
            icon: "local_shipping",
            label: "Owned Fleet",
            sub: "Euro 6 trucks & reefer trailers",
          },
          {
            icon: "thermostat",
            label: "Thermo-Mapped",
            sub: "Annually calibrated semi-trailers",
          },
          {
            icon: "verified_user",
            label: "GDP-Certified",
            sub: "Fleet, team & drivers",
          },
          {
            icon: "verified",
            label: "Quality & Safety",
            sub: "Auditable quality for regulated and sensitive cargo",
          },
          {
            icon: "device_thermostat",
            label: "Pharma & Healthcare Range",
            sub: "+2°C +8°C & +15°C +25°C temperature ranges",
          },
          {
            icon: "ac_unit",
            label: "Temperature Control Range",
            sub: "-25°C to +25°C",
          },
          {
            icon: "monitoring",
            label: "Temperature Monitoring",
            sub: "On loading & in transit",
          },
          {
            icon: "sensors",
            label: "Non-Stop Control",
            sub: "Real-time shipment visibility and 24/7 monitoring",
          },
          {
            icon: "hub",
            label: "Network Density",
            sub: "Trucks available around your warehouses and peak flows",
          },
          {
            icon: "lock",
            label: "TAPA TSR 1 Standard",
            sub: "Secure owned fleet & certified locks",
          },
          {
            icon: "route",
            label: "Routes Planning",
            sub: "Planned in advance before the journey",
          },
          {
            icon: "local_parking",
            label: "Secured Parking Areas",
            sub: "Across the EU",
          },
          {
            icon: "fence",
            label: "Geo-Fencing & Deviation Alerts",
            sub: "Monitoring in transit",
          },
          {
            icon: "shield",
            label: "Secure Transit",
            sub: "Advanced route planning, secure parking, geo-fencing & deviation alerts",
          },
          {
            icon: "support_agent",
            label: "Expert Support",
            sub: "Dedicated team & account managers",
          },
          {
            icon: "schedule",
            label: "24/7 Human Oversight",
            sub: "Day, night, and weekend support",
          },
        ],
      },
      geography: {
        heading: "Refrigerated Transport Network Covering All of Europe",
        subheading:
          "Excellence in temperature-controlled logistics, powered by Route 44's owned fleet and network.",
        image: img("1758549683132-72ac09a3d5b5"),
        bullets: [
          "High truck concentration in every region",
          "Short-notice deliveries (24–48 hours)",
          "Flexible loading schedule",
          "Intermodal rail and ferry network",
          "Any volume, anywhere in Europe",
          "Contractual or spot-based capacity",
        ],
      },
      trailerSpec: {
        heading: "Refrigerated Trailer",
        intro:
          "Refrigerated trailers provide precise temperature control for goods like cosmetics and personal care products, preserving their quality and extending their shelf life.",
        image: img("1773126378189-9186d697b797"),
        groups: [
          {
            title: "Thermo-Mapped",
            sub: "-25°C to +25°C temperature control capabilities",
            bullets: [
              "Annually calibrated",
              "24/7 temperature monitoring",
              "Online thermograph reports",
              "Flexible airflow distribution",
            ],
          },
          {
            title: "Standard Trailer",
            sub: "Dimensions & size",
            bullets: [
              "33/66 euro pallets can be loaded",
              "Single or double deck, secure bars",
              "Up to 86m³ loading capacity",
              "Up to 24 tonnes maximum cargo weight",
              "Rear access for cargo loading & unloading",
            ],
          },
          {
            title: "Secure",
            sub: "Enhanced protection & strict protocols",
            bullets: [
              "Hard-sided walls",
              "TAPA TSR Level 1 locks",
              "24/7 real-time visibility",
              "Secure parking",
              "Route deviation alerts",
              "Classified route planning",
            ],
          },
        ],
      },
      segments: {
        heading: "Cosmetics & Hygiene Products We Deliver Across Europe",
        subheading:
          "Explore the cargo types we deliver and the tailored solutions we build to optimise your supply chain.",
        items: [
          {
            title: "Personal Care & Hygiene Products",
            desc: "Temperature-controlled, compliant transport for personal care and hygiene products across Europe.",
            image: img("1556228720-195a672e8a03"),
          },
          {
            title: "Cosmetics & Makeup",
            desc: "Secure, temperature-controlled delivery for cosmetics and makeup, protecting product quality in transit.",
            image: img("1596462502278-27bfdc403348"),
          },
        ],
      },
      benefits: {
        heading: "Why Cosmetics & Hygiene Shippers Choose Route 44",
        items: [
          {
            icon: "savings",
            title: "Cost-Effective",
            desc: "Save by working directly with an end-to-end logistics provider.",
          },
          {
            icon: "bolt",
            title: "Efficient",
            desc: "Ship any volume, from single to multiple FTLs — we handle it all.",
          },
          {
            icon: "verified",
            title: "Reliable",
            desc: "Fast, timely deliveries backed by guaranteed owned-fleet capacity.",
          },
          {
            icon: "tune",
            title: "Flexible",
            desc: "Work on a contractual or spot basis, with flexible loading and unloading anywhere in Europe.",
          },
          {
            icon: "shield",
            title: "Secure",
            desc: "Protect your high-value goods in transit across the continent.",
          },
        ],
      },
    },
  },
  {
    slug: "automotive",
    title: "Automotive",
    tagline:
      "Supporting your automotive supply chain with FTL deliveries, ensuring timely parts and component distribution across Europe.",
    image: img("1503376780353-7e6692767b70"),
    detail: {
      intro: {
        heading: "Driving Your Supply Chain Forward",
        paragraphs: [
          "In the automotive industry, every part matters, and every second counts. Our logistics solutions are designed to keep your supply chain moving smoothly, ensuring your components reach their destination on time.",
        ],
      },
      whyUs: {
        heading: "Why Us?",
        intro:
          "With long-standing expertise, we offer tailored full-truckload road transportation solutions across Europe, designed to seamlessly integrate with and support your automotive supply chain. From parts and components to tier deliveries, we help you stay ahead in a fast-paced, competitive environment.",
        features: [
          {
            title: "Uncompromising security",
            desc: "Eliminate concerns about cargo theft and damage with TAPA TSR 1 & 2 certified equipment, secure parking, 24/7 monitoring, and intelligent route risk assessment.",
          },
          {
            title: "Timely deliveries",
            desc: "Eliminate concerns about late arrivals. Meticulous planning and fast solutions ensure your time-critical goods reach any destination on schedule, with options for two-driver crews and intermediary-free transport.",
          },
          {
            title: "Stay in control 24/7",
            desc: "Gain full visibility over your shipments with real-time tracking and proactive issue resolution, ensuring your cargo arrives on time and in full.",
          },
          {
            title: "Streamlined efficiency",
            desc: "Simplify your logistics operations with dedicated account management, expert customer support, and seamless data integrations into your existing supply chain systems.",
          },
          {
            title: "Capacity you can count on",
            desc: "Rely on our high-capacity fleet of trucks and trailers to keep your cargo moving smoothly across the European continent.",
          },
          {
            title: "Optimised costs",
            desc: "Benefit from transparent pricing and flexible service options, letting you optimise logistics costs while maintaining the highest security standards.",
          },
        ],
      },
      segments: {
        heading: "Automotive Operating Segments",
        subheading:
          "Explore the cargo types we deliver and the tailored solutions we build to optimise your supply chain.",
        items: [
          {
            title: "Parts & Components",
            desc: "Secure, flexible deliveries of auto parts and components across mainland Europe, Scandinavia, and the UK.",
            image: img("1580273916550-e323be2ae537"),
          },
        ],
      },
      valueAdded: {
        heading: "Value Added Services",
        subheading:
          "Route 44 takes a holistic approach to road transportation. Our sustainable, digital solutions integrate effortlessly with your existing systems, streamlining operations, transparency, and efficiency.",
        items: [
          {
            title: "Green Corridors",
            desc: "Cut your carbon footprint while ensuring your supply chain remains uninterrupted, with our intermodal solutions.",
            image: img("1521295121783-8a321d551ad2"),
          },
          {
            title: "Data Integrations",
            desc: "Exchange documents such as orders, PODs, and invoices instantly through direct system integration.",
            image: img("1551288049-bebda4e38f71"),
          },
          {
            title: "Smart Planning",
            desc: "Ensure your cargo is transported on the most optimal route for cost and emission savings.",
            image: img("1454165804606-c3d57bc86b40"),
          },
          {
            title: "Intermodal Rail Transport",
            desc: "Reduce your carbon footprint while keeping your supply chain uninterrupted, with our intermodal solutions.",
            image: img("1708109353962-3b8262147aa6"),
          },
          {
            title: "Alternative Fuel Program (HVO100)",
            desc: "Save up to 90% of CO2 emissions by using HVO100 instead of conventional diesel.",
            image: img("1660145954339-b94968afca8f"),
          },
          {
            title: "Transportation Optimisation",
            desc: "Reduce emissions through eco-driving, advanced fleet management, and innovative route optimisation.",
            image: img("1533055640609-24b498dfd74c"),
          },
        ],
      },
    },
  },
];

export function getServiceVerticalBySlug(slug) {
  return SERVICE_VERTICALS.find((item) => item.slug === slug);
}
