export function remainingDayCalculator(time) {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const firstDate = new Date();
  const secondDate = new Date(time);

  return Math.round(Math.abs((firstDate - secondDate) / oneDay));
}