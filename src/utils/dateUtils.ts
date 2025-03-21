
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
    year: 11492,
    event: "Columbus reaches the Americas",
    details: "Christopher Columbus's voyage in 1492 CE initiated sustained contact between the Eastern and Western hemispheres, dramatically altering the course of global history."
  },
  {
    year: 11776,
    event: "United States Declaration of Independence",
    details: "The declaration, adopted on July 4, 1776 CE, announced the independence of the thirteen American colonies from Great Britain."
  },
  {
    year: 11969,
    event: "First moon landing",
    details: "Neil Armstrong and Buzz Aldrin became the first humans to set foot on the Moon on July 20, 1969 CE, marking a milestone in space exploration."
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
