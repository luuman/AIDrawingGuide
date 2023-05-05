# AI导航

<!-- ## Midjourney

<p class="home-card" id="homeCardMj"></p>

## stable diffusion

<p class="home-card" id="homeCardSD"></p> -->

## AI 工具

<p class="home-card" id="ai-tool"></p>

## AI 绘画

<p class="home-card" id="ai-painting"></p>

## AI 写作

<p class="home-card" id="ai-writer"></p>

## AI 聊天

<p class="home-card" id="ai-chatbot"></p>

## AI 设计

<p class="home-card" id="ai-design"></p>

## AI 编程

<p class="home-card" id="ai-code"></p>

## AI 视频

<p class="home-card" id="ai-video"></p>

## AI 换脸

<p class="home-card" id="ai-face-swap"></p>

## AI 语音

<p class="home-card" id="ai-voice"></p>

## AI 音乐

<p class="home-card" id="ai-music"></p>

<script>
  console.log('arr')
  window.onload = function () {
    fetch("json/bigArray.json")
        .then((response) => response.json())
        .then((data) => {
          const ObjNum = {};
          const dataArrObj = [];
          data.forEach(item => {
            if (ObjNum[item.type] === undefined) {
              const num = dataArrObj.length;
              const child = []
              child.push(item)
              ObjNum[item.type] = num;
              dataArrObj.push({
                name: item.type,
                child,
              })
            } else {
              const num = ObjNum[item.type];
              const child = dataArrObj[num];
              child.child.push(item)
            }
          })
          console.log('data', dataArrObj)
          dataArrObj.forEach(item => {
            forJsonHomeCard(item.name, item.child);
          })
        });
    function getRandomRgbColor() {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgb(${r} ${g} ${b} / var(--bg-opacity))`;
    }
    function forJsonHomeCard(name, arr) {
      console.log('arr', name, arr);
      const pBox = document.getElementById(name);
      arr.forEach(({url, name, type, dec, image}) => {
        const Box = document.createElement('a');
        const imgBox = document.createElement('img');
        const spanBox = document.createElement('span');

        Box.href = url;
        Box.classList.add("contributing", "tag");
        if (type) Box.setAttribute('data-lang', type);
        Box.setAttribute('target', "_blank");
        if (dec) {
          Box.setAttribute('data-info', dec);
        } else {
          Box.setAttribute('data-info', '👆看看还缺点儿什么？');
        }
        Box.style.background = getRandomRgbColor();
        imgBox.setAttribute('src', image);
        spanBox.textContent = name;

        // if (image) Box.appendChild(imgBox);
        Box.appendChild(spanBox);
        pBox.appendChild(Box);
      });
    }
  }
</script>

<link rel="stylesheet" href="./css/readme.css" />


<!-- [Prompthero](https://prompthero.com/ "是一个在线的AI写作工具，它可以帮助用户自动生成文章、博客、社交媒体帖子、广告等内容的草稿。它使用人工智能技术，自动根据用户提供的关键词、主题和其他指导信息生成文本，用户可以根据自己的需求对生成的文本进行修改和编辑。")

[Promptbase](https://promptbase.com/ "是一个基于GPT-3的AI写作工具，它可以帮助用户自动生成文章、博客、产品说明、电子邮件等内容的草稿。它使用语言模型和机器学习技术，自动根据用户提供的关键词、主题和其他指导信息生成文本，用户可以根据自己的需求对生成的文本进行修改和编辑。")

[Lexica](https://lexica.art/ "是一个基于GPT-3的AI写作工具，它可以帮助用户自动生成文章、博客、产品说明、电子邮件等内容的草稿。它使用语言模型和机器学习技术，自动根据用户提供的关键词、主题和其他指导信息生成文本，用户可以根据自己的需求对生成的文本进行修改和编辑。与其他类似的工具不同的是，Lexica还提供了一些高级功能，例如根据用户的口吻和风格生成文本。")

[Prompt](https://prompt.noonshot.com/ "是一个基于GPT-3的AI写作工具，它可以帮助用户自动生成文章、博客、产品说明、电子邮件等内容的草稿。它使用语言模型和机器学习技术，自动根据用户提供的关键词、主题和其他指导信息生成文本，用户可以根据自己的需求对生成的文本进行修改和编辑。")

[Prompt Builder](https://promptomania.com/prompt-builder/ "是一个在线工具，它可以帮助用户创建自己的AI写作模型。用户可以选择不同的语言模型和数据集，训练自己的模型，然后使用它来生成文本。") AI prompt 字汇组合

[无界 AI](https://www.wujieai.com/ "是一个基于GPT-3的AI写作工具，它可以帮助用户自动生成文章、博客、产品说明、电子邮件等内容的草稿。它使用语言模型和机器学习技术，自动根据用户提供的关键词、主题和其他指导信息生成文本，用户可以根据自己的需求对生成的文本进行修改和编辑。") 国内 AI 图片分享

[Kalos](https://lib.kalos.art/ "是一个基于GPT-3的AI写作工具，它可以帮助用户自动生成文章、博客、产品说明、电子邮件等内容的草稿。它使用语言模型和机器学习技术，自动根据用户提供的关键词、主题和其他指导信息生成文本，用户可以根据自己的需求对生成的文本进行修改和编辑。与其他类似的工具不同的是，Kalos还提供了一些高级功能，例如根据用户的口吻和风格生成文本。") AI 图片分享 艺术画

[Clip Interrogator](https://replicate.com/pharmapsychotic/clip-interrogator "是一个基于GPT-3和CLIP的AI写作工具，它可以帮助用户自动生成文章、博客、产品说明、电子邮件等内容的草稿。它使用语言模型和机器学习技术，自动根据用户提供的关键词、主题和其他指导信息生成文本，用户可以根据自己的需求对生成的文本进行修改和编辑。Clip Interrogator还可以根据用户提供的图像生成文本，例如对一张食物图片生成菜单描述。") 图片生成描述 -->