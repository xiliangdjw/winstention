function addEvent(dom,type,fn){
    if(dom.addEventListener){
	dom.addEventListener(type,fn,false);
    }else if(dom.attachEvent){
	dom.attachEvent('on'+type,fn);
    }else{
	dom['on'+type]=fn;
    }
}

//获取事件对象
var getEvent = function(event){
    //标准浏览器下返回event,IE下返回window.event
    return event||window.event;
}

//获取元素
var getTarget = function(event){
    var event = getEvent(event);
    //标准浏览器下event.target,IE下event.srcElement
    return event.target||event.srcElement;
}

//阻止默认行为
var preventDefault = function(event){
    var event = getEvent(event);
    if(event.preventDefault){
	//标准浏览器
	event.preventDefault();
    }else{
	//IE浏览器
	event.returnValue = false;
    }
}
