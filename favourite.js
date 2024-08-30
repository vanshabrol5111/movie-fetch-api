const movieplate=document.querySelector("#Big")
const likedvideos = document.querySelector("#likedvideos")
function favour(){
    movieplate.innerHTML='';
let Mango = JSON.parse(localStorage.getItem("Clicked"));
console.log(Mango)

Mango.map((item)=>{
   
    const card=document.createElement("div")
    card.classList.add("card")
    const title=document.createElement("p")
    title.innerHTML=`TITLE :${item?.Title}.`;
   title.classList.add("title")
    const poster=document.createElement("img")
   poster.src=item?.Poster;
    poster.classList.add("poster")
    const year=document.createElement("p")
    year.innerHTML=`YEAR :${item?.Year}.`;
    year.classList.add("year")

    



   

    const likebtn=document.createElement("button");


    let favourite = JSON.parse(localStorage.getItem("Clicked"));
    if(!favourite)
    {
      let fav=[];
                  localStorage.setItem("Clicked",JSON.stringify(fav));
                  
    }
    favourite=JSON.parse(localStorage.getItem("Clicked"));
    if(  favourite.find((elem)=>elem.Title === item.Title))
        {
            likebtn.innerHTML=  `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>` 
        }
        else{
          likebtn.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
            </svg>`
        }
    

likebtn.addEventListener("click",()=>{
    var abc=JSON.parse(localStorage.getItem("Clicked"));
    if(!abc){
        let fav=[];
        localStorage.setItem("Clicked",JSON.stringify(fav));
        abc=JSON.parse(localStorage.getItem("Clicked"));
    }
  
   
    console.log("Apple1",abc)
    if(  abc.find((elem)=>elem.Title === item.Title))
    {
    //    console.log( abc.indexOf(item.Title));
    const found = abc.find((elem)=>elem.Title === item.Title)
    const ind= abc.indexOf(found)
    abc.splice(ind,1)
    likebtn.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg>`
   
    }
    else{
        abc.push(item);
        likebtn.innerHTML=  `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>`
    }
  
   console.log("Apple2",abc);
   localStorage.setItem("Clicked",JSON.stringify(abc));
console.log(abc.includes(item.Title))


  

}

)

    




card.appendChild(poster)
card.appendChild(title)
card.appendChild(year)
card.appendChild(likebtn)

movieplate.appendChild(card)

})
// const likemovies=document.getElementById("likedvideos")





}

export default {favour};