let data;
await fetch("https://covid-api.mmediagroup.fr/v1/cases").then((Response)=>Response.json()).then((json)=>{data=json});
let item; 
console.log(data);
let select2 = document.querySelector(".select");
let search2 = document.querySelector(".search");
let div2 = document.querySelector(".div2");
let para = document.querySelector(".para");
for(item in data){
    let option = document.createElement("option");
    select2.appendChild(option);
    option.innerHTML = item;  

    
}

search2.addEventListener("click",function(){
    if(data[select2.value].All.population==null){
    para.innerHTML =`confirmed value: ${data[select2.value].All.confirmed}<br> deaths:${data[select2.value].All.deaths}<br> population:N/A<br>  recovered:${data[select2.value].All.recovered}`}else{
        para.innerHTML =`confirmed value: ${data[select2.value].All.confirmed}<br> deaths:${data[select2.value].All.deaths}<br> population:${data[select2.value].All.population}<br>  recovered:${data[select2.value].All.recovered}`
    }
} )