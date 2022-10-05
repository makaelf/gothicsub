let twist = true;
function change() {
    const submenu =document.getElementById("submenu");
    if(twist){
        submenu.classList.remove("desappear");
        submenu.classList.add("me");

        twist = false;
    } else {
        submenu.classList.remove("me");
        submenu.classList.add("desappear");
;
        twist = true;
    }
}

function imagem1(){
    document.getElementById("imagem_center").src="referencias1.webp";
}

function imagem2(){
    document.getElementById("imagem_center").src="referencias2.webp";
}

function imagem3(){
    document.getElementById("imagem_center").src="referencias3.webp";
}

function imagem4(){
    document.getElementById("imagem_center").src="referencias4.webp";
}

function imagem5(){
    document.getElementById("imagem_center").src="referencias5.webp";
}

function imagem6(){
    document.getElementById("imagem_center").src="referencias6.webp";
}

function carousell(idname){
    let img = document.querySelector("#inf" + idname.charAt(3) + " img").cloneNode(true)
    document.querySelector(".top").removeChild(document.querySelector(".top img"));
    document.querySelector(".top").appendChild(img)

    let texto = document.querySelector("#inf" + idname.charAt(3) + " .texto").cloneNode(true)
    document.querySelector(".top").removeChild(document.querySelector(".top .texto"));
    document.querySelector(".top").appendChild(texto)


}

