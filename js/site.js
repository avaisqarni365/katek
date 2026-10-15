(function () {
  const katekPhone = "+92 302 755 2073";
  const page = document.body.dataset.page || "home";
  const titles = {
    home: { en: "Katek Organic Fertilizers", ur: "کیٹک نامیاتی کھادیں" },
    homeGardener: { en: "Home Gardener · Katek", ur: "گھریلو باغبان · کیٹک" },
    commercial: { en: "Commercial Grower · Katek", ur: "تجارتی کاشتکار · کیٹک" },
    products: { en: "Products · Katek", ur: "مصنوعات · کیٹک" },
    product: { en: "Product · Katek", ur: "مصنوع · کیٹک" },
    about: { en: "About Katek", ur: "کیٹک کے بارے" },
    difference: { en: "The Katek Difference", ur: "کیٹک کا فرق" },
    team: { en: "Meet the Team · Katek", ur: "ٹیم · کیٹک" },
    contract: { en: "Contract Manufacturing · Katek", ur: "کنٹریکٹ تیاری · کیٹک" },
    guides: { en: "How to Guides · Katek", ur: "رہنما ہدایات · کیٹک" },
    guide: { en: "Guide · Katek", ur: "رہنمائی · کیٹک" },
    news: { en: "News · Katek", ur: "خبریں · کیٹک" },
    article: { en: "News · Katek", ur: "خبر · کیٹک" },
    testimonials: { en: "Testimonials · Katek", ur: "تاثرات · کیٹک" },
    where: { en: "Where to Buy · Katek", ur: "کہاں سے خریدیں · کیٹک" },
    contact: { en: "Contact · Katek", ur: "رابطہ · کیٹک" },
    shop: { en: "Shop · Katek", ur: "دکان · کیٹک" },
    services: { en: "Products and Services · Katek", ur: "مصنوعات اور خدمات · کیٹک" },
    commodities: { en: "Grains · Katek", ur: "اناج · کیٹک" }
  };

  function lang() { return document.documentElement.lang === "ur" ? "ur" : "en"; }
  function tx(node) { return node ? (node[lang()] || node.en || "") : ""; }

  const nav = [
    { href: "about.html", page: "about", en: "About Katek", ur: "کیٹک کے بارے", children: [
      { href: "difference.html", page: "difference", en: "The Katek Difference", ur: "کیٹک کا فرق" },
      { href: "team.html", page: "team", en: "Meet the Team", ur: "ٹیم سے ملیں" },
      { href: "contract.html", page: "contract", en: "Contract Manufacturing", ur: "کنٹریکٹ تیاری" },
      { href: "services.html", page: "services", en: "Products and Services", ur: "مصنوعات اور خدمات" },
      { href: "commodities.html", page: "commodities", en: "Grains", ur: "اناج" }
    ]},
    { href: "home-gardener.html", page: "homeGardener", en: "Home Gardener", ur: "گھریلو باغبان", children: [
      { href: "products.html?audience=home", page: "products", en: "All Products", ur: "تمام مصنوعات" },
      { href: "guides.html", page: "guides", en: "How to Guides", ur: "رہنما ہدایات" },
      { href: "testimonials.html?who=home", page: "testimonials", en: "Testimonials", ur: "تاثرات" },
      { href: "news.html", page: "news", en: "Garden News", ur: "باغ کی خبریں" }
    ]},
    { href: "commercial.html", page: "commercial", en: "Commercial Grower", ur: "تجارتی کاشتکار", children: [
      { href: "products.html?audience=commercial", page: "products", en: "All Products", ur: "تمام مصنوعات" },
      { href: "product.html?id=custom-blend", page: "product", en: "Custom Blend", ur: "حسبِ ضرورت ملاوٹ" },
      { href: "testimonials.html?who=commercial", page: "testimonials", en: "Testimonials", ur: "تاثرات" },
      { href: "news.html", page: "news", en: "Grower News", ur: "کاشتکار خبریں" }
    ]},
    { href: "where.html", page: "where", en: "Where to Buy", ur: "کہاں سے خریدیں" },
    { href: "contact.html", page: "contact", en: "Contact", ur: "رابطہ" },
    { href: "shop.html", page: "shop", en: "Shop", ur: "دکان" }
  ];

  function link(item) {
    const attrs = [];
    if (item.page === page) attrs.push('aria-current="page"');
    if (item.href === "shop.html") attrs.push('class="menu-cta"');
    const extra = attrs.length ? ` ${attrs.join(" ")}` : "";
    return `<a href="${item.href}"${extra}><span data-en>${item.en}</span><span data-ur>${item.ur}</span></a>`;
  }

  function renderChrome() {
    const header = document.querySelector("[data-header]");
    const footer = document.querySelector("[data-footer]");
    if (header) {
      header.innerHTML = `
        <div class="util"><div class="wrap util-row">
          <span data-phone-bar><span data-en>Liquid and pellet organic fertilizers · Pakistan</span><span data-ur>مائع اور دانے دار نامیاتی کھادیں · پاکستان</span></span>
          <div class="lang" role="group" aria-label="Language">
            <button type="button" data-set-lang="en">EN</button>
            <button type="button" data-set-lang="ur">اردو</button>
          </div>
        </div></div>
        <div class="site-header"><div class="wrap header-row">
          <a class="brand" href="index.html"><img src="assets/logo.png" alt="Katek" width="132" height="54" decoding="async"></a>
          <button class="nav-toggle" type="button" data-nav-toggle aria-expanded="false">Menu</button>
          <ul class="menu">${nav.map((item) => `<li>${link(item)}${item.children ? `<ul class="sub">${item.children.map((child) => `<li>${link(child)}</li>`).join("")}</ul>` : ""}</li>`).join("")}</ul>
        </div></div>`;
    }
    if (footer) {
      footer.innerHTML = `
        <footer class="site-footer"><div class="wrap footer-grid">
          <div><strong>Katek</strong><p class="fine"><span data-en>Organic fertilizers for home gardeners, landscapers, and commercial growers in Pakistan. Quotes only. No online payment.</span><span data-ur>پاکستان کے گھریلو باغبانوں، لینڈ سکیپ والوں اور تجارتی کاشتکاروں کے لیے نامیاتی کھادیں۔ صرف قیمت۔ آن لائن ادائیگی نہیں۔</span></p><p class="fine"><span data-en>M/S Katek AG · 6-B, Industrial Estate, Multan · MR/0121 · FBR H495164</span><span data-ur>ایم/ایس کیٹک اے جی · 6-بی، انڈسٹریل اسٹیٹ، ملتان · MR/0121 · ایف بی آر H495164</span></p></div>
          <div><h3><span data-en>Home gardener</span><span data-ur>گھریلو باغبان</span></h3><ul><li><a href="products.html?audience=home"><span data-en>Products</span><span data-ur>مصنوعات</span></a></li><li><a href="guides.html"><span data-en>How to guides</span><span data-ur>رہنما ہدایات</span></a></li></ul></div>
          <div><h3><span data-en>Commercial</span><span data-ur>تجارتی</span></h3><ul><li><a href="products.html?audience=commercial"><span data-en>Products</span><span data-ur>مصنوعات</span></a></li><li><a href="product.html?id=custom-blend"><span data-en>Custom blend</span><span data-ur>حسبِ ضرورت ملاوٹ</span></a></li></ul></div>
          <div><h3><span data-en>Company</span><span data-ur>کمپنی</span></h3><ul><li><a href="about.html"><span data-en>About</span><span data-ur>ہمارے بارے</span></a></li><li><a href="where.html"><span data-en>Where to buy</span><span data-ur>کہاں سے خریدیں</span></a></li><li><a href="contact.html"><span data-en>Contact</span><span data-ur>رابطہ</span></a></li></ul></div>
        </div></footer>`;
    }
    document.querySelector("[data-nav-toggle]")?.addEventListener("click", () => {
      const open = document.querySelector(".site-header").classList.toggle("open");
      document.querySelector("[data-nav-toggle]").setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.querySelectorAll("[data-set-lang]").forEach((button) => {
      button.addEventListener("click", () => setLang(button.dataset.setLang));
    });
    if (window.matchMedia("(max-width: 900px)").matches) {
      document.querySelectorAll(".menu > li").forEach((item) => {
        const sub = item.querySelector(".sub");
        if (!sub) return;
        item.querySelector("a").addEventListener("click", (event) => {
          if (!item.classList.contains("open")) {
            event.preventDefault();
            item.classList.add("open");
          }
        });
      });
    }
  }

  let catalog = null;

  function productCard(product, branded) {
    const card = document.createElement("article");
    card.className = "product";
    card.dataset.form = (product.form.en || "").toLowerCase();
    card.innerHTML = `${branded ? `<a class="pack" href="product.html?id=${product.id}"><img src="assets/brand-mark.jpg" alt="Katek"></a>` : ""}<p class="meta"><span class="tag"></span></p><h3></h3><p class="summary"></p><a class="text-link" href="product.html?id=${product.id}"></a>`;
    card.querySelector(".tag").textContent = tx(product.form);
    card.querySelector("h3").textContent = tx(product.name);
    card.querySelector(".summary").textContent = tx(product.summary);
    card.querySelector("a.text-link").textContent = lang() === "ur" ? "مصنوع دیکھیں" : "View product";
    return card;
  }

  function renderProducts() {
    document.querySelectorAll("[data-grid]").forEach((grid) => {
      const mode = grid.dataset.grid;
      const params = new URLSearchParams(location.search);
      const audience = grid.dataset.audience || params.get("audience") || "home";
      const active = document.querySelector("[data-filter].is-active");
      const filter = active ? active.dataset.filter : "all";
      const query = (document.querySelector("[data-search]")?.value || "").trim().toLowerCase();
      let items = catalog.products.filter((product) => {
        if (mode === "featured") return product.featured;
        if (mode === "audience") return product.audiences.includes(audience);
        return true;
      });
      if (mode === "audience") {
        const groupOf = (product) => {
          const form = product.form.en.toLowerCase();
          if (["pellets", "fines", "granules"].includes(form)) return "pellets";
          if (["liquid", "starter"].includes(form)) return "liquid";
          if (["minerals", "trace", "blend"].includes(form)) return "minerals";
          return form;
        };
        items = items.filter((product) => filter === "all" || groupOf(product) === filter);
        items = items.filter((product) => !query || `${product.name.en} ${product.name.ur} ${product.summary.en} ${product.summary.ur}`.toLowerCase().includes(query));
      }
      grid.replaceChildren();
      if (!items.length) {
        const empty = document.createElement("p");
        empty.className = "empty";
        empty.textContent = lang() === "ur" ? "اس تلاش سے کوئی مصنوع نہیں ملی۔" : "No product matches this search.";
        grid.appendChild(empty);
        return;
      }
      items.forEach((product) => grid.appendChild(productCard(product, mode === "featured")));
    });
  }

  function renderDetail() {
    const root = document.querySelector("[data-product]");
    if (!root) return;
    const product = catalog.products.find((item) => item.id === new URLSearchParams(location.search).get("id"));
    if (!product) {
      root.innerHTML = `<p>${lang() === "ur" ? "یہ مصنوع فہرست میں نہیں۔" : "This product is not in the catalog."}</p>`;
      return;
    }
    document.title = `${tx(product.name)} · Katek`;
    root.innerHTML = `<p class="kicker"></p><h1></h1><p class="lead"></p><p><a class="button dark"></a></p>`;
    root.querySelector(".kicker").textContent = tx(product.form);
    root.querySelector("h1").textContent = tx(product.name);
    root.querySelector(".lead").textContent = tx(product.summary);
    const quote = root.querySelector("a");
    quote.href = `contact.html?product=${product.id}`;
    quote.textContent = lang() === "ur" ? "قیمت کی درخواست" : "Request a quote";
  }

  function renderCollection(selector, items, hrefBase) {
    const root = document.querySelector(selector);
    if (!root) return;
    root.replaceChildren();
    items.forEach((item) => {
      const card = document.createElement("article");
      card.className = "card";
      card.innerHTML = `<h3></h3><p></p><a class="text-link" href="${hrefBase}${item.id}"></a>`;
      card.querySelector("h3").textContent = tx(item.title);
      card.querySelector("p").textContent = tx(item.paras)[0] || tx(item.paras);
      const paras = item.paras[lang()] || item.paras.en;
      card.querySelector("p").textContent = paras[0];
      card.querySelector("a").textContent = lang() === "ur" ? "پڑھیں" : "Read";
      root.appendChild(card);
    });
  }

  function renderArticle(selector, list) {
    const root = document.querySelector(selector);
    if (!root) return;
    const item = list.find((entry) => entry.id === new URLSearchParams(location.search).get("id"));
    if (!item) {
      root.innerHTML = `<p>${lang() === "ur" ? "یہ صفحہ نہیں ملا۔" : "This page was not found."}</p>`;
      return;
    }
    document.title = `${tx(item.title)} · Katek`;
    const paras = (item.paras[lang()] || item.paras.en).map((para) => `<p></p>`).join("");
    root.innerHTML = `<h1></h1><div class="prose">${paras}</div>`;
    root.querySelector("h1").textContent = tx(item.title);
    root.querySelectorAll(".prose p").forEach((node, index) => {
      node.textContent = (item.paras[lang()] || item.paras.en)[index];
    });
    if (item.product) {
      const more = document.createElement("p");
      const link = document.createElement("a");
      link.className = "button dark";
      link.href = `product.html?id=${item.product}`;
      link.textContent = lang() === "ur" ? "متعلقہ مصنوع" : "Related product";
      more.appendChild(link);
      root.appendChild(more);
    }
  }

  function renderContact() {
    const input = document.querySelector("[data-interest]");
    if (!input || input.dataset.touched === "true") return;
    const product = catalog.products.find((item) => item.id === new URLSearchParams(location.search).get("product"));
    if (product) input.value = tx(product.name);
  }

  function render() {
    if (!catalog) return;
    renderProducts();
    renderDetail();
    renderCollection("[data-guides]", catalog.guides, "guide.html?id=");
    renderCollection("[data-news]", catalog.news, "article.html?id=");
    renderArticle("[data-guide]", catalog.guides);
    renderArticle("[data-article]", catalog.news);
    renderContact();
    document.querySelectorAll("[data-set-lang]").forEach((button) => {
      button.setAttribute("aria-pressed", button.dataset.setLang === lang() ? "true" : "false");
    });
  }

  function ensureUrduFont() {
    if (document.getElementById("urdu-font")) return;
    const link = document.createElement("link");
    link.id = "urdu-font";
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@500&display=swap";
    document.head.appendChild(link);
  }

  function setLang(next) {
    const value = next === "ur" ? "ur" : "en";
    document.documentElement.lang = value;
    document.documentElement.dir = value === "ur" ? "rtl" : "ltr";
    localStorage.setItem("katek-lang", value);
    if (value === "ur") ensureUrduFont();
    if (titles[page]) document.title = titles[page][value];
    renderPhone();
    render();
    document.dispatchEvent(new Event("katek-lang"));
  }

  document.querySelector("[data-search]")?.addEventListener("input", renderProducts);
  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-filter]").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      renderProducts();
    });
  });
  function pakistaniPhone(value) {
    let digits = String(value || "").replace(/\D/g, "");
    if (digits.startsWith("0092")) digits = digits.slice(4);
    else if (digits.startsWith("92")) digits = digits.slice(2);
    if (digits.startsWith("3") && digits.length === 10) digits = `0${digits}`;
    if (/^03\d{9}$/.test(digits)) return { local: `${digits.slice(0, 4)} ${digits.slice(4)}`, e164: `92${digits.slice(1)}` };
    if (/^0[1-9]\d{8,9}$/.test(digits)) return { local: digits, e164: `92${digits.slice(1)}` };
    return null;
  }

  function renderPhone() {
    const bar = document.querySelector("[data-phone-bar]");
    const spot = document.querySelector("[data-katek-phone]");
    const parsed = pakistaniPhone(katekPhone);
    if (bar && parsed) {
      bar.innerHTML = `<a href="tel:+${parsed.e164}" style="color:inherit">${parsed.local}</a>`;
    }
    if (!spot) return;
    if (!parsed) {
      spot.innerHTML = lang() === "ur"
        ? "کیٹک کا نمبر پاکستانی موبائل ہو گا، جیسے 03XX XXXXXXX۔ نمبر ملنے پر یہیں اور اوپر دکھے گا۔"
        : "Katek’s number will be a Pakistani mobile, such as 03XX XXXXXXX. It will show here and in the top bar once you send it.";
      return;
    }
    spot.innerHTML = `<a href="tel:+${parsed.e164}">${parsed.local}</a> · <a href="https://wa.me/${parsed.e164}">WhatsApp</a>`;
  }

  document.querySelector("[data-quote-form]")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const note = document.querySelector("[data-form-note]");
    const name = String(data.get("name") || "").trim();
    const city = String(data.get("city") || "").trim();
    const phone = pakistaniPhone(data.get("phone"));
    if (!name || !city || !phone) {
      note.textContent = lang() === "ur" ? "پاکستانی نمبر لکھیں، موبائل 03XX XXXXXXX۔" : "Use a Pakistani number. Mobiles look like 03XX XXXXXXX.";
      return;
    }
    const text = [`Katek quote`, `Name: ${name}`, `City: ${city}`, `Phone: ${phone.local}`, `Product: ${data.get("product") || "-"}`, `Message: ${data.get("message") || "-"}`].join("\n");
    const business = pakistaniPhone(katekPhone);
    if (business) {
      window.open(`https://wa.me/${business.e164}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
      note.textContent = lang() === "ur" ? "واٹس ایپ کھل گیا۔" : "WhatsApp is open with your enquiry.";
      return;
    }
    try {
      await navigator.clipboard.writeText(text);
      note.textContent = lang() === "ur" ? "درخواست نقل ہو گئی۔ کیٹک کا پاکستانی واٹس ایپ نمبر شامل ہوتے ہی یہی پیغام بھیج دیں۔" : "Enquiry copied. Send it when Katek’s Pakistani WhatsApp number is added.";
    } catch (error) {
      note.textContent = text;
    }
  });
  document.querySelector("[data-interest]")?.addEventListener("input", (event) => {
    event.currentTarget.dataset.touched = "true";
  });

  const slider = document.querySelector("[data-slider]");
  if (slider) {
    const slides = [...slider.querySelectorAll(".slide")];
    let index = 0;
    const show = (next) => {
      index = (next + slides.length) % slides.length;
      slides.forEach((slide, item) => slide.classList.toggle("is-on", item === index));
    };
    slider.querySelector("[data-prev]")?.addEventListener("click", () => show(index - 1));
    slider.querySelector("[data-next]")?.addEventListener("click", () => show(index + 1));
    setInterval(() => show(index + 1), 6000);
  }

  renderChrome();
  const queryLang = new URLSearchParams(location.search).get("lang");
  setLang(queryLang === "ur" || queryLang === "en" ? queryLang : (localStorage.getItem("katek-lang") || "en"));
  fetch("data/catalog.json").then((response) => response.json()).then((data) => {
    catalog = data;
    render();
  }).catch(() => {
    const grid = document.querySelector("[data-grid], [data-product], [data-guides]");
    if (grid) grid.textContent = lang() === "ur" ? "فہرست نہیں کھل سکی۔" : "The catalog could not be loaded.";
  });
})();
