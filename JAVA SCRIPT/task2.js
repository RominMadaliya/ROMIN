/* 1. Check if a number is odd or even in JavaScript  */ 

// {
//     let num;

//     num = prompt("Enter the Number : -");
//     console.log(num);

//     if(num%2 == 0){
//         console.log(`The given number ${num} is Even`);
//     }
//     else{
//         console.log(`the given number ${num} is odd`);
//     }
// }


// 2. Find the larger of two number

// {
//     let a,b;

//     num = prompt("Enter the value of a : -");
//     console.log(a);

//     num = prompt("Enter the value of b : -");
//     console.log(b);

//     if(a>b)
//         {
//             console.log("A is grater than B");
//         }
//         else{
//             console.log("B is grater than A");
//         }
// }


// 3. Perform arithmetic operations on two numbers

// {
//     let a,b,c,d,e,f;

//     a = prompt("Enter the value of A:");
//     console.log(a);
    
//     b = prompt("Enter the value of B:");
//     console.log(b);

//     c = prompt("Enter the value of C:");
//     console.log(c);

//     d = prompt("Enter the value of D:");
//     console.log(d);

//     e = a+b-c*d;
//     f = b*c/a+d;

//     console.log("The arethimetic operation is",e);
//     console.log(typeof e);
//     console.log("The arethimetic operation is",f);
// }

// 4. Find the grade for input marks

{
    let sub1,sub2,sub3,tot,per,grade;

    sub1 = prompt("Enter the marks of subject1:");
    console.log(+sub1);

    sub2 = prompt("Enter the marks of subject2:");
    console.log(+sub2);

    sub3 = prompt("Enter the marks of subject3:");
    console.log(+sub3);

    tot = Number(sub1 + sub2 + sub3);
    console.log("The total of three subject is:",tot);
    console.log(typeof tot);

    per = Number(sub1+sub2+sub3)/3;
    console.log(typeof per);
    console.log("The Percentage of three subject is:",per);
}