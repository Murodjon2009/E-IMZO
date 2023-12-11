const text1_section = document.querySelector('.text_1_section'),
      text2_section = document.querySelector('.text_2_section'),
      contenier1_section = document.querySelector('.contenier_1_section'),
      contenier1_HTML = contenier1_section.innerHTML,
      div_contenier_1 = document.querySelector('.div_contenier_1'),
      div1_HTML = div_contenier_1.innerHTML,
      keyingi_button = document.querySelector('.keyingi_button'),
      keyingi_button_HTML = keyingi_button.innerHTML,
      div_contenier_2 = document.querySelector('.div_contenier_2'),
      div2_HTML = div_contenier_2.innerHTML,
      jismoniy_shaxs = document.querySelector('.jismoniy_shaxs'),
      jismoniy_shaxs_HTML = jismoniy_shaxs.innerHTML;
      div_contenier_2.innerHTML = ""
      jismoniy_shaxs.innerHTML = ""
      jismoniy_shaxs.classList.remove('jismoniy_shaxs')



      text2_section.addEventListener('click', ()=> {
        text2_section.style.borderBottom = `4px solid blue`
        text1_section.style.borderBottom = `4px solid #C4C4C4`
        contenier1_section.innerHTML = ""
        div_contenier_1.innerHTML = ""
        keyingi_button.innerHTML = ""
        keyingi_button.classList.remove('keyingi_button')
        div_contenier_2.innerHTML = div2_HTML
        jismoniy_shaxs.innerHTML = jismoniy_shaxs_HTML
        jismoniy_shaxs.classList.add('jismoniy_shaxs')
        text2_section.style.fontWeight = `700`
        text1_section.style.fontWeight = `400`
        
      })
      text1_section.addEventListener('click', ()=> {
        text1_section.style.borderBottom = `4px solid blue`
        text2_section.style.borderBottom = `4px solid #C4C4C4`
        contenier1_section.innerHTML = contenier1_HTML
        div_contenier_1.innerHTML = div1_HTML
        keyingi_button.innerHTML = keyingi_button_HTML
        keyingi_button.classList.add('keyingi_button')
        div_contenier_2.innerHTML = ""
        jismoniy_shaxs.innerHTML = ""
        jismoniy_shaxs.classList.remove('jismoniy_shaxs')
        text1_section.style.fontWeight = `700`
        text2_section.style.fontWeight = `400`



      })
