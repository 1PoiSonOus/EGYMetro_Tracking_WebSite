// ===== Line Configs =====
const L = {
  1: { name: 'الخط الأول', color: '#3B82F6', bg: 'rgba(59,130,246,.12)', border: 'rgba(59,130,246,.35)' },
  2: { name: 'الخط الثاني', color: '#EF4444', bg: 'rgba(239,68,68,.12)', border: 'rgba(239,68,68,.35)' },
  3: { name: 'الخط الثالث', color: '#22C55E', bg: 'rgba(34,197,94,.12)', border: 'rgba(34,197,94,.35)' }
};

// ===== Stations Data =====
// Format: [id, nameAR, nameEN, [lines]]
const STATIONS = [
  // --- Line 1 ---
  [101,'حلوان','Helwan',[1]],
  [102,'عين حلوان','Ain Helwan',[1]],
  [103,'جامعة حلوان','Helwan University',[1]],
  [104,'وادي حوف','Wadi Hof',[1]],
  [105,'حدائق حلوان','Hadayek Helwan',[1]],
  [106,'المعصرة','El Masara',[1]],
  [107,'طرة الأسمنت','Tora El Asmant',[1]],
  [108,'كوتسيكا','Kotsika',[1]],
  [109,'طرة البلد','Tora El Balad',[1]],
  [110,'ثكنات المعادي','Sakarat El Maadi',[1]],
  [111,'المعادي','El Maadi',[1]],
  [112,'حدائق المعادي','Hadayek El Maadi',[1]],
  [113,'دار السلام','Dar El Salam',[1]],
  [114,'الزهراء','El Zahraa',[1]],
  [115,'مار جرجس','Mar Girgis',[1]],
  [116,'الملك الصالح','El Malek El Saleh',[1]],
  [117,'السيدة زينب','Sayeda Zeinab',[1]],
  [118,'سعد زغلول','Saad Zaghloul',[1]],
  [119,'السادات','El Sadat',[1,2]],
  [120,'جمال عبد الناصر','Gamal Abd El Nasser',[1,3]],
  [121,'عرابي','Orabi',[1]],
  [122,'الشهداء','Al Shohadaa',[1,2]],
  [123,'غمرة','Ghamra',[1]],
  [124,'الدمرداش','El Demerdash',[1]],
  [125,'منشية الصدر','Mansheyat El Sadr',[1]],
  [126,'كوبري القبة','Kobri El Qobba',[1]],
  [127,'حمامات القبة','Hammamat El Qobba',[1]],
  [128,'سراي القبة','Saray El Qobba',[1]],
  [129,'حدائق الزيتون','Hadayek El Zaytoun',[1]],
  [130,'حلمية الزيتون','Helmeyet El Zaytoun',[1]],
  [131,'المطرية','El Matariyya',[1]],
  [132,'عين شمس','Ain Shams',[1]],
  [133,'عزبة النخل','Ezbet El Nakhl',[1]],
  [134,'المرج','El Marg',[1]],
  [135,'المرج الجديدة','New El Marg',[1]],
  // --- Line 2 ---
  [201,'شبرا الخيمة','Shubra El Kheima',[2]],
  [202,'كلية الزراعة','Kolleyyet El Zeraa',[2]],
  [203,'المظلات','El Mazallat',[2]],
  [204,'الخلفاوي','El Khalafawy',[2]],
  [205,'سانت تريزا','Saint Theresa',[2]],
  [206,'روض الفرج','Rod El Farag',[2]],
  [207,'مسرة','Massarra',[2]],
  [208,'العتبة','Attaba',[2,3]],
  [209,'محمد نجيب','Mohamed Naguib',[2]],
  [210,'الأوبرا','Opera',[2]],
  [211,'الدقي','El Dokki',[2]],
  [212,'البحوث','El Buhous',[2]],
  [213,'جامعة القاهرة','Cairo University',[2]],
  [214,'فيصل','Faisal',[2]],
  [215,'الجيزة','El Giza',[2]],
  [216,'أم المصريين','Om El Masryeen',[2]],
  [217,'ساقية مكي','Sakyet Mekky',[2]],
  [218,'المنيب','El Moneeb',[2]],
  // --- Line 3 ---
  [301,'عدلي منصور','Adly Mansour',[3]],
  [302,'الهايكستب','El Haykstep',[3]],
  [303,'عمر بن الخطاب','Omar Ibn El Khattab',[3]],
  [304,'قباء','Qobaa',[3]],
  [305,'هشام بركات','Hisham Barakat',[3]],
  [306,'النزهة','El Nozha',[3]],
  [307,'نادي الشمس','Nadi El Shams',[3]],
  [308,'ألف مسكن','Alf Maskan',[3]],
  [309,'هليوبوليس','Heliopolis',[3]],
  [310,'هارون','Haroun',[3]],
  [311,'الأهرام','El Ahram',[3]],
  [312,'كلية البنات','Kolleyyet El Banat',[3]],
  [313,'الإستاد','El Stadium',[3]],
  [314,'أرض المعارض','Ard El Maarad',[3]],
  [315,'العباسية','Al Abbaseya',[3]],
  [316,'عبده باشا','Abdo Basha',[3]],
  [317,'الجيش','El Geish',[3]],
  [318,'باب الشعرية','Bab El Shaareyya',[3]],
  [319,'ماسبيرو','Maspero',[3]],
  [320,'صفاء حجازي','Safaa Hegazy',[3]],
  [321,'الكيت كات','Kit Kat',[3]]
];

// Station Map: id → station array
const SM = {};
STATIONS.forEach(s => SM[s[0]] = s);

// ===== Graph (adjacency list) =====
const LINE1 = [101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135];
const LINE2 = [201,202,203,204,205,206,207,122,208,209,119,210,211,212,213,214,215,216,217,218];
const LINE3 = [301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,208,120,319,320,321];

const G = {};
const LINE_COLORS = { 1: '#3B82F6', 2: '#EF4444', 3: '#22C55E' };

function edge(a, b, ln) {
  if (!G[a]) G[a] = [];
  if (!G[b]) G[b] = [];
  G[a].push({ to: b, ln });
  G[b].push({ to: a, ln });
}

[[1, LINE1], [2, LINE2], [3, LINE3]].forEach(([ln, seq]) => {
  for (let i = 0; i < seq.length - 1; i++) edge(seq[i], seq[i + 1], ln);
});

// ===== Dropdown State =====
const dropState = {
  from: { value: 201, open: false },
  to:   { value: 101, open: false }
};

// ===== Build / Render Dropdown =====
function buildDropdown(id) {
  const container = document.getElementById(id + '-sel');
  container.innerHTML = '';
  const st = dropState[id];

  const display = document.createElement('div');
  display.className = 'sel-display' + (st.open ? ' open' : '');
  display.innerHTML = `<span class="chosen-text">${SM[st.value][1]}</span><span class="arrow">▾</span>`;
  display.onclick = (e) => { e.stopPropagation(); toggleDropdown(id); };

  const panel = document.createElement('div');
  panel.className = 'dropdown-panel' + (st.open ? ' open' : '');
  panel.id = id + '-panel';

  const searchBox = document.createElement('div');
  searchBox.className = 'search-box';

  const inp = document.createElement('input');
  inp.type = 'text';
  inp.placeholder = '🔍 ابحث عن محطة...';
  inp.id = id + '-search';
  inp.oninput = () => filterOpts(id);
  inp.onclick = (e) => e.stopPropagation();
  searchBox.appendChild(inp);

  const list = document.createElement('div');
  list.className = 'options-list';
  list.id = id + '-list';

  panel.appendChild(searchBox);
  panel.appendChild(list);
  container.appendChild(display);
  container.appendChild(panel);
  renderOpts(id, '');
}

function renderOpts(id, query) {
  const list = document.getElementById(id + '-list');
  const q = query.trim().toLowerCase();
  list.innerHTML = '';

  const groups = { 1: [], 2: [], 3: [] };
  STATIONS.forEach(s => {
    const ml = Math.min(...s[3]);
    groups[ml].push(s);
  });

  let totalShown = 0;

  [1, 2, 3].forEach(ln => {
    const filtered = groups[ln].filter(s => !q || s[1].includes(q) || s[2].toLowerCase().includes(q));
    if (!filtered.length) return;
    totalShown += filtered.length;

    const gl = document.createElement('div');
    gl.className = 'opt-group-label';
    gl.textContent = L[ln].name;
    list.appendChild(gl);

    filtered.forEach(s => {
      const item = document.createElement('div');
      item.className = 'opt-item' + (dropState[id].value === s[0] ? ' selected' : '');
      item.dataset.val = s[0];
      const pip = `<span class="line-pip" style="background:${LINE_COLORS[ln]}"></span>`;
      const xfer = s[3].length > 1 ? `<span class="xfer-badge">⇄ تحويل</span>` : '';
      item.innerHTML = pip + `<span style="flex:1">${s[1]}</span>` + xfer;
      item.onclick = (e) => { e.stopPropagation(); selectOpt(id, s[0]); };
      list.appendChild(item);
    });
  });

  if (!totalShown) {
    const n = document.createElement('div');
    n.className = 'no-opts';
    n.textContent = 'مفيش محطة بالاسم ده';
    list.appendChild(n);
  }
}

function filterOpts(id) {
  const val = document.getElementById(id + '-search').value;
  renderOpts(id, val);
}

function selectOpt(id, val) {
  dropState[id].value = val;
  dropState[id].open = false;
  buildDropdown(id);
}

function toggleDropdown(id) {
  const other = id === 'from' ? 'to' : 'from';
  dropState[other].open = false;
  dropState[id].open = !dropState[id].open;
  buildDropdown(id);
  buildDropdown(other);
  if (dropState[id].open) {
    setTimeout(() => {
      const inp = document.getElementById(id + '-search');
      if (inp) inp.focus();
    }, 50);
  }
}

// Close dropdowns on outside click
document.addEventListener('click', () => {
  let changed = false;
  ['from', 'to'].forEach(id => {
    if (dropState[id].open) { dropState[id].open = false; changed = true; }
  });
  if (changed) { buildDropdown('from'); buildDropdown('to'); }
});

// ===== Swap Stations =====
function swap() {
  [dropState.from.value, dropState.to.value] = [dropState.to.value, dropState.from.value];
  buildDropdown('from');
  buildDropdown('to');
}

// ===== BFS Pathfinding =====
function bfs(src, dst) {
  if (src === dst) return { path: [src], transfers: 0 };

  const vis = new Map();
  const q = [];

  SM[src][3].forEach(ln => {
    const k = `${src}-${ln}`;
    if (!vis.has(k)) { vis.set(k, 0); q.push({ id: src, ln, path: [src], transfers: 0 }); }
  });

  let qi = 0;
  while (qi < q.length) {
    const { id, ln, path, transfers } = q[qi++];
    for (const e of (G[id] || []).filter(x => x.ln === ln)) {
      const nid = e.to;
      const np = [...path, nid];
      if (nid === dst) return { path: np, transfers };

      const samK = `${nid}-${ln}`;
      if (!vis.has(samK)) {
        vis.set(samK, transfers);
        q.push({ id: nid, ln, path: np, transfers });
      }

      const nst = SM[nid];
      if (nst && nst[3].length > 1) {
        nst[3].forEach(oln => {
          if (oln === ln) return;
          const tk = `${nid}-${oln}`;
          const nt = transfers + 1;
          if (!vis.has(tk) || vis.get(tk) > nt) {
            vis.set(tk, nt);
            q.push({ id: nid, ln: oln, path: np, transfers: nt });
          }
        });
      }
    }
  }
  return null;
}

// ===== Split path into line segments =====
function segments(path) {
  if (path.length < 2) return [];
  const segs = [];
  let curLine = null;
  let curSeg = [path[0]];
  const firstEdges = (G[path[0]] || []).filter(e => e.to === path[1]);
  curLine = firstEdges[0]?.ln || SM[path[0]][3][0];

  for (let i = 1; i < path.length; i++) {
    const prev = path[i - 1], cur = path[i];
    const edges = (G[prev] || []).filter(e => e.to === cur);
    const onSameLine = edges.some(e => e.ln === curLine);
    if (onSameLine) {
      curSeg.push(cur);
    } else {
      segs.push({ ln: curLine, sts: curSeg });
      curLine = edges[0]?.ln || curLine;
      curSeg = [prev, cur];
    }
  }
  segs.push({ ln: curLine, sts: curSeg });
  return segs;
}

// ===== Main Search =====
function go() {
  const fid = dropState.from.value;
  const tid = dropState.to.value;
  const div = document.getElementById('result');

  if (fid === tid) {
    div.style.display = 'block';
    div.innerHTML = `<div class="no-res ai"><div class="ico">😄</div><div style="font-size:1.1rem;font-weight:700;margin-bottom:6px">أنت بالفعل في محطتك!</div><div>اختار محطة وصول مختلفة</div></div>`;
    return;
  }

  const res = bfs(fid, tid);
  if (!res) {
    div.style.display = 'block';
    div.innerHTML = `<div class="no-res ai"><div class="ico">🚫</div><div style="font-size:1.1rem;font-weight:700;margin-bottom:6px">مفيش مسار متاح</div><div>المحطتين مش متصلتين حالياً</div></div>`;
    return;
  }

  const segs = segments(res.path);
  const stops = new Set(res.path).size - 1;
  const transfers = segs.length - 1;
  const fromName = SM[fid][1], toName = SM[tid][1];

  let h = `
    <div class="stats-row ai">
      <div class="sc"><div class="sc-num" style="color:#3B82F6">${stops}</div><div class="sc-label">عدد المحطات</div></div>
      <div class="sc"><div class="sc-num" style="color:#22D3EE">${transfers}</div><div class="sc-label">التحويلات</div></div>
      <div class="sc"><div class="sc-num" style="color:#22C55E">${segs.length}</div><div class="sc-label">الخطوط</div></div>
    </div>
    <div class="jcard ai ai1">
      <div class="jcard-head">🗺️ تفاصيل الرحلة &nbsp;·&nbsp; ${fromName} ← ${toName}</div>
  `;

  segs.forEach((seg, si) => {
    const li = L[seg.ln];
    const isLastSeg = si === segs.length - 1;
    h += `<div class="segment">
      <div class="seg-label" style="background:${li.bg};border:1px solid ${li.border};color:${li.color}">
        <span>●</span> ${li.name} <span style="opacity:.6;font-weight:400">— ${seg.sts.length - 1} محطة</span>
      </div>
      <div class="stations-list">`;

    seg.sts.forEach((stid, idx) => {
      const st = SM[stid];
      if (!st) return;
      const isFirst = idx === 0, isLast = idx === seg.sts.length - 1;
      const isOrigin = si === 0 && isFirst;
      const isDestination = isLastSeg && isLast;
      const isXfer = st[3].length > 1 && isLast && !isLastSeg;

      let dotStyle = `border-color:${li.color};`;
      if (isOrigin) dotStyle += `background:${li.color};`;
      if (isDestination) dotStyle += `background:#22C55E;border-color:#22C55E;`;
      const showLine = !isLast;

      h += `<div class="st-item">
        <div class="st-track">
          <div class="st-dot${isOrigin || isDestination ? ' big' : ''}${isXfer ? ' gold-dot' : ''}" style="${dotStyle}"></div>
          ${showLine ? `<div class="st-line" style="background:${li.color}40"></div>` : ''}
        </div>
        <div class="st-info${isLast ? ' last-st' : ''}">
          <div class="st-name">${isOrigin ? '🟢 ' : ''}${st[1]}${isDestination ? ' 🔴' : ''}</div>
          <div class="st-sub">${st[2]}</div>
          ${isXfer ? `<div class="xbadge">⇄ محطة تحويل</div>` : ''}
        </div>
      </div>`;
    });

    h += `</div></div>`;

    if (!isLastSeg) {
      const nx = L[segs[si + 1].ln];
      const xst = SM[segs[si + 1].sts[0]];
      h += `<div class="transfer-banner"><span style="font-size:1.1rem">⇄</span> غيّر لـ <strong>${nx.name}</strong> في محطة <strong>${xst ? xst[1] : ''}</strong></div>`;
    }
  });

  h += `</div>`;
  div.innerHTML = h;
  div.style.display = 'block';
  div.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ===== Init =====
buildDropdown('from');
buildDropdown('to');
