export function isValidEmail(email: string): boolean {
  // Regular expression for validating email addresses
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export function durationCalculation(duration: string): string {
  const [startStr, endStr] = duration.split(" - ");

  const startDate = new Date(startStr);
  const endDate = new Date(endStr);

  let months =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth()) +
    1;

  if (months < 0) months = 0;

  if (months >= 12) {
    const years = parseFloat((months / 12).toFixed(1));
    return years === 1 ? "1 year" : years.toString().endsWith(".0") 
      ? `${Math.floor(years)} years` 
      : `${years} years`;
  } else {
    return `${months} months`;
  }
}