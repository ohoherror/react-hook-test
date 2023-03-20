export const ToString = (value: any) => {
  return typeof value === "object" ? JSON.stringify(value) : value;
};

export const ToJson = (value: any) => {
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
};
