$( document ).ready(function() {
  
  ServicesItemAnim();

  /**
   * services item hover rotation,
   * stop services item rotation when srvice is checked
  */
  function ServicesItemAnim(){
    const servicesItem = $('.services-item');

    servicesItem.mouseenter(function(){
      this.querySelector('.card').style.transform = 'rotateY(180deg)';
      this.style.transition = '.3s';
      this.style.borderBottom = '8px solid #337ab7';
    });

    servicesItem.mouseleave(function(){
      this.querySelector('.card').style.transform = 'rotateY(0)';
      this.style.transition = '.3s';
      this.style.borderBottomWidth = '0';
      const checkboxes = this.getElementsByTagName('input');

      for(let i = 0; i < checkboxes.length; i ++){
        if(checkboxes[i].checked === true){
          this.querySelector('.card').style.transform = 'rotateY(180deg)';
          this.style.borderBottom = '8px solid #337ab7';
          break;
        } else {
          this.querySelector('.card').style.transform = 'rotateY(0)';
          this.style.transition = '.3s';
          this.style.borderBottomWidth = '0';
        }
      }
    });
  };



  $(".brandimg").mouseover(function(){
            let num = this.id;
            $(".brandingtext"+num).stop(true).slideDown('fast');
        });
        $(".brandimg").mouseout(function(){
           let num = this.id;
            $(".brandingtext"+num).stop(true).slideUp('fast');
        });      
  




$('.item1').click(function(){
  let go_to_url = "C:/Users/Gohar/Desktop/duex_homepage/ourCaseOne.html";    
 // window.open(go_to_url, '_blank');
document.location.href = go_to_url;
$('.maint').fadeOut('slow');

});



});



  

