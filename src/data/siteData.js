/**
 * Edo International Reggae Festival - Site Data Configuration
 * Source of truth for all content across the application.
 */

export const siteData = {
  festivalName: "EDO International Reggae Festival",
  slogan: "One Culture! One Vibes!! One Shine!!!",
  ceo: "Dqueen Adesuwa",
  ceoTitle: "Founder & CEO, Edo International Reggae Festival",
  office: "Kings Square, Benin City, Edo State, Nigeria.",
  hashtag: "#OneCultureOneVibesOneShine",
  
  socials: {
    whatsapp: "https://wa.me/2348000000000",
    phone: "tel:+2348000000000",
    instagram: "https://instagram.com/edo_reggae_festival",
    instagramHandle: "@edo_reggae_festival",
    email: "mailto:info@edoreggaefestival.com",
    tiktok: "https://tiktok.com/@edoreggaefestival",
  },

  navigation: [
    { name: "About", href: "#about" },
    { name: "Lineup", href: "#lineup" },
    { name: "Experience", href: "#experience" },
    { name: "Gallery", href: "#gallery" },
    { name: "Tickets", href: "#tickets" },
    { name: "Partners", href: "#partners" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ],

  trustBadges: [
    { name: "One Culture", description: "Celebrating the rich cultural heritage and historical depth of Edo State." },
    { name: "One Vibes", description: "Bringing globally renowned roots reggae legends and rising stars together." },
    { name: "One Shine", description: "Positioning Kings Square, Benin City as a glowing cultural tourism beacon." },
    { name: "Unity", description: "Empowering local artists, vendors, and comperes in a celebration of peace." },
  ],

  hero: {
    title: "EDO International Reggae Festival",
    subtitle: "One Culture! One Vibes!! One Shine!!!",
    description: "Join us in Kings Square, Benin City, Edo State, Nigeria for an extraordinary celebration where legendary global reggae vibrations fuse with the ancient majesty and heritage of the Edo Kingdom.",
    date: "October 2026",
    venue: "Kings Square, Benin City, Edo State, Nigeria",
    ctaPrimary: "Join Ticket Waiting List",
    ctaSecondary: "Explore Lineup",
    bgImage: "/src/assets/images/reggae_hero_banner_1782844474123.jpg",
  },

  about: {
    title: "About the Festival",
    subtitle: "One Culture! One Vibes!! One Shine!!!",
    historyTitle: "Our Vision & Cultural Legacy",
    historyText1: "The EDO International Reggae Festival is a premier cultural and musical beacon designed to celebrate the timeless, unifying message of reggae music—peace, love, and liberation—and seamlessly fuse it with the magnificent, centuries-old heritage of the Edo Kingdom. Staged in the historic Kings Square in Benin City, the festival stands as an epic milestone of tourism, roots music, and community expression.",
    historyText2: "With our motto 'One Culture! One Vibes!! One Shine!!!' leading the movement, we celebrate together as one people, providing an unmatched platform for historic legends, featured stars, and local vendors to connect with a global audience of peace lovers.",
    
    ceoImage: "/src/assets/images/theceo.png",
    ceoQuote: "Reggae is more than music; it is a movement of the heart. By uniting the ancient stories of the Edo people with the global rhythm of reggae, we are crafting a new legacy of cultural tourism, youth empowerment, and pure joy.",
    ceoMessage: "Welcome to a space of respect, unity, and rich heritage. At the Edo Reggae Festival, we invite everyone to experience our hospitality, feel the vibrations of the bass, and join us in chanting songs of freedom, peace, and togetherness.",
  },

  lineup: {
    title: "The Official Lineup",
    subtitle: "Witness Historic Reggae Icons and Phenomenal Future Talent Live at Kings Square",
    confirmedHeadliner: {
      name: "May Shua",
      role: "Confirmed Headliner",
      image: "/src/assets/images/mayshua.png",
      description: "The sensational afro-reggae firebrand bringing high-octane vibes, unmatched groove, and cultural pride to the main stage."
    },
    legends: [
      "Orits Wiliki",
      "Righteousman",
      "Amos McRoy",
      "LT Shotgun",
      "Felix Duke",
      "Senior Kings Ogebor (SKO)",
      "Jah Tea",
      "Iyare Victor Uwaifo",
      "Black'Orice",
      "Baba Fryo",
      "Faya",
      "Buchi",
      "BClean",
      "Pvoolala",
      "Benjamin Gee",
      "King Browman Dania (A1 Sound)"
    ],
    featured: [
      "Oge Kimono",
      "Commander Jacky Sula",
      "Daddy Dicky",
      "WinningJah",
      "Man Dizaya",
      "BClean",
      "Buju King",
      "Jah Device",
      "Chocobantis",
      "Ciderr",
      "3.6",
      "Yody",
      "Pvoolala",
      "Lucky Regie",
      "May Shua"
    ],
    supporting: [
      "Yody",
      "AiiVy",
      "Ozi Da Genius"
    ],
    mcs: [
      "Murphy Dread",
      "Kent Sele"
    ]
  },

  experience: {
    title: "The Festival Experience",
    subtitle: "An Immersive Journey into Rhythm and Heritage",
    ctaLabel: "View Full Schedule",
    items: [
      {
        id: "exp-music",
        title: "Live Reggae Concerts",
        description: "Enjoy electric performances from top international reggae icons, roots reggae veterans, and Nigeria's brightest rising stars. Feel the thunderous dub, sweet rocksteady, and energetic dancehall.",
        icon: "Music",
        image: "/src/assets/images/live_performance_1782844506404.jpg"
      },
      {
        id: "exp-culture",
        title: "Edo Cultural Showcase",
        description: "Marvel at the vibrant Benin traditional dances, dramatic theatrical reenactments, spectacular coral-beaded royal costuming, and historical storytelling that honors the Oba of Benin's rich heritage.",
        icon: "Compass",
        image: "/src/assets/images/cultural_fusion_1782844520544.jpg"
      },
      {
        id: "exp-art",
        title: "Art & Bronze Craft Expo",
        description: "Explore galleries featuring authentic Benin bronze casting demonstrations, wooden sculptures, local canvas painting, and modern African art pieces available for purchase directly from artisans.",
        icon: "Palette",
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "exp-food",
        title: "Reggae Culinary Village",
        description: "Indicate your taste buds in a delectable fusion of local Edo delicacies (like pounded yam and Egusi soup) alongside authentic Jamaican jerk chicken, ital organic vegan foods, and tropical cocktails.",
        icon: "Utensils",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80"
      },
    ]
  },

  gallery: {
    title: "Festival Highlights",
    subtitle: "Captured Moments of Love, Rhythm, and Splendor",
    images: [
      {
        src: "/src/assets/images/reggae_hero_banner_1782844474123.jpg",
        caption: "Main Stage Concert Vibrations",
        category: "Music"
      },
      {
        src: "/src/assets/images/theceo.png",
        caption: "Founder Dqueen Adesuwa Welcome Address",
        category: "People"
      },
      {
        src: "/src/assets/images/live_performance_1782844506404.jpg",
        caption: "Roots Reggae Band Live Performance",
        category: "Music"
      },
      {
        src: "/src/assets/images/cultural_fusion_1782844520544.jpg",
        caption: "Edo Royal Dancers and Coral Bead Display",
        category: "Culture"
      },
      {
        src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80",
        caption: "Dynamic Concert Crowd and Lighting",
        category: "Experience"
      },
      {
        src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
        caption: "Reggae DJ Sound System Session",
        category: "Music"
      }
    ]
  },

  partners: {
    title: "Our Partners & Sponsors",
    subtitle: "Enabling Cultural Pride and Artistic Expression Together",
    categories: [
      {
        name: "Grand Patrons",
        logos: [
          { name: "Edo State Tourism Board", type: "government" },
          { name: "Ministry of Arts, Culture & Diaspora Affairs", type: "government" }
        ]
      },
      {
        name: "Official Sponsors",
        logos: [
          { name: "Benin Heritage Brewery", type: "corporate" },
          { name: "One Love Telecommunications", type: "corporate" },
          { name: "Wazobia Sound FM", type: "media" },
          { name: "Kings Square Hospitality Group", type: "hospitality" }
        ]
      },
      {
        name: "Community Partners",
        logos: [
          { name: "Benin Bronze Guild", type: "cultural" },
          { name: "Edo Music Association", type: "association" }
        ]
      }
    ]
  },

  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Everything You Need to Know Before Joining the Rhythms",
    items: [
      {
        question: "When and where is the festival held?",
        answer: "The festival takes place in October 2026. The official venue is Kings Square, Benin City, Edo State, Nigeria. Precise security-screened entry points and parking coordinates will be shared with attendees."
      },
      {
        question: "What is the status of the tickets?",
        answer: "Tickets are releasing soon! You can join the Priority Waiting List in our Tickets section to receive real-time SMS and Email alerts the exact moment passes go on sale."
      },
      {
        question: "Is the festival family-friendly?",
        answer: "Yes! The daytime experience (10:00 AM to 5:00 PM) is fully family-friendly, featuring historical craft exhibitions, cultural dances, educational workshops, and food court. The evening concerts in Kings Square run till late, suitable for mature music enthusiasts."
      },
      {
        question: "How can local artisans and vendors participate?",
        answer: "We support our local economy! Artisans, food vendors, and clothing designers can apply for a booth space in the Reggae Culinary or Art Craft Village. Please submit an application form in our Contact section."
      },
      {
        question: "What security measures are in place?",
        answer: "Your safety is our top priority. We partner with the Edo State Police Command, local guard divisions, and private safety coordinators. Comprehensive security checkpoints, professional medical tents, and secure well-lit parking areas around Kings Square will be active throughout."
      }
    ]
  },

  contact: {
    title: "Connect With Us",
    subtitle: "Join the Team, Secure a Stand, or Ask Us Anything",
    phoneDisplay: "+234 811 EDO REGGAE (+234 811 404 4948)",
    emailDisplay: "edointernationalreggaefestival@gmail.com",
    addressDisplay: "Kings Square, Benin City, Edo State, Nigeria.",
    whatsapp: "https://wa.me/2348085973497",
    hours: "Monday - Friday: 9:00 AM - 6:00 PM | Saturday: 10:00 AM - 3:00 PM"
  },
 

  tickets: {
    title: "Tickets Available Soon!",
    subtitle: "One Culture! One Vibes!! One Shine!!! Priority Access Waiting List is now open.",
    description: "Enter your email below to join the Priority Waiting List. Subscribers receive 10% discount codes, exclusive lineup updates, and guaranteed access to Early Bird VIP Passes before they are released to the public."
  }
};
