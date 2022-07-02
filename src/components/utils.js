//removing the @ in the keys in objects parsed to it
export const updateResponseKeyString = (data) =>
Object.keys(data).reduce(
  (a, b) => ((a[b.replace("@", "")] = data[b]), a),
  {}
);
