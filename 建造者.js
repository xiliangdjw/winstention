//创建一位人类
var Human = function(param){
    this.skill = param & param.skill || '保密'; 
    this.hobby = param & param.hobby || '保密';
}
//人类原型方法
HUman.prototype = function(name){
    getSkill : function(){
	return this.skill;
    },
    getHobby : function(){
	return this.hobby;
    },
}
//实例化姓名类
var Named = function(name){
    var that = this;
    //构造器
    //构造函数解析姓名的姓与名
    (function(name,that){
	that.wholeName = name;
	if(name.indexOf(' ')>-1){
	    that.FirstName = name.slice(0,name.indexOf(' '));
	    that.SecondName = name.slice(name.indexOf(' '));
	}
    })(name,that);
}
//实例化职位类
var Work = function(work){
    vvar that = this;
    (function(work,that){
	switch(work){
	    case 'code':
		that.work = '工程师';
		that.workDescript = '每天不写点代码就难受';
		break;
	    case 'UI':
		that.work = '设计师';
		that.workDescript = '设计更似一种艺术';
		break;
	    case 'teach':
		that.work = '教师';
		that.workDescript = '分享也是一种快乐';
		break;
	    default:
		that.work = work;
		that.workDescript = '对不起，我们还不清楚您所选择的职位相关描述';
	}
    })(work,that);
}
//更换期望的职位
Work.prototype.changeWork = function(work){
    this.work = work;
}
//添加对职位的描述
Work.prototype.changeDescript = function(sentence){
    this.workDescript = sentence;
}

//创建一个完整的应聘者对象
var Person = function(name,work){
    var _person = new Human();
    _person.name = new Named(name);
    _person.work = new Work(work);
    return _person;
}

//测试
var person = new Person('xiao ming','code');
console.log(person.skill);
console.log(person.name.FirstName);
console.log(person.work.work);
console.log(person.work.workDescript);
person.work.changeDescript('更改一下职位描述');
console.log(person.work.workDescript);
