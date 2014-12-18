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

		//본문에 추가하고
		this._elUL.insertAdjacentHTML('beforeend' , "<li class=" + this._count + "> </li>");

		var elLI = this._elUL.lastElementChild;

		setTimeout(function(){
			elLI.style.backgroundColor = utility.makeRandomHexColorStr();
			if(this._count  ===  7) {

				setTimeout(function() {  //얼럿메시지가 종료후에 나오도록 만들기.
					alert("6개의 공이 추가됐습니다");
					this._count = 1;
				}.bind(this),1000);

				this._elChanger.addEventListener('click' , listener ,false);
				return;
			}
		}.bind(this),10);

		elLI.addEventListener("click" , (function(count,e){
			alert(count +"번째 추가된 공이예요"); // 번째 공이 추가된 것인지 잘 나타내게 하기
			e.target.style.backgroundColor = utility.makeRandomHexColorStr();
		}).bind(null,this._count), false);
	},

	_changeColor : function() {

		setTimeout(function(){
			this._insertCount();
			this._count++;
			if(this._count < 7) this._changeColor();
		}.bind(this),1000);
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




/****************************************************************************/

function ColorAnimator () {
	this._elChanger = document.querySelector(".changer");
	this._elUL  =  document.querySelector("#container > ul");
	this._count = 1;
}

ColorAnimator.prototype._insertCount = function() {

	//본문에 추가하고
	this._elUL.insertAdjacentHTML('beforeend' , "<li class=" + this._count + "> </li>");

	var elLI = this._elUL.lastElementChild;

	setTimeout(function(){
		elLI.style.backgroundColor = utility.makeRandomHexColorStr();
		if(this._count  ===  7) {

			setTimeout(function() {  //얼럿메시지가 종료후에 나오도록 만들기.
				alert("6개의 공이 추가됐습니다");
				this._count = 1;
			}.bind(this),1000);

			this._elChanger.addEventListener('click' , listener ,false);
			return;
		}
	}.bind(this),10);

	elLI.addEventListener("click" , (function(count,e){
		alert(count +"번째 추가된 공이예요"); // 번째 공이 추가된 것인지 잘 나타내게 하기
		e.target.style.backgroundColor = utility.makeRandomHexColorStr();
	}).bind(null,this._count), false);
}


ColorAnimator.prototype._changeColor= function() {
	setTimeout(function(){
		this._insertCount();
		this._count++;
		if(this._count < 7) this._changeColor();
	}.bind(this),1000)
}

ColorAnimator.prototype.removeChilds = function() {
	this._elUL.innerHTML = "";
}

ColorAnimator.prototype.colorHandler = function() {
	this._elChanger.removeEventListener('click' , listener ,false);
	this.removeChilds();
	this._changeColor();
}


//var o = new ColorAnimator();
//o.colorHandler();

/****************************************************************************/


var listener = function (e) {
	colorAnimator.colorHandler();
};

var ele = document.querySelector(".changer");
ele.addEventListener('click' , listener ,false);





