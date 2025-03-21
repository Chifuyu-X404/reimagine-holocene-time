
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
    year: 500,
    event: "First permanent human settlements",
    details: "Early humans begin establishing the first permanent settlements, transitioning from nomadic hunter-gatherer lifestyles."
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
    year: 3000,
    event: "First pottery created",
    details: "Early humans develop pottery for storage and cooking, representing a major technological advancement."
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
    year: 6000,
    event: "Bronze Age begins",
    details: "Humans learn to make bronze by alloying copper with tin, creating stronger tools and weapons."
  },
  {
    year: 7000,
    event: "Early urbanization",
    details: "The first true cities emerge in Mesopotamia with complex social hierarchies, specialized labor, and centralized governance."
  },  
  {
    year: 8500,
    event: "Iron Age begins",
    details: "Humans discover iron working, leading to improved tools, weapons, and agricultural implements."
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
    year: 9700,
    event: "Earliest evidence of rice cultivation in China",
    details: "Archaeological finds indicate the domestication of rice began along the Yangtze River around 7700 BCE."
  },
  {
    year: 9901,
    event: "Unification of Upper and Lower Egypt",
    details: "Narmer (Menes) is believed to have united Egypt around 3100 BCE, founding the First Dynasty and beginning over 3,000 years of pharaonic civilization."
  },
  {
    year: 9997,
    event: "Birth of Jesus of Nazareth",
    details: "The pivotal figure of Christianity was born around 4 BCE according to historical estimates, though the traditional calendar sets his birth as 1 CE."
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
    year: 11000,
    event: "Medieval European Renaissance",
    details: "A period of intense cultural, artistic, and intellectual flourishing begins in Europe, marking the transition from the Middle Ages to the Modern era."
  },
  {
    year: 11492,
    event: "Columbus reaches the Americas",
    details: "Christopher Columbus's voyage in 1492 CE initiated sustained contact between the Eastern and Western hemispheres, dramatically altering the course of global history."
  },
  {
    year: 11760,
    event: "Beginning of the Industrial Revolution",
    details: "The transition to new manufacturing processes begins in Great Britain, fundamentally changing how goods were produced and transforming society."
  },
  {
    year: 11776,
    event: "United States Declaration of Independence",
    details: "The declaration, adopted on July 4, 1776 CE, announced the independence of the thirteen American colonies from Great Britain."
  },
  {
    year: 11914,
    event: "World War I begins",
    details: "The 'Great War' erupts after the assassination of Archduke Franz Ferdinand, eventually involving most of the world's great powers."
  },
  {
    year: 11939,
    event: "World War II begins",
    details: "The deadliest conflict in human history begins with Germany's invasion of Poland, eventually claiming the lives of over 75 million people."
  },
  {
    year: 11969,
    event: "First moon landing",
    details: "Neil Armstrong and Buzz Aldrin became the first humans to set foot on the Moon on July 20, 1969 CE, marking a milestone in space exploration."
  },
  {
    year: 11989,
    event: "Fall of the Berlin Wall",
    details: "The physical and ideological barrier dividing Berlin and symbolizing the Iron Curtain comes down, signaling the end of the Cold War."
  },
  {
    year: 11991,
    event: "World Wide Web becomes publicly available",
    details: "Tim Berners-Lee's creation is opened to the public, beginning the digital transformation of society, commerce, and communication."
  },
  {
    year: 12001,
    event: "September 11 attacks",
    details: "Terrorist attacks in the United States kill nearly 3,000 people and dramatically reshape global politics and security."
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
