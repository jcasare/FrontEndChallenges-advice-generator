let adviceSpace = document.querySelector(".advice-space")
let adviceTag= document.querySelector('.advice-id');
const apiLink = "https://api.adviceslip.com/advice";
let btn = document.querySelector(".btn");
let body = document.querySelector("main");

const adviceGenerate = async ()=>{
  try{
    const response = await axios.get(apiLink);
    let data = response.data;
    const advice = data.slip.advice;
    const advID = data.slip.id;
    adviceSpace.innerText = advice;
    adviceTag.innerText=advID;
  }
  catch(error){
    console.log(error);
  }
}
body.addEventListener("load", adviceGenerate());

btn.addEventListener("click", adviceGenerate);
