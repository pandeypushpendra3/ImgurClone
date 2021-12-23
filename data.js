
 var timerid;
 let pokemon_div = document.getElementById('pokemon')
 async function searchpokemon(n) {
     let res = await fetch(`http://localhost:3000/pokemon?q=${n}`)
     let data = await res.json();
     console.log(data);
       return data;



 }

 function appendPokemon(Pokemon) {
    
     pokemon_div.innerHTML = null
     Pokemon.forEach(({name}) => {
        
         let p = document.createElement('p')
         p.innerText = name
         pokemon_div.append(p);
     });
 }

 async function main() {
     let name = document.getElementById("search_Data").value;
     if (name.length < 3) {
         return false;
     }
     let pokemon = await searchpokemon(name);
     console.log(pokemon);
     if (pokemon=== undefined) {
         return false;
     }
     appendPokemon(pokemon);

 }

 function debounce(func, delay) {
     let name = document.getElementById("search_Data").value;
     if (name.length < 3) {
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
async function lowerdiv(){

let result =  await fetch('http://localhost:3000/pokemon') 

let data =await result.json();


  console.log(data)
data.map(({name,img})=>{
    let p= document.createElement('p');
    p.innerHTML = name;
    let image=document.createElement('img');
    image.src = img
    let div = document.createElement('div');
    div.append(name,image);
    pokemon_div_img.append(div);

})
}
pokemon_div_img.addEventListener('scroll', function() {
    if (pokemon_div_img.scrollTop + pokemon_div_img.clientHeight >= pokemon_div_img.scrollHeight) {
      lowerdiv();
    }
  });

  

  

lowerdiv();




