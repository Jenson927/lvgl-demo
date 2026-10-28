/* ============================================================
   LVGL 组件演示 —— 公共脚本
   零依赖、可直接 file:// 打开（不使用 fetch / 模块导入）
   ============================================================ */

/* ---------- 组件清单（与 examples/widgets 目录一一对应） ---------- */
var LV_WIDGETS = [
  { id: "button",    name: "Button 按钮",      group: "基础", ready: true,  desc: "可点击、可勾选、可禁用" },
  { id: "label",     name: "Label 标签",       group: "基础", ready: true,  desc: "文本显示、长文本、样式" },
  { id: "bar",       name: "Bar 进度条",       group: "基础", ready: true,  desc: "单值/区间、动画过渡" },
  { id: "slider",    name: "Slider 滑块",      group: "基础", ready: true,  desc: "拖动取值、区间滑动" },
  { id: "switch",    name: "Switch 开关",      group: "基础", ready: true,  desc: "二态切换、动画" },
  { id: "arc",       name: "Arc 圆弧",         group: "基础", ready: true,  desc: "角度、范围、拖动" },
  { id: "spinner",   name: "Spinner 加载",     group: "基础", ready: true,  desc: "循环旋转、速度/方向" },
  { id: "chart",     name: "Chart 图表",       group: "数据", ready: true,  desc: "折线/柱状、动态刷新" },
  { id: "checkbox",  name: "Checkbox 复选框",  group: "基础", ready: true,  desc: "勾选/取消、禁用、动画" },
  { id: "led",       name: "LED 指示灯",       group: "基础", ready: true,  desc: "亮度、颜色、呼吸灯" },
  { id: "line",      name: "Line 线条",        group: "基础", ready: true,  desc: "折线坐标、y 翻转、圆头" },
  { id: "image",     name: "Image 图片",       group: "资源", ready: true,  desc: "旋转、缩放、轴心、重着色" },
  { id: "imagebutton", name: "Image Button",   group: "资源", ready: true,  desc: "四态图片按钮、可勾选" },
  { id: "animimg",   name: "Anim Image",       group: "资源", ready: true,  desc: "帧序列动画、循环次数" },
  { id: "lottie",    name: "Lottie 动画",      group: "资源", ready: true,  desc: "矢量动画、播放速度" },
  { id: "qrcode",    name: "QR Code",          group: "资源", ready: true,  desc: "二维码图案、静区、配色" },
  { id: "barcode",   name: "Barcode 条形码",   group: "资源", ready: true,  desc: "条码生成、缩放、方向" },
  { id: "canvas",    name: "Canvas 画布",      group: "资源", ready: true,  desc: "像素画布、绘图层、清屏" },
  { id: "table",     name: "Table 表格",       group: "数据", ready: true,  desc: "行列、单元格、选中、列宽" },
  { id: "calendar",  name: "Calendar 日历",    group: "数据", ready: true,  desc: "月视图、今天/高亮、中文" },
  { id: "textarea",  name: "Text Area 输入框", group: "输入", ready: true,  desc: "输入、密码、单行、长度限制" },
  { id: "spinbox",   name: "Spinbox 数字框",   group: "输入", ready: true,  desc: "步进、范围、数字格式" },
  { id: "dropdown",  name: "Dropdown 下拉",    group: "输入", ready: true,  desc: "展开列表、方向、选项" },
  { id: "roller",    name: "Roller 滚轮",      group: "输入", ready: true,  desc: "滚轮选择、3D 效果" },
  { id: "keyboard",  name: "Keyboard 键盘",    group: "输入", ready: true,  desc: "QWERTY、多模式、popover" },
  { id: "buttonmatrix", name: "Button Matrix", group: "输入", ready: true,  desc: "矩阵按键、单选、禁用" },
  { id: "list",      name: "List 列表",        group: "容器", ready: true,  desc: "列表项、图标、滚动" },
  { id: "menu",      name: "Menu 菜单",        group: "容器", ready: true,  desc: "侧栏+子页导航、返回" },
  { id: "msgbox",    name: "Msgbox 弹窗",      group: "容器", ready: true,  desc: "标题/正文/按钮、遮罩" },
  { id: "tabview",   name: "Tabview 标签页",   group: "容器", ready: true,  desc: "多标签、四向标签栏" },
  { id: "tileview",  name: "Tileview 平铺",    group: "容器", ready: true,  desc: "2D 平铺、拖动吸附" },
  { id: "win",       name: "Win 窗口",         group: "容器", ready: true,  desc: "标题栏按钮、拖动、关闭" },
  { id: "object",    name: "Base Object 基类", group: "基础", ready: true,  desc: "基类对象、样式、拖动" },
  { id: "span",      name: "Span 富文本",      group: "基础", ready: true,  desc: "富文本、溢出模式、滚动" },
  { id: "arclabel",  name: "Arc Label",        group: "基础", ready: true,  desc: "弧形文字、方向、角度" },
  { id: "scale",     name: "Scale 刻度",       group: "数据", ready: true,  desc: "线性/圆形刻度、区间、指针" }
];

var LV_LAYOUTS = [
  { id: "flex", name: "Flex 弹性布局", group: "布局", ready: true, desc: "行/列、对齐、换行" },
  { id: "grid", name: "Grid 网格布局", group: "布局", ready: true, desc: "行列模板、跨格" }
];

var LV_STYLES = [
  { id: "style-basic", name: "样式基础", group: "样式", ready: true, desc: "背景/边框/圆角/阴影" },
  { id: "style-states", name: "状态与过渡", group: "样式", ready: true, desc: "默认/按下/勾选/禁用" }
];

/* ---------- 主题 ---------- */
function lvGetTheme() {
  /* 支持 ?theme=dark 直接分享深色版本 */
  var q = location.search.match(/[?&]theme=(dark|light)/);
  if (q) return q[1];
  try {
    return localStorage.getItem("lv-demo-theme") || "light";
  } catch (e) {
    return "light";
  }
}

function lvSetTheme(t) {
  try {
    localStorage.setItem("lv-demo-theme", t);
  } catch (e) {
    /* file:// 下某些浏览器禁用 storage，忽略即可 */
  }
  document.documentElement.setAttribute("data-theme", t);
  var btn = document.getElementById("lv-theme-toggle");
  if (btn) btn.textContent = t === "dark" ? "浅色主题" : "深色主题";
  window.dispatchEvent(new CustomEvent("lv-theme-change", { detail: t }));
}

function lvToggleTheme() {
  lvSetTheme(lvGetTheme() === "dark" ? "light" : "dark");
}

/* ---------- 页面渲染 ---------- */
var LVPage = {
  render: function (opts) {
    lvSetTheme(lvGetTheme());

    var topbar = document.getElementById("topbar");
    if (topbar) {
      topbar.innerHTML =
        '<a class="lv-back" href="../index.html">← 返回画廊</a>' +
        '<div><h1 class="lv-topbar__title">' + opts.title + "</h1>" +
        '<p class="lv-topbar__sub">' + (opts.sub || "") + "</p></div>" +
        '<div class="lv-topbar__spacer"></div>' +
        '<button class="lv-theme-btn" id="lv-theme-toggle" onclick="lvToggleTheme()"></button>';
      var t = lvGetTheme();
      document.getElementById("lv-theme-toggle").textContent =
        t === "dark" ? "浅色主题" : "深色主题";
    }

    var notes = document.getElementById("notes");
    if (notes && opts.notes) {
      notes.innerHTML = opts.notes
        .map(function (n) {
          return (
            '<div class="lv-note"><h3 class="lv-note__title">' + n.title + "</h3><ul>" +
            n.items.map(function (i) { return "<li>" + i + "</li>"; }).join("") +
            "</ul></div>"
          );
        })
        .join("");
    }
  }
};

/* ---------- 画廊首页 ---------- */
function lvRenderGallery() {
  lvSetTheme(lvGetTheme());

  var btn = document.getElementById("lv-theme-toggle");
  if (btn) btn.textContent = lvGetTheme() === "dark" ? "浅色主题" : "深色主题";

  function group(list) {
    var map = {};
    list.forEach(function (w) {
      (map[w.group] = map[w.group] || []).push(w);
    });
    return map;
  }

  function card(w, section) {
    var href = section + "/" + w.id + ".html";
    var cls = "lv-card-item" + (w.ready ? "" : " is-todo");
    var tag = w.ready ? '<span class="lv-badge lv-badge--ok">可演示</span>'
                      : '<span class="lv-badge">待补</span>';
    var inner =
      '<div class="lv-card-item__head"><span class="lv-card-item__name">' + w.name + "</span>" + tag + "</div>" +
      '<p class="lv-card-item__desc">' + (w.desc || "&nbsp;") + "</p>";
    return w.ready
      ? '<a class="' + cls + '" href="' + href + '">' + inner + "</a>"
      : '<div class="' + cls + '">' + inner + "</div>";
  }

  function sectionBlock(title, list, key) {
    var g = group(list);
    return Object.keys(g)
      .map(function (name) {
        return (
          '<h2 class="lv-group-title">' + title + " · " + name + "</h2>" +
          '<div class="lv-grid">' +
          g[name].map(function (w) { return card(w, key); }).join("") +
          "</div>"
        );
      })
      .join("");
  }

  var host = document.getElementById("gallery");
  if (host) {
    host.innerHTML =
      sectionBlock("组件", LV_WIDGETS, "widgets") +
      sectionBlock("布局", LV_LAYOUTS, "layouts") +
      sectionBlock("样式", LV_STYLES, "styles");
  }
}
