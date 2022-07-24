



var imgList = Array.from(document.querySelectorAll('.item img'))
var lightBoxConatiner = document.getElementById('lightBoxConatiner')
var lightBoxItem = document.getElementById('lightBoxItem')

var nextBtn = document.getElementById('next')
var prevBtn = document.getElementById('prev')
var closeBtn = document.getElementById('close')


var currentIndexImg;

for (let i = 0; i < imgList.length; i++) {
    
    imgList[i].addEventListener('click' , function(e){
        lightBoxConatiner.style.display = 'flex'
        var ImgSrc = e.target.src;

        currentIndexImg = imgList.indexOf(e.target);
        console.log(currentIndexImg)
        lightBoxItem.style.backgroundImage = `url(${ImgSrc})`
    })
}



function NextSlider(){
    currentIndexImg = currentIndexImg + 1;

    if(currentIndexImg >= imgList.length){
        currentIndexImg = 0;
    }
    var nextImg = imgList[currentIndexImg].src
    lightBoxItem.style.backgroundImage = `url(${nextImg})`

    console.log(nextImg)
}


function prevSlider(){
    if(currentIndexImg == 0 ){
        currentIndexImg = imgList.length -1;
    }else{
        currentIndexImg = currentIndexImg - 1;
    }

    var nextImg = imgList[currentIndexImg].src
    lightBoxItem.style.backgroundImage = `url(${nextImg})`

    console.log(nextImg)
}


nextBtn.addEventListener('click' , function(){
    NextSlider();
})

prevBtn.addEventListener('click' , function(){
    prevSlider();
})

closeBtn.addEventListener('click' , function(){
    lightBoxConatiner.style.display = 'none'
})


document.addEventListener('click' , function(e){
    if(lightBoxConatiner.style.display != 'none'){
        if(e.target == lightBoxConatiner){
            lightBoxConatiner.style.display = 'none'
            // console.log(e.target)
        }

    }
})


document.addEventListener('keydown' , function(e){
    if(lightBoxConatiner.style.display == 'flex'){
        if(e.code == 'ArrowRight'){
            NextSlider();
        }

        if(e.code == 'ArrowLeft'){
            prevSlider();
        }

        if(e.code == 'Escape'){
            lightBoxConatiner.style.display = 'none'
        }
    }
})



