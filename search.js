const searchResult = document.createElement("div");
const movieplate=document.querySelector("#Big")
const likedvideos = document.querySelector("#likedvideos")
function ssearch(data){
    console.log(data)
    const searchbutton=document.querySelector("#searchbtn")
searchbutton.addEventListener("input",(event)=>{
    searchResult.style.display = "flex"
console.log("APPLE",event.target.value);
const query = event.target.value.toLowerCase();
    searchResult.innerHTML='';
data.filter((elem)=>{
    console.log("ELEMM",elem.Title,"pppppp",query)
   return (elem.Title).toLowerCase().includes(query)
}).map((elem)=>{
    
    const searchitem = document.createElement("p");
    searchitem.classList.add("searchitem")
    searchitem.innerHTML=elem?.Title;

    searchitem.addEventListener("click",(event)=>{
        console.log(event);
       
        movieplate.innerHTML='';
        console.log("Itemmm",elem);
        const card=document.createElement("div")
        card.classList.add("card")
        const title=document.createElement("p")
        title.innerHTML=`TITLE :${elem?.Title}.`;
       title.classList.add("title")
        const poster=document.createElement("img")
       poster.src=elem?.Poster;
        poster.classList.add("poster")
        const year=document.createElement("p")
        year.innerHTML=`YEAR :${elem?.Year}.`;
        year.classList.add("year")

        


    
       

        const likebtn=document.createElement("button");


        let favourite = JSON.parse(localStorage.getItem("Clicked"));
        if(!favourite)
        {
          let fav=[];
         localStorage.setItem("Clicked",JSON.stringify(fav));
                      
        }
        favourite=JSON.parse(localStorage.getItem("Clicked"));
        if(  favourite.find((data)=>data.Title === elem.Title))
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
            if(  abc.find((data)=>data.Title === elem.Title))
            {
            const found = abc.find((data)=>data.Title === elem.Title);
            const ind= abc.indexOf(found);
            console.log("AAAA",ind)
            abc.splice(ind,1)
            likebtn.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
      </svg>`
           
            }
            else{
                abc.push(elem);
                likebtn.innerHTML=  `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>`
            }
          
           console.log("Apple2",abc);
           localStorage.setItem("Clicked",JSON.stringify(abc));
console.log(abc.includes(elem.Title))
          
        
        }

        )

        




card.appendChild(poster)
card.appendChild(title)
card.appendChild(year)
card.appendChild(likebtn)

movieplate.appendChild(card)
    })
    searchResult.appendChild(searchitem)
    searchResult.classList.add("searchResult")

})

const searchmovies=document.querySelector("#searchmovies")
searchmovies.appendChild(searchResult);






})
searchbutton.addEventListener("active",()=>{
    searchResult.style.display = "flex"
    searchResult.classList.add("bottom") 
})
document.body.addEventListener("click",()=>{
    searchResult.style.display = "none"
})
}

export default {ssearch}