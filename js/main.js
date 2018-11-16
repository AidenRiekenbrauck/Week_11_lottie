(()=>{
// get a ref to the lottie container
const   preloader = document.querySelector('.preloader');

let preloadAnim = bodymovin.loadAnimation({
    wrapper : preloader,
    animType : 'svg',
    loop : true,
    autoplay: false,
    path : './data/prathikfav.json'
});


function playAnimation (){
    preloadAnim.play();
}

function stopAnimation (){
    preloadAnim.stop();
}

preloader.addEventListener("mouseover", playAnimation)
preloader.addEventListener("mouseout", stopAnimation)
})();