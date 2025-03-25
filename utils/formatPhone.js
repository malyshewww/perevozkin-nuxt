export const formatPhone = (phone) => {
  if (phone) {
    return phone.replace(/[^\d\+]/g, "");
  }
};
