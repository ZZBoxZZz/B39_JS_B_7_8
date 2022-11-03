let mang = [];
document.getElementById("btnB1").onclick = function(){
    
    var x = document.getElementById("b1").value *1;
    mang.push(x);
    document.getElementById("infoB1").innerHTML = mang;
}
function soDuong(x) {
    if(x > 0){
        return true;
    }
}
//1

document.getElementById("btnB2").onclick = function(){
    let sum = 0;
    for(let i = 0; i < mang.length;i++){
        if(mang[i]>0){    
            sum += mang[i];
        }
    }
    document.getElementById("infoB2").innerHTML = sum;
}
//2
document.getElementById("btnB3").onclick = function(){
    let count = 0;
    for(let i = 0; i < mang.length;i++){
        if(mang[i]>0){    
            count++;
        }
    }
    document.getElementById("infoB3").innerHTML = count;
}
//3
document.getElementById("btnB4").onclick = function(){
    let min = mang[0];
    for(let i = 1; i <= mang.length;i++){
        if(min>mang[i]){    
            min = mang[i];
        }
    }
    document.getElementById("infoB4").innerHTML = min;
}
//4
document.getElementById("btnB5").onclick = function(){
    
    var mang2 =[];
    for(let i = 0; i < mang.length;i++){
        if(mang[i]>0){
            mang2.push(mang[i]);
        }
    }
    // document.getElementById("infoB5").innerHTML = min;
    var min2 = mang2[0];
    for(let j = 1; j <= mang2.length;j++){
        if(min2 > mang2[j]){
            min2 = mang2[j];
        }
    }
    document.getElementById("infoB5").innerHTML = min2;
}

//5
document.getElementById("btnB6").onclick = function(){
    let chan = 0;
    for(let i = 0; i < mang.length;i++){
        if(mang[i]%2==0){
            chan = mang[i];
        }
    }
    document.getElementById("infoB6").innerHTML = chan;
}

//6
document.getElementById("btnB7").onclick = function(){
    var x = document.getElementById("b7").value;
    var y = document.getElementById("b7_1").value;
    mang[x-1] = mang[x-1] + mang [y-1];
    mang [y-1] = mang[x-1] - mang[y-1];
    mang[x-1] = mang[x-1] - mang[y-1];
    document.getElementById("infoB7").innerHTML = mang;
}
//7
document.getElementById("btnB8").onclick = function(){
    let tangDan = 0;
    for(let i = 0; i < mang.length-1;i++){
        for(let j =i+1; j<mang.length;j++){
            if(mang[i]>mang[j]){
                mang[i] = mang[i] + mang[j];
                mang[j] = mang[i] - mang[j];
                mang[i] = mang[i] - mang[j];
            }
        }
        
    }
    document.getElementById("infoB8").innerHTML = mang;
}
//8

function check_Prime(n){
    if (n <= 1){
        return false;
    }
    if (n % 2 == 0 && n >2){
        return false;
    }
    const s = Math.sqrt(n);
    for (let i = 3; i <= s;i+=2){
        if(n%1 ===0){
            return false;
        }
    }
    return true;
}
document.getElementById("btnB9").onclick = function(){
    let x = 0;
    let y =0 ;
    for(let i = 0; i < mang.length;i++){
        x = check_Prime(mang[i]);
        if(x == true){
            y = mang[i];
            break;
        }
    }
    document.getElementById("infoB9").innerHTML = y;
}
//9
let mang3 = [];
document.getElementById("btnB10").onclick = function(){
    
    var x = document.getElementById("b10").value *1;
    mang3.push(x);
    document.getElementById("infoB10").innerHTML = mang3;
}

document.getElementById("btnB11").onclick = function(){
    var count = 0;
    for(let i = 0 ; i<mang3.length;i++){
        if(Number.isInteger(mang3[i])==true){
            count++;
        }
    }
    document.getElementById("infoB11").innerHTML ="Số nguyên: "+count;
}

//10
document.getElementById("btnB12").onclick = function(){
    console.log(mang3);
    let duong = 0;
    let am = 0;
    for(let i = 0 ; i<mang3.length;i++){
        console.log(mang3[i]);
        if(mang3[i] >= 0 ){
            duong++;
        } else {
            am++;
        }
    }
    console.log(duong);
    console.log(am);
    if(duong>am){
        document.getElementById("infoB12").innerHTML ="Số dương > Số âm ";
    } else if (duong < am){
        document.getElementById("infoB12").innerHTML ="Số dương < Số âm ";
    } else {
        document.getElementById("infoB12").innerHTML ="Số dương = Số âm ";
    }
    
}