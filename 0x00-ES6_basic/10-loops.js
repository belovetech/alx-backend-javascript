// export default function appendToEachArrayValue(array, appendString) {
//   for (var idx in array) {
//     var value = array[idx];
//     array[idx] = appendString + value;
//   }

//   return array;
// }

export default function appendToEachArrayValue(array, appendString) {
  let idx = 0;
  for (let element of array) {
    array[idx++] = `${appendString}${element}`;
  }

  return array;
}
