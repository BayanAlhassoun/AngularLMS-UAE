import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
course1 = "API"
course1Link = "https://www.coursera.org/courses?query=api"
course2 = "Angular"
course2Link = "https://www.coursera.org/specializations/angular17"
course3 = "MVC"
course3Link= "https://www.coursera.org/learn/spring-mvc-rest-controller"
image = "https://media.istockphoto.com/id/1370630918/photo/purple-magnolia-flower-magnolia-felix-isolated-on-white-background-with-clipping-path.webp?b=1&s=612x612&w=0&k=20&c=u-hH0bgh626dRDRucGQnQYmKru2EYArNv8AUwGyWQ38="
name = "Amal"


value = ""
value2 = ""
value3 = "44477"

student = {
  "name": "Bayan",
  "Age": 30,
  "isStudent": true
}

names = ["Bayan", "Amal", "Aisha" , "Shaikha"]
numbers = [1, 3, 7, 10]
values = [true, true, false, true]
students = [

  {
    "name": "Bayan",
    "Age": 30,
    "isStudent": true
  },
  {
    "name": "Amal",
    "Age": 20,
    "isStudent": true
  },
  {
    "name": "Aisha",
    "Age": 22,
    "isStudent": false
  },
  {
    "name": "Shaikha",
    "Age": 26,
    "isStudent": false
  }

]


courses = [

{
  name: "API",
  price: "50$"
},
{
  name: "Angular",
  price: "200$"
},
{
  name: "C#",
  price: "150$"
},
{
  name: "Oracle",
  price: "200$"
},
{
  name: "MVC",
  price: "200$"
},
{
  name: "HTML",
  price: "100$"
}

]

flag = true
isStudent = ""

image1 = "https://www.w3schools.com/js/pic_bulboff.gif"
Greeting()
{
  this.value = "Hi Trainees 😍"
}

toUpper(event: any)
{
  console.log(event);
  
  this.value2 = event.target.value.toUpperCase()
}

ToggleBulb()
{
  if(this.image1 == "https://www.w3schools.com/js/pic_bulboff.gif")
  this.image1 = "https://www.w3schools.com/js/pic_bulbon.gif"
else
this.image1 = "https://www.w3schools.com/js/pic_bulboff.gif"
}

}
