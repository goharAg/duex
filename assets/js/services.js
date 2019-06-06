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



  $(".brandtext").mouseover(function(){
            let num = this.id;
            $(".brandingtext"+num).stop(true).slideDown('fast');
        });
        $(".brandtext").mouseout(function(){
           let num = this.id;
            $(".brandingtext"+num).stop(true).slideUp('fast');
        });

      $('#myRange').on('change', handleChange);

        function handleChange () {

      let theValue = $('#myRange').val();
      let minValue = $('#myRange').attr("min");
      let maxValue = $('#myRange').attr("max");
      let value = (theValue - minValue)/(maxValue - minValue);

      $("#spanText").text(theValue + '$');

      console.log(theValue);

      $('#myRange').css(' backgroundImage' , '-webkit-gradient(linear, left top, right top, ' 
        + 'color-stop(' + value +' , #047a9c),'   
        + 'color-stop(' + value + ', #c7c7c7)'+ ')');
     }








    

  


        
  
});





// Instantiate the Bootstrap carousel
$('.multi-item-carousel').carousel({
  interval: false
});

// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.
$('.multi-item-carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  if (next.next().length>0) {
    next.next().children(':first-child').clone().appendTo($(this));
  } else {
    $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  }
});
  


