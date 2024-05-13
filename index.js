let footer_left = document.querySelector("#footerLeft");
let footer_right=document.querySelector("#footerRight")
let carousel_val = document.querySelector(".carousel_val_two");


    footer_left.addEventListener("click", () => {
        carousel_val.scroll( 
            {
            left: carousel_val.offsetWidth,
            behavior:"smooth"
        }
        ); 
       
    }); 

footer_right.addEventListener("click",()=>{
    carousel_val.scrollBy({
        left:-carousel_val.offsetWidth,
        behavior:"smooth"
    })
}) 
let jonny=document.querySelector(".loca")

let arr=["tamilnadu","banglore","goa","karnataka"]
arr.forEach(val=>{
    let option=document.createElement("option")
    option.innerHTML=val;
    jonny.append(option)
    
})  

let img_array = [
    "/images/5044959301-034256da8e-k-1-cropped-1576469925.jpg",
    "/images/lakshadweep-islands-2-768x512.jpg",
    "/images/pexels-photo-1724430.webp",
    "/images/goa_two.jpg",
    "/images/5044959301-034256da8e-k-1-cropped-1576469925.jpg"
];

let novel = document.querySelector(".noval");

setInterval(() => {
    let randomIndex = Math.floor(Math.random() * img_array.length);
    
    novel.style.backgroundImage = `url(${img_array[randomIndex]})`;
}, 2000); 
novel.clearInterval()
