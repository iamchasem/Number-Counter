let count = 0;

document.getElementById("decreaseBttn").onclick = function(){
  count-=1;
  document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("reset").onclick = function(){
  count=0;
  document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("increaseBttn").onclick = function(){
  count+=1;
  document.getElementById("countLabel").innerHTML = count;
}

