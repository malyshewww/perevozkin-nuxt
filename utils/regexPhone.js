export const regexPhone = (str) => {
  const cleaned = str.replace(/[^\d+]/g, "");
  const processedPhone = str.replace(/\D/g, "");
  const pattern = new RegExp(`(^\\d{${processedPhone.length % 10}})(\\d{3})(\\d{3})(\\d{2})(\\d{2}$)`);
  const formattedNumber = processedPhone.replace(pattern, `${cleaned.startsWith("+") ? "+$1 ($2) $3-$4-$5" : "$1 ($2) $3-$4-$5"}`);
  return formattedNumber;
};
