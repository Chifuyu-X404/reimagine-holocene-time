
/**
 * Core date conversion utilities for the Holocene Calendar
 */

import { historicalEvents } from './historicalEvents';

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
 * Get a random historical event for "This Day in History" feature
 */
export const getThisDayEvent = (): { year: number; event: string; details: string } => {
  const randomIndex = Math.floor(Math.random() * historicalEvents.length);
  return historicalEvents[randomIndex];
};

// Re-export historicalEvents for components that need direct access
export { historicalEvents } from './historicalEvents';
