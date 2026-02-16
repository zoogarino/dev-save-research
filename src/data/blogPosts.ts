export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  views: number;
  featured?: boolean;
  gradient: string;
  content: string[];
}

export const categories = [
  "All Posts",
  "Destination Guides",
  "Trip Reports",
  "Self-Drive Tips",
  "Travel Planning",
  "Accommodation",
];

export const blogPosts: BlogPost[] = [
  {
    slug: "ultimate-sossusvlei-guide",
    title: "The Ultimate Guide to Driving Sossusvlei: Everything You Need to Know",
    excerpt: "Everything you need to know about navigating the iconic red dunes, from road conditions to best viewing times, permits, and photography tips for the world's highest sand dunes.",
    category: "Destination Guides",
    date: "Feb 12, 2026",
    readTime: "12 min read",
    views: 3421,
    featured: true,
    gradient: "from-terracotta to-ochre",
    content: [
      "Sossusvlei is one of Namibia's most iconic destinations, but navigating it requires planning. Whether you're a first-time visitor or a seasoned traveler, this comprehensive guide covers everything from road conditions to the best photography spots.",
      "The journey to Sossusvlei begins at the Sesriem Gate, approximately 70 km from the nearest town. The road from the gate to Sossusvlei is a well-maintained tar road, but the last 5 km to the vlei itself requires a 4x4 vehicle.",
      "The best time to visit is during the cooler months (May to September), when temperatures are more manageable and the light for photography is at its best. Early morning visits are recommended to catch the dramatic shadows on the dunes.",
    ],
  },
  {
    slug: "classic-northern-circuit",
    title: "Classic Northern Circuit: 10-Day Itinerary",
    excerpt: "A detailed day-by-day breakdown of Namibia's most popular route, covering Etosha, Damaraland, and the Skeleton Coast with practical tips.",
    category: "Trip Reports",
    date: "Feb 8, 2026",
    readTime: "15 min read",
    views: 2847,
    gradient: "from-primary to-primary-dark",
    content: [
      "The Northern Circuit is Namibia's most popular self-drive route, and for good reason. This 10-day itinerary takes you through some of the country's most spectacular landscapes.",
    ],
  },
  {
    slug: "common-mistakes-first-timers",
    title: "5 Common Mistakes First-Time Self-Drive Visitors Make in Namibia",
    excerpt: "Learn from others' experiences and avoid these pitfalls to make your Namibian adventure smooth and memorable from day one.",
    category: "Self-Drive Tips",
    date: "Feb 10, 2026",
    readTime: "8 min read",
    views: 2156,
    gradient: "from-ochre to-sandstone",
    content: [
      "Namibia is an incredible self-drive destination, but there are some common mistakes that can derail your trip if you're not prepared.",
    ],
  },
  {
    slug: "understanding-road-types",
    title: "Understanding Namibian Road Types: A Complete Reference",
    excerpt: "From tar to gravel to sand—know what to expect on every road type you'll encounter during your Namibian road trip.",
    category: "Self-Drive Tips",
    date: "Feb 5, 2026",
    readTime: "10 min read",
    views: 1923,
    gradient: "from-navy-dark to-foreground/80",
    content: [
      "Namibia's road network is diverse and understanding the different road types is crucial for a safe and enjoyable self-drive experience.",
    ],
  },
  {
    slug: "skeleton-coast-camping",
    title: "Best Camping Spots Along the Skeleton Coast",
    excerpt: "Discover the most spectacular campsites along Namibia's mysterious Skeleton Coast, from remote wilderness to equipped facilities.",
    category: "Accommodation",
    date: "Jan 28, 2026",
    readTime: "9 min read",
    views: 1654,
    gradient: "from-primary-dark to-navy-dark",
    content: [
      "The Skeleton Coast is one of the most hauntingly beautiful stretches of coastline in the world, and camping here is an unforgettable experience.",
    ],
  },
  {
    slug: "budget-breakdown-two-weeks",
    title: "Budget Breakdown: What a 2-Week Namibia Trip Actually Costs",
    excerpt: "A transparent, detailed cost analysis of a two-week self-drive trip through Namibia, including vehicle rental, fuel, accommodation, and food.",
    category: "Travel Planning",
    date: "Jan 22, 2026",
    readTime: "11 min read",
    views: 3102,
    gradient: "from-sandstone to-terracotta",
    content: [
      "One of the most common questions we get is about the real cost of a Namibia trip. Here's a complete breakdown based on recent travel.",
    ],
  },
  {
    slug: "etosha-wildlife-guide",
    title: "Complete Guide to Etosha National Park Wildlife",
    excerpt: "Everything you need to know about spotting the Big Five and more at Namibia's premier wildlife destination.",
    category: "Destination Guides",
    date: "Jan 15, 2026",
    readTime: "14 min read",
    views: 2341,
    gradient: "from-success to-primary",
    content: [
      "Etosha National Park is one of Africa's greatest wildlife destinations, offering incredible game viewing opportunities year-round.",
    ],
  },
  {
    slug: "namibia-packing-list",
    title: "The Essential Namibia Packing List for Self-Drive Trips",
    excerpt: "Don't leave home without these items. A comprehensive packing guide organized by category for your Namibian adventure.",
    category: "Travel Planning",
    date: "Jan 10, 2026",
    readTime: "7 min read",
    views: 1876,
    gradient: "from-ochre to-primary",
    content: [
      "Packing for Namibia requires careful consideration of the diverse climates and conditions you'll encounter.",
    ],
  },
];

export const popularPosts = blogPosts
  .sort((a, b) => b.views - a.views)
  .slice(0, 5);
