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