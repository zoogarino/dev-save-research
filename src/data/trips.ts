export interface Trip {
  id: string;
  name: string;
  km: string;
  time: string;
  stops: number;
  days?: string;
  season?: string;
  description?: string;
  fullDescription?: string;
}

export const trips: Trip[] = [
  {
    id: "classic-northern",
    name: "Classic Northern Circuit",
    km: "3241.2 KM",
    time: "49h 31m",
    stops: 17,
    days: "14 days",
    season: "May-October",
    description:
      "The Classic Northern Circuit covers Namibia's most iconic destinations, from the red dunes of Sossusvlei to the wildlife-rich Etosha National Park. This comprehensive route takes you through diverse landscapes and cultural experiences.",
    fullDescription: `<h3>Daily Itinerary</h3>
<h4>DAY 1: ARRIVAL - WINDHOEK</h4>
<p>━━━━ 0 km ━━━━</p>
<p>🚗 Arrival day</p>
<p><strong>🎯 Recommended Activities:</strong></p>
<ul>
<li>Arrive at Hosea Kutako International Airport</li>
<li>Collect rental vehicle and familiarize with driving conditions</li>
<li>Stock up on supplies at Maerua Mall or Grove Mall</li>
<li>Rest and prepare for journey</li>
</ul>
<p><strong>🌟 Optional Activities:</strong></p>
<ul>
<li>Visit Independence Memorial Museum or Christuskirche</li>
<li>Dinner at Joe's Beerhouse for traditional Namibian cuisine</li>
</ul>

<h4>DAY 2: WINDHOEK TO SOSSUSVLEI AREA</h4>
<p>━━━━ 340 km ━━━━</p>
<p>🚗 4.5-5 hours</p>
<p><strong>Route:</strong> Windhoek → Rehoboth → Solitaire → Sesriem</p>
<p><strong>Key Stops:</strong></p>
<ul>
<li>Rehoboth: Quick fuel and refreshments</li>
<li>Solitaire: ⛽ FUEL UP, famous apple pie at Solitaire General Dealer & Bakery, vintage car collection</li>
<li>Sesriem Gate: Purchase park permits (required for Sossusvlei access)</li>
</ul>
<p><strong>🎯 Recommended Activities:</strong></p>
<ul>
<li>Arrive early afternoon</li>
<li>Sunset at Elim Dune</li>
</ul>
<p><strong>📸 Photo Opportunities:</strong> Solitaire vintage cars, first desert vistas, Elim Dune sunset</p>
<p><strong>💡 Insider Tip:</strong> Book accommodation inside park boundary (Sesriem Campsite or Sossusvlei Lodge) for gate access 1 hour before public opening - essential for sunrise at Deadvlei.</p>

<p><em>Days 3-14 continue with similar detailed formatting...</em></p>

<h3>Essential Information</h3>
<p><strong>⛽ Fuel Checklist</strong></p>
<ul>
<li>✓ Major fuel stops: Rehoboth, Solitaire, Swakopmund, Uis, Khorixas, Outjo, Tsumeb, Otjiwarongo, Okahandja</li>
<li>⚠️ Critical sections: Uis → Twyfelfontein (90 km), Twyfelfontein → Outjo via Khorixas (160 km)</li>
<li>💡 Pro tip: Fill at every opportunity. Etosha camps have fuel but can run out - don't rely on it.</li>
</ul>`,
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
