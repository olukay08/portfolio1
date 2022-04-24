var buto=document.getElementById('butolee');
buto.addEventListener('click',()=>{
    document.getElementById('pro').innerHTML=" •	Determining the structure and design of web pages.•	Preparing design plans and presenting the website structure.Incorporating functionalities and features into websites.•	Incorporating functionalities and features into website"  
     setTimeout( ()=>{
         document.getElementById('pro').innerHTML="";
     },5000)
})
$(document).ready(function() {
    $("#mugee").click(function(){
        $(".slide101").slideToggle(2000);
    });
    
	$(".bot").click(function(){
        $("html,body").animate({
            scrollTop:0} ,1000);
            
           });

	 $('.owl-carousel').owlCarousel({
    loop:true,
		autoplay:true,
    margin:15,
		autoplayTimeout:2000,
    autoplayHoverPause:true,
		

    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false,
        },
        1000:{
            items:3,
            nav:true,
            loop:true,
        }
    }
	

		
});
})
  
document.getElementById('total').addEventListener('click',function(){
    let principal=document.getElementById('principal').value;
     let interest=document.getElementById('rate').value;
    let rate=document.getElementById('duration').value;
    let conta= (principal*interest*rate)/100;
    
    document.getElementById('lopu').innerHTML="Your interest amount is :" + conta;
});



     document.getElementById('addmore').addEventListener('click',function (){
    let inputlo=document.getElementById('inputfield');
    let container=document.getElementById('lep');
    var paragraph=document.createElement('p');
    paragraph.classList.add('kunlep');
    paragraph.innerText=inputlo.value;
    container.appendChild(paragraph);
    inputlo.value="";
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration='line-through';
    })
    
    paragraph.addEventListener('dblclick',function(){
        container.removeChild(paragraph);
    })
})




 