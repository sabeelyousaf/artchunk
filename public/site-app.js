(() => {
  if (window.__artchunkBooted) return;
  window.__artchunkBooted = true;
const heroStates={talent:{img:'/images/explorer.png',label:'TALENT / PRIMARY ROUTE',text:'Build capacity without building another management burden.'},project:{img:'/images/wall.png',label:'STUDIO / DEFINED OUTCOME',text:'Bring the brief. Artchunk owns the route to delivery.'},clarity:{img:'/images/hand.png',label:'CLARITY / LOW-RISK START',text:'Turn uncertainty into one practical next move.'}};
const heroStage=document.getElementById('heroStage'),heroImage=document.getElementById('heroImage');
document.querySelectorAll('.route-state').forEach(btn=>btn.addEventListener('click',()=>{const state=btn.dataset.state;if(heroStage.dataset.state===state)return;document.querySelectorAll('.route-state').forEach(b=>b.classList.toggle('active',b===btn));heroStage.classList.add('switching');setTimeout(()=>{heroStage.dataset.state=state;heroImage.src=heroStates[state].img;document.getElementById('heroStateLabel').textContent=heroStates[state].label;document.getElementById('heroStateText').textContent=heroStates[state].text;heroStage.classList.remove('switching')},230)}));

const partners=[
  {name:'AVIONS.AI',src:'/images/extra-1.png',className:'image-only avions',imageOnly:true},
  {name:'CHIPWORKS ARABIA',src:'/images/extra-2.png',className:'image-only chipworks',imageOnly:true},
  {name:'DASCO',src:'/images/extra-3.png',className:'dasco',imageOnly:false},
  {name:'NEW MAVERICKS',src:'/images/extra-4.png',className:'image-only mavericks',imageOnly:true},
  {name:'WOLFZ TECH',src:'https://www.google.com/s2/favicons?domain=wolfztech.com&sz=256',className:'wolfz',imageOnly:false},
  {name:'STABLESYSTEMS',src:'https://stablesystem.co/logos/stablesystem-logo-white.svg',className:'stable',imageOnly:false},
  {name:'RAYBEAM STUDIO',src:'/images/extra-5.png',className:'raybeam',imageOnly:false}
];
const ptrack=document.getElementById('partnerTrack');
[...partners,...partners].forEach((item,index)=>{
  const el=document.createElement('div');
  el.className=`partner ${item.className||''} ${item.imageOnly?'image-only':''}`;
  el.innerHTML=`<span class="partner-logo-stage"><img class="partner-logo" src="${item.src}" alt="${item.name} logo"></span><b>${item.name}</b>`;
  el.setAttribute('aria-hidden',index>=partners.length?'true':'false');
  ptrack.appendChild(el);
});

const plans={essential:{label:'ESSENTIAL / STARTING PACKAGE',price:129,discount:119,summary:'A focused monthly design allocation for businesses that need dependable production support without a full internal hire.',cta:'Discuss Essential ↗',route:'Essential Design Desk',details:[['Monthly capacity','Up to 30 hours'],['Active work','1 request at a time'],['Additional hours','£6 / hour'],['Rollover add-on','£20 / month'],['Carry-forward limit','Up to 6 hours']]},growth:{label:'GROWTH / MOST POPULAR',price:249,discount:229,summary:'A stronger monthly allocation for businesses with recurring campaigns, brand production and more than one active priority.',cta:'Discuss Growth ↗',route:'Growth Design Desk',details:[['Monthly capacity','Up to 60 hours'],['Active work','Up to 2 requests'],['Additional hours','£5.50 / hour'],['Rollover add-on','£25 / month'],['Carry-forward limit','Up to 12 hours']]},scale:{label:'SCALE / EXPANDED CAPACITY',price:399,discount:367,summary:'A high-capacity arrangement for established teams that need sustained design output and multiple priorities moving together.',cta:'Discuss Scale ↗',route:'Scale Design Desk',details:[['Monthly capacity','100+ hours'],['Active work','Up to 3 requests'],['Additional hours','£5 / hour'],['Rollover add-on','£40 / month'],['Carry-forward limit','Up to 20 hours']]}};
let activePlan='essential',discounted=false;
function renderPlan(){const p=plans[activePlan];document.getElementById('planKicker').textContent=p.label;document.getElementById('planPrice').textContent=discounted?p.discount:p.price;document.getElementById('planSummary').textContent=p.summary;const cta=document.getElementById('planCta');cta.textContent=p.cta;cta.dataset.route=p.route;document.getElementById('detailList').innerHTML=p.details.map(([a,b])=>`<li><span>${a}</span><b>${b}</b></li>`).join('');document.querySelectorAll('.plan-tab').forEach(b=>b.classList.toggle('active',b.dataset.plan===activePlan))}
document.querySelectorAll('.plan-tab').forEach(b=>b.addEventListener('click',()=>{activePlan=b.dataset.plan;renderPlan()}));document.querySelectorAll('.billing-mode').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.billing-mode').forEach(x=>x.classList.toggle('active',x===b));discounted=Number(b.dataset.discount)>0;renderPlan()}));renderPlan();

const services=[{id:'brand',index:'01 / BRAND AND CREATIVE',tab:'Brand and creative',title:'Build a system people can recognise and use.',text:'Brand strategy, identity, campaigns, packaging, presentations and marketing collateral shaped around one clear direction.',img:'/images/wall.png'},{id:'product',index:'02 / UI, UX AND PRODUCT',tab:'UI, UX and product',title:'Turn complexity into a usable product experience.',text:'Research, user journeys, interfaces, prototypes, product design and design systems for websites and applications.',img:'/images/refraction.png'},{id:'development',index:'03 / WEB, SOFTWARE AND APPS',tab:'Web, software and apps',title:'Move from approved experience to dependable technology.',text:'Websites, e-commerce, landing pages, web applications, mobile products, maintenance and development support.',img:'/images/materials.png'},{id:'marketing',index:'04 / MARKETING AND SOCIAL',tab:'Marketing and social',title:'Give the brand a consistent operating rhythm.',text:'Campaign strategy, content systems, social management, paid media, email and performance reporting.',img:'/images/objects.png'},{id:'content',index:'05 / CONTENT AND SEO',tab:'Content and SEO',title:'Make the message easier to understand and find.',text:'Brand messaging, website copy, articles, scripts, SEO content and search optimisation.',img:'/images/shard.png'}];
const stabs=document.getElementById('serviceTabs');services.forEach((s,i)=>{const b=document.createElement('button');b.className='service-tab'+(i===0?' active':'');b.type='button';b.dataset.service=s.id;b.innerHTML=`<span>0${i+1}</span><b>${s.tab}</b>`;stabs.appendChild(b)});function renderService(id){const s=services.find(x=>x.id===id);const view=document.getElementById('serviceView');view.classList.add('switching');document.querySelectorAll('.service-tab').forEach(b=>b.classList.toggle('active',b.dataset.service===id));setTimeout(()=>{document.getElementById('serviceImage').src=s.img;document.getElementById('serviceIndex').textContent=s.index;document.getElementById('serviceTitle').textContent=s.title;document.getElementById('serviceText').textContent=s.text;view.classList.remove('switching')},200)}document.querySelectorAll('.service-tab').forEach(b=>b.addEventListener('click',()=>renderService(b.dataset.service)));

const models={talent:{name:'Artchunk Talent',best:'You need recurring capacity, a dedicated specialist or a managed team.',manage:'Artchunk manages people, workflow, quality, continuity and replacement.',trade:'Embedded capability plus management.'},studio:{name:'Artchunk Studio',best:'You need a defined creative or digital outcome.',manage:'Artchunk owns scope, coordination, quality and delivery.',trade:'One accountable project route.'},hire:{name:'Internal hire',best:'You have a permanent role with stable demand and internal management capacity.',manage:'The business owns recruitment, payroll, direction, performance and continuity.',trade:'Deep internal context with a higher fixed commitment.'},freelancer:{name:'Freelancer',best:'You need a specific skill or task with a flexible workload.',manage:'The business owns briefing, quality control, availability and replacement.',trade:'Fast to start; continuity and management vary.'},agency:{name:'Agency',best:'You need a defined project that benefits from agency-owned delivery.',manage:'The agency manages the project; the client approves direction.',trade:'Strong for outcomes; usually less embedded.'},recruiter:{name:'Recruiter',best:'You want candidates to employ and manage directly.',manage:'The business manages daily output after placement.',trade:'Useful for hiring; limited delivery ownership.'}};
const ctabs=document.getElementById('compareTabs');Object.entries(models).forEach(([id,m],i)=>{const b=document.createElement('button');b.className='compare-tab'+(i===0?' active':'');b.type='button';b.dataset.model=id;b.textContent=m.name;ctabs.appendChild(b)});function renderModel(id){const m=models[id];document.getElementById('compareBest').textContent=m.best;document.getElementById('compareManage').textContent=m.manage;document.getElementById('compareTrade').textContent=m.trade;document.querySelectorAll('.compare-tab').forEach(b=>b.classList.toggle('active',b.dataset.model===id))}document.querySelectorAll('.compare-tab').forEach(b=>b.addEventListener('click',()=>renderModel(b.dataset.model)));renderModel('talent');

const modal=document.getElementById('modalBackdrop');
const close=document.getElementById('modalClose');
const routeSelect=document.getElementById('routeSelect');
const enquiryForm=document.getElementById('enquiryForm');
const formStatus=document.getElementById('formStatus');
let lastModalTrigger=null;

function openModal(route){
  lastModalTrigger=document.activeElement;
  modal.hidden=false;
  document.body.style.overflow='hidden';
  document.getElementById('modalLabel').textContent=route.toUpperCase();
  const base=route.includes('Project')?'Project enquiry':route.includes('Clarity')?'Clarity Session':'Talent enquiry';
  routeSelect.value=base;
  formStatus.classList.remove('show');
  close.focus();
}
function closeModal(){
  modal.hidden=true;
  document.body.style.overflow='';
  if(lastModalTrigger&&typeof lastModalTrigger.focus==='function')lastModalTrigger.focus();
}
document.addEventListener('click',e=>{
  const t=e.target.closest('.open-modal');
  if(!t)return;
  e.preventDefault();
  if(document.body.classList.contains('nav-open'))setNavOpen(false);
  openModal(t.dataset.route||'Enquiry');
});
close.addEventListener('click',closeModal);
modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'&&!modal.hidden)closeModal();
  if(e.key==='Tab'&&!modal.hidden){
    const focusable=[...modal.querySelectorAll('button,input,select,textarea,[href]')].filter(el=>!el.disabled);
    const first=focusable[0],last=focusable[focusable.length-1];
    if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}
    else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
  }
});
enquiryForm.addEventListener('submit',async e=>{
  e.preventDefault();
  if(!enquiryForm.checkValidity()){
    enquiryForm.reportValidity();
    return;
  }

  const submitBtn=document.getElementById('modalSubmit');
  const previousLabel=submitBtn.textContent;
  submitBtn.disabled=true;
  submitBtn.textContent='Sending…';
  formStatus.classList.remove('show','error');

  const payload={
    fullName:document.getElementById('fullName').value.trim(),
    workEmail:document.getElementById('workEmail').value.trim(),
    company:document.getElementById('company').value.trim(),
    phone:document.getElementById('phone').value.trim(),
    route:routeSelect.value,
    needType:document.getElementById('needType').value,
    startTime:document.getElementById('startTime').value,
    budget:document.getElementById('budget').value,
    challenge:document.getElementById('challenge').value.trim(),
    consent:document.getElementById('consent').checked,
    website:document.getElementById('website')?.value||''
  };

  try{
    const res=await fetch('/api/enquiry',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(payload)
    });
    const data=await res.json().catch(()=>({}));
    if(!res.ok){
      throw new Error(data.error||'Could not send your enquiry.');
    }
    formStatus.textContent='Thanks — we received your enquiry and will reply shortly.';
    formStatus.classList.add('show');
    submitBtn.textContent='Enquiry sent ✓';
    enquiryForm.reset();
  }catch(err){
    formStatus.textContent=err.message||'Could not send your enquiry. Please try again.';
    formStatus.classList.add('show','error');
    submitBtn.disabled=false;
    submitBtn.textContent=previousLabel||'Send enquiry ↗';
  }
});

const reveals=document.querySelectorAll('.reveal');const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});reveals.forEach(el=>io.observe(el));

(function(){
  const values=[...document.querySelectorAll('.stat-value[data-count]')];
  if(!values.length)return;
  const animate=(el)=>{
    const target=Number(el.dataset.count||0);
    const suffix=el.dataset.suffix||'';
    const pad=target>=10?String(target).length:2;
    const start=performance.now();
    const duration=900;
    const tick=(now)=>{
      const t=Math.min(1,(now-start)/duration);
      const eased=1-Math.pow(1-t,3);
      const current=Math.round(target*eased);
      el.textContent=String(current).padStart(pad,'0')+suffix;
      if(t<1)requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const sio=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      if(!entry.isIntersecting)return;
      entry.target.querySelectorAll('.stat-value[data-count]').forEach(animate);
      sio.unobserve(entry.target);
    });
  },{threshold:.35});
  const grid=document.getElementById('statsGrid');
  if(grid)sio.observe(grid);
})();

const header=document.getElementById('header');
const menu=document.getElementById('menuBtn');
const desktopNav=document.getElementById('nav');
const mobileMenu=document.getElementById('mobileMenu');
let menuCloseTimer=0;

function isMobileNav(){
  return window.matchMedia('(max-width:720px)').matches;
}

function setNavOpen(open){
  menu.classList.toggle('open',open);
  document.documentElement.classList.toggle('nav-open',open);
  document.body.classList.toggle('nav-open',open);
  menu.setAttribute('aria-expanded',open?'true':'false');
  menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');

  // Clear any old scroll-lock inline styles that caused jump-on-close
  document.body.style.position='';
  document.body.style.top='';
  document.body.style.left='';
  document.body.style.right='';
  document.body.style.width='';
  document.body.style.overflow='';

  if(mobileMenu){
    window.clearTimeout(menuCloseTimer);
    if(mobileMenu.parentElement!==document.body){
      document.body.appendChild(mobileMenu);
    }
    mobileMenu.hidden=false;
    // next frame so CSS transition can run
    requestAnimationFrame(()=>mobileMenu.classList.toggle('open',open));
    if(!open){
      menuCloseTimer=window.setTimeout(()=>{
        if(!mobileMenu.classList.contains('open'))mobileMenu.hidden=true;
      },280);
    }
  }
  if(desktopNav){
    desktopNav.classList.toggle('open',open && !isMobileNav());
  }
}

function goToHash(href){
  if(!href||href.charAt(0)!=='#')return;
  const el=document.querySelector(href);
  if(!el)return;
  el.scrollIntoView({behavior:'smooth',block:'start'});
  history.pushState(null,'',href);
}

window.addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>20),{passive:true});
menu.addEventListener('click',(e)=>{
  e.stopPropagation();
  const isOpen=document.body.classList.contains('nav-open');
  setNavOpen(!isOpen);
});
mobileMenu?.addEventListener('click',(e)=>{
  const a=e.target.closest('a');
  if(!a)return;
  const href=a.getAttribute('href')||'';
  setNavOpen(false);
  // Same-page hash links: smooth-scroll after the menu closes.
  // Real routes (/talent, /about, …) must navigate normally for SEO sitelinks.
  if(href.charAt(0)==='#'){
    e.preventDefault();
    window.setTimeout(()=>goToHash(href),280);
  }
});
desktopNav?.addEventListener('click',(e)=>{
  if(e.target.closest('a'))setNavOpen(false);
});
document.addEventListener('keydown',(e)=>{
  if(e.key==='Escape'&&document.body.classList.contains('nav-open'))setNavOpen(false);
});
document.addEventListener('touchmove',(e)=>{
  if(!document.body.classList.contains('nav-open'))return;
  if(e.target.closest('#mobileMenu'))return;
  e.preventDefault();
},{passive:false});
window.addEventListener('resize',()=>{
  if(!isMobileNav()&&document.body.classList.contains('nav-open'))setNavOpen(false);
});
const sections=[...document.querySelectorAll('main section[id]')],rail=[...document.querySelectorAll('.progress-rail a')];const sio=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){rail.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id))}}),{rootMargin:'-42% 0px -50% 0px'});sections.forEach(s=>sio.observe(s));


(function(){
  const rail=document.querySelector('.progress-rail');
  if(!rail)return;
  const updateRail=()=>rail.classList.toggle('visible',window.scrollY>window.innerHeight*.72);
  updateRail();
  window.addEventListener('scroll',updateRail,{passive:true});
})();

try{
  const openRoute=new URLSearchParams(window.location.search).get('open');
  if(openRoute){
    openModal(openRoute);
    const url=new URL(window.location.href);
    url.searchParams.delete('open');
    window.history.replaceState({},'',url.pathname+url.hash);
  }
}catch(_){}

})();
