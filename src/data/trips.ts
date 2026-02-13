export interface Trip {
  id: string;
  name: string;
  km: string;
  time: string;
  stops: number;
  days?: string;
  season?: string;
  description?: string;
}

export const trips: Trip[] = [
  {
    id: "classic-northern",
    name: "Classic Northern Circuit",
    km: "3241.2 KM",
    time: "49h 31m",
    stops: 17,
    days: "14 days",
    season: "Year-round",
    description:
      "The Classic Northern Circuit covers Namibia's most iconic destinations, from the red dunes of Sossusvlei to the wildlife-rich Etosha National Park. This comprehensive route takes you through diverse landscapes and cultural experiences.",
  },
  {
    id: "central-safari",
    name: "Central Namibian Safari",
    km: "1406.4 KM",
    time: "18h 57m",
    stops: 8,
    days: "7 days",
    season: "May-October",
    description:
      "A focused safari experience through central Namibia, perfect for those with limited time who want to see the highlights. Covers key game reserves and scenic landscapes.",
  },
  {
    id: "southern-circuit",
    name: "The Southern Circuit",
    km: "2442.8 KM",
    time: "31h 33m",
    stops: 12,
    days: "10 days",
    season: "March-November",
    description:
      "Explore the dramatic landscapes of southern Namibia, including Fish River Canyon, the Quiver Tree Forest, and the wild Skeleton Coast. A journey through some of Africa's most striking terrain.",
  },
  {
    id: "northern-wilderness",
    name: "The Northern Wilderness Explorer",
    km: "3521.2 KM",
    time: "47h 32m",
    stops: 13,
    days: "15 days",
    season: "May-October",
    description:
      "Venture into Namibia's remote northern wilderness, where desert elephants roam and ancient cultures thrive. This route takes you through the Kunene region and beyond.",
  },
  {
    id: "etosha-waterberg",
    name: "The Etosha and Waterberg Experience",
    km: "1477.3 KM",
    time: "21h 24m",
    stops: 9,
    days: "8 days",
    season: "Year-round",
    description:
      "Combine two of Namibia's premier wildlife destinations. From the towering sandstone cliffs of Waterberg to the vast salt pans of Etosha, this trip is a nature lover's dream.",
  },
];
