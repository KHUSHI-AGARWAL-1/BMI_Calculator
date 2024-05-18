const height=document.getElementById('height');
const weight=document.getElementById('weight');
const res=document.getElementById('res');
const age=document.getElementById('age');
const btn = document.getElementById('cal');
const form = document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    calculateBMI();
  
})
const reset =document.getElementById('reset').addEventListener('click',()=>{
  height.value="";
    weight.value="";
    age.value="";
    res.innerHTML="";
})
// btn.addEventListener('click',calculateBMI);
function calculateBMI(){
    if (height.value === "" || isNaN(height.value))
        res.innerHTML = "Provide a valid Height!";
 
    else if (weight.value === "" || isNaN(weight.value))
        res.innerHTML = "Provide a valid Weight!";
        else if(age.value=="")
        res.innerHTML="Provide age"
        else{
            const bmi=(weight.value / Math.pow( (height.value/100), 2 )).toFixed(2);
            if (bmi < 18.5) res.innerHTML =
            `Under Weight : ${bmi}`;
 
        else if (bmi >= 18.5 && bmi <= 24.9)
            res.innerHTML =
                `Healthy : ${bmi}`;
         else if (bmi >= 25 && bmi <= 24.9)
                res.innerHTML =
                    `Over Weight : ${bmi}`;
 
        else res.innerHTML =
            `Obese : ${bmi}`;
        }
  
}