console.log("arr");
window.onload = function () {
  const arrJson = [
    {
      name: "homeCardMj",
      child: [
        {
          title: "modelscope",
          image: "",
          type: "",
          info: "中文版huggingface",
          link: "https://www.modelscope.cn/models"
        },
        {
          title: "Hugging Face ",
          image: "",
          type: "",
          info: "AIGC社区 Hugging Face – The AI community building the future.",
          link: "https://huggingface.co/"
        },
        {
          title: "codeium",
          image: "",
          type: "",
          info: "A Free AI-Powered Toolkit for Developers.",
          link: "http://Codeium.com"
        },
        {
          title: "Prompthero",
          image: "",
          type: "",
          info: "",
          link: ""
        },
        {
          title: "Prompthero",
          image: "",
          type: "",
          info: "",
          link: ""
        },
        {
          title: "Prompthero",
          image: "",
          type: "",
          info: "",
          link: ""
        },
        {
          title: "Prompthero",
          image: "",
          type: "",
          info: "",
          link: ""
        },
        {
          title: "Prompthero",
          image: "",
          type: "",
          info: "",
          link: ""
        },
        {
          title: "Prompthero",
          image: "",
          type: "",
          info: "",
          link: ""
        },
        {
          title: "Prompthero",
          image: "",
          type: "",
          info: "",
          link: ""
        },
        {
          title: "Prompthero",
          image: "",
          type: "",
          info: "",
          link: ""
        },
        {
          title: "Prompthero",
          image: "",
          type: "",
          info: "",
          link: ""
        },
        {
          title: "Prompthero",
          image: "",
          type: "",
          info: "",
          link: ""
        },
        {
          title: "Prompthero",
          image: "",
          type: "",
          info: "",
          link: ""
        }
      ]
    },
    {
      name: "homeCardSD",
      child: [
        {
          title: "Prompthero",
          image: "",
          type: "",
          info: "",
          link: ""
        }
      ]
    },
    {
      name: "homeCardOther",
      child: [
        {
          title: "Prompthero",
          image: "",
          type: "",
          info: "",
          link: ""
        }
      ]
    }
  ];
  arrJson.forEach((item) => {
    forJsonHomeCard(item.name, item.child);
  });
  function getRandomRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r} ${g} ${b} / var(--bg-opacity))`;
  }
  function forJsonHomeCard(name, arr) {
    console.log("arr", name, arr);
    const pBox = document.getElementById(name);
    arr.forEach(({ link, title, type, info, image }) => {
      const Box = document.createElement("a");
      const imgBox = document.createElement("img");
      const spanBox = document.createElement("span");

      Box.href = link;
      Box.classList.add("contributing", "tag");
      if (type) Box.setAttribute("data-lang", type);
      if (info) {
        Box.setAttribute("data-info", "info");
      } else {
        Box.setAttribute("data-info", "👆看看还缺点儿什么？");
      }
      Box.style.background = getRandomRgbColor();
      imgBox.setAttribute("src", image);
      spanBox.textContent = title;

      if (image) Box.appendChild(imgBox);
      Box.appendChild(spanBox);
      pBox.appendChild(Box);
    });
  }
};
