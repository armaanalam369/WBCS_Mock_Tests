/* WBCS Prelims Mock Series engine. Add content only in data/. */
const $=s=>document.querySelector(s),LS=(k,v)=>v===undefined?JSON.parse(localStorage.getItem(k)||"null"):localStorage.setItem(k,JSON.stringify(v));
const DB={},P={},nm=k=>(BANK.find(b=>b.slug===k)||{name:k}).name,fmt=s=>`${String(Math.floor(s/60)).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`;
let Z=null,LAST=null,V="home",A,CF,RF="all";

/* ---- data ---- */
function registerSet(slug,set,qs){(DB[slug]=DB[slug]||[]).push(...qs.map((x,i)=>({...x,id:`${slug}-${set}-Q${String(i+1).padStart(3,"0")}`,sec:slug,set})))}
const load=(slug,set)=>P[slug+set]||(P[slug+set]=new Promise(r=>{const s=document.createElement("script");s.src=`data/${slug}/${set}.js`;s.onload=r;s.onerror=()=>{console.warn("Missing file",s.src);r()};document.head.appendChild(s)}));
const loadAll=()=>Promise.all(BANK.flatMap(b=>b.sets.map(s=>load(b.slug,s))));
function rng(a){return()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
const shuf=(arr,r=Math.random)=>{const a=[...arr];for(let i=a.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const hash=s=>[...s].reduce((h,c)=>h*31+c.charCodeAt(0)|0,7);

/* n = mock number (same paper every time, no repeats between mocks) or 0 = fresh random */
function buildMock(n){const out=[],notes=[];
 MOCK_PATTERN.units.forEach((u,ui)=>{const got=[];let short=0;
  Object.entries(u.from).forEach(([slug,cnt])=>{const base=n?shuf(DB[slug]||[],rng(hash(slug))):shuf(DB[slug]||[]),k=Math.min(cnt,base.length),off=base.length?((n?n-1:0)*cnt)%base.length:0;
   got.push(...[...base,...base].slice(off,off+k));if(k<cnt){short+=cnt-k;notes.push(`${nm(slug)} ${k}/${cnt}`)}});
  if(short){const ids=new Set(got.map(q=>q.id));got.push(...shuf(Object.keys(u.from).flatMap(s=>DB[s]||[]).filter(q=>!ids.has(q.id))).slice(0,short))}
  got.forEach(q=>out.push({...q,unit:ui}))});
 return{qs:out,notes}}

/* ---- storage ---- */
const H=()=>LS("wbcs_hist")||[],ST=()=>LS("wbcs_set")||{neg:MOCK_PATTERN.negative,mpq:MOCK_PATTERN.mpq},pctOf=r=>Math.max(0,Math.round(r.marks/r.max*100));
function agg(){const o={};H().forEach(r=>Object.entries(r.bySec).forEach(([k,g])=>{const x=o[k]=o[k]||{c:0,w:0};x.c+=g.c;x.w+=g.w}));return o}

/* ---- navigation ---- */
function go(v,a){if(Z&&v!=="quiz"){if(!confirm("Leave this test? Your answers will be lost."))return;clearInterval(Z.iv);Z=null}V=v;A=a;draw();scrollTo(0,0)}
function draw(){$("#app").innerHTML=({home,secPage,mocks,hist,quiz,result,review})[V](A);$("#dock").innerHTML=Z?qdock():[["home","⌂","Home"],["mocks","◎","Mocks"],["hist","◔","Progress"]].map(([v,i,l])=>`<button class="${V===v?"on":""}" onclick="go('${v}')">${i}<small>${l}</small></button>`).join("")}
function theme(t){document.documentElement.dataset.theme=t;LS("wbcs_theme",t);$("#theme").textContent=t==="dark"?"☀":"☾"}

/* ---- pages ---- */
function home(){const h=H(),ag=agg(),avg=h.length?Math.round(h.reduce((s,r)=>s+pctOf(r),0)/h.length):0,best=h.length?Math.max(...h.map(pctOf)):0;
 return `<section class="hero"><h1>WBCS Prelims<br>Mock Test Series</h1><p>18 topics, 100-question sets and 200-mark full mocks.</p><button class="btn p" onclick="go('mocks')">Start a full mock</button></section>
 <div class="stats"><div class="st"><b>${h.length}</b>Tests taken</div><div class="st"><b>${avg}%</b>Average</div><div class="st"><b>${best}%</b>Best</div></div><h2>Topics</h2>
 <div class="grid">${BANK.map(b=>{const g=ag[b.slug],ac=g&&g.c+g.w?Math.round(g.c/(g.c+g.w)*100)+"% accuracy":"Not practised";return `<div class="card"><h3>${b.name}</h3><p class="meta">${b.sets.length?b.sets.length+" set(s), "+ac:"Coming soon"}</p><button class="btn" ${b.sets.length?"":"disabled"} onclick="go('secPage','${b.slug}')">Open</button></div>`}).join("")}</div>`}
function secPage(slug){const b=BANK.find(x=>x.slug===slug),h=H();
 return `<button class="link" onclick="go('home')">← All topics</button><h2>${b.name}</h2><p class="meta">Pick a set, or mix all sets of this topic.</p><div class="grid">${b.sets.map(s=>{const t=h.filter(r=>r.name===`${b.name} · ${s}`);return `<div class="card"><h3>${s.replace("set","Set")}</h3><p class="meta">${t.length?"Best "+Math.max(...t.map(pctOf))+"%":"Not attempted"}</p><button class="btn p" onclick="openSet('${slug}','${s}')">Start</button></div>`}).join("")}<div class="card"><h3>Mix all sets</h3><p class="meta">Random order</p><button class="btn p" onclick="openSet('${slug}')">Start</button></div></div>`}
function mocks(){const h=H(),u=MOCK_PATTERN.units,card=(n,t)=>{const a=h.filter(r=>r.name===t);return `<div class="card"><h3>${t}</h3><p class="meta">${a.length?`Best ${Math.max(...a.map(pctOf))}%, ${a.length} attempt(s)`:"Not attempted"}</p><button class="btn p" onclick="openMock(${n})">Start</button></div>`};
 return `<h2>Full mock tests</h2><p class="meta">${u.length} units × ${u[0].total} questions, ${MOCK_PATTERN.totalMinutes} minutes. Numbered mocks never repeat a question.</p><div class="grid">${Array.from({length:MOCK_COUNT},(_,i)=>card(i+1,"Full Mock "+(i+1))).join("")}${card(0,"Fresh Random Mock")}</div>`}
function hist(){const h=H(),ag=agg(),pts=h.slice(0,15).reverse().map(pctOf),
