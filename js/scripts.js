/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});

const emailInput = document.getElementById("email");
const suggestionsList = document.getElementById("suggestions");

const domains = ["gmail.com", "yahoo.com.tw", "outlook.com", "icloud.com"];

emailInput.addEventListener("input", function() {
    const value = emailInput.value;
    if (value.includes("@")) {
        const [localPart, domainPart] = value.split("@");
        suggestionsList.innerHTML = ""; // 清空建議列表

        if (domainPart === "") {
            domains.forEach(domain => {
                const suggestionItem = document.createElement("li");
                suggestionItem.textContent = `${localPart}@${domain}`;
                suggestionItem.onclick = () => {
                    emailInput.focus();
                    emailInput.value = suggestionItem.textContent;
                    suggestionsList.innerHTML = "";
                    emailInput.blur();

                };
                suggestionsList.appendChild(suggestionItem);
            });
        }

    } else {
        suggestionsList.innerHTML = ""; // 如果沒有 @，不顯示建議
    }
});

// function detectDevice() {
//     const width = window.innerWidth;

//     if (width <= 767) {
//         // console.log("使用者是手機");
//         document.body.classList.add("mobile");
//     } else if (width >= 768 && width <= 1024) {
//         // console.log("使用者是平板");
//         document.body.classList.add("tablet");
//     } else {
//         // console.log("使用者是桌機");
//         document.body.classList.add("desktop");
//     }
// }

// // 當頁面載入時執行
// window.onload = detectDevice;
// // 當視窗大小改變時也執行
// window.onresize = detectDevice;


function turnAttend(){
    let attend = $("#attend").val();
    if(attend === '1'){
        $("#attendArea").show()
        $('#amount1').val(1)
        $('#amount2').val(0)
        $('#amount3').val(0)
        $('#amount4').val(0)
    }else{
        $("#attendArea").hide()
        $('#amount1').val('')
        $('#amount2').val('')
        $('#amount3').val('')
        $('#amount4').val('')
    }
}

function invite(){
    let inviteSelect = $("#inviteSelect").val();
    if(inviteSelect === '1'){
        $('#recName').val($("#name").val());
        $('#email').val('');
        $("#contact1").show()
        $("#contact2").show()
        $("#contact3").hide()
    }else if(inviteSelect === '2'){
        $('#recName').val('');
        $('#address').val('');
        $("#contact1").hide()
        $("#contact2").hide()
        $("#contact3").show()
    }else if(inviteSelect === '3'){
        $("#contact1").hide();
        $("#contact2").hide();
        $("#contact3").hide();
        $('#recName').val('');
        $('#address').val('');
        $('#email').val('');
    }else if(inviteSelect === '4'){
        $("#contact1").show();
        $("#contact2").show();
        $("#contact3").show();
        $('#recName').val($('#recName').val()??$("#name").val());
    }
}

$('#sendButton').on('click', function(){
    if(!$("#name").val()){
        Swal.fire({
            title: "提醒您",
            text: "要填寫姓名我們才知道您是誰!",
            icon: "info"
          })
    }else if(!$("#phone").val()){
        Swal.fire({
            title: "提醒您",
            text: "要填寫電話我們才聯絡的到您!",
            icon: "info"
          })
    }else if(!$("#attend").val()){
        Swal.fire({
            title: "提醒您",
            text: "要回答我們是否赴宴我們才方便統計人數唷!",
            icon: "info"
          })
    }else if(!$("#amount1").val()){
        Swal.fire({
            title: "提醒您",
            text: "要回答我們出席人數我們才方便統計人數唷!",
            icon: "info"
          })
    }else if(!$("#amount2").val()){
        Swal.fire({
            title: "提醒您",
            text: "要回答我們是否需要兒童座椅我們才方便準備唷!",
            icon: "info"
          })
    }else if(!$("#amount3").val()){
        Swal.fire({
            title: "提醒您",
            text: "要回答我們是否需要兒童餐具我們才方便準備唷!",
            icon: "info"
          })
    }else if(!$("#amount4").val()){
        Swal.fire({
            title: "提醒您",
            text: "要回答我們是否有素食者我們才方便統計唷!",
            icon: "info"
          })
    }else if(!$("#name").val()){
        Swal.fire({
            title: "提醒您",
            text: "要告訴我們您是否需要喜帖唷!",
            icon: "info"
          })
    }else if(!$("#inviteSelect").val()){
        Swal.fire({
            title: "提醒您",
            text: "要填寫姓名我們才知道您是誰!",
            icon: "info"
          })
    }else if(!$("#recName").val() && $("#inviteSelect").val()==='1'){
        Swal.fire({
            title: "提醒您",
            text: "要填寫收件姓名才收的到信唷!",
            icon: "info"
          })
    }else if(!$("#address").val() && $("#inviteSelect").val()==='1'){
        Swal.fire({
            title: "提醒您",
            text: "要填寫收件地址才收的到信唷!",
            icon: "info"
          })
    }else if(!$("#email").val() && $("#inviteSelect").val()==='2'){
        Swal.fire({
            title: "提醒您",
            text: "要填寫EMAIL才收的到信唷!",
            icon: "info"
          })
    }else{
        sendGoogle();
    }
})

function sendGoogle(){
    fetch("https://script.google.com/macros/s/AKfycbwS3YoJf_PX-BIYyq6By36uHUyGNpfCJITh38nPQrvv4GMHNeM5_A64xnaADqbkLrPn/exec", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
            "entry.1362475073": $("#name").val(),//姓名
            "entry.1892843083": $("#phone").val(),//電話
            "entry.265378867": $("#attend option:selected").text(),//是否赴宴
            "entry.2138019110": $("#amount1").val()??'',//出席總人數
            "entry.958242877": $("#amount2").val()??'',//兒童座椅
            "entry.1589358472": $("#amount3").val()??'',//兒童餐具
            "entry.1197319279": $("#amount4").val()??'',//吃素
            "entry.834563395": $("#inviteSelect option:selected").text()??'',//喜帖
            "entry.179543552": $("#recName").val()??'',//收件姓名
            "entry.459772703": $("#address").val()??'',//收件地址
            "entry.102709322": $("#email").val()??'',//email
            "entry.903740858": $("#message").val()??''//留言
        })
      })
      .then(response => response.text())
      .then(data => 
        Swal.fire({
            title: "成功送出",
            text: "謝謝您的回答!",
            icon: "success"
          })
      )
      .catch(error => 
        Swal.fire({
            title: "送出失敗",
            text: "重複發生時請與我們聯絡!",
            icon: "error"
          })
      ); 
}
