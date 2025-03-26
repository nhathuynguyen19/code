//hien ngay và thang nam
function hienNgayGio() {
    const ngay = new Date();
    const daysOfWeek = ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];
    const thu = daysOfWeek[ngay.getDay()];
    const ngayTrongTuan = ngay.getDate();
    const thang = ngay.getMonth() + 1;
    const nam = ngay.getFullYear(); 

    const divHien = document.getElementById("DayMonthYear");

    // Hiển thị ngày theo định dạng "Thứ x, ngày dd tháng mm năm yyyy"
    divHien.innerHTML = thu + ", ngày " + ngayTrongTuan + " tháng " + thang + " năm " + nam;
}
hienNgayGio();


//bam menu2 de truy cap III
function toggleIII() {
var III = document.getElementById('III');
III.classList.toggle('active');
}
var menu = document.getElementById('menu-2');
menu.addEventListener('click', toggleIII);


//action khi click nav1 nav2
var nav1Clicked = false;
var nav2Clicked = false;

function clickNav1() {
    var ac = document.getElementById('II');
    ac.classList.toggle('actionClickNav1');
        nav1Clicked = !nav1Clicked;
        
    if (nav2Clicked) {
        var nav2 = document.getElementById('nav2');
        var nav1 = document.getElementById('nav1');

        nav2.click();
        nav1.click();
        nav2Clicked = false;
    }
}

function clickNav2() {
    var ac1 = document.getElementById('II');
    ac1.classList.toggle('actionClickNav2');
        nav2Clicked = !nav2Clicked;
        
    if (nav1Clicked) {
        var nav1 = document.getElementById('nav1');
        var nav2 = document.getElementById('nav2');
        
        nav1.click();
        nav2.click();
        nav1Clicked = false;
    }
}
var tmp1 = document.getElementById('nav1');
tmp1.addEventListener('click', clickNav1);

var tmp2 = document.getElementById('nav2');
tmp2.addEventListener('click', clickNav2);

//action khi click nav3 nav4
var nav3Clicked = false;
var nav4Clicked = false;

function clickNav3() {
    var ac3 = document.getElementById('III');
    ac3.classList.toggle('actionClickNav3');
        nav3Clicked = !nav3Clicked;
        
    if (nav4Clicked) {
        var nav3 = document.getElementById('nav3');
        var nav4 = document.getElementById('nav4');
        nav3.click();
        nav4.click();
        nav4Clicked = false;
    }
}

function clickNav4() {
    var ac4 = document.getElementById('III');
    ac4.classList.toggle('actionClickNav4');
        nav4Clicked = !nav4Clicked;
        
    if (nav3Clicked) {
        var nav3 = document.getElementById('nav3');
        var nav4 = document.getElementById('nav4');
        
        nav3.click();
        nav4.click();
        nav3Clicked = false;
    }
}
var tmp3 = document.getElementById('nav3');
tmp3.addEventListener('click', clickNav3);

var tmp4 = document.getElementById('nav4');
tmp4.addEventListener('click', clickNav4);
   
//click các nav hiện content1
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll("#linkContent1");
    const contents = document.querySelectorAll(".content1");

    buttons.forEach(function(button, index) {
        button.addEventListener("click", function() {
            // Ẩn tất cả các div
            contents.forEach(function(div) {
                div.classList.remove("active");
            });
            // Hiển thị div tương ứng với button được nhấp vào
            contents[index].classList.add("active");
        });
    });
});