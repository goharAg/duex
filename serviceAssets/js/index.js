const portfolioTabData = {
  "Branding":[
    {"tabImage":"./assets/images/portfolio.png",
      "tabText":"branding"},
    {"tabImage":"./assets/images/portfolio.png",
      "tabText": "branding"},
    {"tabImage":"./assets/images/portfolio.png",
      "tabText": "branding"},
    {"tabImage":"./assets/images/portfolio.png",
      "tabText": "branding"},
    {"tabImage":"./assets/images/portfolio.png",
      "tabText": "branding"},
    {"tabImage":"./assets/images/portfolio.png",
      "tabText": "branding"},
    {"tabImage":"./assets/images/portfolio.png",
      "tabText": "branding"},
    {"tabImage":"./assets/images/portfolio.png",
      "tabText": "branding"} 
  ],

  "UI/UX Design":[
    {"tabImage":"./assets/images/portfolio.png",
      "tabText": "UI/UX Design"},
    {"tabImage":"./assets/images/portfolio.png",
      "tabText": "UI/UX Design"},
    {"tabImage":"./assets/images/portfolio.png",
      "tabText": "UI/UX Design"},
    {"tabImage":"./assets/images/portfolio.png",
      "tabText": "UI/UX Design"}    
  ],

  "Graphic Design":[
    {"tabImage":"./assets/images/portfolio.png",
      "tabText": "graphic design"},
    {"tabImage":"./assets/images/portfolio.png",
      "tabText": "graphic design"},
    {"tabImage":"./assets/images/portfolio.png",
      "tabText": "graphic design"}  
  ],

  "Motion Design":[
    {"tabImage":"./assets/images/portfolio.png",
      "tabText": "Motion Design"},
    {"tabImage":"./assets/images/portfolio.png",
      "tabText": "Motion Design"},
    {"tabImage":"./assets/images/portfolio.png",
      "tabText": "Motion Design"},
    {"tabImage":"./assets/images/portfolio.png",
      "tabText": "Motion Design"},
    {"tabImage":"./assets/images/portfolio.png",
      "tabText": "Motion Design"},  
  ],

  "3D Design":[
    {"tabImage":"./assets/images/portfolio.png",
      "tabText": "3D Design"},
    {"tabImage":"./assets/images/portfolio.png",
    "tabText": "3D Design"},
    {"tabImage":"./assets/images/portfolio.png",
      "tabText": "3D Design"},
    {"tabImage":"./assets/images/portfolio.png",
      "tabText": "3D Design"},
    {"tabImage":"./assets/images/portfolio.png",
      "tabText": "3D Design"},
    {"tabImage":"./assets/images/portfolio.png",
      "tabText": "3D Design"},
    {"tabImage":"./assets/images/portfolio.png",
      "tabText": "3D Design"},
    {"tabImage":"./assets/images/portfolio.png",
      "tabText": "3D Design"},  
  ],

  "Web Development":[
    {"tabImage":"./assets/images/portfolio.png",
      "tabText": "Web Development"},
    {"tabImage":"./assets/images/portfolio.png",
      "tabText": "Web Development"},
    {"tabImage":"./assets/images/portfolio.png",
      "tabText": "Web Development"},
    {"tabImage":"./assets/images/portfolio.png",
      "tabText": "Web Development"},  
  ],

  "Mobile Development":[
    {"tabImage":"./assets/images/portfolio.png",
      "tabText": "Mobile Development"},
    {"tabImage":"./assets/images/portfolio.png",
      "tabText": "Mobile Development"},
    {"tabImage":"./assets/images/portfolio.png",
      "tabText": "Mobile Development"},
    {"tabImage":"./assets/images/portfolio.png",
      "tabText": "Mobile Development"},
    {"tabImage":"./assets/images/portfolio.png",
      "tabText": "Mobile Development"},
    {"tabImage":"./assets/images/portfolio.png",
      "tabText": "Mobile Development"},
    {"tabImage":"./assets/images/portfolio.png",
      "tabText": "Mobile Development"},
    {"tabImage":"./assets/images/portfolio.png",
      "tabText": "Mobile Development"},  
  ]
};
$( document ).ready(function() {
  
  clickMenuLinks();
  setHelpWindowPosition();
  setParallaxBgPadding();
  aboutAnim();
  renderPortfolioTabs();
  portfolioTabAnim();
  setPortfolioTabModalData();

  /**
   * fix navbar top
  */
  $('#parallax-wrapper').scroll( function(){
    $('.navbar').css( {top: `${$(this).scrollTop()}px`} );
  });

  /**
   * click menu links,
   * add animation scroll
  */
  function clickMenuLinks (){
    $('nav .nav a').click( ()=>{
      $('.parallax-bg').css({transform: 'none'});
    } );
    
    $('#parallax-wrapper').scroll( ()=>{
      $('.parallax-bg').css({transform: 'translateZ(-1px) scale(2)'});
    } );
  };

  /**
   * help winndow position by phone
  */  
  function setHelpWindowPosition(){
    const helpWindow = document.querySelector('.help_more');
    const parallaxWrapper = document.querySelector('#parallax-wrapper');

    if(parallaxWrapper.offsetWidth - parallaxWrapper.clientWidth === 0){
      helpWindow.style.right = 0+'px';
    }
  };

  /**
   * set parallaxBg padding 
   * by phone
  */  
  function setParallaxBgPadding(){
    const parallaxBg = $('.parallax-bg');
    const parallaxWrapper = document.querySelector('#parallax-wrapper');

    if(parallaxWrapper.offsetWidth - parallaxWrapper.clientWidth === 0){
      parallaxBg.css( {'padding-right':'0px'} );
    }
  };

  /**
   * add about image animation on mousemove
  */
  function aboutAnim(){
    const aboutsection = document.querySelector('#about');
    
    aboutsection.addEventListener('mousemove', (e)=>{
      const mouseX = e.clientX / (window.innerWidth / 5);
      const mouseY = e.clientY / (window.innerHeight / 5);
      const note = document.querySelector('.about-img .note');
      const cube_1 = document.querySelector('.about-img .cube-1');
      const cube_1_shadow = document.querySelector('.about-img .cube-1-shadow');
      const cube_2 = document.querySelector('.about-img .cube-2');
      const cube_2_shadow = document.querySelector('.about-img .cube-2-shadow');
      const cube_3 = document.querySelector('.about-img .cube-3');
      const cube_3_shadow = document.querySelector('.about-img .cube-3-shadow');

      note.style.transform = `translate3d(-${mouseX/3}%, -${mouseY/3}%, 0)`;
      cube_1.style.transform = `translate3d(-${mouseX*3}%, -${mouseY*3}%, 0)`;
      cube_1_shadow.style.transform = `translate3d(${mouseX*2}%, ${mouseY*1}%, 0)`;
      cube_2.style.transform = `translate3d(${mouseX*3}%, ${mouseY*3}%, 0)`;
      cube_2_shadow.style.transform = `translate3d(-${mouseX*3}%, -${mouseY*1}%, 0)`;
      cube_3.style.transform = `translate3d(-${mouseX*4}%, ${mouseY*3}%, 0)`;
      cube_3_shadow.style.transform = `translate3d(${mouseX*2}%, -${mouseY*1}%, 0)`;
    });
  };

  /**
   * render portfolio tabs data
  */
  function renderPortfolioTabs(){
    const portfoliTabContainer = document.querySelector('.portfolio-tab-container');
    // const portfolioTabs = document.querySelector('#portfolio-tabs');
    // const ul = document.createElement('ul');

    /* create portfolio items */
    // Object.keys(portfolioTabData).map( (elem, index)=>{
    //   ul.innerHTML += `<li><a rel = #tab-${index+1}> ${ elem } </a></li>`;
    // 	portfolioTabs.appendChild(ul);
    // } );

    /* create portfolio tab content */
    Object.keys(portfolioTabData).map( (elem, index)=>{
      portfoliTabContainer.innerHTML += `<div id=tab-${index+1} class = portfolio-tab-content>
      ${
        /* create portfolio list item */
        portfolioTabData[elem].map( (elem)=>{
          return `<div class = list-item data-toggle="modal" data-target="#portfolio-modal">
            <img src=${elem.tabImage}>
            <span>${elem.tabText}</span>
          </div>`;
        } )
      }
      </div>`
    } );      
  };

  const listIem = document.querySelectorAll('.list-item');
  for(let i = 0; i < listIem.length; i ++){
    listIem[i].nextSibling.remove();
  }

  /**
   * set portfolio tabs modal 
   * from tab list item
  */
  function setPortfolioTabModalData(){
    const portfolioModal = $('#portfolio-modal');
    const listItem = $('.portfolio-tab-container .list-item');

    $('.portfolio-tab-container .list-item').on("click", function(){
      $('#portfolio-modal .modal-title').text( $(this).find('span').html() );
      $('#portfolio-modal .modal-body img').attr( 'src', $(this).find('img').attr('src') );
    });
  };

  /**
   * portfolio tabs animation
  */  
  function portfolioTabAnim (){
    $('.portfolio-tab-content').hide();
    $('.portfolio-tab-content:first').show();
    $('.portfolio-items a:first').addClass('portfolio-item-active');

    $(".portfolio-items a").on("click", function(){
      $(".portfolio-items a").removeClass("portfolio-item-active");
      $(this).addClass("portfolio-item-active");
      $('.portfolio-tab-content').hide();

      const selectTab = $(this).attr("rel");
      $(selectTab).fadeIn();
    });
  };


 
  
});




  

