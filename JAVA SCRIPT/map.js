// map =>  key and value pair

// let data = new Map();

// let data = new Map([
//     ["Romin",1000],
//     ["Vivek",2000],
//     ["Charmi",3000],
//     ["Kush",4000]

// ]);

// console.log(data);
// console.log(data.size);

// set => add the new data in your existing map

// data.set("Bansi",5000);
// console.log(data);



//  get method => get the values for a key

// console.log(data.get('Romin'));


// has => returns a true if a key exist in a map
 
// console.log(data.has('Vivek'));


// Delete => removed the map element specified by the key

// data.delete('Vivek');
// console.log(data);


// entries => Retuen an Iterator With the (key,values) pair in map

// console.log(data.entries());

// foreach => call a function for each key/value pair in a Map

// let txt ="";

// data.forEach((val,key) => {
//     txt += key + "--->" + val + "\n";
// });

// console.log(txt);



// SET METHOD 


// let data = new Set ([1,2,3,4,'hello']);

// ADD => add the new data in your existing set 
// data.add(5);
// console.log(data);
// console.log(data.size); 



// console.log(data.values());

// console.log(data.entries());

// has => returns a true if a key exist in a set
// console.log(data.has('hello'));

// Delete => removed the set element specified by the key
// data.delete('hello');

// CLEAR => removed the set all set element specified by the key 
// data.clear()
// console.log(data);

// foreach => call a function for each key/value pair in a set
// let txt = " ";
// data.forEach((val)=>{
//        txt += "=>" + val + "\n";
// });
// console.log(txt);



/**shallow copy* and **deep copy */ 


/**  shallow copy  */

// let data=[11,22,33,44,55];

// let abc=data;
// data.pop();
// console.log(data);
// console.log(abc);


/** deep copy */

// let data=[11,22,33,44,55]; //shallo copy    

// let abc=[...data]; //deep copy
// data.pop()
// abc.push(400)
// console.log(data);
// console.log(abc);