 
//OOP面对对象
class Person {
  //构造函数
  constructor(name,sex){
	  var firstName='杨';
	  this.name=firstName+name;
	  this.sex=sex;
  }
  //属性
  sayName(){
	console.log("姓名："+this.name+"；性别："+this.sex);
  }
}


/*define(["./a", "./b"], function(a, b) {
  //BEGIN
  if (true) {
    a.doSomething();
  } else {
	b.doSomething();
  }
  //END
});*/


//闭包
/*function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

  for (var i = 0; i < helpText.length; i++) {
    let item = helpText[i];
    document.getElementById(item.id).onfocus = function() {
      showHelp(item.help);
    }
  }
}

setupHelp();*/

export default Person
