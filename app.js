let inp = document.querySelector('input')
inp.onchange = () => {
    alert("Koramiz siz ingiliz tilda to'g'ri nom kirita olibsizmi❓");
    document.body.style.background = inp.value;
    if (inp.value == document.body.style.background){
        alert("To'g'ri nomni kiritdingiz✅");
    }else{
        alert("Noto'g'ri nom kiritdingiz qaytadan urinib ko'ring❌");
    }

}