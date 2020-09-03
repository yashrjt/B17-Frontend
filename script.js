// var u;
// var x;
// var y;
// var z;
// var arr;
// var date;


var x=10;
x='ten';
x=null;
var y='Javascript';
var z=true;
var a;
console.log("a", a)
console.log("z", z)
console.log("y", y)

console.log(x);

///primitive datatypes --- string,boolean,number,null,undefined

///non- primitive datatypes ---objects   array,functions, date ,{}

//heterogenous array
var arr=[1,'java',2,true,3,null];

for(var i=0;i<arr.length;i++){
    console.log("arr", arr[i])
}


var date=new Date();

function addData(){
    return 5+5;
}


var obj={};
console.log("obj", obj);

var emp={
    name:'John',
    age:35
}
console.log("emp", emp)


// class Employee{
//     String name;
//     int age;
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
// }

// Employee emp=new Employee('john',35)


//undefined ( var declared but no value assigned to it)and not-defined

//Hoisting  

console.log("u", u);
var u=10;

console.log(u);

// console.log(mult);


//truthy values ---true,1,{name:'john'}
//falsy values---false,0,{}
// comapre two variables 
// == (type coercion)  vs === (does not do type coercion and it will check both type and values)

// console.log(1==1);
// console.log(1==true);
// console.log(0==false);

console.log(1===1);
console.log(1===true);
console.log(0===false);

var emp={
    name:'John',
    age:35,
    phone:[123456,879878],
    address:{
        address1:{  
            city:'Chicago'
        },
        address2:{
            city:'New York City'
        }
    },
    salary:function(){
        return 1000;
    }
}
console.log("emp name", emp['name'])
console.log("emp age", emp.age)
console.log('city of address 2',emp['address']['address2']['city'])
// console.log('salary of emp',emp['salary'])

var empsalary=emp['salary'];
console.log("empsalary", empsalary())


//Functions

function addData(x,y){
    return x+y;
}

var result=addData(10,20);
console.log("result", result);

//anonymous function

var addDataCopy=function(x,y){
   return  x+y;
}

const resultOne=addDataCopy(20,30);
console.log("resultOne", resultOne)


//callback functions---a function passed as a paramter to another function

//scopes
//global scope,lexical scope,local scope

//closure---inner function able to access outer function variable even after the outer function ahs returned
function getTotalCompensation(){
    //lexical scope
    var basesalary=5000;
    return function(bonus){
             return basesalary+bonus;
    }
}


var johnNetSalary=getTotalCompensation();
console.log("johnNetSalary", johnNetSalary(1000));

var daveNetSalary=getTotalCompensation();
console.log("daveNetSalary", daveNetSalary(2000))

//var creates a function level scope.It pollutes global scope


function getProfit(){
    var profit;
    console.log("getProfit -> profit", profit)
    var profit=8000; 
  
}

getProfit();
// ES6 FEATURES

// let ,const  
// const con=10;
// con=20;
// console.log("newVar", newVar)
let newVar=10;

//let creats block level scope  {} whereas var creates function level scope
//double bang operator

if(!!newVar){
    let k=10;
    console.log('if loop')
}
// console.log('k value' ,k);

//template literal 

let school='NYC';
let state='NY';

console.log('I studied in ',school ,'which is in ',state)

console.log(`I studied in ${school} which is in ${state}`);

//arrow function


// let ten=function(){
//     return 10;
// }
// let ten=()=> {return 10};
let ten=()=>10;
console.log(ten());
let anonymous=()=>{
console.log('I am an anonymous function')
}

anonymous();

//object destructuring

let newObj={
    model:'Iphone',
    price:1000
}

const priceOld= newObj['price']
console.log("//ten -> priceOld", priceOld)
const {price}=newObj;
console.log("//ten -> price", price)


//spread operator
var originalArray=[10,20,30,40,50];

var newArray=[0,...originalArray,60,70];
console.log("//ten -> newArray", newArray);

//cloning objects  --deep cloning,shallow cloning

let staff={
    name:'Steffi',
    address:{
        city:'San Diego',
        state:'CA'
    }
}

let staffCopy={...staff};



//staffCopy['address']['city']='San Francisco';

// console.log("//ten -> staffCopy", staffCopy)
// console.log("//ten -> staff", staff)

//deep cloning
let staffDeepCopy=JSON.parse(JSON.stringify(staff));

staffDeepCopy['address']['city']='San Francisco';

console.log("//ten -> staffDeepCopy", staffDeepCopy)
console.log("//ten -> staff", staff);

//Promise---it is an object .It could be resolved,pending,rejected


let promise=new Promise((resolve,rejected)=>{
    setTimeout(()=>{
       rejected('call fail');
    },5000)
   
})

promise
.then((res)=>{
console.log("//ten -> res", res)

})
.catch((err)=>{
console.log("//ten -> err", err)
    
})

// DOM & EVENTS



let para=document.getElementsByTagName('p')
console.log("para", para[0]['textContent']);

let city=document.getElementById('city');
console.log("//ten -> city", city.innerHTML)

let stateVar=document.getElementsByClassName('state');
console.log("//ten -> state", stateVar);

let paraQuery=document.querySelector('#city');
console.log("//ten -> paraQuery", paraQuery.innerHTML)

let stateVarQuery=document.querySelectorAll('.state');
console.log("//ten -> state", stateVarQuery);


//events event object
document.querySelector('#btn').addEventListener('click',(e)=>{
//    console.log('you clicked the button') 
//    console.log(e.target);
document.querySelector('#rem').remove();

let paraElement=document.createElement('p');

paraElement.innerHTML='This element created after clicking the button';
paraElement.setAttribute('id','para');
document.body.appendChild(paraElement);
console.log("//ten -> paraElement", paraElement)
})

//event delegation


// document.querySelector('#john').addEventListener('click',(e)=>{
// console.log("//ten -> e", e.target.innerHTML)
// })


// document.querySelector('#dave').addEventListener('click',(e)=>{
//     console.log("//ten -> e", e.target.innerHTML)
//     })

    
// document.querySelector('#daniel').addEventListener('click',(e)=>{
//     console.log("//ten -> e", e.target.innerHTML)
//     })

    
// document.querySelector('#moses').addEventListener('click',(e)=>{
//     console.log("//ten -> e", e.target.innerHTML)
//     })
    

//console.log(document.querySelectorAll('.empName'));
//let empNames=document.querySelectorAll('.empName')


// for(let i=0;i<empNames.length;i++){
//     console.log("//ten -> empNames", empNames[i])
//     empNames[i].addEventListener('click',(e)=>{
//     console.log("//ten -> e", e.target.innerHTML)
//     })
// }


  //stop propogation
  document.querySelector('#daniel').addEventListener('click',(e)=>{
    e.stopPropagation();
    })

//event bubbling--events bubble from child to parent
//event capturing--events bubble from parent to child

document.querySelector('#empParent').addEventListener('click',(e)=>{
    console.log("//ten -> e", e.target.innerHTML)
    })


    //prevent default action

    document.querySelector('#anchor').addEventListener('click',(e)=>{
       e.preventDefault();
        })
    

        ///Create an img,take a src ,width,htight,alt