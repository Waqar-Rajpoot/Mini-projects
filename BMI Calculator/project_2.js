let form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let height =parseInt(document.getElementById('height').value);
    let weight = parseInt(document.getElementById('weight').value);
    let result = document.getElementById('result');


        if(height == '' || height <= 0 || isNaN(height) )
        result.innerHTML = `please input height`;
        else if(weight == '' || weight <= 0 || isNaN(weight) )
        result.innerHTML = `please input weight`;
        else{
            let bmi = (weight/((height*height)/10000)).toFixed(2);
            result.innerHTML = bmi;
            
            if(bmi < 18.6){
                document.getElementById("conclusion").innerHTML = "Under Weight";
            }else if(bmi >= 18.6 && bmi <= 24.6){
                document.getElementById("conclusion").innerHTML = "Normal Weight";
            }else{
                document.getElementById("conclusion").innerHTML = "Over Weight";
            }

        }
})