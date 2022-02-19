let arr = [];
addWord.onclick = function() {
    if (forbid.value.length === 0) {
        addWordGroup.style.animation = "drag 3 0.2s"
        setTimeout(() => {
            addWordGroup.style.animation = "none"
        }, 1000)
    } else {
        let info = forbid.value;
        arr.push(info);
        if (arr.length === 1) {
            mas.innerHTML += info;
            forbid.value = '';
        } else {
            mas.innerHTML += ', ' + info;
            forbid.value = '';
        }
    }
}
cenzor.onclick = function() {
    let info = '';
    info = area.value.toLowerCase();
    let infoArr = info.split(' ');
    console.log(infoArr);
    for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i < infoArr.length; i++) {
            if (arr[j] == infoArr[i]) {
                let star = '';
                for (let s = 0; s < arr[j].length; s++) {
                    star += '*';
                    infoArr[i] = star;
                }
            }
        }
    }
    let str = infoArr.join(' ');
    area.value = str;
}

$('#nav-btn_about').click(() => {
    window.location.href = "./pages/about.html";
})

$('#nav-btn_how-use').click(() => {
    window.location.href = "./pages/howUse.html";
})

$('#nav-btn_contact').click(() => {
    window.location.href = "./pages/contact.html";
})