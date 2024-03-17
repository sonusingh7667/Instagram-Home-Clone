let arr = [
    {
        dp:"https://thumbs.dreamstime.com/b/beauty-brunette-model-girl-perfect-makeup-trendy-accessories-fashion-wear-88929334.jpg", story: "https://assets.vogue.in/photos/5d9d7c19e6f5b200081e5d42/2:3/w_2560%2Cc_limit/Priyanka%2520Chopra%2520hairstyles%2520makeup%2520in%2520New%2520York%2520City%2520for%2520A%2520Sky%2520Is%2520Pink%2520Promotions%25204.jpg"
    },
    {
        dp:"https://img.freepik.com/free-photo/young-woman-with-long-straight-hair-studio-portrait-attractive-brunette-girl-fashion-model-wears-black-shirt-anf-jeans-sexy-female-model_186202-7462.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1708128000&semt=ais", story:"https://englishtribuneimages.blob.core.windows.net/gallary-content/2023/9/2023_9$largeimg_1614072646.jpg"
    },
    {
        dp: "https://stylesatlife.com/wp-content/uploads/2022/07/Indian-model-Neelam-Gill.jpg", story:"https://im.rediff.com/movies/2022/dec/05kajol4.jpg"
    },
    {
        dp: "https://5.imimg.com/data5/ANDROID/Default/2021/7/UX/AW/BK/39958304/132230746-425358982178250-7374844770133219684-n-jpg-500x500.jpg", story:"https://wallpapercave.com/wp/wp7105804.jpg"
    },
    {
        dp:"https://t4.ftcdn.net/jpg/01/70/58/33/360_F_170583326_PcYwxzgsoZziJUSVoywvAPPeogEtvenB.jpg", story:"https://e0.pxfuel.com/wallpapers/42/573/desktop-wallpaper-rashmi-desai-face-lip.jpg"
    },
    {
        dp:"https://m.media-amazon.com/images/M/MV5BNjM3NzY5ODkwNl5BMl5BanBnXkFtZTcwMDUwMDgxOA@@._V1_.jpg" , story: "https://www.hindirush.com/ampstories/news/tv-actress-rashmi-desai-hot-and-bold-style-pics-262049/assets/2.jpeg"
    }

]

let sonu_singh =document.querySelector("#sonu-singh")
let clutter = ""
arr.forEach(function(elem,idx){
    clutter += `<div class="story">
    <img id="${idx}" src="${elem.dp}" alt=""> 
 </div>`    
})
document.querySelector("#sonu-singh").innerHTML = clutter

sonu_singh.addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display = "block";
    document.querySelector("#full-screen").style.backgroundImage=`url(${arr[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none";
    },2000)
})

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


let com = document.querySelector("h2");
let followme =document.querySelector("#follow")
let check=0;

followme.addEventListener("click",function(){
   if(check==0){
    com.innerHTML = "Friend";
    com.style.color = "green";
    followme.innerHTML = "Unfollow";
    check=1;
   }
   else{
    com.innerHTML = "Strenger";
    com.style.color = "pink";
    followme.innerHTML = "Follow";
    check=0;
   }
})

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4

let profileimage = document.querySelector("#profile");
let dil_touch = document.querySelector("i");
profileimage.addEventListener("dblclick",function(){
    dil_touch.style.transform = "translate(-50%,-50%) scale(2)";
    dil_touch.style.color ="red"
    dil_touch.style.opacity="0.9"

    setTimeout(function(){
        dil_touch.style.opacity= "0";
    },1000)
    setTimeout(function(){
        dil_touch.style.transform = "translate(-50%,-50%) scale(0)"
    },2000)
})

