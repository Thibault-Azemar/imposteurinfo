// likes et dislikes
let liker = document.getElementById("like");
let disliker = document.getElementById('dislike');

let comptlike = 0
let comptdislike = 0

let int = document.getElementById('number');
let integer = 0;

liker.addEventListener('click', function(){
    comptlike += 1;
    integer = (comptlike/(comptlike+comptdislike))*100
    int.innerHTML = integer;
})


disliker.addEventListener('click', function(){
    comptdislike += 1;
    integer = (comptlike/(comptlike+comptdislike))*100
    int.innerHTML = integer;
})