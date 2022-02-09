"use strict";


let employeesForm = document.getElementById('empForm');
let employeesection = document.getElementById('Employees');
let empArr =[] ;

const tax = 0.075;
function Employee(id, fullName, departMent, level, imageUrl) {
  this.id = id;
  this.fullName = fullName;
  this.departMent = departMent;
  this.level = level;
  this.imageUrl = imageUrl;
  this.salary = 0;
}


function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

Employee.prototype.finalsalary = function () {
  let max, min;
  switch (this.level) {
    case ("senior"):
      max = 2000;
      min = 1500;
      this.salary = parseInt(randomNumber(min, max) - (randomNumber(min, max) * 0.075));
      break;
    case ("midsenior"):
      max = 1500;
      min = 1000;
      this.salary = parseInt(randomNumber(min, max) - (randomNumber(min, max) * 0.075));

      break;
    case ("junior"):
      max = 1000;
      min = 500;
      this.salary = parseInt(randomNumber(min, max) - (randomNumber(min, max) * 0.075));

      break;
  }
}



Employee.prototype.render = function () {
    employeesection.innerHTML="";
    for(let i=0;i<empArr.length;i++){
    let div = document.createElement('div');
    employeesection.appendChild(div);
    div.setAttribute('class','card');
        let img = document.createElement('img');
        div.appendChild(img);
        img.setAttribute('src',empArr[i].imageUrl);
      

    let h4 = document.createElement('h4');
    div.appendChild(h4);
    h4.textContent = `${empArr[i].fullName} ${empArr[i].id}`;
  
 
    let p2 = document.createElement('p');
    div.appendChild(p2);
    p2.textContent = `${empArr[i].departMent}-${empArr[i].level}` ;

    let p3 = document.createElement('p');
    div.appendChild(p3);
    p3.textContent = `${empArr[i].salary}` ;

}
}

let pad =(function(num){
    return function(){
        let str =eval(num++);
        while(str.length<4) str ="0"+ str;
        return str;
    }
})(1) ;


function handelForm (event){
    event.preventDefault();
    let name =event.target.name.value ;
    let depart =event.target.depName.value ;
    let level =event.target.level.value ;
    let img =event.target.imgUrl.value ;
    let id =pad() ;

    console.log(name,depart,level,img);
    const employee = new Employee(id,name,depart,level,img,0);
    employee.finalsalary();
    empArr.push(employee);
    console.log(employee) ;
     employee.render();
    

    
}
employeesForm.addEventListener('submit',handelForm) ;




//task7
// const Ghazi = new Employee(1000, "Gazi Samer", "adminstration", "senior");
// Ghazi.finalsalary()
// Ghazi.render();
// const Lana = new Employee(1001, "Lana Ali", "Finance", "senior");
// Lana.finalsalary()
// Lana.render();
// const Tamara = new Employee(1002, "Tamara Ayoub", "marketing", "senior");
// Tamara.finalsalary()
// Tamara.render();
// const Safi = new Employee(1003, "Safi Walid", "adminstration", "medsenior");
// Safi.finalsalary()
// Safi.render();
// const Omar = new Employee(1004, "Omar Zaid", "development", "senior");
// Omar.finalsalary()
// Omar.render();
// const Rana = new Employee(1005, "Rana Saleh", "development", "junior");
// Rana.finalsalary()
// Rana.render();
// const Hadi = new Employee(1006, "Hadi Ahmad", "finance", "medsenior");
// Hadi.finalsalary()
// Hadi.render();

