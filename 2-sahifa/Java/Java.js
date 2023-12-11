const text1_section = document.querySelector('.text_1_section'),
      text2_section = document.querySelector('.text_2_section'),
      contenier1_section = document.querySelector('.contenier_1_section'),
      contenier1_HTML = contenier1_section.innerHTML,
      div1_contenier = document.querySelector('.div_contenier_1'),
      div1_HTML = div1_contenier.innerHTML,
      buttonNext = document.querySelector('.keyingi_button'),
      buttonNextHTML = buttonNext.innerHTML,
      div_contenier2 = document.querySelector('.div_contenier_2'),
      div_contenier2_HTML = div_contenier2;



      text2_section.addEventListener('click', ()=> {
        text2_section.style.borderBottom = `4px solid blue`
        text1_section.style.borderBottom = `4px solid #C4C4C4`
        contenier1_section.innerHTML = ""
        div1_contenier.innerHTML = ""
        buttonNext.innerHTML = ""
        buttonNext.classList.remove('keyingi_button')
        div_contenier2.innerHTML = div_contenier2_HTML.innerHTML
      })
      text1_section.addEventListener('click', ()=> {
        text1_section.style.borderBottom = `4px solid blue`
        text2_section.style.borderBottom = `4px solid #C4C4C4`
        contenier1_section.innerHTML = contenier1_HTML
        div1_contenier.innerHTML = div1_HTML
        buttonNext = buttonNextHTML
        buttonNext.classList.add('keyingi_button')
        div_contenier2.innerHTML = ""

      })
