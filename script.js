color_list = ["black","white","red","blue","grey"]; 
let sentence1="I like" + " " +
     color_list[Math.floor(Math.random()*color_list.length)] + ", "

let sentence2="and she likes" + " " + 
     color_list[Math.floor(Math.random()*color_list.length)] + ". "

let word = prompt("what is your favorite color?")

let sentence3="Although your favorite color is"+" "+word+", "+"the most beautiful color is aways a combination"+"."

document.write(sentence1+sentence2+sentence3)
