//抽象工厂方法
var VehicleFactory = function(subType,superType){
    //判断抽象工厂中是否有该抽象类
    if(typeof VehicleFactory[superType]==='function'){
	//缓存类
	function F(){};
	//继承父类属性和方法
	F.prototype = new VehicleFactory[superType]();
	//将子类constructor指向子类
	subType.constructor = subType;
	//子类原型继承‘父类’
	subType.prototype = new F();
    }else{
    	return new Error("未创建该类！");
    }
};

//小汽车类
VehicleFactory.Car = function(){
    this.type = 'car';
};
VehicleFactory.Car.prototype = {
    getPrice:function(){
    	return new Error("抽象方法不能调用!");
    },
    getSpeed:function(){
	    return new Error("抽象方法不能调用！");
    },
};

VehicleFactory.Bus = function(){
    this.type = 'bus';
}
VehicleFactory.Bus.prototype = {
    getPrice:function(){
	    return new Error("抽象方法不能调用");
    },
    getSpeed:function(){
	    return new Error("抽象方法不能调用");
    },
};

VehicleFactory.Truck = function(){
    this.type = 'truck';
}
VehicleFactory.Truck.prototype = {
    getPrice:function(){
	    return new Error("抽象方法不能调用");
    },
    getSpeed:function(){
	    return new Error("抽象方法不能调用");
    },
};

//使用这些抽象类
var BMW = function(price,speed){
    this.price = price;
    this.speed = speed;
};
VehicleFactory(BMW,'Car');
BMW.prototype.getPrice = function(){
    return this.price;
};
BMW.prototype.getSpeed = function(){
    return this.speed;
};

var Lamborghini = function(price,speed){
    this.price = price;
    this.speed = speed;
}
VehicleFactory(Lamborghini,'Car');
Lamborghini.prototype.getPrice = function(){
    return this.price;
}
Lamborghini.prototype.getSpeed = function(){
    return this.speed;
}

var YUTONG = function(price,passenger){
    this.price = price;
    this.passenger = passenger;
}
VehicleFactory(YUTONG,'Bus');
YUTONG.prototype.getPrice = function(){
    return this.price;
}
YUTONG.prototype.getPassenger = function(){
    return this.passenger;
}

var BenzTruck = function(price,trainLoad){
    this.price = price;
    this.trainLoad = trainLoad;
};
VehicleFactory(BenzTruck,'Truck');
BenzTruck.prototype.getPrice = function(){
    return this.price;
}
BenzTruck.prototype.getTrainload = function(){
    return this.trainLoad;
}

var truck = new BenzTruck(1000000,1000);
console.log(truck.getPrice());
console.log(truck.type);
