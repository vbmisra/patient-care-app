// console.log("works!")

// const form = document.querySelector("#newuser") 

// document.addEventListener("submit", (e)=> {
//     e.preventDefault();
//     let name = form[0].value
//     let email = form[1].value.trim()
//     let password = form[2].value.trim()
//     let insProvider = form[3].value
//     let insNum = form[4].value.trim()

//     if(!email || !password || !name || !insProvider || !insNum) return ;

//     let newUserData = {
//         email ,
//         name ,
//         password,
//         insProvider,
//         insNum
//     }


//     fetch('/api/blog/createblog',{
//     method:'POST',
//     body: JSON.stringify({name, inputEmail3, inputPassword3, insProvider,insNum}),
//     headers: { 'Content-Type': 'application/json' }, 
//     }).then((res)=>res.json()) 
//     .then((data)=>{
//         document.location.replace('/');
//     })

//     form[0].value = ""
//     form[1].value = ""
//     form[2].value = ""
//     form[3].value = ""
//     form[4].value = ""

// })

