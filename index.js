
const api=()=>{
    const url="https://openapi.programming-hero.com/api/levels/all";
    fetch(url).then(res=>res.json()).then(json=>parent(json.data));

}

const parent=(item)=>{
    const buttonContainer=document.getElementById("btnContainer");
    buttonContainer.innerHTML="";

    item.map(x=>{
        console.log(x);
        const newBtn=document.createElement("div");
        newBtn.innerHTML=`<button class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i>Lesson-${x.level_no}</button>`
        buttonContainer.append(newBtn);

    })
    
}

api();