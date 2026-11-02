  h+=`<button class="cell${i===Z.i?" cur":""}${Z.ans[q.id]!==undefined?" ans":""}${Z.mark[q.id]?" mk":""}" onclick="Z.i=${i};sheet(false);draw()">${i+1}</button>`});
 s.innerHTML=`<div class="sh"><div class="shh"><b>Question palette</b><button class="btn" onclick="sheet(false)">Close</button></div>${h}<p class="meta"><span class="lg cell ans"></span> Answered &nbsp; <span class="lg cell mk"></span> Marked</p></div>`;s.classList.add("open")}
addEventListener("keydown",e=>{if(!Z||$("#cfg").open)return;if("1234".includes(e.key))pick(+e.key-1);if(e.key==="ArrowRight")nav(1);if(e.key==="ArrowLeft")nav(-1)});
addEventListener("beforeunload",e=>{if(Z){e.preventDefault();e.returnValue=""}});
/* ---- scoring and analysis ---- */
function submit(){clearInterval(Z.iv);const R={name:Z.name,date:Date.now(),mode:Z.mode,neg:Z.neg,mpq:Z.mpq,total:Z.qs.length,c:0,w:0,s:0,fast:0,time:Math.round((Date.now()-Z.t0)/1000),bySec:{},byUnit:{}};
 Z.qs.forEach(q=>{const a=Z.ans[q.id],ok=a!==undefined&&q.oi.indexOf(q.answer)===a,t=Z.time[q.id]||0;
  [[R.bySec,q.sec],...(q.unit!==undefined?[[R.byUnit,MOCK_PATTERN.units[q.unit].name]]:[])].forEach(([o,k])=>{const g=o[k]=o[k]||{n:0,c:0,w:0,t:0};g.n++;g.t+=t;if(a!==undefined)ok?g.c++:g.w++});
  if(a===undefined)R.s++;else if(ok)R.c++;else{R.w++;if(t<10)R.fast++}});
 R.marks=+(R.c*R.mpq-R.w*R.neg*R.mpq).toFixed(2);R.max=R.total*R.mpq;
 LS("wbcs_hist",[R,...H()].slice(0,100));LAST={R,qs:Z.qs,ans:Z.ans};Z=null;go("result")}
function insights(R,pv){const I=[],S=Object.entries(R.bySec).map(([k,g])=>({k,g,a:g.c+g.w})).filter(x=>x.g.n>=3),avgT=R.time/R.total,pc=x=>Math.round(x.g.c/x.a*100);
 S.filter(x=>x.a>=2&&pc(x)<60).sort((a,b)=>pc(a)-pc(b)).slice(0,3).forEach(x=>I.push(`🔴 <b>${nm(x.k)}</b>: ${pc(x)}% accuracy. Revise this first.`));
 const st=S.filter(x=>x.a>=3&&pc(x)>=80).map(x=>nm(x.k));if(st.length)I.push(`🟢 Strong in ${st.join(", ")}. Keep them fresh with short drills.`);
 const sk=S.filter(x=>x.g.n-x.a>x.g.n*.4).map(x=>nm(x.k));if(sk.length)I.push(`🟡 Many skipped in ${sk.join(", ")}. Attempt questions where you can narrow it to two options.`);
 const sl=S.filter(x=>x.g.t/x.g.n>Math.max(avgT*1.5,45)).map(x=>nm(x.k));if(sl.length)I.push(`🐢 Slow in ${sl.join(", ")}. Set a time cap per question.`);
 if(R.neg&&R.w)I.push(`⚠️ Wrong answers cost ${(R.w*R.neg*R.mpq).toFixed(2)} marks. Guess only when you can eliminate options (break-even is about ${Math.round(R.neg/(1+R.neg)*100)}% confidence).`);
 if(R.fast>2)I.push(`⚡ ${R.fast} wrong answers took under 10 seconds. Likely careless reading; read every option.`);
 if(R.s>R.total*.2)I.push(`⏱ ${R.s} unanswered. Make a first pass for sure answers, then return to marked ones.`);
 if(pv)I.push(`📈 Against your previous attempt of this test: ${R.marks>=pv.marks?"+":""}${(R.marks-pv.marks).toFixed(1)} marks.`);
 return I.length?I:["A solid, balanced attempt. Take more tests to unlock trend insights."]}
function result(){const L=LAST,R=L.R,att=R.c+R.w,acc=att?Math.round(R.c/att*100):0,pct=pctOf(R),pv=H().slice(1).find(h=>h.name===R.name),
 rows=o=>Object.entries(o).map(([k,g])=>{const a=g.c+g.w,ac=a?Math.round(g.c/a*100):0;return `<div class="row"><span>${nm(k)}</span><div class="bar ${ac<60?"lo":""}"><i style="width:${ac}%"></i></div><small>${g.c}/${g.n}, ${ac}%, ${g.n?Math.round(g.t/g.n):0}s each</small></div>`}).join(""),
 weak=Object.entries(R.bySec).filter(([,g])=>g.c+g.w>1).sort((a,b)=>a[1].c/(a[1].c+a[1].w)-b[1].c/(b[1].c+b[1].w))[0];
 return `<h2>${R.name}</h2><div class="score"><svg viewBox="0 0 120 120" class="ring"><circle cx="60" cy="60" r="52"/><circle class="fg" cx="60" cy="60" r="52" stroke-dasharray="${pct*3.267} 327" transform="rotate(-90 60 60)"/><text x="60" y="62" text-anchor="middle">${R.marks}</text><text x="60" y="80" text-anchor="middle" class="sm">out of ${R.max}</text></svg>
 <div class="stats"><div class="st"><b>${R.c}</b>Correct</div><div class="st"><b>${R.w}</b>Wrong</div><div class="st"><b>${R.s}</b>Skipped</div><div class="st"><b>${acc}%</b>Accuracy</div><div class="st"><b>${fmt(R.time)}</b>Time</div></div></div>
 <h3>What to improve</h3><div class="card">${insights(R,pv).map(i=>`<p>${i}</p>`).join("")}</div>
 ${Object.keys(R.byUnit).length?`<h3>Unit-wise</h3>${rows(R.byUnit)}`:""}<h3>Topic-wise</h3>${rows(R.bySec)}
 <div class="acts">${L.qs.length?`<button class="btn p" onclick="RF='all';go('review')">Review answers</button>`:""}${L.qs.length&&R.w+R.s?`<button class="btn" onclick="retry()">Retry wrong and skipped</button>`:""}${weak&&weak[1].c/(weak[1].c+weak[1].w)<.7?`<button class="btn" onclick="openSet('${weak[0]}')">Practise ${nm(weak[0])}</button>`:""}</div>`}
function review(){const L=LAST,items=L.qs.map((q,i)=>{const a=L.ans[q.id],cor=q.oi.indexOf(q.answer);return{q,i,a,cor,st:a===undefined?"skip":a===cor?"ok":"no"}}).filter(x=>RF==="all"||(RF==="no"?x.st==="no":x.st!=="ok"));
 return `<button class="link" onclick="go('result')">← Result</button><h2>Review</h2><div class="chips">${[["all","All"],["no","Wrong"],["skip","Wrong and skipped"]].map(([k,l])=>`<button class="chip${RF===k?" on":""}" onclick="RF='${k}';draw()">${l}</button>`).join("")}</div>`
 +items.map(x=>`<div class="card rv ${x.st}"><p class="meta">Q${x.i+1}, ${nm(x.q.sec)}</p><p><b>${x.q.q}</b></p>${x.q.oi.map((k,j)=>`<div class="ro${j===x.cor?" ok":j===x.a?" no":""}">${x.q.options[k]}</div>`).join("")}${x.q.explanation?`<p class="exp">${x.q.explanation}</p>`:""}</div>`).join("")}
/* ---- init ---- */
$("#theme").onclick=()=>theme(document.documentElement.dataset.theme==="dark"?"light":"dark");
theme(LS("wbcs_theme")||(matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light"));draw();
