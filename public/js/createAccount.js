const form = document.querySelector("#newuser") 
const patientBtn = document.querySelector(".patientBtn") 
const doctorBtn = document.querySelector(".doctorBtn") 
const firstQuestion = document.querySelector(".firstQuestion") 
const patientQuestions = document.querySelector(".patientQuestions") 
const doctorQuestions = document.querySelector(".doctorQuestions") 


document.getElementById("add").onclick = function() {
    let text = document.getElementById("inputAllergies").value; 
    let li = "<li>" + text + "</li>";
    document.getElementById("list").innerHTML += li;
    document.getElementById("inputAllergies").value = ""; // clear the value
  }

  document.getElementById("addon").onclick = function() {
    let text = document.getElementById("docSpecs").value; 
    let li = "<li>" + text + "</li>";
    document.getElementById("list2").innerHTML += li;
    document.getElementById("docSpecs").value = ""; // clear the value
  }


doctorBtn.addEventListener("click", (e)=> {
    e.preventDefault();
    let doctor = doctorBtn.value

    console.log(doctor+ "doctor")
    firstQuestion.style.display = "none";
    
    doctorQuestions.style.display = "block";
 
});

patientBtn.addEventListener("click", (e)=> {
    e.preventDefault();
    let patient = patientBtn.value

    console.log(patient+ "patient")
    firstQuestion.style.display = "none";
    patientQuestions.style.display = "block";
    
   
});

document.addEventListener("Submit", (e)=> {
    e.preventDefault();
    let name = form[0].value
    let email = form[1].value.trim()
    let password = form[2].value.trim()
    let insProvider = form[3].value
    let insNum = form[4].value.trim()

    if(!email || !password || !name || !insProvider || !insNum) return ;

    let userObj = {
        email ,
        name ,
        password,
        insProvider,
        insNum
    }

    console.log(userObj)
    fetch('/api/users/createuser',{
    method:'POST',
    body: JSON.stringify(userObj),
    headers: { 'Content-Type': 'application/json' }, 
    }).then((res)=>res.json()) 
    .then((data)=>{
        document.location.replace('/');
    })

    form[0].value = ""
    form[1].value = ""
    form[2].value = ""
    form[3].value = ""
    form[4].value = ""
})