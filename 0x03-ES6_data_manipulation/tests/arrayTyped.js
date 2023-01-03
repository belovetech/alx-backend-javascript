// Create 16 bytes buffer
const buffer = new ArrayBuffer(16);

if (buffer.byteLength === 16) {
  console.log(`Yes, It's 16 bytes`);
} else {
  console.log(`No, It's not 16 bytes`);
}

// create a view that treats the data in the buffer as an array of 32-bit signed integers
const int32View = new Int32Array(buffer);
console.log(`int32View length: ${int32View.length}`);
// Fill data in the view
for (let i = 0; i < int32View.length; i++) {
  int32View[i] = i * 2;
}

for (let i = 0; i < int32View.length; i++) {
  console.log(`Entry ${i}: ${int32View[i]}`);
}

const int16View = new Int16Array(buffer);

int16View[1] = 32;

console.log(`int16View length: ${int16View.length}`);

for (let i = 0; i < int16View.length; i++) {
  console.log(`Entry ${i}: ${int16View[i]}`);
}

console.log(buffer);
