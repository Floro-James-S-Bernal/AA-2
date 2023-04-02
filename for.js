var a = 0;
var b = 1;
document.write("<br>")
for(var z = 1; z < 13; z++){
    if(a <= 0){
        a +=1;
        document.write(a + ", ")
    }
    if(a > 0){
        a*=2;
        a += b;
        document.write(a)
    }
    if(z < 12){
        document.write(", ")
    }
    b--;
}