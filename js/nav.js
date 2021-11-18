
        const sections = document.querySelectorAll('section');
        const navLi = document.querySelectorAll('.collapse ul li');
        console.log(sections)
        window.addEventListener('scroll',function()
        {
          let current = "";
          sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if(pageYOffset + 160 >= sectionTop)
            {
              current = section.getAttribute('id');
            }
          })
          navLi.forEach(li => {
            li.classList.remove('active');
            if(li.classList.contains(current))
            {
              li.classList.add('active')
            }
          });
        })
  