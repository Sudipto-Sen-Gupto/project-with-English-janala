
const api=()=>{
    const url="https://openapi.programming-hero.com/api/levels/all";
    fetch(url).then(res=>res.json()).then(json=>parent(json.data));
}
 const rmvDesign=()=>{
   const rmv= document.querySelectorAll(".click");
        rmv.forEach(x=>{
            x.classList.remove("active");
        })
 }
const repo=(id)=>{
   spin(true)
    const url=`https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url).then(res=>res.json()).then(json=>{
          rmvDesign();
        const btn=document.getElementById(`lesson-${id}`);
        btn.classList.add("active")
        // console.log(btn);
        
        gouri(json.data)})
}

const spin=(el)=>{
  
  if(el===true){
     document.getElementById("spinner").classList.remove("hidden");
     document.getElementById("sec2").classList.add("hidden");
  }
  else{
     document.getElementById("spinner").classList.add("hidden");
     document.getElementById("sec2").classList.remove("hidden");
  }
}
const gouri=(item)=>{
     
    // console.log(item);
    const sel=document.getElementById("sec2");
      sel.innerHTML="";
      if(item.length===0){
        sel.innerHTML=`<div class="col-span-full  text-center p-5 space-y-3 hind-siliguri-regular">
            <img src="./english-janala-resources/assets/alert-error.png" class="mx-auto" alt="">
            <p class="text-xs">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
            <h1 class="text-2xl font-semibold">নেক্সট Lesson এ যান</h1>

          </div>`
      }
    item.forEach(element => {
        // console.log(element);
        const newChild=document.createElement("div");
        newChild.innerHTML=`<div class="bg-white px-5 py-3 text-center shadow-md ">
            <h1 class="font-bold text-2xl">${element.word? element.word:"শব্দ নেই"}</h1>
            <p class="my-3">Meaning/Pronounciation</p>
            <h1 class="font-bold text-2xl">"${element.meaning?element.meaning:"মানে পাওয়া যায় নি"}/${element.pronunciation}"</h1>
            <div class="my-5 flex justify-between">
              <button class="btn" onclick="wordDetail(${element.id})"><i class="fa-solid fa-circle-exclamation"></i></button>
              <button class="btn"><i class="fa-solid fa-volume-high"></i></button>
            </div>
            
          </div>`
        sel.append(newChild);
    });
    spin(false);
};

const parent=(item)=>{
    const buttonContainer=document.getElementById("btnContainer");
    buttonContainer.innerHTML="";

    item.map(x=>{
        console.log(x);
        const newBtn=document.createElement("div");
        newBtn.innerHTML=`<button id="lesson-${x.level_no}" onclick="repo(${x.level_no})" class="click btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i>Lesson-${x.level_no}</button>`
        buttonContainer.append(newBtn);

    })
    
}

const wordDetail=async(id)=>{
  const url=`https://openapi.programming-hero.com/api/word/${id}`;
  const res=await fetch(url);
  const data=await res.json();
  modal(data.data)
}

const modal=(mode)=>{
  document.getElementById("my_modal").showModal();
  const divi=document.getElementById("rongo_koro");

  divi.innerHTML=`
  <h1>${mode.word} (🎙${mode.pronunciation})<h1>
  <h1>Meaning </br> ${mode.meaning?`${mode.meaning}`:"No word found"}<h1>
  <h1>Example </br> ${mode.sentence}</h1>
  <h1>সমার্থক শব্দ গুলো </br>${mode.synonyms} </h1> `
}
api();