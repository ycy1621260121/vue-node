 
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

export default Person