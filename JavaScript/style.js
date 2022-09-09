"use strict"

const select = $("#select"),
    non = $("#non"),
    buy = $("#buy"),
    modalwindow = $(".modalwindow"),
    close = $("#close"),
    cm25 = $("#flexRadioDefault1"),
    cm30 = $("#flexRadioDefault2"),
    cm35 = $("#flexRadioDefault3"),
    pamidor = $("#pamidor"),
    kurka = $("#kurka"),
    zaytun = $("#zaytun"),
    tuzlangan = $("#tuzlangan"),
    qoziqorin = $("#qoziqorin"),
    qazi = $("#qazi"),
    achchiq = $("#achchiq"),
    sosiska = $("#sosiska"),
    bodygadiv = $(".bodygadiv"),
    input = $a("input"),
    succesful = $(".succesful"),
    nooow = $('.nooow');
     


    bodygadiv.style.display="none"


if (cm25.value == "25cm") {
    succesful.classList.add("nooow");
    succesful.style.display="none"
} else if (cm30.value == "30cm") {
    succesful.classList.add("nooow");
      succesful.style.display = "none"
} else if (cm35.value == "35cm") {
    succesful.classList.add("nooow");
      succesful.style.display = "none"
}
cm25.addEventListener("click", () => {
    succesful.classList.add("colnew");
    succesful.style.display = "block"
    nooow.style.display="none"
});
cm30.addEventListener("click", () => {
    succesful.classList.add("colnew");
    succesful.style.display = "block"
    nooow.style.display = "none"
});
cm35.addEventListener("click", () => {
    succesful.classList.add("colnew");
    succesful.style.display = "block"
    nooow.style.display = "none"
});
   










close.addEventListener("click", () => {
    modalwindow.classList.remove("modal-win2");
     bodygadiv.style.display = "none"
});
  buy.addEventListener("click", () => {
      modalwindow.classList.add("modal-win2");
        bodygadiv.style.display = "block"

  })



select.addEventListener("change", () => {
    let nonga = $(".nonga")
    nonga.textContent=select.value
})
cm25.addEventListener("change", () => {
    let katta = $(".katta")
    katta.textContent=cm25.value
})
cm30.addEventListener("change", () => {
    let katta = $(".katta")
    katta.textContent = cm30.value
})
cm35.addEventListener("change", () => {
    let katta = $(".katta")
    katta.textContent = cm35.value
})

  let pam = $(".pam")

pamidor.addEventListener("click", () => {

    if (pam.textContent == pamidor.value) {
        pam.textContent = ""
    } else {
        pam.textContent = pamidor.value;
    }


})
let kurk = $(".kurk")
kurka.addEventListener("click", () => {

    if (kurk.textContent == kurka.value) {
        kurk.textContent = ""
    } else {
        kurk.textContent = kurka.value;
    }
})
let zay = $(".zay")
zaytun.addEventListener("click", () => {

    if (zay.textContent == zaytun.value) {
        zay.textContent = ""
    } else {
        zay.textContent = zaytun.value;
    }
})

 let tuz = $(".tuz")
tuzlangan.addEventListener("click", () => {

    if (tuz.textContent == tuzlangan.value) {
        tuz.textContent = ""
    } else {
        tuz.textContent = tuzlangan.value;
    }
})
 let qoz = $(".qoz")
qoziqorin.addEventListener("click", () => {

    if (qoz.textContent == qoziqorin.value) {
        qoz.textContent = ""
    } else {
        qoz.textContent = qoziqorin.value;
    }
})
 let qazil = $(".qazil")
qazi.addEventListener("click", () => {

    if (qazil.textContent == qazi.value) {
        qazil.textContent = ""
    } else {
        qazil.textContent = qazi.value;
    }
})
let ach = $(".ach")
achchiq.addEventListener("click", () => {

    if (ach.textContent == achchiq.value) {
        ach.textContent = ""
    } else {
        ach.textContent = achchiq.value;
    }
})
let sos = $(".sos")
sosiska.addEventListener("click", () => {

    if (sos.textContent == sosiska.value) {
        sos.textContent = ""
    } else {
        sos.textContent = sosiska.value;
    }
})


// pamidor.addEventListener("change", () => {
//     let pam = $(".pam")  let pam = $(".pam")
//     pam.textContent=pamidor.value
// })
// kurka.addEventListener("change", () => {
//     let kurk = $(".kurk")
//     kurk.textContent = kurka.value
// })
// zaytun.addEventListener("change", () => {
//     let zay = $(".zay")
//     zay.textContent = zaytun.value
// })
// tuzlangan.addEventListener("change", () => {
//     let tuz = $(".tuz")
//     tuz.textContent = tuzlangan.value
// })
// qoziqorin.addEventListener("change", () => {
//     let qoz = $(".qoz")
//     qoz.textContent = qoziqorin.value
// })
// qazi.addEventListener("change", () => {
//     let qazil = $(".qazil")
//     qazil.textContent = qazi.value
// })
// achchiq.addEventListener("change", () => {
//     let ach = $(".ach")
//     ach.textContent=achchiq.value
// })
// sosiska.addEventListener("change", () => {
//     let sos = $(".sos")
//     sos.textContent = sosiska.value
// })


