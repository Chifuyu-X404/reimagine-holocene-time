
/**
 * Convert a Gregorian year to Holocene year
 * Holocene year = Gregorian year + 10000 (for CE/AD dates)
 * Holocene year = 10001 - Gregorian year (for BCE/BC dates)
 */
export const toHoloceneYear = (year: number, era: 'CE' | 'BCE' = 'CE'): number => {
  if (era === 'CE') {
    return year + 10000;
  } else {
    return 10001 - year;
  }
};

/**
 * Convert a Holocene year to Gregorian year and era
 * If Holocene year > 10000, then Gregorian year = Holocene year - 10000, era = CE/AD
 * If Holocene year <= 10000, then Gregorian year = 10001 - Holocene year, era = BCE/BC
 */
export const fromHoloceneYear = (holoceneYear: number): { year: number; era: 'CE' | 'BCE' } => {
  if (holoceneYear > 10000) {
    return { year: holoceneYear - 10000, era: 'CE' };
  } else {
    return { year: 10001 - holoceneYear, era: 'BCE' };
  }
};

/**
 * Format a Holocene date
 */
export const formatHoloceneDate = (holoceneYear: number, month: number, day: number): string => {
  return `${day} ${getMonthName(month)} ${holoceneYear} HE`;
};

/**
 * Format a Gregorian date
 */
export const formatGregorianDate = (year: number, month: number, day: number, era: 'CE' | 'BCE'): string => {
  return `${day} ${getMonthName(month)} ${year} ${era}`;
};

/**
 * Get month name from month number (1-12)
 */
export const getMonthName = (month: number): string => {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  return monthNames[month - 1];
};

/**
 * Get current date in Holocene calendar
 */
export const getCurrentHoloceneDate = (): { year: number; month: number; day: number } => {
  const today = new Date();
  return {
    year: today.getFullYear() + 10000,
    month: today.getMonth() + 1,
    day: today.getDate()
  };
};

/**
 * Get current date in Gregorian calendar
 */
export const getCurrentGregorianDate = (): { year: number; month: number; day: number; era: 'CE' | 'BCE' } => {
  const today = new Date();
  return {
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    day: today.getDate(),
    era: 'CE'
  };
};

/**
 * Historical events with their Holocene dates
 */
export const historicalEvents = [
  {
    year: 1,
    event: "Beginning of the Holocene Epoch",
    details: "The Holocene epoch begins, marking the end of the last Ice Age and the start of a warmer climate period, making agriculture and permanent settlements possible."
  },
  {
    year: 250,
    event: "First human settlements near water sources",
    details: "Early humans begin establishing temporary camps near rivers and lakes, the precursors to permanent settlements."
  },
  {
    year: 500,
    event: "First permanent human settlements",
    details: "Early humans begin establishing the first permanent settlements, transitioning from nomadic hunter-gatherer lifestyles."
  },
  {
    year: 1000,
    event: "Beginnings of animal husbandry",
    details: "Humans start keeping animals for food and materials, beginning the long process of animal domestication."
  },
  {
    year: 1500,
    event: "Earliest evidence of animal domestication",
    details: "Dogs are believed to be the first animals domesticated by humans, with evidence dating back to around 8500 BCE."
  },
  {
    year: 2000,
    event: "Beginnings of agriculture",
    details: "Humans begin cultivating crops in the Fertile Crescent region, marking a pivotal shift in human civilization."
  },
  {
    year: 2500,
    event: "Domestication of sheep and goats",
    details: "The domestication of sheep and goats in Mesopotamia and the Fertile Crescent regions provides reliable sources of meat, milk, and wool."
  },
  {
    year: 3000,
    event: "First pottery created",
    details: "Early humans develop pottery for storage and cooking, representing a major technological advancement."
  },
  {
    year: 3500,
    event: "Cultivation of rice in East Asia",
    details: "Rice cultivation begins in the Yangtze River valley of China, eventually becoming a staple food for a large portion of humanity."
  },
  {
    year: 4000,
    event: "Invention of the plow",
    details: "The development of the plow in Mesopotamia revolutionizes agriculture by allowing deeper soil cultivation and more efficient farming."
  },
  {
    year: 4500,
    event: "Invention of the wheel",
    details: "The wheel is invented in Mesopotamia, revolutionizing transportation and machinery."
  },
  {
    year: 5000,
    event: "Development of writing",
    details: "Sumerians develop cuneiform, one of the earliest writing systems, allowing for record-keeping and communication across distances and time."
  },
  {
    year: 5500,
    event: "Construction of early pyramids in Egypt",
    details: "The Step Pyramid of Djoser, built around 4700 HE, marks the beginning of the age of pyramid building in Ancient Egypt."
  },
  {
    year: 6000,
    event: "Bronze Age begins",
    details: "Humans learn to make bronze by alloying copper with tin, creating stronger tools and weapons."
  },
  {
    year: 6500,
    event: "Code of Hammurabi",
    details: "One of the earliest and most complete written legal codes is created in Babylon, establishing principles of justice that influence legal systems for millennia."
  },
  {
    year: 7000,
    event: "Early urbanization",
    details: "The first true cities emerge in Mesopotamia with complex social hierarchies, specialized labor, and centralized governance."
  },
  {
    year: 7500,
    event: "Golden Age of Ancient Greece",
    details: "The classical period of Ancient Greece sees significant advancements in philosophy, mathematics, art, and the foundations of democratic governance."
  },
  {
    year: 8000,
    event: "Rise of the Roman Republic",
    details: "The Roman Republic is established, beginning the ascent of Rome as a dominant power in the Mediterranean world."
  },
  {
    year: 8500,
    event: "Iron Age begins",
    details: "Humans discover iron working, leading to improved tools, weapons, and agricultural implements."
  },
  {
    year: 9000,
    event: "Fall of the Western Roman Empire",
    details: "The Western Roman Empire collapses, traditionally marking the transition from classical antiquity to the Middle Ages in Europe."
  },
  {
    year: 9001,
    event: "Founding of Jericho, one of the world's oldest cities",
    details: "Archaeological evidence suggests Jericho was first settled around 9000 BCE, making it one of humanity's earliest continuously inhabited settlements."
  },
  {
    year: 9500,
    event: "First evidence of pottery in Japan (Jōmon culture)",
    details: "The Jōmon people created some of the world's earliest pottery, with vessels dating back to approximately 10,500 years ago."
  },
  {
    year: 9600,
    event: "Islamic Golden Age",
    details: "A period of scientific, cultural, and economic flourishing in the Islamic world that preserved and expanded upon ancient knowledge."
  },
  {
    year: 9700,
    event: "Earliest evidence of rice cultivation in China",
    details: "Archaeological finds indicate the domestication of rice began along the Yangtze River around 7700 BCE."
  },
  {
    year: 9800,
    event: "The Crusades",
    details: "A series of religious wars sanctioned by the Latin Church, with the goal of recovering the Holy Land from Islamic rule."
  },
  {
    year: 9901,
    event: "Unification of Upper and Lower Egypt",
    details: "Narmer (Menes) is believed to have united Egypt around 3100 BCE, founding the First Dynasty and beginning over 3,000 years of pharaonic civilization."
  },
  {
    year: 9950,
    event: "Mongol Empire",
    details: "The largest contiguous land empire in history, connecting East and West through the Silk Road and facilitating cultural and technological exchange."
  },
  {
    year: 9997,
    event: "Birth of Jesus of Nazareth",
    details: "The pivotal figure of Christianity was born around 4 BCE according to historical estimates, though the traditional calendar sets his birth as 1 CE."
  },
  {
    year: 10400,
    event: "European Renaissance",
    details: "A period of cultural rebirth and renewed interest in classical learning, art, and science that bridged the Middle Ages and Modern era."
  },
  {
    year: 10450,
    event: "Gutenberg's Printing Press",
    details: "Johannes Gutenberg's invention revolutionized information sharing and literacy, making books accessible to the masses and transforming society."
  },
  {
    year: 10492,
    event: "Columbus reaches the Americas",
    details: "Christopher Columbus's voyage initiated sustained contact between the Eastern and Western hemispheres, dramatically altering the course of global history."
  },
  {
    year: 10550,
    event: "Scientific Revolution",
    details: "Breakthroughs in astronomy, physics, biology, and chemistry transformed our understanding of the natural world and established the scientific method."
  },
  {
    year: 10570,
    event: "Birth of Muhammad",
    details: "The prophet of Islam was born in Mecca around 570 CE, beginning a life that would transform the religious landscape of the Middle East and beyond."
  },
  {
    year: 10632,
    event: "Death of Muhammad",
    details: "Muhammad's death in 632 CE marked the beginning of the Islamic calendar and the rapid expansion of Islam throughout the Middle East, North Africa, and beyond."
  },
  {
    year: 10700,
    event: "Age of Enlightenment",
    details: "A philosophical movement emphasizing reason, individualism, and skepticism of traditional authority, laying groundwork for modern political thought."
  },
  {
    year: 10760,
    event: "Beginning of the Industrial Revolution",
    details: "The transition to new manufacturing processes begins in Great Britain, fundamentally changing how goods were produced and transforming society."
  },
  {
    year: 10776,
    event: "United States Declaration of Independence",
    details: "The declaration, adopted on July 4, 1776 CE, announced the independence of the thirteen American colonies from Great Britain."
  },
  {
    year: 10789,
    event: "French Revolution",
    details: "A period of radical social and political upheaval in France that transformed French society and influenced modern democratic ideals worldwide."
  },
  {
    year: 10850,
    event: "Invention of the Telegraph",
    details: "Samuel Morse's invention allowed near-instant communication over long distances for the first time in human history."
  },
  {
    year: 10876,
    event: "Invention of the Telephone",
    details: "Alexander Graham Bell's invention revolutionized communication, allowing real-time voice conversations across distances."
  },
  {
    year: 10914,
    event: "World War I begins",
    details: "The 'Great War' erupts after the assassination of Archduke Franz Ferdinand, eventually involving most of the world's great powers."
  },
  {
    year: 10939,
    event: "World War II begins",
    details: "The deadliest conflict in human history begins with Germany's invasion of Poland, eventually claiming the lives of over 75 million people."
  },
  {
    year: 10945,
    event: "Atomic bombing of Hiroshima and Nagasaki",
    details: "The first and only use of nuclear weapons in warfare, demonstrating humanity's ability to cause unprecedented destruction."
  },
  {
    year: 10969,
    event: "First moon landing",
    details: "Neil Armstrong and Buzz Aldrin became the first humans to set foot on the Moon on July 20, 1969 CE, marking a milestone in space exploration."
  },
  {
    year: 10989,
    event: "Fall of the Berlin Wall",
    details: "The physical and ideological barrier dividing Berlin and symbolizing the Iron Curtain comes down, signaling the end of the Cold War."
  },
  {
    year: 10991,
    event: "World Wide Web becomes publicly available",
    details: "Tim Berners-Lee's creation is opened to the public, beginning the digital transformation of society, commerce, and communication."
  },
  {
    year: 12001,
    event: "September 11 attacks",
    details: "Terrorist attacks in the United States kill nearly 3,000 people and dramatically reshape global politics and security."
  },
  {
    year: 12008,
    event: "Global Financial Crisis",
    details: "The worst economic disaster since the Great Depression reveals vulnerabilities in the global financial system and leads to widespread economic hardship."
  },
  {
    year: 12020,
    event: "COVID-19 Pandemic",
    details: "A global pandemic caused by the SARS-CoV-2 virus disrupts societies worldwide, causing millions of deaths and transforming work, education, and daily life."
  },
  {
    year: 12023,
    event: "Development of ChatGPT and other advanced AI systems",
    details: "The rapid advancement of artificial intelligence technologies in the early 2020s CE has begun transforming numerous aspects of human society and work."
  }
];

/**
 * Get a random historical event for "This Day in History" feature
 */
export const getThisDayEvent = (): { year: number; event: string; details: string } => {
  const randomIndex = Math.floor(Math.random() * historicalEvents.length);
  return historicalEvents[randomIndex];
};
