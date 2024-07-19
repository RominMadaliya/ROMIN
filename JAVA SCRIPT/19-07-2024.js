/*************object and class method ************/

/*object method**/

// let data = new object();
// console.log(typeof(data));

// let data={
//     name:"bansi",
//     age:21,
//     hobbies: ['dancing','drawing'],
//     marks: {
//         maths:30,
//         sci:45,
//         eng:50
//     },
//     hello :()=> ('hello guys..........')

// };

// console.log(data);
// console.log(data.hello());
// console.log(data.hobbies[0]);
// console.log(data.marks.eng);
// console.log(data['name']);
// console.log(data['marks']['sci']);
// console.log(data['hobbies'][0]);


// let a= "marks"
// console.log(data[a]);

/**  add  new field  **/
// data.new ="howww"
// console.log(data);

// delete data.hello
// console.log(data);



/*class method**/

class jshello
{
    constructor(name,age){
        this.name=name;
        this.age=age;
        this.gender='male'
    }


sayhello()
{
    return `my name is ${this.name} and my age  is ${this.age}, gender is : ${this.gender}`;

  }
};

let abc= new  jshello ('Romin Madaliya',21);

console.log(abc.sayhello());