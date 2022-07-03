import moment from 'moment';

//removing the @ in the keys OF objects parsed to it
export const updateResponseKeyString = (data) =>
Object.keys(data).reduce(
  (a, b) => ((a[b.replace("@", "")] = data[b]), a),
  {}
);

export const formartDate = (date) =>{
  return moment(date).format('dddd, MMMM Do YYYY, h:mm:ss a');
}
