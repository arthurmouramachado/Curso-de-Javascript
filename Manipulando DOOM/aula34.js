//addEventListener
const c1=document.getElementById("c1")
const cursos=[...document.querySelectorAll(".curso")]

cursos.map((el)=>{
    el.addEventListener("click",(evt)=>{
        console.log(evt.target)
    })
})

/*
c1.addEventListener("click", (evt)=>{
    console.log(evt.target)
})
 */