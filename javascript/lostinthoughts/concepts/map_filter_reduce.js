const arr = [5, 1, 3, 2, 6];
// Task 1: Double the array element: [10, 2, 6, 4, 12]
function double(x) {
  return x * 2;
}
const doubleArr = arr.map(double); // Internally map will run double function for each element of array and create a new array and returns it.
console.log(doubleArr); // [10, 2, 6, 4, 12]


// Transformation logic:
function binary(x) {
	return x.toString(2);
}
const binaryArr = arr.map(binary);

// The above code can be rewritten as :
// const binaryArr = arr.map(function binary(x) {
// 	return x.toString(2);
// }

// // OR -> Arrow function
// const binaryArr = arr.map((x) => x.toString(2));

// filter odd values
function isOdd(x) {
    return x % 2;
  }
  const oddArr = arr.filter(isOdd); // [5,1,3]

  console.log(oddArr);
  
//   // Other way of writing the above:
//   const oddArr = arr.filter((x) => x % 2);

// using reduce
const output = arr.reduce((acc, current) => {
	if (current > acc ) {
		acc = current;
	}
	return acc;
}, 0);
console.log(output); // 6


const users = [
	{ firstName: "Alok", lastName: "Raj", age: 23 },
	{ firstName: "Ashish", lastName: "Kumar", age: 29 },
	{ firstName: "Ankit", lastName: "Roy", age: 29 },
	{ firstName: "Pranav", lastName: "Mukherjee", age: 50 },
];
// Get array of full name : ["Alok Raj", "Ashish Kumar", ...]
const fullNameArr = users.map((user) => user.firstName + " " + user.lastName);
console.log(fullNameArr); // ["Alok Raj", "Ashish Kumar", ...]

//----------------------------------------------------------

// Get the count/report of how many unique people with unique age are there
// like: {29 : 2, 75 : 1, 50 : 1}
// We should use reduce, why? we want to deduce some information from the array. Basically we want to get a single object as output
const report = users.reduce((acc, curr) => {
	if(acc[curr.age]) {
		acc[curr.age] = ++ acc[curr.age] ;
	} else {
		acc[curr.age] = 1;
	}

	return acc;  //to every time return update object
}, {})
console.log(report) // {29 : 2, 75 : 1, 50 : 1}