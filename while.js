var x = 0;
while(x < 52){
    if(x % 2 == 1){
        document.write(x)
        if(x < 51){
            document.write(", ")
        }
    }
    x +=1;
}