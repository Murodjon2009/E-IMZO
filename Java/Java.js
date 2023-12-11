const text1_section = document.querySelector('.text_1_section'),
      text2_section = document.querySelector('.text_2_section'),
      text3_section = document.querySelector('.text_3_section'),
      section_contenier1 = document.querySelector('.section_contenier_1'),
      button1_section = document.querySelector('.button_1_section'),
      button2_section = document.querySelector('.button_2_section'),
      face_id_uchun = document.querySelector('.face_id_uchun'),
      oddiy_usul_uchun = document.querySelector('.oddiy_usul_uchun'),
      btn1_section = button1_section.innerHTML,
      btn2_section = button2_section.innerHTML,
      section_cntr1 = section_contenier1.innerHTML;

text2_section.addEventListener('click', ()=> {
    text2_section.style.borderBottom = `4px solid blue`
    text1_section.style.borderBottom = `4px solid #C4C4C4`
    text3_section.style.borderBottom = `4px solid #C4C4C4`
    section_contenier1.innerHTML = ""
    button1_section.innerHTML = ""
    button1_section.classList.remove('button_1_section')
    button2_section.innerHTML = ""
    button2_section.classList.remove('button_2_section')
    face_id_uchun.innerHTML = `
    <p class="yaratilishi_jarayonda">Ushu imkoniyat yaratilish jarayonida</p>`
    oddiy_usul_uchun.innerHTML = ""
    face_id_uchun.style.transform = `translateY(80px)`
    face_id_uchun.style.transition = `1s`
    oddiy_usul_uchun.style.transform = `translateY(0px)`
    oddiy_usul_uchun.style.transition = `1s`
    section_contenier1.style.transform = `translateY(0px)`
    button1_section.style.transform = `translateY(0px)`
    button2_section.style.transform = `translateY(0px)`

    

})
text3_section.addEventListener('click', ()=> {
    text3_section.style.borderBottom = `4px solid blue`
    text2_section.style.borderBottom = `4px solid #C4C4C4`
    text1_section.style.borderBottom = `4px solid #C4C4C4`
    section_contenier1.innerHTML = ""
    button1_section.innerHTML = ""
    button1_section.classList.remove('button_1_section')
    button2_section.innerHTML = ""
    button2_section.classList.remove('button_2_section')
    face_id_uchun.innerHTML = ""
    oddiy_usul_uchun.innerHTML = `
    <p class="davlat_xizmat">Davlat xizmatlari markaziga borib olinadi</p> `
    face_id_uchun.style.transform = `translateY(0px)`
    face_id_uchun.style.transition = `1s`
    oddiy_usul_uchun.style.transform = `translateY(80px)`
    oddiy_usul_uchun.style.transition = `1s`
    section_contenier1.style.transform = `translateY(0px)`
    button1_section.style.transform = `translateY(0px)`
    button2_section.style.transform = `translateY(0px)`


})
text1_section.addEventListener('click', ()=> {
    text1_section.style.borderBottom = `4px solid blue`
    text3_section.style.borderBottom = `4px solid #C4C4C4`
    text2_section.style.borderBottom = `4px solid #C4C4C4`
    section_contenier1.innerHTML = section_cntr1
    button1_section.innerHTML = btn1_section
    button1_section.classList.add('button_1_section')
    button2_section.innerHTML = btn2_section
    button2_section.classList.add('button_2_section')
    face_id_uchun.innerHTML = ""
    oddiy_usul_uchun.innerHTML = ""
    face_id_uchun.style.transform = `translateY(0px)`
    face_id_uchun.style.transition = `1s`
    oddiy_usul_uchun.style.transform = `translateY(0px)`
    oddiy_usul_uchun.style.transition = `1s`
    section_contenier1.style.transform = `translateY(35px)`
    button1_section.style.transform = `translateY(35px)`
    button2_section.style.transform = `translateY(35px)`
    section_contenier1.style.transition = `1s`
    button1_section.style.transition = `1s`
    button2_section.style.transition = `1s`
})


