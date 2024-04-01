

let first = document.querySelector(".first")

let second = document.querySelector(".second")

let third = document.querySelector(".third");

let steps = [ first, second, third ]



function nextStep(currentStep) {

   steps.forEach(step => step.classList.remove("active"))

   steps.forEach((step, index) => {

     if(index <= currentStep){

      step.classList.add("active")

     }else{

      step.classList.remove("active")

     }

   })

}

steps.forEach((step, index) => {

   step.addEventListener("click", () => {

      nextStep(index)
   })
})
