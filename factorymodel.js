var Factory = function(type,content){
	if (this instanceof Factory) {
		var s = this[type](content);
		return s;
	}else{
		return new Factory(type,content);
	}
}

Factory.prototype = {
	Java : function(content){
		//
	}

	javascript : function(coontent){
		//
	}

	UI : function(content){
		this.content = content;
		(function(content)){
			var div = document.createElement('div');
			div.innerHTML = content;
			div.style.border = '1px solid red';
			document.getElementById('container').appendChild(div);
		}(content);
	},

	php : function(content){
		//
	}
}

var data = [
	{type:'javascript',content:'javascript哪家强'},
	{type:'Java',content:'java哪家强'},
	{type:'php',content:'php哪家强'},
	{type:'UI',content:'UI哪家强'},
	{type:'UI',content:'UI哪家强'},
	{type:'javascript',content:'javascript哪家强'},
	{type:'javascript',content:'javascript哪家强'},
]

for(var i=6;i>=0;i--){
	Factory(data[i].type,data[i].content);
}