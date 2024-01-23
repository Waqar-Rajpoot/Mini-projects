let hr = min = sec = count = 0;

let timer = false;

function start(){

    timer = true;
    stopwatch();

}
function stop(){

    timer = false;

}
function reset(){
    timer = false;
    hr = min = sec = count = 0;

    document.getElementById("count").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("hr").innerHTML = "00";

}

function stopwatch(){

    
    if(timer == true){


            count++;
        if(count == 100){
            sec++;
            count = 0;
        }
        if(sec == 60){
        
            min++;
            sec = count = 0;

        }if(min == 60){
        
            hr++;
            min = sec = count = 0;

        }

        var hrString = hr;
        var minString = min;
        var secString = sec;
        var countString = count;

        if(hr < 10){
            hrString = "0" + hr;
        }
        if(min < 10){
            minString = "0" + min;
        }
        if(sec < 10){
            secString = "0" + sec;
        }
        if(count < 10){
            countString = "0" + count;
        }

        document.getElementById("count").innerHTML = countString;
        document.getElementById("sec").innerHTML = secString;
        document.getElementById("min").innerHTML = minString;
        document.getElementById("hr").innerHTML = hrString;

        setTimeout("stopwatch()", 10);
    }
}