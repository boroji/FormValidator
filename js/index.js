var find = document.querySelectorAll('.inner-svg path');
for (var i = 0; i < find.length; i++) {
    console.log(`line ${i} is ${find[i].getTotalLength()} lenght`);
}