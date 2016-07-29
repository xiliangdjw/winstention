var Lei = {
    g:function(id){
	return document.getElementById(id);
    },
    //单利模式要想使用定义的方法一定要加上命名空间Lei
    css:function(id,key,value){
	this.g(id).style[key] = value;
    },
}
