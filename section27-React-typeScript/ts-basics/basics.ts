// primitives : number, strign, boolean
// More complex type: arrays, objects
// Function types parameters

// Primitives
let age:number;

age:12;

let userName:string;

userName:'Bipin'

let isInstructor: boolean;
isInstructor: true;

// More complex type

let hobbies: string[];
hobbies = ['Cricket', 'Football'];

type Person = {
    name:string,
    age:number
}

let person:Person;


person = {
    name:'Bipin',
    age:12
}

// person = {
//     isEmployee:true
// }

let people : Person[];

//Type inference

let course : string | number = 'React - The Complete Guide'
course = 21321

//Function and type

function addf(a:number, b:number) {
    return(a+b)
}

function print(value:any){
    console.log(value);
}

// Generics

function insertAtBeginning(array:any[], value:any) {
    const newArray = [value, ...array];
    return newArray;
}