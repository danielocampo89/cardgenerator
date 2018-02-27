window.generateCard =function () { // webpack willnot allow function -- HTML - onClick="generateCard()" JS- function generateCard(){ instead use window.generateCard =function () {
    
     var numbers = ["A",2,3,4,5,6,7,8,9,10,"J","Q","K",];
    var suites = [
     { name: 'heart', image: 'images/heart.jpg' }, 
     { name: 'diamond', image: 'images/diamond.jpg' }, 
     { name: 'club', image: 'images/club.jpg' },
     { name: 'spade', image: 'images/spade.jpg'}
];
    
    var numbers1 = numbers[Math.floor(Math.random()*numbers.length)];
   var suites1 = suites[Math.floor(Math.random()*suites.length)];
    
     if (suites1.name === 'heart' || suites1.name === 'diamond') {
         document.getElementById("cardArea").classList.add("red");
        document.getElementById("cardArea").classList.remove("black");
    
}
  else {
         document.getElementById("cardArea").classList.add("black");
        document.getElementById("cardArea").classList.remove("red");
    
}
     if (suites1.name === 'heart' || suites1.name === 'diamond') {
         document.getElementById("cardArea3").classList.add("red");
        document.getElementById("cardArea3").classList.remove("black");
    
}
  else {
         document.getElementById("cardArea3").classList.add("black");
        document.getElementById("cardArea3").classList.remove("red");
    
}
    
    document.getElementById("cardArea").innerHTML = numbers1;
     document.getElementById("cardArea3").innerHTML = numbers1;
    document.getElementById("cardArea2").innerHTML = '<img src="'+suites1.image+'">';
}

