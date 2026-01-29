document.addEventListener('DOMContentLoaded',function(){
  var form=document.getElementById('contactForm');
  if(!form) return;
  form.addEventListener('submit',function(e){
    e.preventDefault();
    var name=document.getElementById('name').value.trim();
    var email=document.getElementById('email').value.trim();
    var message=document.getElementById('message').value.trim();
    if(!name||!email||!message){
      alert('Please complete all fields.');
      return;
    }
    var subject = encodeURIComponent('Contact from ConceptAcademy: ' + name);
    var body = encodeURIComponent('Name: '+name+'\nEmail: '+email+'\n\n'+message);
    window.location.href = 'mailto:hello@conceptacademy.example?subject='+subject+'&body='+body;
  });
});
