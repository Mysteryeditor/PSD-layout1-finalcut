$(document).ready(function(){
    $("#form1").validate({
       rules:{
        'name':{
            required:true,
            minlength:8,
            maxlength:15,
            pattern:/[a-zA-Z]/
        },
        'email':{
            required:true,
           pattern:/^[\w]+@+g2techsoft[\.]+com+$/
        },
       
        'phone':{
            required:true,
        },
        'comments':{
            required:true,
        }
    
        
    },
    messages:{
        'name':{
            required:'enter the name',
            minlength:'Too short',
            maxlength:'Too large',
            pattern:'name must contain a higher and lowercase letter',
        },
        'email':{
            required:'Enter a email',
            pattern:'Enter a valid email address'
        },
        'phone':{
            required:"please enter the phone number",
           
            pattern:'The phone number should be in this pattern 4-3-4'
        },
        'comments':{
            required:'This field can\'t be empty'
        }
    }
    
    })
})