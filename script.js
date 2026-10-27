// Update these before publishing. Do not invent contact information.
const CONFIG = {
  contactEmail: "", // Example: "hello@example.com"
  socials: { Instagram: "", LinkedIn: "", Behance: "", Dribbble: "" }
};
const services = [
  ["Brand Identity","Distinctive visual systems, logos, brand guidelines and consistent identity design."],
  ["Graphic Design","Editorial graphics, digital products, posters and polished visual communication."],
  ["Marketing Creatives","Campaign visuals, social media assets, flyers and promotional content."],
  ["Print & Digital","Designs optimized for print, digital platforms and brand touchpoints."],
  ["Web & UI Design","Clean, responsive interfaces and creative web experiences."],
  ["Motion & Video","Typography-based video content, basic editing and animated visual elements."]
];
const projects = window.PORTFOLIO_PROJECTS || [];
const grid = document.getElementById('project-grid');
const count = document.getElementById('work-count');
const modal = document.getElementById('project-modal');
const closeBtn = document.getElementById('modal-close');
let lastFocused = null;
function renderProjects(category='All') {
  const list = projects.filter(p=>category==='All'||p.category===category);
  count.textContent = `${list.length} PROJECT${list.length===1?'':'S'}`;
  grid.replaceChildren();
  for (const p of list) {
    const card = document.createElement('button'); card.type='button'; card.className='project-card';
    card.setAttribute('aria-label',`View ${p.title} project`);
    const media=document.createElement('div'); media.className='project-media';
    const img=document.createElement('img'); img.src=p.image.replace(/^\//,''); img.alt=p.title+' poster'; img.loading='lazy'; img.decoding='async'; media.append(img);
    const meta=document.createElement('div'); meta.className='project-meta';
    const details=document.createElement('div'); const title=document.createElement('h3'); title.textContent=p.title;
    const cat=document.createElement('p'); cat.textContent=p.category; details.append(title,cat);
    const arrow=document.createElement('span'); arrow.className='project-arrow'; arrow.textContent='↗';meta.append(details,arrow);
    card.append(media,meta); card.addEventListener('click',()=>openModal(p)); grid.append(card);
  }
}
function openModal(p){lastFocused=document.activeElement;document.getElementById('modal-image').src=p.image.replace(/^\//,'');document.getElementById('modal-image').alt=p.title+' full poster';document.getElementById('modal-category').textContent=p.category;document.getElementById('modal-title').textContent=p.title;document.getElementById('modal-description').textContent=p.description;modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');closeBtn.focus();}
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');document.getElementById('modal-image').removeAttribute('src');lastFocused?.focus();}
closeBtn.addEventListener('click',closeModal);modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('open'))closeModal();if(e.key==='Tab'&&modal.classList.contains('open')){const nodes=[...modal.querySelectorAll('button,a,input,[tabindex]:not([tabindex="-1"])')].filter(n=>!n.disabled);if(!nodes.length)return;const first=nodes[0],last=nodes[nodes.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}});
document.getElementById('filters').addEventListener('click',e=>{const b=e.target.closest('[data-filter]');if(!b)return;document.querySelectorAll('.filter').forEach(x=>{const active=x===b;x.classList.toggle('active',active);x.setAttribute('aria-pressed',String(active))});renderProjects(b.dataset.filter)});
const serviceGrid=document.getElementById('services-grid');services.forEach(([name,desc],i)=>{const el=document.createElement('article');el.className='service-card reveal';el.innerHTML=`<div class="service-top"><span>${String(i+1).padStart(2,'0')} / 06</span><span>↗</span></div><h3></h3><p></p>`;el.querySelector('h3').textContent=name;el.querySelector('p').textContent=desc;serviceGrid.append(el)});
const socialContainer=document.getElementById('social-links');Object.entries(CONFIG.socials).filter(([,url])=>url).forEach(([name,url])=>{const a=document.createElement('a');a.href=url;a.target='_blank';a.rel='noopener noreferrer';a.textContent=name+' ↗';socialContainer.append(a)});
document.getElementById('contact-form').addEventListener('submit',e=>{e.preventDefault();const status=document.getElementById('form-status');if(!CONFIG.contactEmail){status.textContent='Contact email is not configured. Add it to CONFIG in script.js before publishing.';return;}const data=new FormData(e.currentTarget);const subject=encodeURIComponent('Portfolio inquiry from '+data.get('name'));const body=encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\nBudget: ${data.get('budget')}\n\n${data.get('message')}`);location.href=`mailto:${CONFIG.contactEmail}?subject=${subject}&body=${body}`;status.textContent='Your email app should open with a prefilled draft. Please send it there.'});
const menu=document.getElementById('menu-toggle');const links=document.getElementById('nav-links');menu.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'✕':'☰'});links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰'}));
function updateProgress(){const d=document.documentElement;document.getElementById('progress').style.width=((d.scrollTop/Math.max(1,d.scrollHeight-d.clientHeight))*100)+'%'}window.addEventListener('scroll',updateProgress,{passive:true});updateProgress();
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;const observer=('IntersectionObserver' in window&&!reduce)?new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.07}):null;function observe(){document.querySelectorAll('.reveal').forEach(e=>observer?observer.observe(e):e.classList.add('visible'))}
document.getElementById('year').textContent=new Date().getFullYear();renderProjects();observe();
