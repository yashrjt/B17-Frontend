console.log($('.para'));

$('.para').remove();
$('.para').click((e)=>{
console.log(e.target)
})

$( ".inner" ).append( "<p>Test</p>" );

let promise=new Promise((resolve,rejected)=>{
    setTimeout(()=>{
       resolve('call sucess');
    },5000)
   
})

promise
.then((res)=>{
console.log("//ten -> res", res)

})
.catch((err)=>{
console.log("//ten -> err", err)
    
})

console.log('Statement after timeout function')
fetch('https://dog.ceo/api/breeds/list/all')
.then((res)=>{
console.log("res", res.json())
})
.catch((err)=>{
    console.log("//ten -> err", err)
        
})


$.ajax({
    method:'get',
    url:'https://dog.ceo/api/breeds/list/all',
    dataType:'json',
    success:(res)=>{
    console.log("res", res)

    },
    error:(err)=>{
    console.log("err", err)

    }
})