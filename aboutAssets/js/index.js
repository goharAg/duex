(function(){
  const aboutSection = document.querySelector('#about');
  const aboutImg = document.querySelector('.about-img');

  aboutImg.style.height = aboutImg.offsetWidth + 'px';

  window.onresize = (e)=>{
    aboutImg.style.height = aboutImg.offsetWidth + 'px';
  }

  aboutSection.addEventListener('mousemove', (e) => {
    const windowWidth = window.innerWidth / 5;
    const windowHeight = window.innerHeight / 5 ;
    const mouseX = e.clientX / windowWidth;
    const mouseY = e.clientY / windowHeight;
    aboutImg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
  });
})()


