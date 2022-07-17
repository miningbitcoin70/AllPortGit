let flagEn = document.querySelector(".flag-img-en");
let flagGe= document.querySelector(".flag-img-geo");
let languageSection = document.querySelector(".languages-section");



languageSection.addEventListener("click",function(){
    if(languageSection.value == "GEO-GE"){
        flagEn.style.display = "none";
        flagGe.style.display = "block";
        
    } else if(languageSection.value == "USA-EN"){
        flagEn.style.display = "block";
        flagGe.style.display = "none";
        
    }
})

let searchIcon = document.querySelector(".search-icon");
let justFigure = document.querySelector(".just-figure");
let search = document.querySelector(".search")
justFigure.addEventListener("click",function(){
    search.classList.toggle("search-toggle");

    if(placeholder == true){
        search.setAttribute("placeholder","Search");
        placeholder=!placeholder
    }else{
        search.removeAttribute("placeholder");
        placeholder=!placeholder
    }
})
let placeholder = true;
searchIcon.addEventListener("click",function(){
    search.classList.toggle("search-toggle")
    if(placeholder == true){
        search.setAttribute("placeholder","Search");
        placeholder=!placeholder
    }else{
        search.removeAttribute("placeholder");
        placeholder=!placeholder
    }
})


let burger = document.querySelector(".burger");
let burgerDropDown = document.querySelector(".burger-dropdown");
burger.addEventListener("click",function(){
    
    burgerDropDown.classList.toggle("burger-toggle")
    jobTools2.style.visibility = "hidden"
    job = false;
    
})

let images = [["./images/freedom-statue.png","./images/statue-with-circle.jpg","./images/gold-statue.webp"],["Sep. 24, 2020 at 11:07 a.m. ET","may. 2, 2010 at 20:07 a.m. ET","jun. 2, 2000 at 01:07 a.m. ET"],["Barclays is asking more bankers to return to its New York office in October: Leaked memo","New york - june 18: atlas statue at rockefeller center on june 18, 2014 in new york. the atlas statue is a bronze statue in front of rockefeller center in midtown manhattan, new york city.","Golden Prometheus statue at Rockefeller Center, Manhattan, New York City, New York City, NYC, NY, New York, Big Apple, Manhattan"]];

let statueText = document.querySelector(".freedom-statue-text");
let date = document.querySelector(".date");
let leftArrow = document.querySelector(".left-arrow");
let rightArrow = document.querySelector(".right-arrow");
let img = document.querySelector(".freedom-statue");
let circle1 = document.querySelector(".circle1")
let circle2 = document.querySelector(".circle2")
let circle3 = document.querySelector(".circle3")
let i = 0;
rightArrow.addEventListener("click",function(){
    img.style.transition = "2s";
    // if(img.style.transition == "scaleX(-1)"){
    //     img.style.transition = "scaleX(-1)"
    // }else{
    //     img.style.transition = "scaleX(-1)"
    // }
    i++;
    if(i==3){
        i=0;
    }
    img.src = images[0][i];
    statueText.innerHTML = images[2][i];
    date.innerHTML = images[1][i];

    switch(i){
        case 0:
            circle1.style.backgroundColor = "#8172D5";
            circle3.style.backgroundColor = "transparent"
            break;
        case 1:
            circle2.style.backgroundColor = "#8172D5";
            circle1.style.backgroundColor = "transparent";
            break;

        case 2:
            circle3.style.backgroundColor = "#8172D5";
            circle2.style.backgroundColor = "transparent";
            break;

    }
    
})


leftArrow.addEventListener("click",function(){
    i--;
    if(i==-1){
        i=2;
    }
    img.src = images[0][i];
    statueText.innerHTML = images[2][i];
    date.innerHTML = images[1][i];


    switch(i){
        case 0:
            circle1.style.backgroundColor = "#8172D5";
            circle2.style.backgroundColor = "transparent"
            break;
        case 1:
            circle2.style.backgroundColor = "#8172D5";
            circle3.style.backgroundColor = "transparent";
            break;

        case 2:
            circle3.style.backgroundColor = "#8172D5";
            circle1.style.backgroundColor = "transparent";
            break;

    }

})
let data;
await fetch("./API.json").then((Response)=>Response.json()).then((json)=>{data=json});

console.log(data);

let section2 = document.querySelector(".section2");

data.map((item)=>{
    let card = document.createElement("div");
    section2.appendChild(card);
    card.classList.add("card");
    let img =  document.createElement("img");
    img.setAttribute("class","grid-img")
    let p = document.createElement("p")
    let p2 = document.createElement("p");
    card.append(img,p,p2);
    img.setAttribute("src",item.img)
    p.innerHTML = item.txt1;
    p2.innerHTML = item.txt2
    p.style.marginTop = "20px"
    p2.style.marginTop = "20px"
    let cardBoolean = true;
    img.style.cursor = "zoom-in";
    p2.style.color = "#69A3A2";
    if(window.innerWidth>=1000){
    card.addEventListener("click",()=>{
        if(cardBoolean == true){
            img.style.zIndex = "1";
            setTimeout(()=>{img.style.transform = "scale(2)"},100) 
            img.style.cursor = "zoom-out";
            cardBoolean=!cardBoolean
        }else{
            img.style.transform = "scale(1)"
            img.style.cursor = "zoom-in";
            setTimeout(()=>{img.style.zIndex = "0"},500);
            cardBoolean = !cardBoolean
        }

    })}
})





window.addEventListener("scroll",function () {
    if (document.documentElement.scrollTop >= 300) {
      section2.style.marginLeft = "10%"
    
    }
  });

  let downArrow = document.querySelector(".down-arrow-li");
  let jobTools = document.querySelector(".job-tools");
  let jobToolsLi = document.querySelector(".job-tools-li");

let job = false;

downArrow.addEventListener("click",()=>{
    if(job == false){
        jobTools.style.visibility = "visible"
        jobTools.style.height = "200px"
        job = !job
    } else {
        jobTools.style.visibility = "hidden"
        jobTools.style.height = "0"
        job = !job
    }
})

let downArrow3 = document.querySelector(".down-arrow-li3")
let jobTools2 = document.querySelector(".job-tools2")
downArrow3.addEventListener("click",()=>{
    if(job == false){
        jobTools2.style.visibility = "visible"
        job = !job
    } else {
        jobTools2.style.visibility = "hidden"
        job = !job
    }
})


let section3Img = document.querySelectorAll(".section3 img");
let section3 = document.querySelector(".section3");
let section3P = ["FIRST I","SECOND II","THIRD III","FORTH IV","FIFTH V","SIXTH VI"];
let section3Position = [["42%","-100px"],["42%","-50px"],["42%","0"],["60%","-100px"],["60%","-50px"],["60%","0"]]
let section3Boolean = false;
let div;
for(let i = 0; i<section3Img.length; i++){
        section3Img[i].addEventListener("click",()=>{
        if(section3Boolean==false){
        div = document.createElement("div");
        div.style.borderRadius = "20px"
        div.setAttribute("class","div")
        let p = document.createElement("p");
        p.classList.add("java-p")
        div.appendChild(p);
        p.innerHTML = section3P[i];
        section3.appendChild(div);
        div.style.backgroundColor = "green";
        div.style.position = "absolute"
        div.style.left = section3Position[i][0];
        div.style.top = section3Position[i][1];
        p.style.position = "absolute";
        if(window.innerWidth > 856){
            div.style.width = "30%";
            div.style.height = "100px";} 
            else if(window.innerWidth>500){
                div.style.width = "50%";
                div.style.height = "100px";
                div.style.top = "0px"
                div.style.left = "20%";
            }else{
                div.style.width = "65%";
                div.style.height = "100px";
                div.style.top = "0px"
                div.style.left = "25%";
            }
        div.style.display = "flex";
        div.style.justifyContent = "center"
        div.style.alignItems = "center"
        p.style.color = "linear-gradient(to Right,black,red)"
        section3Boolean=true;
        }else if(section3Boolean == true){
            section3Boolean=false;
            section3.removeChild(div);
           
        }
    })
}


let section4Button = document.querySelector(".section4 button");
let section4 = document.querySelector(".section4-form");
let cancel = document.querySelector(".cancel");
let inputs = document.querySelectorAll("input");
let register = document.querySelector(".register");
section4.style.display = "none";
section4Button.addEventListener("click",function(){
    if(section4.style.display == "none"){
        section4.style.display = "flex"
        section4.style.zIndex = 100;
    } else{
        section4.style.display = "none"
    }

})


cancel.addEventListener("click",function(){
    if(section4.style.display == "none"){
        section4.style.display = "flex"
        
    } else{
        section4.style.display = "none"
    }

})

register.addEventListener("click",()=>{
    if(inputs[1].value.length < 6){
        window.alert("username must includes at least 6 symbol")
    }else
    if(inputs[2].value.indexOf("@")<0){
        window.alert("your email must includes @")
    }else
    if(inputs[3].value.length<6){
        window.alert("your password must includes at least 6 character")
    }else{
        window.alert("you are registered succesfully")
    }
})


let man = document.querySelector(".man");
man.addEventListener("click",()=>{
    if(window.innerWidth>=1100){
    if(man.style.transform!="scale(2)"){
        leptop.style.transform="scale(1)"
        leptop.style.zIndex = 0;
        man.style.zIndex = 1;
    man.style.transform = "scale(2)"
    } else if(man.style.transform =="scale(2)"){
        man.style.transform="scale(1)"
        man.style.zIndex = 0;
    }
}
})

let leptop = document.querySelector(".leptop");
leptop.addEventListener("click",()=>{
    if(window.innerWidth>=1100){
    if(leptop.style.transform!="scale(1.5)"){
        man.style.transform="scale(1)"
        leptop.style.zIndex = 1;
        man.style.zIndex = 0;
        leptop.style.transform = "scale(1.5)"
    } else if(leptop.style.transform =="scale(1.5)"){
        leptop.style.transform="scale(1)"
        leptop.style.zIndex = 0;
    }
}
})






