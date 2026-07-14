/**
 * Categories Data
 * Shared source of truth for the Home page Categories carousel
 * and each category's detail page.
 */

const img = (id) =>
  `https://images.unsplash.com/photo-${id}?w=1600&h=1000&fit=crop`;

export const CATEGORIES = [
  {
    slug: "air-freight-solutions",
    title: "Air Freight Solutions",
    tagline: "Working round the clock, wherever you need us",
    desc: "Time-critical air freight networks connecting global trade lanes with precision scheduling.",
    image: img("1646435847725-dad08ee09d43"),
    detail: {
      intro: {
        heading: "Fast, Global & Reliable Air Freight Solutions",
        image: img("1646435847725-dad08ee09d43"),
        paragraphs: [
          "In a constantly shifting global market, your business needs air freight that's adaptable, dependable, and matched to how you operate. At Route 44, we move your cargo with the same precision and care we'd want for our own.",
          "Our international air network is built to keep your supply chain moving — whether you're shipping across continents or responding to a same-day business need.",
          "Our air freight specialists design solutions around your specific operational and logistical challenges, whether that means capacity on scheduled commercial flights, dedicated freighters, or full charters.",
          "From planned freight to time-critical shipments, and from regional lanes to truly global routes, we offer the service levels to match — wherever your business needs to reach.",
          "A Route 44 air freight specialist is only a call or a click away, bringing deep industry expertise to wherever in the world you're shipping.",
        ],
      },
      video: {
        heading: "Your Cargo, Our Commitment: See Us in Action",
        body: "Take a look at how our air freight network keeps critical shipments moving, rain or shine.",
        caption: "Air freight in motion — Route 44 Logistics",
        thumbnail: img("1716718810773-d2a52b43602f"),
      },
      keepAhead: {
        heading: "Air Freight Services That Keep You Ahead",
        paragraphs: [
          "Air freight is more than fast transportation — it's the connection that helps you meet customer expectations and stay competitive. Whether you're planning weeks ahead or reacting to an urgent need, Route 44 delivers secure, flexible, and dependable air freight built around your business.",
          "We're committed to giving you full visibility and control at every stage, so you can ship with confidence — from time-critical single shipments to complex international freight programmes.",
        ],
      },
      serviceLevels: {
        heading: "Service Levels That Suit Your Needs",
        intro:
          "Whether your freight moves on commercial or freighter aircraft, our air freight specialists build a tailored solution around your business.",
        tiers: [
          { name: "Air Express", tagline: "The Expedited Solution" },
          { name: "Air Priority", tagline: "The Time-Sensitive Solution" },
          { name: "Air Value", tagline: "The Cost-Effective Solution" },
        ],
      },
      sustainability: {
        heading: "Route 44 Sustainability Program",
        image: img("1660145954339-b94968afca8f"),
        paragraphs: [
          "The Route 44 Sustainability Program is our dedicated suite of low-carbon logistics solutions, built to help your business decarbonise operations and hit its own sustainability targets.",
          "Our low-carbon air freight options bring together everything needed to measure, optimise, and shift toward lower-carbon transport — from modal shift to alternative fuels — supporting your company's sustainability goals.",
        ],
        bullets: [
          "Sustainable Aviation Fuel (SAF) available per shipment",
          "CO2e emissions dashboard available through the Route 44 client portal",
        ],
      },
      solutions: {
        heading: "Our Solutions",
        subheading:
          "Discover solutions designed to help you meet your strategic goals.",
        items: [
          {
            title: "Route 44 Air Time Critical",
            image: img("1517048676732-d65bc937f952"),
          },
          {
            title: "Route 44 Sea-Air Combination",
            image: img("1758549683132-72ac09a3d5b5"),
          },
          {
            title: "Air Charter: Dedicated Flight Services",
            image: img("1738602867971-d111f1a54c80"),
          },
        ],
      },
      valueAdded: {
        heading: "Value Added Services",
        image: img("1645736315000-6f788915923b"),
        paragraphs: [
          "The extra services that make the real difference.",
          "Across our network, choose the value-added services that best support your air freight shipments.",
        ],
        bullets: [
          "Ad-valorem insurance for transport & storage",
          "Real-time shipment monitoring",
          "Contract management",
        ],
      },
      specialized: {
        heading: "Tailored Solutions for Your Specialised Goods",
        image: img("1749244768351-2726dc23d26c"),
        intro:
          "Specific solutions built around your industry's unique requirements. From perishables to pharmaceuticals and dangerous goods, we deliver a fast, secure, and compliant solution for every need:",
        bullets: [
          "Dedicated staff at certified stations, fully trained in Dangerous Goods, Health & Safety",
          "Route 44 for Patients — a GDP-compliant suite of services with temperature-controlled air freight stations for bio-pharma, diagnostics, labs, and medical devices",
          "Certified for the transport of all lithium-ion goods, including EV batteries, scooters, hoverboards, and mobile devices",
          "Quality management system aligned with IATA recommendations",
          "Door-to-door temperature-controlled solutions with qualified active and passive packaging",
        ],
      },
      difference: {
        heading: "The Route 44 Difference",
        columns: [
          {
            title: "Global Network",
            body: "With certified air freight stations across 45+ countries, we connect your business to every major market. Our local experts and global network keep your cargo moving smoothly, securely, and on schedule.",
          },
          {
            title: "Reliable Capacity",
            body: "Through strong carrier partnerships and charter arrangements, we secure air freight capacity even during peak seasons or disruptions — keeping your supply chain resilient when it matters most.",
          },
          {
            title: "Competitive Pricing",
            body: "We balance cost-efficiency with speed and reliability, offering flexible service levels, consolidation options, and smart routing that pass on the benefits of scale — without compromising quality.",
          },
        ],
      },
      portal: {
        heading: "Route 44 Client Portal for Air Freight Quotes & Bookings",
        body: "Right at your fingertips — manage Route 44's full air freight offering online through our client portal, your digital freight partner.",
        cta: "Access Portal",
        image: img("1744869985867-d23cc60e3625"),
      },
      facts: {
        heading: "Facts & Figures",
        stats: [
          { label: "Countries", value: "45+", sub: "served worldwide" },
          { label: "Tonnes", value: "180,000", sub: "shipped in 2024" },
        ],
      },
      caseStudies: {
        heading: "Case Studies",
        intro:
          "We partner with leaders and specialists across all industries — discover our success stories.",
        items: [
          {
            title: "Delivering Life-Saving Medical Supplies Across Borders",
            image: img("1716718810773-d2a52b43602f"),
          },
          {
            title: "Moving Fresh-Cut Flowers From Farm to Market in 48 Hours",
            image: img("1553605379-9221b132f0ac"),
          },
          {
            title: "Scaling Seasonal Retail Exports Across Europe",
            image: img("1716191299980-a6e8827ba10b"),
          },
        ],
      },
    },
  },
  {
    slug: "ocean-freight-solutions",
    title: "Ocean Freight Solutions",
    tagline: "We make the world a smaller place",
    desc: "Full and part container ocean freight covering major global shipping corridors.",
    image: img("1758549683132-72ac09a3d5b5"),
    detail: {
      intro: {
        heading: "More Than 180 Shipping Routes",
        image: img("1758549683132-72ac09a3d5b5"),
        paragraphs: [
          "Route 44 is a trusted freight forwarder operating within a growing global network. Customised solutions built around your specific ocean freight requirement sit at the heart of everything we do.",
          "We offer a flexible range of global and local ocean freight services for both Less-Than-Container Load (LCL) and Full-Container Load (FCL) shipments, backed by comprehensive freight management services alongside break-bulk, project forwarding, and partial or full charter options.",
          "With weekly sailings across 180+ routes connecting thousands of port-pairs, your freight is in capable hands on the high seas and beyond.",
          "Whatever the size of your business, our dedicated implementation teams ensure a smooth, fast introduction to our systems — and with the Route 44 client portal, you'll always know exactly where your shipment stands.",
        ],
      },
      video: {
        heading: "Sea Freight, Overviewed",
        body: "Take a look at how our ocean freight network connects ports, carriers, and cargo across the globe.",
        caption: "Ocean freight in motion — Route 44 Logistics",
        thumbnail: img("1759272840712-c7e5ea852367"),
      },
      keepAhead: {
        heading: "Our Services",
        paragraphs: [
          "We've built our service offering around the individual particularities of each trade lane. From the Pacific to the East China Sea, and the Atlantic to the Indian Ocean — we've thought of everything.",
          "For a reliable, cost-effective, and efficient service, Route 44 proposes customised solutions built around how your cargo actually moves.",
        ],
      },
      serviceLevels: {
        heading: "Full Container Load, Less Than Container Load & More",
        intro:
          "Whichever way your cargo moves, our ocean freight specialists build a tailored solution around your business.",
        tiers: [
          {
            name: "Full Container Load (FCL)",
            tagline: "Reliable door-to-door global service, weekly",
            blurb:
              "Weekly sailings with 100+ ocean carriers, serving thousands of port-pairs worldwide.",
          },
          {
            name: "Less Than Container Load (LCL)",
            tagline: "Weekly sailings across 180+ lanes",
            blurb:
              "Covering thousands of port-pairs, with carbon offsetting included on every LCL shipment at no extra cost.",
          },
          {
            name: "Freight Management Services",
            tagline: "Complete oversight, every step of the journey",
            blurb:
              "A full range of freight management services covering every aspect of transporting your cargo, door to door.",
          },
        ],
      },
      sustainability: {
        heading: "Route 44 Low Carbon Ocean Solutions",
        image: img("1660145954339-b94968afca8f"),
        paragraphs: [
          "Smart Consolidation helps you overcome the hurdles of a complex supply chain by combining shipments into optimised loads — controlling escalating logistics costs, improving time-to-market, and minimising environmental impact.",
          "It's one part of our wider low-carbon ocean freight offering, built to measure, optimise, and shift toward lower-emission transport across your ocean freight lanes.",
        ],
        bullets: [
          "Smart Consolidation available across our LCL network",
          "Low-carbon transport options on major shipping corridors",
        ],
      },
      solutions: {
        heading: "Discover Our Services",
        subheading:
          "From our strategically located ocean gateways, we deliver the world.",
        items: [
          {
            title: "Low Carbon Transport Solutions",
            image: img("1660145954339-b94968afca8f"),
          },
          {
            title: "Reefer Cargo Transport Services",
            image: img("1773126378189-9186d697b797"),
          },
          {
            title: "Full Container Load (FCL) Services",
            image: img("1741851484896-eb5820fc0a09"),
          },
          {
            title: "Less Than Container Load (LCL) Services",
            image: img("1756757203112-b91c2bdc35a7"),
          },
          {
            title: "Freight Management Services for Ocean Freight",
            image: img("1759272840712-c7e5ea852367"),
          },
          {
            title: "End-to-End Smart Consolidation",
            image: img("1749244768351-2726dc23d26c"),
          },
        ],
      },
      valueAdded: {
        heading: "Additional Services & Solutions",
        image: img("1521295121783-8a321d551ad2"),
        paragraphs: [
          "Our exceptional value proposition for ocean freight management brings together multiple additional services, built around how your cargo actually moves.",
        ],
        bullets: [
          "Reefer & Perishable — state-of-the-art technology ships your refrigerated cargo worldwide",
          "Sea-Air — combine lower-cost ocean freight with a final leg by air when a full ocean voyage won't fit your timeline",
          "Customs Brokerage — decades of tariff and customs expertise across import and export requirements",
        ],
      },
      difference: {
        heading: "The Route 44 Difference",
        columns: [
          {
            title: "Global Network",
            body: "With weekly sailings on 180+ routes connecting thousands of port-pairs, we connect your business to every major market — on the water and beyond.",
          },
          {
            title: "Real-Time Visibility",
            body: "Through the Route 44 client portal, you'll always be up to date on the current status of your shipments, from origin to final destination.",
          },
          {
            title: "Flexible Capacity",
            body: "From FCL and LCL to break-bulk, project forwarding, and full charter services, we flex our capacity to match exactly how your cargo needs to move.",
          },
        ],
      },
      portal: {
        heading: "Route 44 Client Portal for Your Ocean Freight Quotes & Bookings",
        body: "Your personal digital ocean freight partner — real-time rates and quotes, a reliable booking journey, and shipment monitoring through to final destination.",
        cta: "Access Portal",
        image: img("1744869985867-d23cc60e3625"),
      },
      facts: {
        heading: "Facts & Figures",
        stats: [
          {
            label: "Shipping Routes",
            value: "180+",
            sub: "worldwide coverage",
          },
          { label: "Ocean Volume", value: "320,000 TEUs", sub: "annually" },
        ],
      },
      caseStudies: {
        heading: "Case Studies",
        intro:
          "We proudly partner with leaders across many industries. Discover our success stories.",
        items: [
          {
            title: "New Equipment Increases Seafood Export Capacity",
            image: img("1763467940917-0c68a3d9a7ee"),
          },
          {
            title: "Consolidation Services Save Costs and Eliminate Waste",
            image: img("1749244768351-2726dc23d26c"),
          },
          {
            title: "Greater Control Over Global Ocean Spend",
            image: img("1758549683132-72ac09a3d5b5"),
          },
        ],
      },
    },
  },
  {
    slug: "ground-rail-freight-solutions",
    title: "Ground and Rail Freight Solutions",
    tagline:
      "Anytime, anywhere, sustainable and cost-effective ground and rail freight solutions for you",
    desc: "Multimodal ground and rail networks for flexible, cost-efficient inland distribution.",
    image: img("1708109353962-3b8262147aa6"),
    detail: {
      intro: {
        heading:
          "Sustainable, Cost-Effective Ground & Rail Freight, Anytime, Anywhere",
        image: img("1708109353962-3b8262147aa6"),
        paragraphs: [
          "In an ever-changing, complex market, supply chain resilience and efficiency are critical. Capacity disruptions, rising costs, evolving regulations, data and connectivity challenges, and the need to cut emissions all weigh heavily on road and rail transportation. Choosing a ground transport partner who can build and operate efficient, responsive solutions strengthens your supply chain resilience, elevates your customer experience, and gives you a real competitive edge.",
          "At Route 44, we deliver standard or tailor-made ground transportation solutions built around your reliability, speed, CO2 reduction, visibility, and cost requirements — optimising capacity utilisation and increasing visibility at every step.",
          "We provide a wide range of transportation solutions for B2B and B2C flows, routing your components and goods to their final destination. Our offer covers road transportation as well as multimodal journeys integrating rail and barge transport.",
          "Whether you're moving materials, pharmaceuticals, dangerous goods, or consumer goods — for plants, pharmacies and hospitals, supermarkets, specialist stores, or e-commerce — we have a variety of vehicles and transport methods adapted to each commodity, compliant with regulatory standards (GDP, ADR, and more).",
          "With millions of shipments transported every year, we're recognised as a transportation partner of choice across Europe, North & South America, and beyond.",
        ],
      },
      video: {
        heading: "Ground & Rail Freight, Overviewed",
        body: "See how our ground and rail network keeps freight moving across borders, terrains, and time zones.",
        caption: "Ground freight in motion — Route 44 Logistics",
        thumbnail: img("1744817485089-d616f1b806f2"),
      },
      keepAhead: {
        heading: "Our Ground & Rail Transportation Services",
        paragraphs: [
          "Our ground and rail transport services rely on expert local and international teams, a collaborative IT system, and consistent operational processes with high-quality standards adapted to regional specificities — all built on a lean culture and an asset-right model.",
          "Through our network and expertise across every industry, we cover both inbound and outbound flows, international or domestic transportation, for all types of goods and special requirements — including high-value goods, heavy bulky freight, two-wheelers, and out-of-gauge transportation.",
          "Through advanced visibility solutions, local device tracking, and API/EDI TMS connections, we offer full traceability and holistic supply chain visibility — bringing your supply chain to the edge of digitalisation and sustainability.",
        ],
      },
      serviceLevels: {
        heading: "Our Ground & Rail Transport Services",
        intro:
          "Whatever the size or shape of your shipment, our ground and rail specialists build a tailored solution around your business.",
        tiers: [
          {
            name: "Ground Transport Network Services",
            tagline: "For shipments under 2 tonnes or 2 loading metres",
            blurb:
              "A variety of services for B2B pallet distribution and B2C parcel distribution (under 30kg), operated through our own extensive network of hubs and agencies — reducing your logistics costs through economies of scale.",
          },
          {
            name: "Ground & Rail Transport Forwarding Services",
            tagline: "For domestic or international shipments over 2 tonnes",
            blurb:
              "Full Truck-Load (FTL) or Part-Load (LTL) solutions for long distances, congested areas, and heavy volumes — supported by low-carbon rail and barge options where it counts.",
          },
          {
            name: "Customised Transport Solutions",
            tagline: "Dedicated fleets, drivers, and control tower services",
            blurb:
              "When you need to secure capacity and assets, we offer dedicated fleets and drivers, plus Control Tower services (3PL or 4PL) to orchestrate and control your transportation flows.",
          },
        ],
      },
      solutions: {
        heading: "Our Regional Transport Networks",
        subheading:
          "Ground and rail capabilities built for wherever your business operates.",
        items: [
          {
            title: "Ground & Rail APAC Transport Networks",
            image: img("1755934843655-0c1843aa2fd6"),
          },
          {
            title: "Ground & Rail European Transport Networks",
            image: img("1708193203896-ba0630862bb6"),
          },
          {
            title: "Ground & Rail African & Middle-East Transport Networks",
            image: img("1727073789225-acfabcbffc3a"),
          },
          {
            title: "Ground & Rail North American Transport Networks",
            image: img("1660638892715-70f75d5e27ef"),
          },
          {
            title: "Ground & Rail South American Transport Networks",
            image: img("1735567430450-6873cedc8e1d"),
          },
        ],
      },
      valueAdded: {
        heading: "Additional Services & Solutions",
        image: img("1724556271642-e9acaf03ac23"),
        paragraphs: [
          "Beyond transportation itself, we bring a range of services designed to strengthen your supply chain end to end.",
        ],
        bullets: [
          "Engineering & transport optimisation — designing and optimising your transport plan to adapt quickly to a volatile, disrupted market",
          "Customs management & fiscal representation — coordinating customs formalities worldwide, plus dedicated fiscal representation to manage VAT when expanding into new markets",
          "Full traceability — comprehensive visibility through collaborative IT solutions (EDI, API, web portal) and Control Towers",
          "Performance management — advanced analytics to measure delivery performance, including On-Time Delivery (OTD) and On-Time-In-Full (OTIF) rates",
          "Cargo insurance — the right coverage against physical damage or loss of goods in transit, available on demand",
          "Low-carbon solutions — multimodal options, electric trucks, or biofuel solutions where they fit your network",
        ],
      },
      facts: {
        heading: "Facts & Figures",
        stats: [
          {
            label: "Experts",
            value: "2,500+",
            sub: "Ground & rail specialists",
          },
          { label: "Shipments", value: "5.6M", sub: "Ground & rail, annually" },
          { label: "Truck Fleet", value: "1,150+", sub: "Owned and leased" },
          {
            label: "Ranking",
            value: "Top 20",
            sub: "Ground freight provider in Europe",
          },
        ],
      },
      cta: {
        heading: "Get in Touch With Us",
        body: "Speak with our ground and rail freight experts about your supply chain.",
        buttonLabel: "Get in Touch",
        buttonTo: "/contact",
      },
    },
  },
  {
    slug: "contract-logistics-solutions",
    title: "Contract Logistics Solutions",
    tagline: "Delivering your supply chain strategies consistently across the world",
    desc: "Dedicated warehousing and fulfilment operations tailored to long-term partner requirements.",
    image: img("1716191299980-a6e8827ba10b"),
    detail: {
      intro: {
        heading:
          "End-to-End Contract Logistics, Delivered Consistently Across the World",
        image: img("1716191299980-a6e8827ba10b"),
        paragraphs: [
          "Route 44 offers end-to-end supply chain solutions, optimising your entire logistics journey with forward-thinking, sustainable operations. Covering every sector, we deliver consistent services that build lasting partnerships. From manufacturing support to distribution, reverse logistics, and circular logistics, we design, execute, and monitor your supply chain strategy — ensuring you keep your promises to your customers, regardless of complexity or geographical scope.",
          "Operational excellence sits at the core of our approach — a continuous journey, not a destination. We deploy committed experts at every stage of your supply chain. Our harmonised programmes, standard processes, and tools are built on industry best practice, ensuring consistent, robust operations. With local experts on the ground, we drive innovation, sustainability, and continuous improvement to address the specific challenges of each operation.",
        ],
      },
      video: {
        heading: "Contract Logistics, Overviewed",
        body: "See how our contract logistics network keeps warehousing, manufacturing support, and fulfilment moving in step with your supply chain.",
        caption: "Contract logistics in motion — Route 44 Logistics",
        thumbnail: img("1645736315000-6f788915923b"),
      },
      keepAhead: {
        heading: "Our Contract Logistics Services",
        paragraphs: [
          "We take pride in offering an extensive range of logistics services tailored to diverse industries worldwide. With a blend of shared programmes and localised customer relationships, we strike the right balance between standardisation and customisation.",
          "Building genuine partnerships, we proactively adapt to evolving markets and rising customer expectations.",
        ],
      },
      solutions: {
        heading: "Explore Our Services",
        subheading:
          "Four core service pillars, working together across your supply chain.",
        items: [
          {
            title: "Warehousing & Fulfilment Services",
            image: img("1749244768351-2726dc23d26c"),
            desc: "Seamless warehousing and fulfilment solutions across the value chain, for diverse sectors — powered by a state-of-the-art IT suite for optimal efficiency, across 200+ dedicated and multi-user facilities worldwide.",
          },
          {
            title: "Manufacturing Support",
            image: img("1741591647611-765ae3019a0f"),
            desc: "Optimising manufacturing and assembly lines through dedicated inbound logistics and manufacturing support — smoother, greener, and more cost-effective, whether on-site or via a dedicated warehouse, whatever your industry.",
          },
          {
            title: "Aftermarket & Reverse Logistics",
            image: img("1741707042021-9672a37b5b1b"),
            desc: "As a trusted 3PL partner, we manage spare parts, returns, refurbishment, warranties, and end-of-life processes — sustainable practices that extend your product's life cycle and keep the customer experience seamless.",
          },
          {
            title: "Value Added Services",
            image: img("1716191299980-a6e8827ba10b"),
            desc: "Comprehensive value-added solutions including co-packing, quality checks, and product inspection — complemented by software installation, reconditioning, and refurbishment for optimal performance and presentation.",
          },
        ],
      },
      difference: {
        heading: "The Route 44 Difference",
        columns: [
          {
            title: "Innovate, Operate, Automate",
            body: "We drive efficiency through innovation. Our investment in forward-thinking ideas streamlines every operation for optimal performance.",
          },
          {
            title: "Fostering a Sustainable Future",
            body: "Acting today for a better tomorrow. We're committed to reducing CO2 emissions across our operations and building more sustainable warehouses — with initiatives that keep evolving.",
          },
          {
            title: "Embracing Operational Excellence",
            body: "Operational excellence is in our DNA. Our engineers drive it at every stage — from solution design and implementation to continuous improvement and re-engineering — unlocking opportunities throughout your contract lifecycle.",
          },
        ],
      },
      facts: {
        heading: "Facts & Figures",
        stats: [
          { label: "Operations", value: "300", sub: "In more than 15 countries" },
          {
            label: "Engineers",
            value: "250+",
            sub: "With specialisation to support each contract stage",
          },
          { label: "Fulfilment Centers", value: "20", sub: "" },
          {
            label: "Ranking",
            value: "Top 15",
            sub: "Contract logistics player worldwide",
          },
        ],
      },
    },
  },
  {
    slug: "project-logistics-solutions",
    title: "Project Logistics Solutions",
    tagline: "Engineered to Deliver",
    desc: "Engineered heavy-lift and oversized cargo movements for complex industrial projects.",
    image: img("1741851484896-eb5820fc0a09"),
    detail: {
      intro: {
        heading: "Engineered to Deliver",
        image: img("1741851484896-eb5820fc0a09"),
        paragraphs: [
          "Complex industrial projects require more than logistics. They require ownership, expertise, and continuity.",
          "Our Project Logistics team supports you in delivering your most complex and critical projects by combining engineering expertise, operational execution, and end-to-end coordination. From the earliest project discussions to final delivery and on-site operations, we work as a single partner, simplifying complexity and turning constraints into executable solutions.",
          "Powered by strong engineering capabilities and a global project execution model, we help secure timelines, reduce interfaces, and deliver predictable outcomes in highly constrained environments.",
        ],
      },
      video: {
        heading: "Behind Every Wow, There Is A How",
        body: "See how our Project Logistics team turns constrained, complex environments into executable, predictable outcomes.",
        caption: "Project logistics in motion — Route 44 Logistics",
        thumbnail: img("1741554678792-c48cc08fe42a"),
      },
      keepAhead: {
        heading: "Our Solutions, Designed for Complexity",
        paragraphs: [
          "To support projects at every stage, our Project Logistics offering is built around four complementary capabilities.",
          "These capabilities can be mobilised independently or combined, depending on project complexity, industry requirements, and execution needs. Together, they let us support projects from early feasibility and engineering, through transport and on-site execution, to long-term operational support.",
        ],
      },
      serviceLevels: {
        heading: "Four Complementary Capabilities",
        intro:
          "Mobilised independently or combined, depending on what your project needs.",
        tiers: [
          {
            name: "Feasibility Study",
            tagline: "Designing the right execution model from day one",
            blurb:
              "We assess constraints, routes, risks, and scenarios upfront to secure feasibility, cost predictability, and informed decision-making before the project starts.",
          },
          {
            name: "Project Freight Forwarding",
            tagline: "Moving complex cargo with engineered precision",
            blurb:
              "We manage end-to-end project freight forwarding across all modes, including custom-engineered transport and handling solutions when standard equipment isn't an option.",
          },
          {
            name: "Site Operations",
            tagline: "From first move to final positioning",
            blurb:
              "We manage on-site logistics, storage, sequencing, and movements through to final positioning — ensuring continuity from factory release to foundation.",
          },
          {
            name: "Material Management",
            tagline: "Keeping operations running",
            blurb:
              "We secure the availability, visibility, and movement of critical spare parts to support ongoing operations and asset performance.",
          },
        ],
      },
      solutions: {
        heading: "Our Project Logistics Services",
        subheading:
          "Multimodal, cross-border engineering and transportation solutions, customised to execute and deliver your most complex projects safely and securely — with full visibility, sustainable charter options, and a commitment to international HSE standards.",
        items: [
          {
            title: "Oil & Gas",
            image: img("1690508313456-bf8c851e8319"),
            desc: "We support complex upstream, midstream, and downstream projects by securing engineered transport, on-site execution, and operational continuity — including offshore logistics and shore-base material management for drilling and maintenance operations.",
          },
          {
            title: "Renewables",
            image: img("1713757986266-4da854d35f60"),
            desc: "We enable large-scale renewable projects by managing the movement, handling, and on-site positioning of oversized and sensitive components, from early feasibility through to installation and commissioning support.",
          },
          {
            title: "Power & Industrial",
            image: img("1473876637954-4b493d59fd97"),
            desc: "We accompany power generation and industrial projects by combining engineering, project freight forwarding, and on-site logistics to secure timelines, interfaces, and execution readiness.",
          },
          {
            title: "Mining",
            image: img("1758143011530-e5b46487c4cc"),
            desc: "We support mining projects in remote and challenging locations through engineered logistics solutions, heavy transport, and on-site coordination adapted to complex infrastructures and environments.",
          },
          {
            title: "Aerospace & Defense",
            image: img("1716718810773-d2a52b43602f"),
            desc: "We deliver high-precision logistics solutions for aerospace and defence projects, managing sensitive cargo, strict compliance requirements, and controlled execution from origin to final destination.",
          },
          {
            title: "EPC & Infrastructure",
            image: img("1609867271967-a82f85c48531"),
            desc: "We partner with EPCs and infrastructure developers to deliver end-to-end project execution, ensuring continuity from design and transport to on-site logistics, sequencing, and installation.",
          },
        ],
      },
      difference: {
        heading: "The Route 44 Difference",
        icon: "military_tech",
        columns: [
          {
            title: "End-to-End Project Continuity",
            body: "We ensure seamless execution from early design and planning to on-site operations and final positioning, with no handovers between phases.",
          },
          {
            title: "Engineering-Led Project Logistics",
            body: "We are engineers before movers, with 15+ in-house project engineers fully integrated into our teams. When no standard solution exists, we design one.",
          },
          {
            title: "Global Orchestration at Scale",
            body: "We stay close to your project sites, wherever they are in the world — combining Route 44's global Air, Ocean, Ground & Rail capabilities with strategically located teams and trusted partners near key supply origins and final destinations.",
          },
        ],
      },
      facts: {
        heading: "Facts & Figures",
        stats: [
          {
            icon: "public",
            label: "Countries",
            value: "45+",
            sub: "served worldwide",
          },
          {
            icon: "engineering",
            label: "In-House",
            value: "15+",
            sub: "Engineers",
          },
          {
            icon: "groups",
            label: "Experts",
            value: "350+",
            sub: "Support for your Project Logistics needs",
          },
          {
            icon: "hub",
            label: "Operation Hubs",
            value: "17+",
            sub: "Project logistics competence and support centers, global",
          },
        ],
      },
    },
  },
  {
    slug: "lead-logistics",
    title: "Route 44 Lead Logistics (R44LL)",
    tagline: "World class management for your entire global supply chain",
    desc: "Single-partner control tower visibility across multi-carrier, multi-region supply chains.",
    image: img("1644088379091-d574269d422f"),
    detail: {
      intro: {
        heading: "Your End-to-End Supply Chain Partner",
        image: img("1644088379091-d574269d422f"),
        paragraphs: [
          "Designing the right solutions for you. Our design expertise focuses on the strategic transformation of your business, using our Control Towers to orchestrate your global supply chain network.",
          "We drive efficiency and results using proven technologies, taking a modular approach to tailor our services to your needs — bringing value as we transform your supply chain.",
          "We use our skills, expertise, best practices, analytics, and data to drive innovation and strategies that step up your overall supply chain performance.",
        ],
      },
      video: {
        heading: "Route 44 Lead Logistics",
        body: "See how our Control Towers bring single-partner visibility and control to complex, multi-region supply chains.",
        caption: "Lead logistics in motion — Route 44 Logistics",
        thumbnail: img("1758873268745-dd2cf0d677b5"),
      },
      keepAhead: {
        heading: "Discover Our Services",
        paragraphs: [
          "Our experts work closely with you to gain an in-depth understanding of your business strategy and find the optimal solution to address your needs. We manage your supply chain through Route 44 Lead Logistics via four key features:",
        ],
      },
      solutions: {
        heading: "Route 44 Lead Logistics Services",
        subheading:
          "Four key features, working together to manage your supply chain end to end.",
        items: [
          {
            title: "Supply Chain Insight",
            image: img("1526628953301-3e589a6a8b74"),
            desc: "Deep, end-to-end visibility across your supply chain — turning data into actionable insight that informs smarter, faster decisions.",
          },
          {
            title: "Supply Chain Operations",
            image: img("1741851484896-eb5820fc0a09"),
            desc: "Day-to-day orchestration of your global network through our Control Towers, keeping every partner, carrier, and shipment aligned to plan.",
          },
          {
            title: "Supply Chain Technology",
            image: img("1716191299980-a6e8827ba10b"),
            desc: "Proven, modular technology platforms that connect your systems and partners, giving you one consistent view across your network.",
          },
          {
            title: "Standardized Solutions",
            image: img("1749244768351-2726dc23d26c"),
            desc: "Repeatable, best-practice processes built on proven technologies and analytics — tailored to your business without reinventing the wheel each time.",
          },
        ],
      },
    },
  },
  {
    slug: "finished-vehicle-logistics-solutions",
    title: "Finished Vehicle Logistics Solutions",
    tagline: "For new cars, used cars, and for car mobility services",
    desc: "End-to-end vehicle transport, compound storage, and pre-delivery inspection services.",
    image: img("1732290280652-aa2fc69fae1b"),
    detail: {
      intro: {
        heading: "For New Cars, Used Cars, and New Mobility Services",
        image: img("1732290280652-aa2fc69fae1b"),
        paragraphs: [
          "Route 44 Finished Vehicle Logistics solutions are designed for the fast-evolving retail automotive ecosystem. With a full range of \"phygital\" solutions dedicated to new and used cars, and new mobilities — commercial, passenger, ICE (Internal Combustion Engine), or electric — our teams support you in meeting today's digital, circular economy, and mobility challenges.",
          "Our Finished Vehicle Logistics services span car transportation, vehicle storage, car customisation, vehicle preparation (Pre-Delivery Inspection/PDI), vehicle transformation (Post Production Operations/PPO), and any other operations required during vehicle movements from manufacturer to dealership or to the end customer. It also includes used-car refurbishment services and all the logistics services needed for your new mobility services offerings.",
          "We provide a one-stop-shop logistics experience for your vehicles from factory exit to end of life. With millions of cars shipped every year for both commercial and passenger vehicles, ICE or electric, we're one of the leading Finished Vehicle Logistics providers across Europe, Latin America, Asia Pacific, and Middle East Africa — giving you the best vehicle availability, anytime and anywhere, in the most green and cost-effective way.",
        ],
      },
      video: {
        heading: "Finished Vehicle Logistics, Overviewed",
        body: "See how our finished vehicle network keeps cars moving from factory exit to final delivery.",
        caption: "Finished vehicle logistics in motion — Route 44 Logistics",
        thumbnail: img("1741851484896-eb5820fc0a09"),
      },
      keepAhead: {
        heading: "Our Finished Vehicle Logistics Services",
        paragraphs: [
          "Our Finished Vehicle Logistics expertise combines international and local expert teams, a collaborative IT system, and consistent operational processes to high-quality standards. This robust backbone lets us deliver worldwide operational excellence and an outstanding customer experience throughout the supply chain.",
          "With decades of expertise in finished vehicle logistics, Route 44 is a true business facilitator for your car export and import flows, vehicle distribution, automotive e-commerce activities, mobility offerings, and circular economy requirements.",
        ],
      },
      solutions: {
        heading: "Our Finished Vehicle Logistics Services",
        subheading:
          "Eight service capabilities, covering every stage of a vehicle's journey.",
        items: [
          {
            title: "Releasing Agent",
            image: img("1741591647611-765ae3019a0f"),
            desc: "A wide range of solutions to accelerate flows from assembly line to plant exit, for car manufacturers.",
          },
          {
            title: "Multimodal Transportation for New and Used Cars",
            image: img("1741851484896-eb5820fc0a09"),
            desc: "International, cross-border, and domestic car transportation solutions — continuously optimised through green, cost-efficient multimodal logistics, integrated with customs management operations.",
          },
          {
            title: "Special Transport",
            image: img("1758158418702-5d7650bf3ca4"),
            desc: "Concept cars, homologation vehicles, pre-series models, trials, tests, luxury or classic cars, and racing vehicles require specialised transport — a dedicated closed fleet, available 24/7, with full visibility throughout.",
          },
          {
            title: "Vehicle Storage",
            image: img("1635974064616-b09505293645"),
            desc: "Whatever the vehicle type — commercial or passenger, ICE or electric, new, used, or built for new mobility services — we design storage solutions that fit an omnichannel automotive retail strategy.",
          },
          {
            title: "Vehicle Preparation, Customisation & Refurbishment",
            image: img("1643700973089-baa86a1ab9ee"),
            desc: "New cars, used cars, or vehicles for new mobility experiences all need to be ready to drive. A wide range of logistics solutions, coupled with strategically located vehicle workshops, tackles every challenge.",
          },
          {
            title: "Vehicle Delivery",
            image: img("1727893512947-8bdc773ceb02"),
            desc: "Last-mile delivery isn't just the final leg of the journey — it's part of the customer experience. A full range of 'phygital' solutions, whatever your sales channel: B2B or B2C.",
          },
          {
            title: "Mobility & Fleet Management",
            image: img("1732290280652-aa2fc69fae1b"),
            desc: "In a fast-paced retail sector shaped by flexible ownership models, we optimise vehicle allocation for end users — demo fleets, pool vehicles, company cars, and subscription fleets — with in-life repair, storage, and tailored delivery and collection.",
          },
          {
            title: "Press & Marketing Automotive Event Logistics",
            image: img("1761195696518-6384573549ea"),
            desc: "Vehicle deployment programmes, pop-up stores, test drives, product placement, relief vehicle management, automotive trade shows, dealership training, demo fleet management — we manage the logistics behind every automotive marketing operation.",
          },
        ],
      },
      valueAdded: {
        heading: "Additional Services & Solutions",
        image: img("1727893512947-8bdc773ceb02"),
        paragraphs: [
          "Our value proposition for Finished Vehicle Logistics management brings multiple additional services along the supply chain.",
        ],
        bullets: [
          "Engineering & transport optimisation — responsive solutions to manage vehicle flows smoothly, physical and digital, in highly volatile automotive retail markets",
          "Customs management & fiscal representation — coordinating customs formalities worldwide, plus dedicated fiscal representation to manage VAT when expanding into new markets",
          "Full traceability — end-to-end visibility at VIN or VIS level",
          "Performance management — advanced analytics to enhance performance and accelerate decision-making",
          "Control tower — scalable solutions to orchestrate, control, and optimise your finished vehicle supply chain flows (physical, information, and financial) from door to door",
          "Crisis management — dedicated teams and processes to manage highly disruptive situations, including risk appraisal, alternative solutions, real-time monitoring, and regular customer debriefs",
        ],
      },
      facts: {
        heading: "Facts & Figures",
        stats: [
          {
            icon: "groups",
            label: "Experts",
            value: "1,000+",
            sub: "Dedicated Finished Vehicle Logistics experts",
          },
          {
            icon: "directions_car",
            label: "Vehicles Transported Annually",
            value: "1.6M+",
            sub: "",
          },
          {
            icon: "warehouse",
            label: "Compounds",
            value: "32+",
            sub: "",
          },
          {
            icon: "local_shipping",
            label: "Truck Fleet",
            value: "575+",
            sub: "Car carriers",
          },
        ],
      },
      cta: {
        heading: "Get in Touch With Us",
        body: "Speak with our finished vehicle logistics experts about your automotive supply chain.",
        buttonLabel: "Get in Touch",
        buttonTo: "/contact",
      },
    },
  },
  {
    slug: "customs",
    title: "Customs",
    tagline: "Tackling customs challenges & unlocking trade opportunities",
    desc: "Bonded customs clearance and compliance management across every trade lane we serve.",
    image: img("1521295121783-8a321d551ad2"),
    detail: {
      intro: {
        heading: "Tackling Customs Challenges & Unlocking Trade Opportunities",
        image: img("1521295121783-8a321d551ad2"),
        paragraphs: [
          "Trading in times of rapid change, growing uncertainty, and complex regulations is always a challenge — especially when you're targeting cost efficiency and time to market.",
          "Route 44's Customs Brokerage network and local, compliance-driven structure make trading easy and support your needs. There's no one-size-fits-all solution for your unique trade activities — that's why we develop customised, compliance-centred trade solutions that respond to your supply chain challenges.",
          "As a trusted trade partner with a growing global reach, our solutions help you drive profitability, efficiency, and growth, while creating cost-saving opportunities in full compliance with complex, evolving regulations.",
          "Explore the reality of trading made easy with Route 44 Customs Brokerage.",
        ],
      },
      keepAhead: {
        heading: "Our Services",
        paragraphs: [
          "A wide scope of strategic, tactical, and operational expertise, built to tackle trade opportunities in full compliance.",
        ],
      },
      serviceLevels: {
        heading: "Strategic, Tactical & Operational Services",
        intro:
          "Our engineering teams support your international compliance, end to end.",
        tiers: [
          {
            name: "Strategic Services",
            tagline: "Engineering your overall compliance",
            bullets: [
              "Legal watch — proactive monitoring and communication of regulatory changes",
              "Customs and fiscal engineering, audit and optimisation, duty mitigation strategies",
              "Customs consulting and compliance services",
              "Trade Compliance — rigorous and systematic audit programmes",
              "Multi-country Customs Control Tower solutions, synchronising your customs operations for simplification and improved delivery times",
            ],
          },
          {
            name: "Tactical Services",
            tagline: "850+ experts across 20+ countries, daily",
            bullets: [
              "Customised, scalable, and optimised solutions supporting unique and advantageous clearance regimes worldwide",
              "Global Classification Solution",
              "Origins and FTA determination",
              "Free Trade Zones and Bonded Warehouse",
            ],
          },
          {
            name: "Operational Services",
            tagline: "Due diligence, on every declaration",
            bullets: [
              "Customs clearance operations — due diligence and compliance for import/export declarations, transits, TIR and ATA carnet preparation, and declaration of exchange of goods",
              "Customs operations traceability and monitoring",
              "Collaborative trade analysis, leveraging customised KPIs and reporting",
              "Performance monitoring",
              "Consolidation and centralised billing",
            ],
          },
        ],
      },
      difference: {
        heading: "What Makes Us Different",
        columns: [
          {
            title: "Compliance & Risk Mitigation",
            body: "We deliver peace of mind through outstanding compliance and risk mitigation — minimising financial risk by ensuring correct duty payment, providing insight into current procedures, and creating cost-saving opportunities. Proactive legal watch and rigorous, systematic compliance audits keep financial and compliance risk to a minimum.",
          },
          {
            title: "Worldwide End-to-End Solutions",
            body: "We offer global Customs Brokerage alongside our end-to-end transportation network, or as a standalone customs solution — regardless of your existing freight forwarder. We design trade solutions that leverage Route 44's services to maximise your trade efficiencies.",
          },
          {
            title: "Customer-Focused Organisation",
            body: "We pride ourselves on being one of the most customer-centric brokers in the market, with a dedicated customer-focused team routinely trained on customs compliance and local regulatory updates. Our continuous improvement culture drives productivity, quality, and flexibility, delivering responsive, innovative solutions for your trade activities.",
          },
        ],
      },
      facts: {
        heading: "Facts & Figures",
        image: img("1762341116319-05a8355fcfc9"),
        stats: [
          {
            icon: "workspace_premium",
            label: "Years",
            value: "25+",
            sub: "Customs brokerage expertise",
          },
          {
            icon: "description",
            label: "Customs Declarations",
            value: "1.5M",
            sub: "Completed on average annually",
          },
          {
            icon: "groups",
            label: "Customs Experts",
            value: "850+",
            sub: "In over 20 countries",
          },
        ],
      },
      cta: {
        heading: "Get in Touch With Us",
        body: "Speak with our customs experts about your trade compliance needs.",
        buttonLabel: "Get in Touch",
        buttonTo: "/contact",
      },
    },
  },
  {
    slug: "fiscal-representation-services",
    title: "Fiscal Representation Services",
    tagline: "Supporting your growth and ensuring local VAT compliance",
    desc: "VAT and fiscal agent services simplifying cross-border trade compliance for our partners.",
    image: img("1764231467852-b609a742e082"),
    detail: {
      intro: {
        heading: "Supporting Your Growth & Ensuring Local VAT Compliance",
        image: img("1764231467852-b609a742e082"),
        paragraphs: [
          "Looking to accelerate your commercial development in Europe? To do that, you need a VAT number in every country where you plan to operate and make supplies. VAT is mandatory to trade in Europe, and remains primarily a national tax, governed by each national tax authority.",
          "VAT registration and the management of fiscal declarations can present real risks to your business continuity — both in terms of compliance and as a significant regulatory and paperwork workload.",
          "To trade in new European countries seamlessly and securely, you have two options: create a subsidiary, or appoint a fiscal representative. The first can be long, costly, and requires detailed technical input on complex local regulatory requirements.",
          "With the second option, Route 44 supports you every step of the way as Fiscal Representative across the 27 countries of the European Union, plus the UK, Norway, and Switzerland, through our centralised organisation: a fiscal engineering department, a dedicated taskforce of bilingual accountants liaising with local fiscal administrations, and a dedicated VAT management IT system.",
          "With this expertise and organisation in the Transport & Logistics market, Route 44 helps you identify risks and opportunities, simplifying and securing your VAT operations across Europe.",
        ],
      },
      keepAhead: {
        heading: "Our Services",
        paragraphs: [
          "Our experts support your business development daily, with end-to-end solutions ranging from regulatory expertise to administrative issue-solving.",
        ],
      },
      valueAdded: {
        heading: "What We Do For You",
        image: img("1772588627527-db42040f3a8b"),
        paragraphs: [
          "By efficiently supporting all VAT issues when trading in a new country, our teams ensure time and cost optimisation, full compliance guaranteed by our regulatory and operational expertise, and full visibility through VAT reporting.",
        ],
        bullets: [
          "Proactive monitoring and communication of regulatory changes",
          "Audit and engineering of physical and invoicing flows",
          "Design of optimised solutions",
          "Technical consulting (process, IT, accounting compliance)",
          "Identification of the most competitive VAT solution",
          "Local VAT registration process, handled within an average of 3 months across the EU",
          "E-commerce: One Stop Shop (OSS) and Import One Stop Shop (IOSS)",
          "Management of VAT declarations and Intrastat monthly reporting",
          "Assistance in fiscal and customs inspections",
          "Support in case of litigation",
          "Management of VAT on business expenses",
        ],
      },
      difference: {
        heading: "What Makes Us Different",
        columns: [
          {
            title: "Unique Fiscal & Logistics Expertise",
            body: "A distinctive expertise in fiscal representation among Transport & Logistics providers, encompassing every strategic and operational service needed to tackle the issues international companies face today — powered by a fiscal engineering department, a dedicated taskforce of accountants, and a purpose-built VAT IT system.",
          },
          {
            title: "Global Compliance Governance",
            body: "A global customs and trade compliance governance structure ensures a high standard of compliance with every local regulatory requirement, backed by ISO-certified procedures that minimise risk and unnecessary penalties.",
          },
          {
            title: "One-Stop-Shop for Customs, Fiscal & Logistics",
            body: "Our experts combine customs, fiscal, and logistics engineering to find the most competitive solution — backed by tactical know-how through our control tower, flow management, and track & trace systems.",
          },
        ],
      },
      facts: {
        heading: "Facts & Figures",
        stats: [
          {
            icon: "workspace_premium",
            label: "Years",
            value: "20+",
            sub: "Of fiscal representation expertise",
          },
          {
            icon: "groups",
            label: "Clients",
            value: "80+",
            sub: "",
          },
          {
            icon: "description",
            label: "Declarations / Year",
            value: "2,500+",
            sub: "VAT and Intrastat",
          },
        ],
      },
      cta: {
        heading: "Get in Touch With Us",
        body: "Speak with our fiscal representation experts about your VAT compliance needs.",
        buttonLabel: "Get in Touch",
        buttonTo: "/contact",
      },
    },
  },
  {
    slug: "sustainability-program",
    title: "Route 44 Sustainability Program",
    tagline: "Our Low Carbon Transport & Sustainable Solutions",
    desc: "Carbon-reduction initiatives and green-fleet investment driving lower-emission logistics.",
    image: img("1660145954339-b94968afca8f"),
    detail: {
      intro: {
        heading: "Sustainability in Logistics Begins With Shared Responsibility",
        image: img("1660145954339-b94968afca8f"),
        paragraphs: [
          "Companies around the world are fighting against climate change by addressing supply chain emissions. With transport activities responsible for close to 16% of global greenhouse gas emissions, it's time we worked together for a more sustainable path forward. Route 44 is taking the next step in its journey toward net-zero emissions — for our business and for our customers — through a suite of solutions designed to reduce our environmental impact: the Route 44 Sustainability Program.",
          "With this, we aim to reduce the environmental impact of our own activities, and to support our customers on the road to decarbonising their supply chains.",
          "Our Sustainability Program lets you reduce environmental impact by leveraging a range of low-carbon transport and circularity solutions. Our approach focuses on measuring your CO2 emissions, optimising operations, and shifting to low-carbon transport across air, ocean, ground, and rail — as well as deploying reusable packaging and reverse logistics solutions across sectors to promote circular economies.",
        ],
      },
      video: {
        heading: "At Route 44, We're on a Journey Towards Net Zero by 2050",
        body: "See how the Route 44 Sustainability Program is transforming our operations toward a more sustainable supply chain.",
        caption: "Route 44 Sustainability Program",
        thumbnail: img("1755555707544-5f2cea7413c1"),
      },
      keepAhead: {
        heading: "Decarbonising Your Supply Chain",
        paragraphs: [
          "Visibility plays a crucial role in decarbonising supply chains. Built on digital and innovative tools, our sustainability approach gives you visibility over carbon emissions, alternative routes, and transport options — including emissions calculators available through the Route 44 client portal.",
          "For those looking for a deeper partnership and a customised approach to transforming their supply chain, the Route 44 Sustainability Program offers a consultative decarbonisation transformation approach.",
          "Join us on the journey to net zero — get in touch today to discover how the Route 44 Sustainability Program is transforming our operations toward a more sustainable future.",
        ],
      },
      sustainability: {
        heading: "Low Carbon Transport Solutions",
        image: img("1744817485089-d616f1b806f2"),
        paragraphs: [
          "Our low-carbon transport solutions follow a three-step approach: measuring your CO2 emissions, optimising your operations, and shifting to low-carbon transport. These solutions include modal shift strategies, multimodal options, and alternative fuels across air, ocean, and ground transport. We're constantly exploring innovative ways to decarbonise — including wind propulsion — to push the boundaries of sustainable logistics.",
          "Shifting transport modes is one of the most effective levers for reducing carbon emissions in logistics. Transitioning from air freight to ocean freight can reduce CO2 emissions by a factor of around 80 on average. Similarly, a single block train can remove up to 25 trucks from the road — easing congestion and cutting emissions by as much as 90%. We offer a wide range of modal shift solutions, including air-to-ocean, road-to-rail or barge, and sea-air combinations.",
          "We're also investing in low-carbon truck fleets and working closely with shipping and airline partners to help reduce your carbon footprint using biofuels such as HVO, B100, and sustainable aviation and maritime fuels. The use of biofuels in shipping can reduce well-to-wheel CO2e emissions by up to 80%.",
        ],
        bullets: [
          "Modal shift: air-to-ocean, road-to-rail or barge, and sea-air combinations",
          "Low-carbon truck fleets and sustainable aviation & maritime fuels (HVO, B100, and more)",
        ],
      },
      valueAdded: {
        heading: "Promoting a Circular Economy",
        image: img("1749244768351-2726dc23d26c"),
        paragraphs: [
          "We drive the transition to a circular economy through solutions that extend product lifecycles and minimise waste — closed-loop supply chains, reverse logistics, and product take-back programmes across automotive, consumer and retail, luxury and beauty, technology, and industrial sectors. We work strategically with customers to transform traditional linear supply chains into resilient, circular ones.",
          "The circular economy is built on three principles, driven by design: eliminate waste and pollution, circulate products and materials at their highest value, and regenerate nature.",
          "As part of our sustainability approach, we offer reusable packaging solutions designed to reduce reliance on single-use plastics where relevant — including pallet covers, isothermal kits, and circular packaging options, developed with trusted partners. Leveraging our expertise in repair, refurbishment, and reuse programmes, we help customers improve resource efficiency and reduce environmental impact across selected flows.",
        ],
        bullets: [
          "Closed-loop supply chains, reverse logistics, and product take-back programmes",
          "Reusable packaging: pallet covers, isothermal kits, and circular packaging options",
        ],
      },
      difference: {
        heading: "The Route 44 Difference",
        icon: "eco",
        columns: [
          {
            title: "Sustainability as a Core Pillar of Our Offer",
            body: "Global warming is a growing concern whose impacts are already tangible. As a transport and logistics provider, we have a responsibility to actively contribute to reducing the carbon footprint of our industry. Decarbonisation sits at the heart of our business strategy, and we dedicate the human, financial, and operational resources needed to reach our goal of net-zero carbon emissions by 2050.",
          },
          {
            title: "Comprehensive Measurement Across All Scopes",
            body: "We measure our environmental impact comprehensively, across every scope of our operations — giving our customers a clear, credible view of where emissions come from and where reductions matter most.",
          },
          {
            title: "Enabling Pathways Toward Supply Chain Decarbonisation",
            body: "From modal shift and alternative fuels to circular packaging and reverse logistics, we build practical pathways that help your supply chain move toward decarbonisation at a pace that works for your business.",
          },
        ],
      },
      facts: {
        heading: "Facts & Figures",
        stats: [
          {
            icon: "eco",
            label: "Net Zero Carbon",
            value: "2050",
            sub: "Across all our activities",
          },
          {
            icon: "bolt",
            label: "Low Carbon Electricity",
            value: "+90%",
            sub: "Usage across Route 44 warehouses by end 2026",
          },
        ],
      },
    },
  },
  {
    slug: "event-logistics-solutions",
    title: "Event Logistics Solutions",
    tagline:
      "Bringing experiences to life — managing your logistics before, during, and after the event",
    desc: "Precision-timed logistics for exhibitions, activations, and large-scale live events.",
    image: img("1761195696518-6384573549ea"),
    detail: {
      intro: {
        heading: "Bringing Experiences to Life",
        image: img("1761195696518-6384573549ea"),
        paragraphs: [
          "95% of attendees trust brands more after taking part in an in-person event.",
          "While many factors contribute to that impact — content, experience, engagement, and sustainability — none of it works without reliable logistics. At Route 44, we support your event from behind the scenes, combining global reach with local expertise to ensure smooth, timely execution at every step.",
          "Our dedicated team partners with you from concept to completion, offering tailored logistics solutions and full project management support. From transport planning to on-site event coordination, we create the perfect conditions for an unforgettable event experience — before, during, and after.",
        ],
      },
      video: {
        heading: "Route 44's Event Logistics Solutions",
        body: "See how our event logistics team turns complex, time-critical events into flawless experiences.",
        caption: "Event logistics in motion — Route 44 Logistics",
        thumbnail: img("1761195696518-6384573549ea"),
      },
      keepAhead: {
        heading: "Our Event Logistics Services",
        paragraphs: [
          "Our event logistics team combines international and local expertise, a dedicated global event logistics network, end-to-end logistics solutions, and dedicated IT platforms to meet the highest quality standards.",
          "With decades of experience, we manage every stage of your event seamlessly — before, during, and after.",
          "Whether it's product launches, large-scale productions, trade shows, exhibitions, signature brand experiences, or sports events, we design bespoke solutions tailored to your unique business requirements.",
          "Sustainability sits at the heart of our operations — we're always finding new ways to reduce carbon emissions and environmental impact through efficient transport solutions, recycling programmes, and more.",
          "Offering a one-stop-shop, responsive event logistics experience — start to finish.",
        ],
      },
      solutions: {
        heading: "Our Event Logistics Solutions",
        subheading:
          "Three specialist capabilities, built for the moments that can't be rescheduled.",
        items: [
          {
            title: "Trade Shows and Exhibitions",
            image: img("1761195696518-6384573549ea"),
            desc: "With a network spanning 45+ countries, we're well-positioned to manage large and complex trade shows, industry expos, and conferences with technology-backed solutions and nimble logistics. Every year, we support 30+ shows and industry events globally, serving sectors from Aerospace, Defense, and Technology to Energy, Healthcare, Food & Beverage, Automotive, and Industrial manufacturing.",
          },
          {
            title: "Signature Brand Experiences",
            image: img("1704283706381-9c5dfed3470d"),
            desc: "Every signature brand experience unfolds through a choreography of invisible logistics. We rise to the challenge with tailored, high-end transport solutions, VIP delivery, real-time tracking, and 24/7 backup management — trusted by luxury, automotive, aerospace, defence, and other leading brands, with secure logistics backed by dedicated teams and a single point of contact.",
          },
          {
            title: "Sports Events",
            image: img("1750889503659-da2c5f6afbdd"),
            desc: "Logistics power every great sporting moment. We deliver end-to-end event logistics, from international transport to on-site venue support, bringing trusted expertise to a wide range of sports events. We handle cargo of any size with secure, compliant solutions — ensuring seamless coordination between venues, organisers, suppliers, broadcasters, athletes, and staff, from setup to teardown.",
          },
        ],
      },
      facts: {
        heading: "Facts & Figures",
        stats: [
          {
            icon: "star",
            label: "Experience",
            value: "20+",
            sub: "Years of experience; member of the International Exhibition Logistics Association",
          },
          {
            icon: "event",
            label: "Events",
            value: "180+",
            sub: "Events managed annually",
          },
          {
            icon: "groups",
            label: "Experts",
            value: "20+",
            sub: "Experienced dedicated specialists for event logistics",
          },
          {
            icon: "public",
            label: "Presence",
            value: "45+",
            sub: "Countries in our network",
          },
        ],
      },
      cta: {
        heading: "Get in Touch With Us",
        body: "Speak with our event logistics experts about your next event.",
        buttonLabel: "Get in Touch",
        buttonTo: "/contact",
      },
    },
  },
  {
    slug: "value-added-services",
    title: "Value Added Services",
    tagline: "Discover those extras that really make all the difference",
    desc: "Pick, pack, kitting, and light assembly services layered onto core distribution.",
    image: img("1645736315000-6f788915923b"),
    detail: {
      intro: {
        heading: "Our Services at a Glance",
        image: img("1645736315000-6f788915923b"),
        paragraphs: [
          "Across our worldwide network, you can choose the value-adding services that support your freight shipments and best suit your needs.",
        ],
      },
      solutions: {
        heading: "The Extras That Make the Difference",
        subheading:
          "Four value-added capabilities, built to support your shipments end to end.",
        items: [
          {
            title: "Route 44 Protect — Ad Valorem Insurance for Transport & Storage",
            image: img("1715645948484-da40dd56bc93"),
            desc: "Wherever your cargo goes, we offer ad-valorem insurance services with one of the world's leading insurers.",
          },
          {
            title: "Order Management",
            image: img("1716191299980-a6e8827ba10b"),
            desc: "Our Global Order Management solutions empower your business to take full control of end-to-end order fulfilment processes.",
          },
          {
            title: "Advanced Hub",
            image: img("1759272840712-c7e5ea852367"),
            desc: "Inventory pushed closer to potential customers, even in new markets, through a smart door-to-door solution and last-kilometre logistics.",
          },
          {
            title: "Rely on Our Experts — Customs Services",
            image: img("1521295121783-8a321d551ad2"),
            desc: "Our highly experienced experts are ready to support you in finding the right solution for even your most complex supply chain and transportation requirements. With decades of experience, a strong focus on compliance, and reliable IT infrastructure, our customs brokerage operation has everything in place to clear your import shipments efficiently, effectively, and accurately.",
          },
        ],
      },
      cta: {
        heading: "People, Resources, Systems & Network",
        body: "This is our winning formula. Get in touch with our experts.",
        buttonLabel: "Contact Us",
        buttonTo: "/contact",
      },
    },
  },
];

export function getCategoryBySlug(slug) {
  return CATEGORIES.find((cat) => cat.slug === slug);
}
