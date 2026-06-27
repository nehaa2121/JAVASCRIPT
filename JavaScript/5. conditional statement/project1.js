let marks = 82;
let name = "Neha";
let grade;


document.getElementById("name").innerHTML = "Name : " + name;

document.getElementById("marks").innerHTML = "Marks : " + marks;

if(marks>=90){
    document.getElementById("grade").innerHTML = "Grade : A+";
}
else if(marks>=75){
    document.getElementById("grade").innerHTML = "Grade : A";
}
else if(marks>=50){
    document.getElementById("grade").innerHTML = "Grade : B";
}
else{
    document.getElementById("grade").innerHTML = "Grade : Fail";
}