//write script to update p tag with current time;

setInterval(()=>{
    document.getElementById('cdt').innerHTML=new Date().toLocaleTimeString()
},1000)

//Executing Provided function every 1 sec.
