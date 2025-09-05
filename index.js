
const api=()=>{
    const url="https://openapi.programming-hero.com/api/levels/all";
    fetch(url).then(res=>res.json()).then(json=>parent(json.data));
}
 
const repo=(id)=>{
    const url=`https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url).then(res=>res.json()).then(json=>gouri(json.data))
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
              <button class="btn"><i class="fa-solid fa-circle-exclamation"></i></button>
              <button class="btn"><i class="fa-solid fa-volume-high"></i></button>
            </div>
            
          </div>`
        sel.append(newChild);
    });
};

const parent=(item)=>{
    const buttonContainer=document.getElementById("btnContainer");
    buttonContainer.innerHTML="";

    item.map(x=>{
        console.log(x);
        const newBtn=document.createElement("div");
        newBtn.innerHTML=`<button onclick="repo(${x.level_no})" class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i>Lesson-${x.level_no}</button>`
        buttonContainer.append(newBtn);

    })
    
}

api();