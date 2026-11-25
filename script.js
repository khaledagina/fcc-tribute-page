const bar=document.querySelector('.progress');
addEventListener('scroll',()=>{const h=document.documentElement;bar.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%'},{passive:true});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.2});
document.querySelectorAll('.timeline li').forEach(li=>io.observe(li));
