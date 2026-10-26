(function(){
  var els=document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});}
  else{var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target);}})},{threshold:.12,rootMargin:'0px 0px -5% 0px'});
    els.forEach(function(e,i){e.style.transitionDelay=(i%4)*70+'ms';io.observe(e);});}
  var lb=document.getElementById('lightbox'),lbImg=lb.querySelector('img');
  function close(){lb.hidden=true;document.body.style.overflow='';}
  document.querySelectorAll('.tile').forEach(function(t){t.addEventListener('click',function(){lbImg.src=t.dataset.full;lbImg.alt=t.querySelector('img').alt;lb.hidden=false;document.body.style.overflow='hidden';lb.querySelector('.close').focus();});});
  lb.addEventListener('click',function(e){if(e.target!==lbImg)close();});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!lb.hidden)close();});
})();
