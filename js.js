// // document.write("Hi")
// let string = "";
// let buttons = document.querySelectorAll(".button")

// Array.from(buttons).forEach((buttons)=>{
//     buttons.addEventListener("click",(e)=>{
//         console.log(e.target);
//         string = string + e.target.innerHTML 
//         document.querySelector("input").value = string
//     })
// })

  

    // document.querySelector(".input") = abc
    // document.querySelector(".input") = abc. subtring(0,abc.lenght -1)
            

   


let string = "";

let buttons = document.querySelectorAll(".button")

Array.from(buttons).forEach((buttons)=>{

    buttons.addEventListener('click',(e)=>{




        // let backSpace=()=>{

            // back = document.getElementById("back")
            // back.addEventListener("click",()=>{

            //     document.querySelector("input") = abc
            //     document.querySelector("input") = abc. subtring(0,abc.lenght -1)
            // })
            
            
            

        // }
        // backSpace();



        if(e.target.innerHTML == "="){

            string = eval(string);
            document.querySelector("input").value =string
        }
        else  if(e.target.innerHTML == "C"){

            string = " ";
            document.querySelector("input").value =string
        }
        else if (e.target.innerHTML ==  "D"){
            
                var abc =  document.querySelector("input").value 
                  document.querySelector("input") .value= abc.substring(0,abc.length -1)
                  string = " "

            // document.querySelector("input").value =string
         
 
            
        }
        else{
        string = string+ e.target.innerHTML
        document.querySelector("input").value = string
        }
    })

})































