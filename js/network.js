(function () {
  const mapNode = document.getElementById("pak-map");
  if (!mapNode || typeof L === "undefined") return;

  const regions = {
    punjab: { en: "Punjab", ur: "پنجاب", hub: "multan" },
    sindh: { en: "Sindh", ur: "سندھ", hub: "karachi" },
    kpk: { en: "Khyber Pakhtunkhwa", ur: "خیبر پختونخوا", hub: "hattar" },
    balochistan: { en: "Balochistan", ur: "بلوچستان", hub: "hub" },
    islamabad: { en: "Islamabad", ur: "اسلام آباد", hub: "multan" },
    ajk: { en: "Azad Kashmir", ur: "آزاد کشمیر", hub: "multan" },
    gb: { en: "Gilgit-Baltistan", ur: "گلگت بلتستان", hub: "multan" }
  };

  const places = [
    { id: "multan", region: "punjab", katek: true, lat: 30.12804, lon: 71.38644, name: { en: "Multan Industrial Estate", ur: "ملتان انڈسٹریل اسٹیٹ" }, note: { en: "Katek is registered at 6-B in this estate.", ur: "کیٹک اسی اسٹیٹ میں 6-بی پر رجسٹرڈ ہے۔" } },
    { id: "sundar", region: "punjab", lat: 31.28602, lon: 74.1733, name: { en: "Sundar Industrial Estate", ur: "سندر انڈسٹریل اسٹیٹ" } },
    { id: "qie", region: "punjab", lat: 31.45821, lon: 74.33185, name: { en: "Quaid-e-Azam Industrial Estate", ur: "قائد اعظم انڈسٹریل اسٹیٹ" } },
    { id: "m3", region: "punjab", lat: 31.62619, lon: 73.18511, name: { en: "M-3 Industrial City", ur: "ایم-3 انڈسٹریل سٹی" } },
    { id: "aiic", region: "punjab", lat: 31.69349, lon: 73.21433, name: { en: "Allama Iqbal Industrial City", ur: "علامہ اقبال انڈسٹریل سٹی" } },
    { id: "vac", region: "punjab", lat: 31.51556, lon: 73.26944, name: { en: "Value Addition City", ur: "ویلیو ایڈیشن سٹی" } },
    { id: "bhalwal", region: "punjab", lat: 32.31062, lon: 72.89639, name: { en: "Bhalwal Industrial Estate", ur: "بھلوال انڈسٹریل اسٹیٹ" } },
    { id: "vehari", region: "punjab", lat: 30.0858, lon: 72.2869, name: { en: "Vehari Industrial Estate", ur: "وہاڑی انڈسٹریل اسٹیٹ" } },
    { id: "bahawalpur", region: "punjab", lat: 29.32144, lon: 71.57834, name: { en: "Bahawalpur Industrial Estate", ur: "بہاولپور انڈسٹریل اسٹیٹ" } },
    { id: "ryk", region: "punjab", lat: 28.3752, lon: 70.1839, name: { en: "Rahim Yar Khan Industrial Estate", ur: "رحیم یار خان انڈسٹریل اسٹیٹ" } },
    { id: "daska", region: "punjab", lat: 32.3376, lon: 74.37999, name: { en: "Small Industrial Estate, Daska", ur: "ڈسکہ سمال انڈسٹریل اسٹیٹ" } },
    { id: "gujranwala", region: "punjab", lat: 32.17806, lon: 74.17333, name: { en: "Gujranwala Small Industrial Estate", ur: "گوجرانوالہ سمال انڈسٹریل اسٹیٹ" } },
    { id: "gujrat", region: "punjab", lat: 32.55302, lon: 74.08463, name: { en: "Gujrat Small Industrial Estate", ur: "گجرات سمال انڈسٹریل اسٹیٹ" } },
    { id: "karachi", region: "sindh", lat: 24.90366, lon: 66.98936, name: { en: "SITE Karachi", ur: "سائٹ کراچی" } },
    { id: "korangi", region: "sindh", lat: 24.84582, lon: 67.1355, name: { en: "Korangi Industrial Area", ur: "کورنگی انڈسٹریل ایریا" } },
    { id: "landhi", region: "sindh", lat: 24.84296, lon: 67.20688, name: { en: "Landhi Industrial Area", ur: "لانڈھی انڈسٹریل ایریا" } },
    { id: "qasim", region: "sindh", lat: 24.83075, lon: 67.38631, name: { en: "Port Qasim", ur: "پورٹ قاسم" } },
    { id: "super", region: "sindh", lat: 25.02108, lon: 67.11004, name: { en: "SITE Super Highway", ur: "سائٹ سپر ہائی وے" } },
    { id: "north", region: "sindh", lat: 24.96364, lon: 67.08354, name: { en: "North Karachi Industrial Area", ur: "نارتھ کراچی انڈسٹریل ایریا" } },
    { id: "nooriabad", region: "sindh", lat: 25.1292, lon: 67.81405, name: { en: "SITE Nooriabad", ur: "سائٹ نوری آباد" } },
    { id: "hyderabad", region: "sindh", lat: 25.36666, lon: 68.3898, name: { en: "SITE Hyderabad", ur: "سائٹ حیدرآباد" } },
    { id: "sukkur", region: "sindh", lat: 27.72654, lon: 68.843, name: { en: "SITE Sukkur", ur: "سائٹ سکھر" } },
    { id: "hattar", region: "kpk", lat: 33.89144, lon: 72.83776, name: { en: "Hattar Industrial Estate", ur: "ہٹار انڈسٹریل اسٹیٹ" } },
    { id: "gadoon", region: "kpk", lat: 34.1205, lon: 72.64282, name: { en: "Gadoon Amazai Industrial Estate", ur: "گدوون امازئی انڈسٹریل اسٹیٹ" } },
    { id: "hayatabad", region: "kpk", lat: 33.97672, lon: 71.43726, name: { en: "Hayatabad Industrial Estate", ur: "حیات آباد انڈسٹریل اسٹیٹ" } },
    { id: "rashakai", region: "kpk", lat: 34.10527, lon: 72.01712, name: { en: "Rashakai Economic Zone", ur: "رشاکئی اکنامک زون" } },
    { id: "hub", region: "balochistan", lat: 25.05597, lon: 66.87078, name: { en: "Hub Industrial and Trading Estate", ur: "حب انڈسٹریل اینڈ ٹریڈنگ اسٹیٹ" } },
    { id: "gwadar", region: "balochistan", lat: 25.10859, lon: 62.33946, name: { en: "Gwadar Port Zone", ur: "گوادر پورٹ زون" } },
    { id: "islamabad", region: "islamabad", lat: 33.65948, lon: 73.06028, name: { en: "I-9 Industrial Area", ur: "آئی-9 انڈسٹریل ایریا" }, note: { en: "Islamabad’s industrial sectors are I-9 and I-10, side by side.", ur: "اسلام آباد کے صنعتی سیکٹر آئی-9 اور آئی-10 ساتھ ساتھ ہیں۔" } },
    { id: "mirpur", region: "ajk", lat: 33.14864, lon: 73.74821, name: { en: "Mirpur", ur: "میرپور" }, note: { en: "Mirpur is the industrial city of Azad Kashmir. The pin is the city.", ur: "میرپور آزاد کشمیر کا صنعتی شہر ہے۔ نشان شہر پر ہے۔" } },
    { id: "gilgit", region: "gb", lat: 35.92081, lon: 74.31404, name: { en: "Gilgit", ur: "گلگت" }, note: { en: "Gilgit-Baltistan’s point on the network. The pin is the regional city.", ur: "گلگت بلتستان کا نقطہ اسی نیٹ ورک پر ہے۔ نشان علاقائی شہر پر ہے۔" } }
  ];

  const trunks = [["karachi", "multan"], ["hattar", "multan"], ["hub", "multan"], ["islamabad", "multan"], ["mirpur", "multan"], ["gilgit", "multan"]];
  const byId = Object.fromEntries(places.map((place) => [place.id, place]));
  const lang = () => (document.documentElement.lang === "ur" ? "ur" : "en");
  const text = (node) => (node ? node[lang()] || node.en : "");

  const map = L.map(mapNode, { scrollWheelZoom: true, minZoom: 5 });
  L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}", {
    attribution: '&copy; Esri',
    maxZoom: 18
  }).addTo(map);

  const markers = {};
  const lines = [];
  places.forEach((place) => {
    const marker = L.marker([place.lat, place.lon], {
      icon: L.divIcon({
        className: "katek-pin" + (place.katek ? " is-katek" : ""),
        html: "<i></i>",
        iconSize: place.katek ? [26, 26] : [22, 22],
        iconAnchor: place.katek ? [13, 24] : [11, 20],
        popupAnchor: [0, -18]
      }),
      zIndexOffset: place.katek ? 800 : 0
    });
    marker.addTo(map);
    marker.on("click", () => select(place.id, false));
    markers[place.id] = marker;
  });

  function addLine(fromId, toId, trunk, via) {
    const from = byId[fromId];
    const to = byId[toId];
    const latlngs = [[from.lat, from.lon]].concat(via || [], [[to.lat, to.lon]]);
    const line = L.polyline(latlngs, {
      color: trunk ? "#0d4ec4" : "#1f9a38",
      weight: trunk ? 3 : 1.6,
      opacity: trunk ? 0.9 : 0.75,
      dashArray: trunk ? null : "6 7"
    });
    line._from = fromId;
    line._to = toId;
    line._trunk = trunk;
    line.addTo(map);
    lines.push(line);
  }
  trunks.forEach((pair) => addLine(pair[0], pair[1], true));
  places.forEach((place) => {
    const hub = regions[place.region].hub;
    if (place.id === "gwadar") addLine("gwadar", "hub", false, [[25.27, 63.48], [25.22, 64.63]]);
    else if (place.region === "punjab" && place.id !== "multan") addLine(place.id, "multan", false);
    else if (hub !== "multan" && place.id !== hub) addLine(place.id, hub, false);
  });

  const legend = L.control({ position: "bottomleft" });
  legend.onAdd = () => L.DomUtil.create("div", "net-legend");
  legend.addTo(map);

  let activeRegion = "all";
  let activeId = "multan";
  const search = document.getElementById("net-search");
  const filterBox = document.getElementById("net-filters");
  const list = document.getElementById("net-list");

  function visible(place) {
    return activeRegion === "all" || place.region === activeRegion || place.id === "multan";
  }

  function popup(place) {
    const node = document.createElement("div");
    const title = document.createElement("strong");
    title.textContent = text(place.name);
    const where = document.createElement("div");
    where.textContent = text(regions[place.region]);
    node.append(title, where);
    if (place.note) {
      const note = document.createElement("div");
      note.textContent = text(place.note);
      node.append(note);
    }
    const link = document.createElement("a");
    link.href = "https://www.google.com/maps/search/?api=1&query=" + place.lat + "," + place.lon;
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = lang() === "ur" ? "گوگل میپ میں کھولیں" : "Open in Google Maps";
    node.append(link);
    return node;
  }

  function paint() {
    const query = (search.value || "").trim().toLowerCase();
    list.replaceChildren();
    places.filter(visible).filter((place) => {
      const blob = (place.name.en + " " + place.name.ur + " " + regions[place.region].en).toLowerCase();
      return !query || blob.includes(query);
    }).forEach((place) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = place.id === activeId ? "is-on" : "";
      const name = document.createElement("span");
      name.textContent = text(place.name);
      const meta = document.createElement("small");
      meta.textContent = text(regions[place.region]) + (place.katek ? (lang() === "ur" ? " · کیٹک" : " · Katek") : "");
      button.append(name, meta);
      button.addEventListener("click", () => select(place.id, true));
      list.append(button);
    });
    places.forEach((place) => {
      const show = visible(place);
      if (show) markers[place.id].addTo(map);
      else map.removeLayer(markers[place.id]);
    });
    lines.forEach((line) => {
      const show = visible(byId[line._from]) && visible(byId[line._to]);
      if (show) line.addTo(map);
      else map.removeLayer(line);
    });
    const legendNode = mapNode.querySelector(".net-legend");
    if (legendNode) {
      legendNode.replaceChildren();
      const bits = lang() === "ur"
        ? [["سرخ", "کیٹک، ملتان"], ["نیلی", "انڈسٹریل ایریا"], ["نیلی لکیر", "ملتان تک"], ["سبز لکیر", "صوبے کے اندر"]]
        : [["Red", "Katek, Multan"], ["Blue", "Industrial area"], ["Blue line", "Link to Multan"], ["Green line", "Inside the province"]];
      bits.forEach((bit) => {
        const row = document.createElement("div");
        const label = document.createElement("b");
        label.textContent = bit[0] + " ";
        row.append(label, document.createTextNode(bit[1]));
        legendNode.append(row);
      });
    }
    Object.entries(markers).forEach(([id, marker]) => {
      if (marker.isPopupOpen()) marker.setPopupContent(popup(byId[id]));
    });
  }

  function select(id, fly) {
    activeId = id;
    const place = byId[id];
    markers[id].bindPopup(popup(place)).openPopup();
    if (fly) map.flyTo([place.lat, place.lon], Math.max(map.getZoom(), 8), { duration: 0.6 });
    paint();
  }

  function fit() {
    const shown = places.filter(visible);
    map.fitBounds(L.latLngBounds(shown.map((place) => [place.lat, place.lon])).pad(0.18), { maxZoom: activeRegion === "all" ? 6 : 8 });
  }

  [{ id: "all", en: "All", ur: "سب" }].concat(Object.entries(regions).map(([id, item]) => ({ id, en: item.en, ur: item.ur }))).forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.region = item.id;
    button.textContent = item.en;
    button.addEventListener("click", () => {
      activeRegion = item.id;
      filterBox.querySelectorAll("button").forEach((node) => node.classList.toggle("is-on", node.dataset.region === item.id));
      paint();
      fit();
    });
    filterBox.append(button);
  });
  filterBox.querySelector("button").classList.add("is-on");
  search.addEventListener("input", paint);
  document.addEventListener("katek-lang", () => {
    filterBox.querySelectorAll("button").forEach((button) => {
      const item = button.dataset.region === "all" ? { en: "All", ur: "سب" } : regions[button.dataset.region];
      button.textContent = text(item);
    });
    search.placeholder = lang() === "ur" ? "ایریا تلاش کریں" : "Search an area";
    paint();
  });

  search.placeholder = "Search an area";
  map.fitBounds(L.latLngBounds(places.map((place) => [place.lat, place.lon])).pad(0.12), { maxZoom: 6 });
  paint();
  markers.multan.bindPopup(popup(byId.multan));
})();
