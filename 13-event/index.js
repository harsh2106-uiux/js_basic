       let btn1 = document.querySelector("#btn1");

        btn1.onclick = () => {
            console.log("btn1 was clicked");
            let a = 25;
            a++;console.log(a);
            
            
        }

     let div = document.querySelector("div");

     div.onmouseover = () => {
        console.log("inside the div");

        
     }



     let box = document.getElementById("box");

      btnClick.addEventListener("click", function () {
        box.style.backgroundColor = "red";
      });
      btnDblClick.addEventListener("dblclick", function () {
        box.style.backgroundColor = "yellow";
      });
      btnMouseUp.addEventListener("mouseup", function () {
        box.style.backgroundColor = "green";
      });
      btnMouseDown.addEventListener("mousedown", function () {
        box.style.backgroundColor = "brown";
      });
      btnMouseOver.addEventListener("mouseover", function () {
        box.style.backgroundColor = "Orange";
      });
      btnMouseLeave.addEventListener("mouseleave", function () {
        box.style.backgroundColor = "pink";
      });

