"use strict"


// const file = document.getElementById('file');

// file.addEventListener("change", handleFiles, false);
// function handleFiles() {
//   const fileList = this.files;

//   const reader = new FileReader();
//   reader.readAsText(fileList[0]);
//   reader.onload = () => {
//     console.log(fileList[0].name+": "+reader.result)
//   }
  
// }



//const h = prompt("Hour");
//const m = prompt("Minute");


const time = (h, m) => {
   if (h <= 11 && h >= 0, m <= 59 && m >= 0) {
    const realTime = `${12-h}:${60-m}`;
    return realTime;
} else{
    return ("Неверно задано время")
}
}
//console.log(window.showOpenFilePicker('./1.txt'))

//alert(time(h, m));