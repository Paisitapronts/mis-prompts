//======================================
// PAISITA PROMPTS
//======================================

const button = document.getElementById("copyButton");
const textarea = document.getElementById("prompt");

button.addEventListener("click", () => {

navigator.clipboard.writeText(textarea.value);

const original = button.innerHTML;

button.innerHTML = "💗 Prompt copiado";

button.style.background =
"linear-gradient(135deg,#ff8fc8,#ff6eb4)";

createButterflies();

setTimeout(()=>{

button.innerHTML = original;

button.style.background =
"linear-gradient(135deg,#ffb8d5,#f78fbb)";

},2000);

});


//======================================
// MARIPOSAS
//======================================

function createButterflies(){

for(let i=0;i<12;i++){

const butterfly=document.createElement("div");

butterfly.className="copy-particle";

butterfly.innerHTML=Math.random()>.5?"🦋":"🌸";

butterfly.style.left=
(window.innerWidth/2+
(Math.random()*160-80))+"px";

butterfly.style.top=
(window.innerHeight-140)+"px";

butterfly.style.setProperty(
"--x",
(Math.random()*260-130)+"px"
);

document.body.appendChild(butterfly);

setTimeout(()=>{

butterfly.remove();

},1700);

}

}
