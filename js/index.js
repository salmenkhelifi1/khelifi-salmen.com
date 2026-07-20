$(window).on('load',function(){
  gsap.to('#loader',1,{y:"-100%"});
  gsap.to('#loader',1,{opacity:0});
  gsap.to('#loader',0,{display:"none",delay:1});
  gsap.to('#header',0,{display:"block",delay:1})
  gsap.to('#navigation-content',0,{display:"none"});
  gsap.to('#navigation-content',0,{display:"flex",delay:1});
})
$(function(){
  $('.color-panel').on("click",function(e) {
    e.preventDefault();
    $('.color-changer').toggleClass('color-changer-active');
});
$('.colors a').on("click",function(e) {
  e.preventDefault();
  var attr = $(this).attr("title");
  console.log(attr);
  $('head').append('<link rel="stylesheet" href="css/'+attr+'.css">');
});
});
$(function(){
     $('.menubar').on('click',function(){
         gsap.to('#navigation-content',.6,{y:0});
     })
     $('.navigation-close').on('click',function(){
        gsap.to('#navigation-content',.6,{y:"-100%"});
    });
   }); 

$(function(){
    var TxtRotate = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
      };
      
      TxtRotate.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
      
        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
      
        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
      
        var that = this;
        var delta = 200 - Math.random() * 100;
      
        if (this.isDeleting) { delta /= 2; }
      
        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          delta = 100;
        }
      
        setTimeout(function() {
          that.tick();
        }, delta);
      };
      
      window.onload = function() {
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i=0; i<elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-rotate');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
          }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-rotate > .wrap { border-right: 0em solid #666 ; }";
        document.body.appendChild(css);
      };
})
$(function(){

    $('#about-link').on('click',function(){
      posthog.capture('section_navigated', { section: 'about' });
      gsap.to('#navigation-content',0,{display:"none",delay:.7});
      gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
  gsap.to('#header',0,{display:"none"});
gsap.to('#blog',0,{display:"none"});
gsap.to('#portfolio',0,{display:"none"});
   gsap.to('#breaker',0,{display:"block"});
   gsap.to('#breaker-two',0,{display:"block",delay:.1});
gsap.to('#contact',0,{display:"none"});
   gsap.to('#breaker',0,{display:"none",delay:2});
   gsap.to('#breaker-two',0,{display:"none",delay:2});
   gsap.to('#about',0,{display:"block",delay:.7});
   gsap.to('#navigation-content',0,{display:'flex',delay:2});
 })
 $('#contact-link').on('click',function(){
   posthog.capture('section_navigated', { section: 'contact' });
   gsap.to('#navigation-content',0,{display:"none",delay:.7});
   gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
gsap.to('#header',0,{display:"none"});
gsap.to('#about',0,{display:"none"});
gsap.to('#blog',0,{display:"none"});
gsap.to('#portfolio',0,{display:"none"});
gsap.to('#breaker',0,{display:"block"});
gsap.to('#breaker-two',0,{display:"block",delay:.1});
gsap.to('#breaker',0,{display:"none",delay:2});
gsap.to('#breaker-two',0,{display:"none",delay:2});
gsap.to('#contact',0,{display:"block",delay:.7});
gsap.to('#navigation-content',0,{display:'flex',delay:2});
})
$('#portfolio-link').on('click',function(){
  posthog.capture('section_navigated', { section: 'portfolio' });
  gsap.to('#navigation-content',0,{display:"none",delay:.7});
  gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
gsap.to('#header',0,{display:"none"});
gsap.to('#about',0,{display:"none"});
gsap.to('#contact',0,{display:"none"});
gsap.to('#blog',0,{display:"none"});
gsap.to('#breaker',0,{display:"block"});
gsap.to('#breaker-two',0,{display:"block",delay:.1});
gsap.to('#breaker',0,{display:"none",delay:2});
gsap.to('#breaker-two',0,{display:"none",delay:2});
gsap.to('#portfolio',0,{display:"block",delay:.7});
gsap.to('#navigation-content',0,{display:'flex',delay:2});
})
$('#blog-link').on('click',function(){
  posthog.capture('section_navigated', { section: 'blog' });
  gsap.to('#navigation-content',0,{display:"none",delay:.7});
  gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
gsap.to('#header',0,{display:"none"});
gsap.to('#about',0,{display:"none"});
gsap.to('#portfolio',0,{display:"none"});
gsap.to('#contact',0,{display:"none"});
gsap.to('#breaker',0,{display:"block"});
gsap.to('#breaker-two',0,{display:"block",delay:.1});
gsap.to('#breaker',0,{display:"none",delay:2});
gsap.to('#breaker-two',0,{display:"none",delay:2});
gsap.to('#blog',0,{display:"block",delay:.7});
gsap.to('#navigation-content',0,{display:'flex',delay:2});
})
$('#home-link').on('click',function(){
  posthog.capture('section_navigated', { section: 'home' });
  gsap.to('#navigation-content',0,{display:"none",delay:.7});
  gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
gsap.to('#header',0,{display:"none"});
gsap.to('#about',0,{display:"none"});
gsap.to('#portfolio',0,{display:"none"});
gsap.to('#contact',0,{display:"none"});
gsap.to('#blog',0,{display:"none"});
gsap.to('#breaker',0,{display:"block"});
gsap.to('#breaker-two',0,{display:"block",delay:.1});
gsap.to('#breaker',0,{display:"none",delay:2});
gsap.to('#breaker-two',0,{display:"none",delay:2});
gsap.to('#header',0,{display:"block",delay:.7});
gsap.to('#navigation-content',0,{display:'flex',delay:2});
})

})
$(function(){
 var body =  document.querySelector('body');
 var $cursor = $('.cursor')
   function cursormover(e){
    
    gsap.to( $cursor, {
      x : e.clientX ,
      y : e.clientY,
      stagger:.002
     })
   }
   function cursorhover(e){
    gsap.to( $cursor,{
     scale:1.4,
     opacity:1
    })
    
  }
  function cursor(e){
    gsap.to( $cursor, {
     scale:1,
     opacity:.6
    }) 
  }
  $(window).on('mousemove',cursormover);
  $('.menubar').hover(cursorhover,cursor);
  $('a').hover(cursorhover,cursor);
  $('.navigation-close').hover(cursorhover,cursor);

})


// email 
// document.getElementById('myForm').addEventListener('submit', async (event) => {
//   event.preventDefault(); // Prevent default form submission behavior

//   // Get form values
//   const name = document.getElementById('name').value;
//   const email = document.getElementById('email').value;
//   const subject = document.getElementById('subject').value;
//   const message = document.getElementById('body').value;

//   // Prepare the payload for the Brevo API
//   const payload = {
//     sender: { name: name, email: email }, // Sender details
//     to: [{ email: "your-recipient@example.com", name: "Recipient Name" }], // Replace with recipient email
//     subject: subject,
//     htmlContent: `<p><strong>Name:</strong> ${name}</p>
//                   <p><strong>Email:</strong> ${email}</p>
//                   <p><strong>Subject:</strong> ${subject}</p>
//                   <p><strong>Message:</strong> ${message}</p>`
//   };

//   try {
//     // Send the request to Brevo API
//     const response = await fetch('https://api.brevo.com/v3/smtp/email', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'api-key': '' // Replace with your actual Brevo API key
//       },
//       body: JSON.stringify(payload)
//     });

//     if (response.ok) {
//       alert('Email sent successfully!');
//       document.getElementById('myForm').reset(); // Reset the form
//     } else {
//       const error = await response.json();
//       alert(`Error: ${error.message}`);
//     }
//   } catch (err) {
//     console.error('Error sending email:', err);
//     alert('Failed to send email. Please try again later.');
//   }
// });

$(function() {
  // CV download
  $('a[href*="Resume"]').on('click', function() {
    posthog.capture('cv_downloaded');
  });

  // Book a call
  $('a[href*="cal.com"]').on('click', function() {
    posthog.capture('book_call_clicked');
  });

  // Portfolio project links
  $('.portfolio .button a').on('click', function() {
    var projectName = $(this).closest('.portfolio-text').find('h2').text().trim();
    posthog.capture('portfolio_project_clicked', { project_name: projectName });
  });

  // Freelancer platform profile links
  $('.social-profile-link').on('click', function() {
    var href = $(this).attr('href') || '';
    var platform = href.indexOf('upwork') !== -1 ? 'upwork' : 'freelancer';
    posthog.capture('social_profile_clicked', { platform: platform });
  });

  // Social media icon links
  $('.social-media-links a').on('click', function() {
    var href = $(this).attr('href') || '';
    var platform = 'unknown';
    if (href.indexOf('instagram') !== -1) platform = 'instagram';
    else if (href.indexOf('facebook') !== -1) platform = 'facebook';
    else if (href.indexOf('linkedin') !== -1) platform = 'linkedin';
    else if (href.indexOf('github') !== -1) platform = 'github';
    else if (href.indexOf('x.com') !== -1 || href.indexOf('twitter') !== -1) platform = 'x';
    posthog.capture('social_media_clicked', { platform: platform });
  });

  // Testimonials Freelancer.com link
  $('.testimonials-header a').on('click', function() {
    posthog.capture('testimonials_link_clicked');
  });
});

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    const form = event.target;
    const formData = new FormData(form);
    
    fetch(form.action, {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        console.log('Form submission response:', response);
        if (response.ok) {
            // Form submitted successfully
            posthog.capture('contact_form_submitted');
            alert('Thank you for your message!');
            form.reset(); // Optionally reset the form
        } else {
            // Something went wrong
            posthog.capture('contact_form_submit_failed', { reason: 'server_error' });
            alert('Oops! There was a problem submitting your form.');
        }
    })
    .catch(error => {
        // Network error
        posthog.capture('contact_form_submit_failed', { reason: 'network_error' });
        console.error('Network error:', error);
        alert('Oops! Something went wrong.');
    });
});

