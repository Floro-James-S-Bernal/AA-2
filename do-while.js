var y = 0;
document.write("<br>")
do{
    if(y > 0){
        if(y % 2 == 0){
            document.write(y)
            if(y < 50){
                document.write(", ")
            }
        }
    }
    y +=1;
}while(y < 51)