export function generateUsername(enrollmentNumber) {
  // e.g. "TG/2026/ICT/001" -> "tg2026ict001"
  return enrollmentNumber.toLowerCase().replace(/[^a-z0-9]/g, "");
}

export function generateTempPassword() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789";
  let password = "";

  for (let i = 0; i < 8; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }

  return password;
}
