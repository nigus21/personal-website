let letters= document.getElementsByTagName('path');

for(let i=0;i<letters.length;i++){
    console.log(`letter ${i} has length of ${letters[i].getTotalLength()}`);
}
