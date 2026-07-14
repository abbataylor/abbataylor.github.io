/* ============================================================
   ABBASOFT PORTFOLIO CONFIG — edit values here to update
   the entire portfolio at once.
   ============================================================ */

const PORTFOLIO = {
  personal: {
    name: "Abba Moses",
    tagline: "Full-Stack Developer & IT Solutions Specialist",
    location: "Kampala, Uganda",
    email: "mosesmbularinaabba@gmail.com",
    whatsapp: "",          // ← add your number e.g. "256701234567"
    available: true,
    domain: "https://abbataylor.github.io"
  },
  social: {
    github: "https://github.com/abbataylor",
    linkedin: "https://linkedin.com/in/abba-moses-869b04229",
    whatsapp: "https://wa.me/256762452772",
    twitter: ""
  },
  typedRoles: [
    "Full-Stack Developer",
    "UI/UX Designer",
    "IT Solutions Specialist",
    "Database Engineer",
    "Software Engineer",
    "Tech Entrepreneur"
  ],
  stats: [
    { number: 2,  suffix: "+", label: "Years Experience" },
    { number: 13, suffix: "+", label: "Projects Completed" },
    { number: 3,  suffix: "+", label: "Happy Clients" },
    { number: 1,  suffix: "+", label: "Certifications" }
  ],
  skills: [
    { name: "PHP / Laravel",           level: 80 },
    { name: "JavaScript / TypeScript", level: 80 },
    { name: "HTML & CSS",              level: 98 },
    { name: "MySQL",                   level: 90 },
    { name: "Python",                  level: 65 },
    { name: "React",                   level: 75 },
    { name: "UI/UX Design",            level: 92 },
    { name: "Git & GitHub",            level: 88 }
  ],
  skillCategories: [
    {
      title: "Programming Languages",
      icon: "bx-code-curly",
      items: ["PHP", "JavaScript", "TypeScript", "Python", "HTML5", "CSS3", "SQL"]
    },
    {
      title: "Frameworks & Libraries",
      icon: "bx-layer",
      items: ["Laravel", "React", "Bootstrap", "Tailwind CSS", "Blade"]
    },
    {
      title: "Tools & Platforms",
      icon: "bx-wrench",
      items: ["Git", "GitHub", "VS Code", "MySQL", "XAMPP", "Composer", "npm"]
    }
  ],
  timeline: [
    {
      year: "2026 – Present",
      title: "BSc Software Engineering",
      place: "Kampala International University (KIU)",
      description: "Currently pursuing a Bachelor's degree in Software Engineering, building on a strong IT foundation.",
      type: "education"
    },
    {
      year: "2024 – 2026",
      title: "Diploma in Information Technology",
      place: "Kampala International University (KIU)",
      description: "Completed a Diploma in IT, gaining hands-on skills in networking, programming, and systems development.",
      type: "education"
    },
    {
      year: "2025 – Present",
      title: "Freelance Developer",
      place: "Self-employed · AbbaSoft",
      description: "Building modern websites and web applications for local businesses across Uganda.",
      type: "work"
    }
  ],
  testimonials: [
    {
      name: "Brian Okello",
      role: "Operations Manager, FastTrack Logistics",
      quote: "Abba built our School Management System from scratch. Clean code, great communication, and delivered on time. Highly recommend him for any serious web project."
    },
    {
      name: "Grace Namukasa",
      role: "Administrator, Kampala Learning Centre",
      quote: "Working with AbbaSoft was a great experience. He understood exactly what we needed and turned it into a fully working system. Very professional for his age."
    },
    {
      name: "Samuel Tumwine",
      role: "CEO, Tumwine Enterprises",
      quote: "Abba redesigned our company website and the results were impressive. Modern, fast, and mobile-friendly. We've already seen more inquiries since launch."
    }
  ],
  certifications: [
    {
      name: "Data Science and Analytics",
      issuer: "HP Life",
      year: "March 2025"
    }
  ],
  process: [
    {
      icon: "bx-search-alt",
      step: "01",
      title: "Discovery",
      description: "I start by deeply understanding your business, goals, and target audience — asking the right questions before writing a single line of code."
    },
    {
      icon: "bx-palette",
      step: "02",
      title: "Design",
      description: "I craft modern, intuitive UI/UX wireframes — ensuring the interface is beautiful, accessible, and perfectly aligned with your brand identity."
    },
    {
      icon: "bx-code-curly",
      step: "03",
      title: "Build",
      description: "Clean, scalable, well-documented code using the right tech stack — delivering a robust, secure, and high-performing system."
    },
    {
      icon: "bx-rocket",
      step: "04",
      title: "Deliver",
      description: "Full testing, deployment, and post-launch support — so you go live with confidence and have a partner you can rely on after handover."
    }
  ],

  /* ============================================================
     PROJECTS — add or edit entries here to update the portfolio.
     Fields:
       id            → unique slug (used in case study URL: project-detail.html?id=...)
       title         → display name
       subtitle      → one-line type description
       category      → filter key: system | webdev | design | data | frontend
       image         → path to screenshot or null for gradient placeholder
       shortDesc     → 1–2 sentence card description
       technologies  → array of tech tags (first 4 shown on card, rest collapsed)
       features      → array of bullet points for case study
       status        → "Completed" | "In Progress" | "Live"
       isPrivate     → true = no GitHub link shown
       github        → repo URL or null
       liveDemo      → live URL or null
       overview      → case study paragraph
       problem       → what problem it solves
       solution      → how it solves it
       challenges    → difficulties encountered
       solutions_implemented → how challenges were resolved
       future        → planned improvements
   ============================================================ */
  projects: [
    {
      id: "caliza",
      title: "CALIZA",
      subtitle: "Real Estate Platform",
      category: "system",
      image: "assets/images/project1.jpg",
      shortDesc: "A comprehensive real estate web application for property management, browsing, and booking — modernising how properties are listed and discovered in Uganda.",
      technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Blade", "Bootstrap"],
      features: [
        "Property listing management for agents and landlords",
        "Advanced property search with filters (location, price, type)",
        "Booking and inquiry workflow system",
        "Admin dashboard with analytics",
        "Multi-role user authentication (buyers, agents, admin)",
        "Fully responsive design"
      ],
      screenshots: [
        // "assets/images/projects/caliza/screenshot1.jpg",
        // "assets/images/projects/caliza/screenshot2.jpg"
      ],
      status: "Completed",
      isPrivate: true,
      github: null,
      liveDemo: null,
      overview: "CALIZA is a full-stack real estate platform built to streamline property management and simplify the property-browsing experience for buyers, renters, and estate agents across Uganda.",
      problem: "Real estate agencies in Uganda were managing listings manually through WhatsApp and phone calls, leading to missed inquiries, poor client tracking, and no scalable way to showcase properties professionally.",
      solution: "Built a multi-role web application with separate portals for buyers, agents, and administrators. Property managers can list properties with images and details, while buyers can search, filter, and submit booking requests — all from one platform.",
      challenges: "Designing a database schema flexible enough to handle multiple property types (residential, commercial, land) and multiple booking states while keeping queries fast and maintainable.",
      solutions_implemented: "Used polymorphic relationships in Laravel's Eloquent ORM and indexed frequently queried columns. Implemented eager loading across all property queries to eliminate N+1 performance issues.",
      future: "Payment gateway integration for deposit handling, virtual property tour support, and a React Native mobile app."
    },
    {
      id: "careers-portal",
      title: "Careers Portal",
      subtitle: "Job Management Platform",
      category: "system",
      image: "assets/images/project2.jpg",
      shortDesc: "A career and recruitment platform with application tracking, hiring workflows, and admin job-posting tools — built for organisations managing hiring at scale.",
      technologies: ["PHP", "Laravel", "Blade", "MySQL", "Bootstrap", "JavaScript"],
      features: [
        "Job posting and vacancy management for HR administrators",
        "Applicant tracking system with status pipeline",
        "CV upload and candidate profile management",
        "Email notifications for application updates",
        "Admin analytics dashboard",
        "Role-based access control"
      ],
      screenshots: [
        // "assets/images/projects/careers-portal/screenshot1.jpg",
        // "assets/images/projects/careers-portal/screenshot2.jpg"
      ],
      status: "Completed",
      isPrivate: true,
      github: null,
      liveDemo: null,
      overview: "The Careers Portal is a web-based recruitment system that bridges the gap between job seekers and employers, providing a structured digital pipeline for the entire hiring process.",
      problem: "Many organisations in Uganda were receiving job applications via email or paper, making it difficult to track candidates, manage interview stages, or maintain consistent hiring records.",
      solution: "Built a dual-role platform where HR teams can post vacancies, review applications, and manage candidate pipelines — while job seekers can discover openings, apply, and track their application status in real time.",
      challenges: "Managing concurrent application status updates and ensuring email notifications fired reliably without slowing the user experience.",
      solutions_implemented: "Queued email notifications using Laravel's built-in queue system. Built optimistic UI updates on the frontend so the interface stayed fast while backend operations completed.",
      future: "AI-powered candidate shortlisting, interview scheduling integration, and a public job board with SEO-optimised job pages."
    },
    {
      id: "jetflix",
      title: "Jetflix",
      subtitle: "Streaming Platform",
      category: "webdev",
      image: "assets/images/project3.jpg",
      shortDesc: "A media streaming platform with organised content categories, search, and a smooth browsing experience — inspired by modern streaming services.",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      features: [
        "Content library with categories and genres",
        "Search and content discovery system",
        "Responsive video browsing UI",
        "User authentication and profiles",
        "Content management for administrators",
        "Featured and trending content sections"
      ],
      screenshots: [
        // "assets/images/projects/jetflix/screenshot1.jpg",
        // "assets/images/projects/jetflix/screenshot2.jpg"
      ],
      status: "Completed",
      isPrivate: true,
      github: null,
      liveDemo: null,
      overview: "Jetflix is a web-based streaming platform that organises and presents video content in a clean, browsable interface — designed to give users a Netflix-like discovery experience.",
      problem: "Media content was scattered across files and folders with no unified interface for browsing, categorising, or accessing video content in an organised way.",
      solution: "Built a PHP-driven platform with a dynamic content management system, browsable categories, featured content sections, and a UI optimised for content discovery.",
      challenges: "Building a fast, filterable content grid that remains smooth even with large content libraries, without introducing heavy frontend frameworks.",
      solutions_implemented: "Used server-side pagination and lazy-loaded thumbnails. Implemented client-side filtering with vanilla JavaScript for instant category switching without page reloads.",
      future: "Stream quality selection, watchlist feature, user ratings and reviews, and CDN integration for faster media delivery."
    },
    {
      id: "portfolio",
      title: "AbbaSoft Portfolio",
      subtitle: "Personal Developer Website",
      category: "design",
      image: "assets/images/profile.jpg",
      shortDesc: "This portfolio website — animated hero, dark/light theme, AOS animations, custom cursor, config-driven architecture, and a full project case study system.",
      technologies: ["HTML5", "CSS3", "JavaScript", "AOS", "Typed.js", "EmailJS"],
      features: [
        "Animated hero with parallax background",
        "Dark/light theme toggle with localStorage persistence",
        "Typed.js role cycling animation",
        "Custom animated cursor",
        "AOS scroll-triggered animations",
        "EmailJS contact form integration",
        "Config-driven dynamic content",
        "Full project case study system",
        "SEO with JSON-LD structured data"
      ],
      screenshots: [
        // "assets/images/projects/portfolio/screenshot1.jpg"
      ],
      status: "Live",
      isPrivate: false,
      github: "https://github.com/abbataylor/abbataylor.github.io",
      liveDemo: "https://abbataylor.github.io",
      overview: "A professional developer portfolio built to showcase skills, projects, and personality to recruiters and clients — with a strong visual identity and attention to detail.",
      problem: "Generic portfolio templates don't convey a developer's real abilities or personal brand. A portfolio needs to be a project in itself — demonstrating the developer's skill through the quality of the site.",
      solution: "Designed and built a custom portfolio from scratch with a config-driven architecture (config.js), allowing all content to be updated from a single file. Added professional animations, dark/light theming, and a full project case study system.",
      challenges: "Balancing performance with rich animations — keeping the site fast while still looking visually impressive.",
      solutions_implemented: "Used CSS animations and AOS instead of heavy JavaScript animation libraries. Implemented lazy loading for all images and kept all libraries as CDN scripts with vendor fallbacks.",
      future: "Blog section, project metrics dashboard, and optional CMS backend for easier content updates."
    },
    {
      id: "geo-website",
      title: "Geo Website",
      subtitle: "Location-Based Interactive Platform",
      category: "webdev",
      image: null,
      shortDesc: "An interactive geographical web platform built with TypeScript — delivering location-based features and a modern, type-safe frontend experience.",
      technologies: ["TypeScript", "HTML5", "CSS3", "JavaScript"],
      features: [
        "Interactive location-based interface",
        "TypeScript type-safe codebase",
        "Responsive and performant design",
        "Dynamic geographical data rendering",
        "Modern frontend architecture"
      ],
      screenshots: [
        // "assets/images/projects/geo-website/screenshot1.jpg",
        // "assets/images/projects/geo-website/screenshot2.jpg"
      ],
      status: "Completed",
      isPrivate: true,
      github: null,
      liveDemo: "demo/geo-website/",
      overview: "Geo Website is a location-based web application that delivers geographical data and interactive experiences through a clean, TypeScript-powered frontend.",
      problem: "Location-based data was difficult to display and interact with in an engaging way without specialist mapping tools or overly complex libraries.",
      solution: "Built a lightweight TypeScript application that renders geographical information interactively, with strong type safety throughout the codebase for long-term maintainability.",
      challenges: "Ensuring TypeScript types covered all geographical data structures accurately, preventing runtime errors from malformed or unexpected data inputs.",
      solutions_implemented: "Defined strict TypeScript interfaces for all data models. Used type guards and runtime validation to handle edge cases gracefully.",
      future: "Integration with a mapping API (Leaflet or Google Maps), user location detection, and data visualisation overlay layers."
    },
    {
      id: "gold-dealers",
      title: "Gold Dealers Website",
      subtitle: "Premium Business Website",
      category: "design",
      image: null,
      shortDesc: "A luxury-branded business website for a gold dealership — built to communicate trust, showcase products professionally, and generate high-value client inquiries.",
      technologies: ["TypeScript", "HTML5", "CSS3", "JavaScript"],
      features: [
        "Premium luxury design and branding",
        "Product showcase gallery",
        "Professional inquiry system",
        "Trust-building visual design elements",
        "Fully responsive across all devices",
        "Performance-optimised"
      ],
      screenshots: [
        // "assets/images/projects/gold-dealers/screenshot1.jpg",
        // "assets/images/projects/gold-dealers/screenshot2.jpg"
      ],
      status: "Completed",
      isPrivate: true,
      github: null,
      liveDemo: "https://nitagolddealers.com",
      overview: "A high-end business website built for a gold dealership, designed to communicate professionalism, trust, and quality to high-value clients through careful visual design and branding.",
      problem: "The dealership had no digital presence, relying entirely on word-of-mouth. They needed a website that matched the premium nature of their business and gave potential clients confidence to make inquiries.",
      solution: "Designed a luxury-branded website with rich visual elements, a polished product showcase, and a professional inquiry form — all targeting the trust signals high-value clients look for.",
      challenges: "Creating a premium look and feel using purely HTML/CSS/TypeScript without design frameworks, while keeping the site fast and accessible.",
      solutions_implemented: "Used carefully chosen typography, a gold-themed colour palette, subtle animations, and high-quality imagery. TypeScript ensured all interactive components were robust.",
      future: "E-commerce integration for product listings, WhatsApp Business chat widget, and a client testimonials section."
    },
    {
      id: "school-report",
      title: "School Report Generator",
      subtitle: "Academic Report Automation System",
      category: "system",
      image: null,
      shortDesc: "A PHP system that automates student academic report generation from entered results — eliminating manual report writing and reducing end-of-term administration workload.",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      features: [
        "Result entry for teachers by subject and class",
        "Automated report generation per student",
        "Configurable grading scale system",
        "Print-ready report card output",
        "Teacher and admin role management",
        "Student and class management"
      ],
      screenshots: [
        // "assets/images/projects/school-report/screenshot1.jpg",
        // "assets/images/projects/school-report/screenshot2.jpg"
      ],
      status: "Completed",
      isPrivate: true,
      github: null,
      liveDemo: null,
      overview: "The School Report Generating System automates academic report production for schools — teachers enter results digitally and the system instantly generates formatted, print-ready student report cards.",
      problem: "Schools were writing student report cards manually — a time-consuming, error-prone process that took teachers days to complete at the end of every term.",
      solution: "Built a system where teachers log in, enter subject results per student, and the system automatically computes grades, totals, class positions, and generates print-ready report cards.",
      challenges: "Implementing a grading engine flexible enough to adapt to different school grading systems (percentage, letter grades, point scales) without changing the core code.",
      solutions_implemented: "Built a configurable grading scale stored in the database, letting administrators define their own grading ranges. This made the system reusable across different schools with different grading policies.",
      future: "SMS notifications to parents when reports are ready, academic performance trend charts, and multi-school SaaS deployment."
    },
    {
      id: "student-mental-health",
      title: "Student Mental Health System",
      subtitle: "Data Analysis & Health Insights Platform",
      category: "data",
      image: null,
      shortDesc: "A platform that collects and analyses student mental health data, presenting insights through visualisations to help institutions identify and support at-risk students.",
      technologies: ["PHP", "Python", "MySQL", "JavaScript", "HTML", "CSS"],
      features: [
        "Mental health survey and data collection",
        "Python-powered statistical analysis",
        "Data visualisation dashboards",
        "At-risk student identification",
        "Confidential student data handling",
        "Administrative insight reports"
      ],
      screenshots: [
        // "assets/images/projects/student-mental-health/screenshot1.jpg",
        // "assets/images/projects/student-mental-health/screenshot2.jpg"
      ],
      status: "Completed",
      isPrivate: false,
      github: "https://github.com/abbataylor/Student-Mental-Health-System",
      liveDemo: null,
      overview: "A cross-technology platform combining PHP for the web layer and Python for data analysis — designed to help educational institutions understand and respond to student mental health trends.",
      problem: "Universities lacked a structured, data-driven way to understand student mental health at scale. Counsellors were responding reactively to individual cases rather than identifying patterns proactively.",
      solution: "Students complete anonymous mental health assessments through the web platform. Python processes the collected data to identify trends and risk indicators, and administrators receive clear visual dashboards to guide resource allocation.",
      challenges: "Bridging the PHP web layer with Python data processing in a reliable, secure, and sufficiently fast way for near-real-time insights.",
      solutions_implemented: "Built a REST API layer in PHP that triggers Python analysis scripts server-side. Cached processed results to avoid redundant computation on repeated dashboard loads.",
      future: "Machine learning model for predictive risk assessment, integration with counselling booking systems, and anonymised national-level research data export."
    },
    {
      id: "cargo-shipping",
      title: "Cargo Shipping Platform",
      subtitle: "Logistics Management System",
      category: "system",
      image: "assets/images/project1.jpg",
      shortDesc: "A full-featured cargo management system where clients can book shipments, track deliveries in real time, and manage logistics from a clean admin dashboard.",
      technologies: ["PHP", "Laravel", "MySQL", "JavaScript"],
      features: [
        "Online shipment booking and management",
        "Real-time delivery tracking",
        "Admin logistics dashboard",
        "Client and driver management",
        "Invoice generation",
        "Status notification system"
      ],
      screenshots: [
        // "assets/images/projects/cargo-shipping/screenshot1.jpg",
        // "assets/images/projects/cargo-shipping/screenshot2.jpg"
      ],
      status: "Completed",
      isPrivate: true,
      github: null,
      liveDemo: null,
      overview: "A web-based cargo logistics platform that modernises shipment management, giving both logistics companies and their clients full visibility into cargo from booking to delivery.",
      problem: "Logistics companies were managing shipments through spreadsheets and WhatsApp — leading to lost bookings, poor tracking visibility, and no reliable way to communicate delivery updates to clients.",
      solution: "Built a full-stack platform where clients book shipments online, track status in real time, and receive automated updates — while administrators manage the full logistics pipeline from a centralised dashboard.",
      challenges: "Implementing reliable real-time tracking without WebSocket infrastructure, on the shared hosting environments common in Uganda.",
      solutions_implemented: "Used polling-based real-time updates with AJAX — lightweight and compatible with shared hosting. Combined with a clear status state machine to keep tracking logic predictable and bug-free.",
      future: "GPS integration with driver mobile apps, route optimisation algorithms, and public tracking links for recipients to check parcels without an account."
    },
    {
      id: "it-chatbot",
      title: "IT Support Chatbot",
      subtitle: "Intelligent Support Assistant",
      category: "webdev",
      image: "assets/images/project2.jpg",
      shortDesc: "An intelligent chatbot that handles common IT support queries, guides users through troubleshooting steps, and escalates unresolved issues to a human agent.",
      technologies: ["PHP", "JavaScript", "MySQL", "AJAX"],
      features: [
        "Automated responses to common IT queries",
        "Step-by-step troubleshooting guides",
        "Human agent escalation system",
        "Conversation history logging",
        "Admin dashboard for query management",
        "Session-based user tracking"
      ],
      screenshots: [
        // "assets/images/projects/it-chatbot/screenshot1.jpg",
        // "assets/images/projects/it-chatbot/screenshot2.jpg"
      ],
      status: "Completed",
      isPrivate: true,
      github: null,
      liveDemo: null,
      overview: "A rules-based IT support chatbot that handles tier-1 support queries automatically, reducing the workload on IT teams while giving users instant assistance.",
      problem: "IT departments were overwhelmed with repetitive support queries — password resets, connectivity issues, software installation — consuming time better spent on complex technical problems.",
      solution: "Built a chatbot with a decision-tree conversation engine that resolves common IT issues step by step. Unresolved issues escalate to a human agent with full conversation context passed along.",
      challenges: "Building a conversation engine flexible enough to handle varied user phrasing for the same issues, without the complexity of full NLP.",
      solutions_implemented: "Used keyword extraction and intent matching to identify query topics, then mapped them to decision-tree troubleshooting flows stored in the database. Admins can add new topics without touching code.",
      future: "Lightweight NLP model integration, ticketing system integration (Jira/Freshdesk), and a self-populating knowledge base."
    },
    {
      id: "student-clearance",
      title: "Student Clearance System",
      subtitle: "University Digital Clearance Platform",
      category: "system",
      image: "assets/images/project3.jpg",
      shortDesc: "A university clearance management system that lets students track and complete departmental clearance steps digitally — eliminating physical paperwork and queues.",
      technologies: ["PHP", "MySQL", "HTML", "CSS"],
      features: [
        "Online clearance application submission",
        "Multi-department clearance tracking",
        "Department approval workflows",
        "Real-time clearance status dashboard",
        "Automated completion notifications",
        "Admin reporting and export tools"
      ],
      screenshots: [
        // "assets/images/projects/student-clearance/screenshot1.jpg",
        // "assets/images/projects/student-clearance/screenshot2.jpg"
      ],
      status: "Completed",
      isPrivate: true,
      github: null,
      liveDemo: null,
      overview: "A university student clearance system that digitises the end-of-year clearance process — replacing paper forms and physical queues with an online, trackable multi-department workflow.",
      problem: "University clearance required students to physically visit each department, collect manual signatures, and queue — a process that took days and was completely untracked from a management perspective.",
      solution: "Built a multi-role system where students apply online, each relevant department reviews and approves their section digitally, and students track their progress in real time through a simple status dashboard.",
      challenges: "Coordinating a multi-department workflow where each department had different data requirements and approval logic, while keeping the student-facing interface simple and clear.",
      solutions_implemented: "Built a flexible clearance stage model where each department's requirements are configurable by admins. Students see a clean progress tracker; department staff see role-specific views with all the detail they need.",
      future: "Integration with the university student records system, automated final certificate generation, and a mobile status-check app."
    },
    {
      id: "countdown-timer",
      title: "Countdown Timer",
      subtitle: "Frontend UI Component",
      category: "frontend",
      image: null,
      shortDesc: "A precise, interactive countdown timer built with CSS and JavaScript — demonstrating frontend animation, state management, and drift-free timer logic.",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: [
        "Real-time countdown display",
        "Smooth CSS animations",
        "Start, pause, reset controls",
        "Drift-free timing logic",
        "Responsive design"
      ],
      screenshots: [
        // "assets/images/projects/countdown-timer/screenshot1.jpg"
      ],
      status: "Live",
      isPrivate: false,
      github: "https://github.com/abbataylor/countdown-timer",
      liveDemo: "demo/countdown-timer/",
      overview: "A polished countdown timer demonstrating precise frontend development — clean code, smooth animations, and robust timer logic with no framework dependencies.",
      problem: "A practical project to demonstrate mastery of JavaScript timing functions, DOM manipulation, and CSS animation in a self-contained, testable component.",
      solution: "Built a fully featured timer using vanilla JavaScript, with clear state management for running/paused/stopped states and CSS animations for visual feedback on each state transition.",
      challenges: "Preventing the timer drift that occurs when using setInterval for precise countdowns — a common and subtle bug in timer implementations.",
      solutions_implemented: "Used a date-anchored approach: the target end time is recorded once, and remaining time is calculated fresh on every tick rather than decrementing a counter — completely eliminating drift.",
      future: "Multiple simultaneous timers, custom alarm sounds, and a shareable countdown link via URL params."
    },
    {
      id: "js-calculator",
      title: "JS Calculator",
      subtitle: "JavaScript Logic Application",
      category: "frontend",
      image: null,
      shortDesc: "A fully functional calculator built with vanilla HTML, CSS, and JavaScript — showcasing core programming logic, operator chaining, keyboard support, and clean UI.",
      technologies: ["HTML", "JavaScript", "CSS"],
      features: [
        "Full arithmetic operations",
        "Keyboard input support",
        "Operator chaining logic",
        "Error handling (divide by zero, invalid input)",
        "Clean responsive UI",
        "Decimal precision handling"
      ],
      screenshots: [
        // "assets/images/projects/js-calculator/screenshot1.jpg"
      ],
      status: "Live",
      isPrivate: false,
      github: "https://github.com/abbataylor/JS-Calc",
      liveDemo: "demo/js-calculator/",
      overview: "A vanilla JavaScript calculator demonstrating clean programming logic, event handling, and well-designed UI — no frameworks, no dependencies, just precise code.",
      problem: "A practical project to demonstrate core JavaScript skills: handling complex state (current operand, operator, result), edge cases (operator chaining, decimal input), and keyboard events correctly.",
      solution: "Built a stateful calculator with clean logic separation: display management, input handling, calculation engine, and keyboard event mapping each handled as independent concerns.",
      challenges: "Correctly handling operator chaining (e.g. 5 + 3 × 2 = ?) and preventing invalid inputs (double decimals, leading zeros) without overcomplicating the state machine.",
      solutions_implemented: "Implemented a clear state machine with four states: input_a, operator_set, input_b, result. Every button press triggers a predictable state transition, making edge cases easy to reason about and handle.",
      future: "Scientific calculator mode, calculation history log, and a light/dark theme switcher."
    }
  ]
};
