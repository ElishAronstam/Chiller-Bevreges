// // ב HTML
// // צריך לשים איי די גם לאייקון של הבורגר
// // וגם לנאב עצמו



// function burger_init(){
//   // הכפתור של הבורגר צריך את האיי די הזה
//   // console.log("burger")
//   let burger_btn = document.querySelector("#burger_btn");
//   let close_btn = document.querySelector("#close_btn");
//   let header_hr = document.querySelector("#id_header_hr");
 
//   // התפריט שייעלם ויחזור צריך
//   // את האיי די הזה
//   let id_nav_show_hide = document.querySelector("#id_nav_show_hide");

//   burger_btn.addEventListener("click", function(){
//     id_nav_show_hide.style.display = "block";
//     burger_btn.style.display = "none";
//     close_btn.style.display = "block";
//     header_hr.style.display = "block";
//     document.querySelector("header").classList.add("header_black");
//     // id_nav_show_hide.style.display = (id_nav_show_hide.style.display != "block") ? "block" : "none";
//   })

//   close_btn.addEventListener("click", function(){
//     id_nav_show_hide.style.display = "none";
//     burger_btn.style.display = "block";
//     close_btn.style.display = "none";
//     header_hr.style.display = "none";
//     document.querySelector("header").classList.remove("header_black");
//     // id_nav_show_hide.className = "col-6 text-center";
//   })
// }

// burger_init();


function declareBtns(){
  let burger_btn = document.querySelector("#burger_btn");
  let nav_open = document.querySelector("#nav_open");
  let close_btn = document.querySelector("#close_btn");

  burger_btn.addEventListener("click",function(){
    //
    nav_open.style.display = "block";//opens the menu
    close_btn.style.display = "block";//opens the close
    burger_btn.style.display = "none";//closes the burger
   
  })

  close_btn.addEventListener("click", function(){
      nav_open.style.display = "none";
       burger_btn.style.display = "block";
       close_btn.style.display = "none";
        
      })
}

declareBtns();