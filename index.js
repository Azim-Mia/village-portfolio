/*let newsContainer= document.querySelector(".news_container");
const fetchData=()=>{
  fetch("https://newsdata.io/api/1/latest?country=bd&apikey=pub_37576ac98f028dff43ca1df850b2b8f72a6e7")
  .then((res)=>res.json())
  .then((data)=>{
  data.results.map((todo)=>{
  console.log(todo.image_url);
return {
  cosnt para=document.createElement("p")
  para.innerHTML = `${todo.title}`;
 document.appendChild(ff);
}
  })
  })
  
}
fetchData();
*/
const span= document.querySelector(".span");
const images= document.querySelector(".image");
const des= document.querySelector('.description');
 const feceData=()=>{
 fetch("https://newsdata.io/api/1/latest?country=bd&apikey=pub_37576ac98f028dff43ca1df850b2b8f72a6e7")
  .then((res)=>res.json())
  .then((data)=>{
  data.results.map((todo)=>{
  span.innerHTML=todo.title;
  images.src=todo.image_url;
  des.innerHTML=todo.description;
  })
  })  
 }
 const span2= document.querySelector(".span2");
const images2= document.querySelector(".image2");
const des2= document.querySelector('.description2');
 const feceData2=()=>{
 fetch("https://newsdata.io/api/1/latest?country=bd&category=entertainment&apikey=pub_37576ac98f028dff43ca1df850b2b8f72a6e7")
  .then((res)=>res.json())
  .then((data)=>{
  data.results.map((todo)=>{
  span2.innerHTML=todo.title;
  images2.src=todo.image_url;
  des2.innerHTML=todo.description;
  })
  })  
 }
 const span3= document.querySelector(".span3");
const images3= document.querySelector(".image3");
const des3= document.querySelector('.description3');
 const feceData3=()=>{
 fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-05-09&sortBy=publishedAt&apiKey=c6ea3bb4b0da469ea359894e99949365")
  .then((res)=>res.json())
  .then((data)=>{
  console.log(data);
  data.articles.map((todo)=>{
  span3.innerHTML=todo.title;
  images3.src=todo.urlToImage;
  des3.innerHTML=todo.description;
  })
  })  
 }
 const initial=()=>{
   feceData();
   feceData2();
   feceData3();
 }
 initial();
comsole.log("test")
 
