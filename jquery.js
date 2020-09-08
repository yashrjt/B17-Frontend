// console.log($('.para'));

// $('.para').remove();
// $('.para').click((e)=>{
// console.log(e.target)
// })

// $( ".inner" ).append( "<p>Test</p>" );

// let promise=new Promise((resolve,rejected)=>{
//     setTimeout(()=>{
//        resolve('call sucess');
//     },5000)
   
// })

// promise
// .then((res)=>{
// console.log("//ten -> res", res)

// })
// .catch((err)=>{
// console.log("//ten -> err", err)
    
// })

// console.log('Statement after timeout function')
// fetch('https://dog.ceo/api/breeds/list/all')
// .then((res)=>{
// console.log("res", res.json())
// })
// .catch((err)=>{
//     console.log("//ten -> err", err)
        
// })


// $.ajax({
//     method:'get',
//     url:'https://dog.ceo/api/breeds/list/all',
//     dataType:'json',
//     success:(res)=>{
//     console.log("res", res)

//     },
//     error:(err)=>{
//     console.log("err", err)

//     }
// })

$.validator.addMethod("alphabets", function(value, element) 
{
  return /^[A-Za-z]+$/.test(value);
});

$("#registerform").validate({
  
  rules:{
    name:{
      required:true,
      minlength:2,
      alphabets:true
    },
    email:{
      required:true
    },
    pwd:{
      required:true
    },
    cpwd:{
      required:true
    }
  },
  messages:{
    name:{
      required:'Name is a required field',
      minlength:'Name must be minimum 2 cahracters',
      alphabets:'Name must be only alphabets'
    },
    email:{
      required:'Email is a required field'
    },
    pwd:{
      required:'Password is a required field'
    },
    cpwd:{
      required:'Confirm password is a required field'
    }
  },
  submitHandler: function() {
        const formdata={
         name:$('#name').val(),
         email:$('#email').val(),
         password:$('#pwd').val(),
         passwordConfirm:$('#cpwd').val()

       } 
       console.log("formdata", formdata)
      

      $.ajax({
        type:'post',
        url:'http://localhost:8080/api/register',
        contentType: 'application/json',
        data:JSON.stringify(formdata),  
        success:(res)=>{
        console.log("res", res)
    
        },
        error:(err)=>{
        console.log("err", err)
    
        }
    })
    
  
    }
   });