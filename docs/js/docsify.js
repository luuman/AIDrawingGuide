// Docsify
window.$docsify = {
  coverpage: true,
  loadSidebar: true,
  // alias: {
  //   "/.*/_sidebar.md": "/_sidebar.md"
  // },
  subMaxLevel: 3,
  sidebarDisplayLevel: 2,
  subMaxLevel: 4,
  maxLevel: 2,
  mergeNavbar: true,
  formatUpdated: "{MM}/{DD} {HH}:{mm}",
  ga: "UA-50048801-2",
  // codesponsor: 'id',
  search: {
    maxAge: 86400000, // 过期时间，单位毫秒，默认一天
    // paths: ["/note/daily/"], // or 'auto'
    placeholder: "搜索",
    noData: "找不到结果!"
    // 搜索标题的最大程级, 1 - 6
    // depth: 3
  },
  count: {
    countable: true,
    fontsize: "0.9em",
    color: "rgb(90,90,90)",
    language: "chinese"
  },
  mindmap: {
    // or default
    preset: "colorful",
    // or bracket
    linkShape: "diagonal"
  },
  tabs: {
    sync: false,
    theme: "classic"
  },
  select: {
    detectOperatingSystem: {
      enabled: false,
      menuId: "operating-system"
    },
    sync: false,
    theme: "classic"
  },
  darklightTheme: {
    siteFont: "PT Sans",
    defaultTheme: "dark",
    codeFontFamily: "Roboto Mono, Monaco, courier, monospace",
    bodyFontSize: "17px",
    dark: {
      "nomnoml-svg-stroke": "#42b983",
      "nomnoml-svg-fill-2": "#0e2233",
      accent: "#42b983",
      toogleBackground: "#ffffff",
      background: "#091a28",
      textColor: "#c0c0c0",
      codeTextColor: "#00bc8c",
      codeTitleColor: "#2a2e33",
      codeBackgroundColor: "#0e2233",
      borderColor: "#0d2538",
      blockQuoteColor: "#858585",
      highlightColor: "#d22778",
      sidebarSublink: "#b4b4b4",
      codeTypeColor: "#ffffff",
      coverBackground: "#000",
      // coverBackground: 'radial-gradient(50% 100%,#180526 0,#040e21 100%)',
      toogleImage:
        "url(https://cdn.jsdelivr.net/npm/docsify-darklight-theme@latest/icons/sun.svg)"
    },
    light: {
      "nomnoml-svg-stroke": "#42b983",
      "nomnoml-svg-fill-2": "#0e2233",
      accent: "#42b983",
      toogleBackground: "#091a28",
      background: "#ffffff",
      textColor: "#34495e",
      codeTextColor: "#525252",
      codeTitleColor: "#858585",
      codeBackgroundColor: "#f8f8f8",
      borderColor: "rgba(0, 0, 0, 0.07)",
      blockQuoteColor: "#858585",
      highlightColor: "#d22778",
      sidebarSublink: "#505d6b",
      codeTypeColor: "#091a28",
      coverBackground: "#000",
      // coverBackground: 'linear-gradient(to left bottom, hsl(118, 100%, 85%) 0%,hsl(181, 100%, 85%) 100%)',
      toogleImage:
        "url(https://cdn.jsdelivr.net/npm/docsify-darklight-theme@latest/icons/moon.svg)"
    }
  },
  vueGlobalOptions: {
    data: function () {
      return {
        groupSize: 3,
        images: [],
        tooltipVisible: false,
        tooltipTop: 0,
        tooltipLeft: 0,
        tooltipImgSrc: "",
        showTooltipDebounced: "",
        loadingVisible: false
      };
    },
    mounted() {
      fetch("json/content.json")
        .then((response) => response.json())
        .then((data) => {
          this.images = data;
        });
      this.showTooltipDebounced = _.debounce(this.showTooltip, 500);
      this.$nextTick(() => {
        // this.newOpen();
      });
    },
    methods: {
      copyText(text) {
        console.log("trackMouse", text.target.innerText);
        navigator.clipboard
          .writeText(text.target.innerText)
          .then(() => {
            console.log("复制成功");
          })
          .catch(() => {
            console.log("复制失败");
          });
      },
      trackMouse(e) {
        console.log("trackMouse");
        // let mouseX = e.clientX - 50;
        // let mouseY = e.clientY + 50;
        // this.tooltipTop = mouseY;
        // this.tooltipLeft = mouseX;
      },
      showTooltip(e) {
        if (this.tooltipImgSrc) return;
        console.log("showTooltip");
        e.preventDefault();
        const imgSrc = e.target.href;
        let mouseX = e.clientX - 50;
        let mouseY = e.clientY + 50;
        this.tooltipTop = mouseY;
        this.tooltipLeft = mouseX;
        this.loadingVisible = true;
        this.tooltipImgSrc = imgSrc;
        this.tooltipVisible = true;
      },
      hideTooltip() {
        console.log("hideTooltip");
        this.tooltipImgSrc = "";
        this.tooltipVisible = false;
        this.loadingVisible = false;
      },
      hideLoading() {
        console.log("hideLoading");
        this.loadingVisible = false;
      },
      newOpen() {
        const tooltip = document.getElementById("tooltip");
        if (!tooltip) {
          return;
        }

        const main = document.getElementById("main");
        const sidebarWidth = document.querySelector(".sidebar").clientWidth;
        const ttImages = main.getElementsByTagName("a");

        const trackMouse = _.throttle((e) => {
          let mouseX =
            e.clientX + document.body.scrollLeft - sidebarWidth - 100; // get x position of mouse
          let mouseY = e.clientY + document.body.scrollTop - 40; // get y position of mouse
          tooltip.style.top = mouseY + "px";
          tooltip.style.left = mouseX + "px";
        }, 10);

        const showTooltip = _.debounce((e) => {
          if (e.target.tagName !== "A") {
            tooltip.classList.remove("show");
            return;
          }

          e.preventDefault();
          const imgSrc = e.target.href;
          if (imgSrc.includes("/#/note/")) {
            tooltip.classList.remove("show");
            return;
          }

          tooltip.innerHTML = `<img src="${imgSrc}">`;
          tooltip.classList.add("show");
        }, 10);

        const preloadImages = () => {
          const imgSrcs = [...ttImages]
            .filter((img) => !img.href.includes("/#/note/"))
            .map((img) => img.href);

          const images = imgSrcs.map((src) => {
            const img = new Image();
            img.src = src;
            return img;
          });
        };

        main.addEventListener("mousemove", trackMouse);
        main.addEventListener("mouseover", showTooltip);

        preloadImages();

        // remove event listeners to prevent memory leaks
        const cleanup = () => {
          main.removeEventListener("mousemove", trackMouse);
          main.removeEventListener("mouseover", showTooltip);
          window.removeEventListener("DOMContentLoaded", cleanup);
        };
        window.addEventListener("DOMContentLoaded", cleanup, {
          once: true
        });
      },
      openImage() {
        const tooltip = document.getElementById("tooltip");
        if (!tooltip) {
          return;
        }

        const main = document.getElementById("main");
        const sidebarWidth = document.querySelector(".sidebar").clientWidth;
        const ttImages = main.getElementsByTagName("a");

        const trackMouse = (e) => {
          // const mouseX = e.clientX - sidebarWidth - 100;
          // const mouseY = e.clientY - main.scrollTop - 40;
          let mouseX =
            event.clientX + document.body.scrollLeft - sidebarWidth - 100; //  get x position of mouse
          let mouseY = event.clientY + document.body.scrollTop - 40; //  get y position of mouse
          tooltip.style.top = mouseY + "px";
          tooltip.style.left = mouseX + "px";
        };

        const showTooltip = (e) => {
          if (e.target.tagName !== "A") {
            tooltip.classList.remove("show");
            return;
          }

          e.preventDefault();
          const imgSrc = e.target.href;
          if (imgSrc.includes("/#/note/")) {
            tooltip.classList.remove("show");
            return;
          }

          tooltip.innerHTML = `<img src="${imgSrc}">`;
          tooltip.classList.add("show");
        };

        const preloadImages = () => {
          const imgSrcs = [...ttImages]
            .filter((img) => !img.href.includes("/#/note/"))
            .map((img) => img.href);

          const images = imgSrcs.map((src) => {
            const img = new Image();
            img.src = src;
            return img;
          });
        };

        main.addEventListener("mousemove", trackMouse);
        main.addEventListener("mouseover", showTooltip);

        preloadImages();

        // remove event listeners to prevent memory leaks
        const cleanup = () => {
          main.removeEventListener("mousemove", trackMouse);
          main.removeEventListener("mouseover", showTooltip);
          window.removeEventListener("DOMContentLoaded", cleanup);
        };
        window.addEventListener("DOMContentLoaded", cleanup, {
          once: true
        });
      },
      groups(data) {
        const groups = [];
        for (let i = 0; i < data.length; i += this.groupSize) {
          const group = data.slice(i, i + this.groupSize);
          groups.push(group);
        }
        return groups;
      }
    }
  },
  plugins: [
    // DocsifyCarbon.create('CE7I52QU', 'xmakeio'),
    function (hook, vm) {
      hook.beforeEach(function (content) {
        try {
          // console.log('content', content)
          // 加载 Table.md 文件中的变量
          var variables = {};
          content = content.replace(
            /\[common\]\((.+?) '\:include \:type=text'\)/g,
            function ($0, link) {
              const searchParams = new URLSearchParams(
                link.slice(link.indexOf("?") + 1)
              );
              variables = Object.fromEntries(searchParams.entries());
              var xhr = new XMLHttpRequest();
              xhr.open("GET", link.split("?")[0], false);
              xhr.send();
              let responseText = xhr.responseText;
              console.log("xhr.responseText", responseText);
              // // 替换变量
              responseText = responseText.replace(
                /\$(\w+)\$/g,
                function (match, name) {
                  console.log("match, name", match, name);
                  return variables[name] || match;
                }
              );
              console.log("xhr.responseText", responseText);

              return responseText;
            }
          );
          // console.log("xhr.responseText", content);
          return content;
        } catch (error) {
          console.error("error", error);
        }
      });
    },
    // 二级文档归纳
    // function (hook, vm) {
    //   hook.beforeEach(function (html) {
    //     let urlList = vm.route.path.split("/");
    //     if (urlList.length === 4 && urlList[3] === "") {
    //       let arrayList = html.split(",");
    //       var name = arrayList[0];
    //       var value = arrayList[1];
    //       // console.log(value)
    //       if (!value) return html;
    //       var editHtml = `${name} \n`;
    //       editHtml += "\n";
    //       for (let i = 0; i < value; i++) {
    //         editHtml += `[common](../${name}/${
    //           i + 1
    //         }.md ':include :type=text')\n`;
    //         editHtml += "\n";
    //       }
    //       // console.log(editHtml)
    //       return editHtml;
    //     }
    //   });
    // },
    // image change
    function (hook, vm) {
      hook.beforeEach(function (html) {
        return html.replace(/!\[\[(.*?)\]\]/g, function ($0, $1) {
          return `![image](${$1})`;
        });
      });
    },
    // github editHtml
    function (hook, vm) {
      hook.beforeEach(function (html) {
        var url =
          "https://github.com/luuman/AIDrawingGuide/blob/main/docs/" +
          vm.route.file;
        var editHtml = "[📝 Edit MD](" + url + ")\n";
        return (
          editHtml + html
          // + '\n----\n' +
          // 'Last modified {docsify-updated} ' +
          // editHtml
        );
      });
    },
    // icon ☑ ☒ 已读未读
    // function(hook, vm) {
    //   hook.beforeEach(function(html) {
    //     // console.log('html', html)
    //     let nums = 0;
    //     var htmlMD = html.replace( /[#?]+/g,function ($0){
    //       var str = nums < 1 ? '[☑]()' : '☒';
    //       nums++;
    //       return `${$0} ${str}`;
    //     });
    //     // console.log('html1', htmlMD)
    //     return htmlMD
    //   });
    // },
    // gitalk
    function (hook, vm) {
      hook.beforeEach(function (html) {
        if (vm.route.path === "/") return;
        return html + "\n" + "⏰ 更新于： {docsify-updated} ";
      });
      hook.doneEach(function () {
        if (vm.route.path === "/") return;
        console.log("afterEach", location.hash.match(/#(.*?)([?]|$)/)[1]);

        var label, labelType, domObj, main, divEle, gitalk;
        label = vm.route.path.split("/").pop();
        labelType = vm.route.path;
        domObj = Docsify.dom;
        main = domObj.getNode("#main");
        Array.apply(
          null,
          document.querySelectorAll("div.gitalk-container")
        ).forEach(function (ele) {
          ele.remove();
        });
        divEle = domObj.create("div");
        divEle.id = "gitalk-container-" + label;
        divEle.className = "gitalk-container";
        divEle.style =
          "width: " + main.clientWidth + "px; margin: 0 auto 20px;";
        domObj.appendTo(domObj.find(".content"), divEle);
        console.log(vm.route.path.split("/"));
        gitalk = new Gitalk(
          Object.assign(gitalkConfig, {
            id: !labelType ? "home" : labelType
          })
        );
        gitalk.render("gitalk-container-" + label);
      });
    },
    function (hook, vm) {
      hook.afterEach(function (html, next) {
        // console.log('html', html);
        // let urlList = window.location.href.split("/");
        // if (urlList.length === 6 && urlList[5] === "") {
        //   console.log(html, "Home page");
        //   GitHubCalendar(".calendar", "luuman", {
        //     responsive: true,
        //     tooltips: true
        //   });
        // }
        document.addEventListener("contextmenu", function(event) {
          event.preventDefault();
        });
        html = html.replace(/<div id="docsify-darklight-theme"><p>\.<\/p><\/div>/g, '');
        setTimeout(() => {
          console.error("Element not found: my-element");
          let loadding = document.getElementById("v4-pre-loaded");
          if (loadding) {
            loadding.classList.add("hide");
          } else {
            console.error("Element not found: my-element");
          }
        }, 500);
        if (document.getElementById("container")) containerInit();
        next(html);
      });
    }
    // TipTitle
    // function (hook, vm) {
    //   hook.doneEach(function () {
    //     var clipboard = new ClipboardJS("i", {
    //       text: function (trigger) {
    //         return trigger.getAttribute("title");
    //       }
    //     });
    //     clipboard.on("success", function (e) {
    //       console.info("Action:", e.action);
    //       console.info("Text:", e.text);
    //       console.info("Trigger:", e.trigger);
    //       e.clearSelection();
    //     });
    //     clipboard.on("error", function (e) {
    //       console.error("Action:", e.action);
    //       console.error("Trigger:", e.trigger);
    //     });
    //     var sweetTitles = {
    //       x: 10,
    //       y: 20,
    //       tipElements: "a",
    //       init: function (tipElements) {
    //         $(tipElements || this.tipElements).unbind(
    //           "mouseover mouseout mousemove"
    //         ); //移除之前绑定的时间防止冲突
    //         $("#tooltip").remove(); //pjax后防止提示未消失
    //         $(tipElements || this.tipElements)
    //           .mouseover(function (e) {
    //             this.myTitle = this.title;
    //             this.title = "";
    //             var tooltip = "";
    //             if (this.myTitle == "") {
    //               tooltip = "";
    //             } else {
    //               tooltip =
    //                 "<div id='tooltip'><div class='tipsy-arrow'></div><div class='tipsy-inner'>" +
    //                 this.myTitle +
    //                 "</div></div>";
    //               $("body").append(tooltip);
    //               $("#tooltip")
    //                 .css({
    //                   opacity: "0.9",
    //                   top: e.pageY + 20 + "px",
    //                   left: e.pageX + 10 + "px"
    //                 })
    //                 .show("fast");
    //             }
    //           })
    //           .mouseout(function () {
    //             if (this.myTitle != "") {
    //               this.title = this.myTitle;
    //               $("#tooltip").remove();
    //             }
    //           })
    //           .mousemove(function (e) {
    //             if (this.myTitle != "") {
    //               $("#tooltip").css({
    //                 top: e.pageY + 20 + "px",
    //                 left: e.pageX + 10 + "px"
    //               });
    //             }
    //           });
    //       }
    //     };
    //     $(function () {
    //       sweetTitles.init("a[title]"); //初始化
    //       sweetTitles.init("i[title]"); //初始化
    //     });
    //   });
    // },
  ]
};

function toggleMenu() {
  var menuBtn = document.querySelector(".u-menu-btn");
  var navgation = document.querySelector("#navgation,.nav-mask")
  if (menuBtn.classList.contains("close")) {
    menuBtn.classList.remove("close");
    navgation.classList.remove("active");
  } else {
    menuBtn.classList.add("close");
    navgation.classList.add("active");
  }
}