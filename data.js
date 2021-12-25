
 var timerid;
 let pokemon_div = document.getElementById('pokemon')
 async function searchpokemon(n) {
     let res = await fetch(`http://localhost:3000/pokemon?q=${n}`)
     let data = await res.json();
    //  console.log(data);
       return data;



 }

 function appendPokemon(Pokemon) {//data 
    
     pokemon_div.innerHTML = null
     Pokemon.forEach(({name}) => {//{name}
        
         let p = document.createElement('p')
         p.innerText = name
         pokemon_div.append(p);
     });
 }

 async function main() {
     let name = document.getElementById("search_Data").value;//pikachu
     if (name.length < 1) {
         return false;
     }
     let pokemon = await searchpokemon(name);//pikachu//
     console.log(pokemon);
     if (pokemon=== undefined) {
         return false;
     }
     appendPokemon(pokemon);//data= id name img

 }

 function debounce(func, delay) {
     let name = document.getElementById("search_Data").value;
     if (name.length < 1) {
         return false;
     }
     if (timerid) {
         clearTimeout(timerid);
     }

     timerid = setTimeout(() => {
         func();
     }, delay)
     name.innerHTML=""
 }

 ///debounce 


 let pokemon_div_img =document.getElementById('main-1')
// async function lowerdiv(){

// let result =  await fetch('http://localhost:3000/pokemon') 

// let data =await result.json();


//   console.log(data)

// }
// lowerdiv();




// infinite scroll
// pokemon_div

let limit = 1;
let pageCount =1;
let postCount =3;


 async function getPost()
{
   let res= await fetch(`http://localhost:3000/pokemon?limit=${limit}&page=${pageCount}`);
   
   
   
   let data = await res.json();
    
    console.log(data)
    data.map(({name,img})=>{
      
        let div = `<div>
        <p>${name} ${postCount++}</p>
        <img src="${img}"></img>
        </div>`
       
        // pokemon_div_img.append(div);
        pokemon_div_img.insertAdjacentHTML('beforeend',div)
    
    })



}



getPost();

window.addEventListener('scroll',()=>{
    const {scrollHeight,scrollTop,clientHeight} = document.documentElement;
if(scrollTop+clientHeight>= scrollHeight){
    console.log("Bottom");
    getPost()
}


})


























