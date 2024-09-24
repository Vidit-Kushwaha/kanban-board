const getUserInitials = (name) =>
  name
    ?.split(" ")
    .map((n) => n[0].toUpperCase())
    .join("");

export default getUserInitials;
