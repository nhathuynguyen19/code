function ngayDisplay(){
    
const today = new Date();
const daysOfWeek = ["Chu nhat, ", "Thu 2, ", "Thu 3, ", "Thu 4, ", "Thu 5, ", "Thu 6, ","Thu 7, "];
const currentThu = daysOfWeek[today.getDay()];
const divNgay = document.getElementById("thu");


divNgay.innerHTML = currentThu + "ngay " + today.getDate() + " thang " + today.getMonth() + " nam " + today.getFullYear();

}

ngayDisplay();