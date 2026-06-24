const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const views = {basic:'Grunddaten',tides:'Gezeiten',window:'Passagefenster',route:'Routenoptionen',hamburg:'Hamburg Anlaufbedingungen',encounter:'Begegnung',print:'Print-out'};
$$('.nav-item').forEach(btn=>btn.addEventListener('click',()=>{const v=btn.dataset.view; $$('.nav-item').forEach(b=>b.classList.toggle('active',b===btn)); $$('.view').forEach(sec=>sec.classList.toggle('active',sec.id==='view-'+v));}));
$('#themeToggle').onclick=()=>document.documentElement.dataset.theme=document.documentElement.dataset.theme==='dark'?'light':'dark';
const methodText={ETA:['TN Elbe','Hamburg','ETA'],ATA:['Hamburg','Tonne Elbe','ATA'],ETS:['Hamburg','Tonne Elbe','ETS']};
$$('.method').forEach(b=>b.onclick=()=>{ $$('.method').forEach(x=>x.classList.toggle('active',x===b)); const m=b.dataset.method; $('#schemaStart').textContent=methodText[m][0]; $('#schemaEnd').textContent=methodText[m][1]; $('#timeCaption').textContent=m; $('#statusMode').textContent=m; $('#statusPlace').textContent=m==='ETA'?'Hamburg':'Tonne Elbe'; $('#destWrap').style.visibility=m==='ATA'?'hidden':'visible';});
$('#infoDot').onclick=()=>$('#methodTip').classList.toggle('show');
const tideData={HEL:['16 / 00:42','—','16 / 13:10','—'],CUX:['16 / 01:14','16 / 07:31','16 / 13:46','16 / 19:58'],BRB:['16 / 02:08','—','16 / 14:32','—'],GLÜ:['16 / 03:02','—','16 / 15:27','—'],HH:['16 / 04:12','16 / 10:28','16 / 16:40','16 / 22:51']};
$('#tideCards').innerHTML=Object.entries(tideData).map(([k,v])=>`<div class="tide-card"><b>${k}</b><p>HW1&nbsp; ${v[0]}</p><p>NW1&nbsp; ${v[1]}</p><p>HW2&nbsp; ${v[2]}</p><p>NW2&nbsp; ${v[3]}</p></div>`).join('');
const stations=[['HEL',0],['CUX',11],['KuBa',23],['GLA',35],['Brb57',45],['Brb59',58],['DOW',69],['TN117',79],['TN125',88],['HaLo',98]];
function renderElbe(el){el.innerHTML='<div class="lw" style="left:51%">LW</div>'+stations.map(([n,p])=>`<div class="pt" style="left:${p}%">${n}</div>`).join('');}
renderElbe($('#routeMaster')); renderElbe($('#encounterElbe'));
$$('.option-row button,.speed-limit').forEach(b=>b.addEventListener('click',()=>alert('Drawer-Platzhalter v0.4: '+b.innerText.replace(/\n/g,' '))));
