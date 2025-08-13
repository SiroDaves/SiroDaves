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
    1; // +1 to count inclusively

  if (months < 0) months = 0;

  if (months >= 12) {
    const years = (months / 12).toFixed(1);
    return years.endsWith(".0") ? `${parseInt(years)} years` : `${years} years`;
  } else {
    return `${months} months`;
  }
}

