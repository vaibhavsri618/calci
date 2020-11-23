
var temp="";

var opt2="";
var opt3="";
var result=0;
var finalres=0;
function dis(value)
{
    temp += value;
    temp=parseFloat(temp);
    document.getElementById("edu").value= temp;
}
function clr()
{
    document.getElementById("edu").value="";
}
function opt(op)
{ 
    
    if(opt2=="")
    {
        
    result=temp;
    temp=0;
    opt3=op;
    
    clr();
    
    console.log("Result"+result);
    }
    
    
    

  else
  {
    $.ajax({
        type: 'post',
        url: 'calci.php',
        data:{
            temp:temp,
            opt3:opt3,
            result:result,
          
           
        },
        success: function (answer) {
           
            document.getElementById("edu").value=answer;

           


         result=answer;
         opt3=op;
         temp="";
         
         
          
        }
        
      });
     
     
  }
opt2=op;
temp=parseFloat(temp);


  clr();

   
}
