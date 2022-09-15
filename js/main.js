var tags= Array.from( document.querySelectorAll(".quality li"))
var spans= Array.from( document.querySelectorAll("ul span"))
var img= document.querySelector(".bestglass");
var imgessrc=["images/g-1.png","images/g-2.png","images/g-3.png","images/g-5.png"];
for (let i = 0; i < tags.length; i++) {
  
    tags[i].addEventListener("click",function(e){
 
       
      
          
    
            for(let x=0;x<spans.length;x++){
                if (spans[x]==spans[i]) {
                spans[x].classList.add("actives");
 
                }
                else{
                    spans[x].classList.remove("actives");

                }

            }

        
    
          img.src=imgessrc[i]
    
    })
}