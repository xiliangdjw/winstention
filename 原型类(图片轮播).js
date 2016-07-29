var LoopImages = function(imgArr,container){
    this.imagesArray = imgArr;
    this.container = container;
}
LoopImages.prototype = {
    //创建轮播图片
    createImage:function(){
	console.log('LoopImages createImage function');
    },
    //切换下一张图片
    changeImage:function(){
	console.log('LoopImages changeImage function')
    }
};

//上下滑动切换类
var SlideLoopImg = function(imgArr,container){
    //构造函数集成图片轮播类
    LoopImages.call(this,imgArr,container);
}
SlideLoopImg.prototype = new LoopImages();
//重写继承的切换下一张图片的方法
SlideLoopImg.prototype.changeImage = function(){
    console.log('SlideLoopImg changeImage function');
}

//渐隐切换类
var FadeLoopImg = function(imgArr,container,arrow){
    LoopImages.call(this,imgArr,container,arrow);
    this.arrow = arrow;
}
FadeLoopImg.prototype = new LoopImages();
FadeLoopImg.prototype.changeImage = function(){
    console.log('FadeLoopImg changeImage function');
};

//测试
console.log(fadeImg.container);
fadeImg.changeImg();
