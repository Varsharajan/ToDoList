//to-fetch data using AJAX
var xhttp = new XMLHttpRequest();
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();
xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status ==200)
    {
        let myobj=JSON.parse(this.responseText);
        setTable(myobj);
    }
}

//variable to track count of checked boxes
var checkboxno ;

//to print data from json  file into table format
function setTable(obj){
    
    let table ="<thead><tr><th>TITLE</th><th>STATUS</th></tr></thead>";
    for(let i=0;i<obj.length;i++)
    {       
        table+="<tr>";
        if(obj[i].completed==true){
            table+="<td class=bg-secondary text-light>"+obj[i].title+"</td><td class=bg-secondary><input type=checkbox  checked disabled></td>";
        }
        else{
            table+="<td>"+obj[i].title+"</td><td><input type=checkbox name=check onclick=setTimeout(checkcounter(),1000)></td>";  
        }
        
        table+="</tr>";
    }
    table+="</table>";
    document.getElementById("todo-list").innerHTML=table;
}


function  checkcounter()
{
   
        checkboxno  = $('input:checkbox:checked').length - 90;
           promiseCall();
      
}


alertPromise= ()=>{
    return new Promise((resolve,reject)=>{
        
        
       if(checkboxno==5){
           console.log("reached count 5");
           resolve(checkboxno);
       }
       else{
           reject('count not equal to 5');
       }
   });
}

 promiseCall=()=>{
   alertPromise().then((data)=>{
       alert(`Kudos, We done ${data} activities today.... Congrats!`);
      // location.reload();
   })
   .catch((err)=>{
    console.log(checkboxno);
       console.log(err);
   })
}

