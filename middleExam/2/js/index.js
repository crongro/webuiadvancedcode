var utility = {

	makeRandomHexColorStr : function() {
		var sHex = "",count = 0;
		while(true) {
			var _ran = Math.floor(Math.random()*256).toString(16);
			if(_ran.length < 2) _ran = "0" + _ran;
			sHex+= _ran;
			if(count > 1) break;
			count++;
		}
		return "#"+sHex;
	}  
}

var colorAnimator = {
	_elChanger : document.querySelector(".changer"),

	_elUL  : document.querySelector("#container > ul"),

	_count : 1,

	_insertCount : function() {

		this._elUL.insertAdjacentHTML('beforeend' , "<li class=" + this._count + "> </li>");

		var elLI = this._elUL.lastElementChild;

		//li 노드를 추가한 직후에는 animation이 동작하지 않아 setTimeout을 사용했음
		setTimeout(function(){
			elLI.style.backgroundColor = utility.makeRandomHexColorStr();
		}.bind(this),10);

		elLI.addEventListener("click" , function(e){
			alert(this._count +"번째 추가된 공이예요");
			e.target.style.backgroundColor = utility.makeRandomHexColorStr();
		}.bind(this), false);
	},

	_changeColor : function() {

		this._insertCount();
		this._count++;
		if(this._count < 7) this._changeColor();
	},

	removeChilds : function() {
		this._elUL.innerHTML = "";
	},

	colorHandler : function(e) {
		this._elChanger.removeEventListener('click' , listener ,false);
		this.removeChilds();
		this._changeColor();
	}
}


var listener = function (e) {
	colorAnimator.colorHandler();
};

var ele = document.querySelector(".changer");
ele.addEventListener('click' , listener ,false);





