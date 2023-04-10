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
            
            pattern:/^[\w]+@[\.]+com+$/
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
            required:'required',
        },
        'email':{
            required:'required',
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