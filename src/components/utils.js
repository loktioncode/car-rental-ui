  //removing the @ in the keys in my all cars array
const updateResponseKeyString = (data: object) => Object.keys(data).reduce((a, b) => (a[b.replace('@','')] = data[b], a), {})

export default updateResponseKeyString;