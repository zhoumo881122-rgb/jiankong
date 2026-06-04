const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const baseUrl = "https://jk.jianyangba.com";

const company = {
  name: "成都天际网络科技有限公司",
  tel: "028-27359595",
  mobile: "17313127895",
  address: "成都市简阳市园中苑A区",
};

const regions = [
  { slug: "sc", name: "四川", scope: "四川全省及成都周边区县" },
  { slug: "cd", name: "成都", scope: "成都市主城区、产业园区、商圈与社区" },
  { slug: "lqy", name: "龙泉驿", scope: "龙泉驿汽车产业园、社区、学校、商铺" },
  { slug: "qbj", name: "青白江", scope: "青白江物流园、仓储园区、工厂与小区" },
  { slug: "xd", name: "新都", scope: "新都工业园、市场、写字楼、住宅小区" },
  { slug: "wj", name: "温江", scope: "温江学校、医院、园区、商业门店" },
  { slug: "sl", name: "双流", scope: "双流机场周边、物流仓储、办公园区" },
  { slug: "pd", name: "郫都", scope: "郫都电子园区、校园、厂区、商铺" },
  { slug: "xj", name: "新津", scope: "新津工业区、工地、园区和社区" },
  { slug: "jt", name: "金堂", scope: "金堂工厂、乡镇门店、学校与小区" },
  { slug: "dy", name: "大邑", scope: "大邑景区、厂区、社区和商业空间" },
  { slug: "pj", name: "蒲江", scope: "蒲江茶园、农场、工厂、学校和商铺" },
  { slug: "jy", name: "简阳", scope: "简阳城区、东部新区周边、厂区与社区" },
  { slug: "djy", name: "都江堰", scope: "都江堰景区、酒店、学校、小区和工地" },
  { slug: "pz", name: "彭州", scope: "彭州工业园、商超、社区和仓库" },
  { slug: "ql", name: "邛崃", scope: "邛崃酒厂、园区、学校、商铺和小区" },
  { slug: "cz", name: "崇州", scope: "崇州家具园区、工厂、社区和商业门店" },
];

const services = [
  ["高清网络监控安装", "海康、大华及主流 IPC 摄像机布点，POE 供电，NVR 录像，手机远程查看。"],
  ["工厂园区监控系统", "车间、仓库、出入口、围墙、装卸区、生产线重点点位覆盖，支持分级权限。"],
  ["商铺办公室监控", "收银台、门头、过道、库房、前台、会议室等场景布线安装与远程管理。"],
  ["小区物业监控改造", "单元门、电梯厅、停车场、周界、物业中心监控升级，兼顾夜视与存储周期。"],
  ["学校医院监控工程", "公共区域、操场、走廊、门岗、重点科室监控规划，支持集中管理与回放。"],
  ["无线与太阳能监控", "不方便布线的工地、农场、鱼塘、乡镇道路，可选无线网桥、4G 与太阳能方案。"],
  ["门禁道闸联动", "人脸门禁、访客、车牌识别、道闸、报警、广播与监控平台联动。"],
  ["维修维护与增补点", "摄像头离线、画面模糊、录像丢失、硬盘故障、线路老化、旧系统扩容改造。"],
];

const industries = ["住宅小区", "工厂车间", "写字楼办公室", "商铺超市", "学校幼儿园", "医院诊所", "酒店民宿", "仓库物流", "建筑工地", "停车场", "农场鱼塘", "景区园区"];
const keywords = ["监控安装", "摄像头安装", "网络监控", "安防监控", "弱电工程", "监控维修", "手机远程监控", "门禁道闸"];

function esc(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;",
  }[char]));
}

function layout({ title, description, canonical, body, pathPrefix = "." }) {
  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <meta name="keywords" content="${esc(keywords.join(","))},成都监控安装,四川监控安装,${esc(company.name)}">
  <meta name="robots" content="index,follow">
  <link rel="canonical" href="${esc(canonical)}">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:url" content="${esc(canonical)}">
  <meta property="og:image" content="${baseUrl}/assets/hero-cctv-installation.png">
  <link rel="stylesheet" href="${pathPrefix}/styles.css">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "${company.name}",
    "telephone": "${company.tel}",
    "address": "${company.address}",
    "areaServed": "四川成都及周边区县",
    "url": "${baseUrl}",
    "image": "${baseUrl}/assets/hero-cctv-installation.png"
  }
  </script>
</head>
<body>
  <div class="topbar">
    <div class="container">
      <span>${company.name}</span>
      <div class="contact-line">
        <a href="tel:${company.tel}">电话：${company.tel}</a>
        <a href="tel:${company.mobile}">手机/微信：${company.mobile}</a>
        <span>${company.address}</span>
      </div>
    </div>
  </div>
  <header class="nav">
    <div class="container">
      <a class="brand" href="${pathPrefix}/">
        <span class="brand-mark">天</span>
        <span>${company.name}<small>监控安装 · 弱电工程 · 安防维护</small></span>
      </a>
      <nav class="nav-links" aria-label="主导航">
        <a href="${pathPrefix}/#services">服务项目</a>
        <a href="${pathPrefix}/#solutions">行业方案</a>
        <a href="${pathPrefix}/#areas">服务区域</a>
        <a href="${pathPrefix}/#contact">联系我们</a>
      </nav>
    </div>
  </header>
${body}
  <footer class="footer">
    <div class="container footer-grid">
      <div>
        <h3>${company.name}</h3>
        <p>成都及四川周边监控安装、摄像头安装、弱电布线、门禁道闸、网络维护与安防系统改造服务商。</p>
      </div>
      <div>
        <h3>联系方式</h3>
        <p>电话：<a href="tel:${company.tel}">${company.tel}</a><br>手机/微信：<a href="tel:${company.mobile}">${company.mobile}</a><br>地址：${company.address}</p>
      </div>
      <div>
        <h3>热门区域</h3>
        <p>${regions.slice(0, 8).map((r) => `<a href="${pathPrefix}/${r.slug}/">${r.name}监控安装</a>`).join(" / ")}</p>
      </div>
    </div>
  </footer>
  <div class="mobile-call">
    <a class="btn" href="tel:${company.mobile}">手机咨询</a>
    <a class="btn light" href="tel:${company.tel}">座机</a>
  </div>
</body>
</html>
`;
}

function serviceCards() {
  return services.map(([title, text]) => `
        <article class="card">
          <h3>${title}</h3>
          <p>${text}</p>
        </article>`).join("");
}

function industryCards(regionName = "成都") {
  return industries.map((name) => `
        <article class="card">
          <h3>${regionName}${name}监控安装</h3>
          <p>结合现场出入口、通道、重点资产和夜间照明情况，配置摄像机、录像存储、远程查看和必要的门禁报警联动。</p>
        </article>`).join("");
}

function areaLinks(pathPrefix = ".") {
  return regions.map((r) => `<a class="area-link" href="${pathPrefix}/${r.slug}/">${r.name}监控安装</a>`).join("");
}

function contactPanel() {
  return `
      <aside class="aside-panel" id="contact">
        <h3>获取监控安装报价</h3>
        <table class="contact-table">
          <tr><th>电话</th><td><a href="tel:${company.tel}">${company.tel}</a></td></tr>
          <tr><th>手机</th><td><a href="tel:${company.mobile}">${company.mobile}</a></td></tr>
          <tr><th>微信</th><td>${company.mobile}（微信同号）</td></tr>
          <tr><th>地址</th><td>${company.address}</td></tr>
        </table>
        <div class="qr-box">
          <img src="../assets/wechat-qr.jpg" alt="成都天际网络科技有限公司微信二维码">
          <p>扫码添加微信，发送现场照片、点位数量和安装地址，可快速沟通方案。</p>
        </div>
      </aside>`;
}

function homepage() {
  const title = "成都监控安装公司_四川摄像头安装_弱电安防工程-成都天际网络科技有限公司";
  const description = "成都天际网络科技有限公司提供四川、成都、简阳及周边区县监控安装、摄像头安装、弱电布线、门禁道闸、监控维修维护服务，电话028-27359595，手机微信17313127895。";
  const body = `
  <main>
    <section class="hero">
      <div class="container">
        <div>
          <p class="eyebrow">四川成都监控安装 · 摄像头安装 · 弱电安防工程</p>
          <h1>成都监控安装公司，为各行业提供安防监控设计、安装与维护</h1>
          <p class="hero-copy">成都天际网络科技有限公司服务小区、工厂、学校、医院、商铺、办公室、仓库、工地、停车场、农场等场景，提供从现场勘察、点位规划、布线施工、设备安装到手机远程调试的一站式监控系统服务。</p>
          <div class="hero-actions">
            <a class="btn" href="tel:${company.mobile}">立即电话咨询</a>
            <a class="btn secondary" href="#contact">微信获取方案</a>
          </div>
          <div class="hero-stats">
            <div class="hero-stat"><strong>多场景</strong><span>住宅/商业/工业/公共场所</span></div>
            <div class="hero-stat"><strong>可远程</strong><span>手机查看与录像回放</span></div>
            <div class="hero-stat"><strong>可改造</strong><span>旧系统升级扩容维护</span></div>
            <div class="hero-stat"><strong>本地化</strong><span>成都及周边快速响应</span></div>
          </div>
        </div>
      </div>
    </section>

    <section id="services">
      <div class="container">
        <div class="section-head">
          <div>
            <h2>监控安装服务项目</h2>
            <p>覆盖网络摄像机、录像机、交换机、网线光纤、机柜、UPS、门禁道闸、报警广播等弱电安防系统，按现场需求组合方案。</p>
          </div>
        </div>
        <div class="grid service-grid">${serviceCards()}</div>
      </div>
    </section>

    <section class="soft" id="solutions">
      <div class="container solution-layout">
        <div>
          <div class="section-head">
            <div>
              <h2>各行业监控设备安装方案</h2>
              <p>不同场景的监控目标不同：有的重视出入口留证，有的重视生产安全，有的重视夜间防盗和远程巡查。我们按点位、光线、网络、供电和存储周期做方案。</p>
            </div>
          </div>
          <div class="grid industry-grid">${industryCards("成都")}</div>
        </div>
        <aside class="aside-panel">
          <h3>常见配置</h3>
          <ul class="check-list">
            <li>200万、400万、800万高清网络摄像机</li>
            <li>半球、枪机、全彩、球机、拾音摄像机</li>
            <li>NVR录像机、监控硬盘、POE交换机</li>
            <li>无线网桥、光纤收发、机柜理线</li>
            <li>手机远程查看、录像回放、权限管理</li>
          </ul>
        </aside>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="section-head">
          <div>
            <h2>标准施工流程</h2>
            <p>从现场到交付，每一步都围绕清晰画面、稳定传输、可靠录像和后期可维护来做。</p>
          </div>
        </div>
        <div class="grid process">
          <article class="card"><h3>需求沟通</h3><p>确认安装地址、行业场景、点位数量、预算和远程查看需求。</p></article>
          <article class="card"><h3>现场勘察</h3><p>查看供电、网络、布线路径、安装高度、照明和盲区。</p></article>
          <article class="card"><h3>方案报价</h3><p>明确设备型号、存储周期、施工材料、工期和售后内容。</p></article>
          <article class="card"><h3>安装调试</h3><p>布线、安装、录像配置、手机远程、画面角度和回放测试。</p></article>
          <article class="card"><h3>售后维护</h3><p>提供故障排查、增补点位、设备更换和系统升级服务。</p></article>
        </div>
      </div>
    </section>

    <section class="soft" id="areas">
      <div class="container">
        <div class="section-head">
          <div>
            <h2>四川成都各区域监控安装页面</h2>
            <p>每个区域都已生成独立 SEO 页面，适合投放和搜索收录。点击可查看对应区域服务内容。</p>
          </div>
        </div>
        <div class="areas">${areaLinks(".")}</div>
      </div>
    </section>

    <section class="cta">
      <div class="container contact-layout">
        <div class="section-head">
          <div>
            <h2>需要安装监控？发送现场照片即可初步沟通</h2>
            <p>说明安装区域、摄像头数量、是否需要手机远程、是否已有网络和电源，我们可以快速判断方案方向。</p>
            <div class="section-actions">
              <a class="btn light" href="tel:${company.mobile}">拨打 ${company.mobile}</a>
              <a class="btn secondary" href="tel:${company.tel}">座机 ${company.tel}</a>
            </div>
          </div>
        </div>
        <aside class="qr-box">
          <img src="assets/wechat-qr.jpg" alt="成都天际网络科技有限公司微信二维码">
          <p>微信同号：${company.mobile}</p>
        </aside>
      </div>
    </section>
  </main>`;
  return layout({ title, description, canonical: baseUrl + "/", body, pathPrefix: "." });
}

function regionPage(region) {
  const title = `${region.name}监控安装公司_${region.name}摄像头安装_弱电安防工程-成都天际网络科技有限公司`;
  const description = `${company.name}提供${region.name}监控安装、${region.name}摄像头安装、网络监控、门禁道闸、监控维修维护与弱电布线服务，覆盖${region.scope}，电话${company.tel}，手机微信${company.mobile}。`;
  const body = `
  <main>
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">${region.name}监控安装 · ${region.name}摄像头安装 · 本地弱电安防服务</p>
        <h1>${region.name}监控安装公司，摄像头安装、弱电布线、远程监控一站式服务</h1>
        <p>${company.name}服务${region.scope}，面向小区、工厂、商铺、办公室、学校、医院、仓库、工地、停车场、农场等行业场景，提供监控设备安装、系统改造、维修维护和手机远程调试。</p>
        <div class="hero-actions">
          <a class="btn" href="tel:${company.mobile}">咨询${region.name}监控安装</a>
          <a class="btn secondary" href="#contact">查看微信二维码</a>
        </div>
        <p class="breadcrumb"><a href="../">首页</a> / ${region.name}监控安装</p>
      </div>
    </section>
    <div class="keyword-strip">
      <div class="container">
        ${keywords.map((kw) => `<span class="area-link">${region.name}${kw}</span>`).join("")}
      </div>
    </div>

    <section>
      <div class="container region-layout">
        <article class="content-block">
          <h2>${region.name}监控安装服务内容</h2>
          <p>${region.name}监控安装需要结合建筑结构、网络环境、供电位置、夜间照明、录像保存周期和管理权限来规划。成都天际网络科技有限公司可根据现场情况提供高清网络摄像机、POE 交换机、NVR 录像机、监控硬盘、无线网桥、光纤传输、机柜理线、手机远程查看等完整配置。</p>
          <p>无论是新装监控、旧监控改造、增加摄像头点位、维修离线摄像头、调整画面角度，还是做门禁、道闸、报警、广播和监控联动，都可以先通过电话或微信沟通现场情况。</p>
          <ul class="check-list">
            <li>${region.name}住宅小区、电梯厅、单元门、停车场、物业中心监控安装。</li>
            <li>${region.name}工厂车间、仓库、园区围墙、出入口、装卸区监控安装。</li>
            <li>${region.name}商铺超市、办公室、酒店民宿、学校医院公共区域监控安装。</li>
            <li>${region.name}工地、农场、鱼塘、乡镇道路等无线或太阳能监控方案。</li>
          </ul>
        </article>
        ${contactPanel()}
      </div>
    </section>

    <section class="soft">
      <div class="container">
        <div class="section-head">
          <div>
            <h2>${region.name}各行业摄像头安装方案</h2>
            <p>按行业场景制定监控点位，不堆设备，重点解决看得清、录得住、查得到、管得稳。</p>
          </div>
        </div>
        <div class="grid industry-grid">${industryCards(region.name)}</div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="section-head">
          <div>
            <h2>${region.name}监控安装常见问题</h2>
            <p>报价通常与摄像头数量、清晰度、布线距离、是否高空作业、录像保存天数、是否需要无线传输和门禁联动有关。</p>
          </div>
        </div>
        <div class="grid service-grid">
          <article class="card"><h3>需要多少个摄像头？</h3><p>一般先覆盖大门、通道、收银台、仓库、停车区和重点资产区域，再根据盲区补点。</p></article>
          <article class="card"><h3>可以手机远程看吗？</h3><p>可以。安装完成后可配置手机远程预览、录像回放和多用户权限，方便负责人随时查看。</p></article>
          <article class="card"><h3>旧系统能升级吗？</h3><p>可以检查原有线路、摄像头、录像机和硬盘状态，能利用的尽量利用，不能满足清晰度和稳定性的再更换。</p></article>
        </div>
      </div>
    </section>

    <section class="soft">
      <div class="container">
        <div class="section-head">
          <div>
            <h2>更多服务区域</h2>
            <p>成都天际网络科技有限公司同时服务四川、成都及周边多个区县。</p>
          </div>
        </div>
        <div class="areas">${areaLinks("..")}</div>
      </div>
    </section>
  </main>`;
  return layout({ title, description, canonical: `${baseUrl}/${region.slug}/`, body, pathPrefix: ".." });
}

fs.writeFileSync(path.join(root, "index.html"), homepage(), "utf8");

for (const region of regions) {
  const dir = path.join(root, region.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), regionPage(region), "utf8");
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${baseUrl}/</loc><priority>1.0</priority></url>
${regions.map((r) => `  <url><loc>${baseUrl}/${r.slug}/</loc><priority>0.8</priority></url>`).join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(root, "sitemap.xml"), sitemap, "utf8");
fs.writeFileSync(path.join(root, "robots.txt"), `User-agent: *
Allow: /
Sitemap: ${baseUrl}/sitemap.xml
`, "utf8");

console.log(`Generated homepage and ${regions.length} region pages.`);
