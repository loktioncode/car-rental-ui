  //removing the @ in the keys in my all cars array
export const updateResponseKeyString = (data: object) => Object.keys(data).reduce((a, b) => (a[b.substring(1)] = data[b], a), {})
