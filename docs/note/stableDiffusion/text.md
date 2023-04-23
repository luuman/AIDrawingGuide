作者：hking

> Stable Diffusion 是 2022 年发布的深度学习文字到图像生成模型。它主要用于根据文字的描述产生详细图像，能够在几秒钟内创作出令人惊叹的艺术作品，本文是一篇使用入门教程。

### **硬件要求**

建议使用不少于 16 GB 内存，并有 60GB 以上的硬盘空间。需要用到 CUDA 架构，推荐使用 N 卡。（目前已经有了对 A 卡的相关支持，但运算的速度依旧明显慢于 N 卡，参见：

[**Install and Run on AMD GPUs · AUTOMATIC1111/stable-diffusion-webui Wiki · GitHub**](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Install-and-Run-on-AMD-GPUs)

> 过度使用，显卡会有损坏的风险。

进行 512x 图片生成时主流显卡速度对比：

![](https://developer.qcloudimg.com/http-save/yehe-170434/087ee2bd2809f0725145c11dd5aebaf6.jpg?imageView2/2/w/2560/h/7000)

### **环境部署**

#### **手动部署**

可以参考 webui 的官方 wiki 部署：[**Home · AUTOMATIC1111/stable-diffusion-webui Wiki (github.com)**](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki)

stable diffusion webui 的完整环境占用空间极大，能达到几十 G。同时，webui 需要联网下载安装大量的依赖，在境内的网络环境下下载很慢，请自带科学上网工具。

1.  安装 Python 安装 [**Python 3.10**](https://www.python.org/downloads/windows/)，安装时须选中 `Add Python to PATH`
2.  安装 Git 在 [**Git-scm.com**](https://git-scm.com/download/win) 下载 Git 安装包并安装。
3.  下载 webui 的 github 仓库 按下`win+r`输入 cmd，调出命令行窗口。运行： cd PATH_TO_CLONE git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui.git 请把代码中的 PATH_TO_CLONE 替换为自己想下载的目录。
4.  装配模型 可在如[**Civitai**](https://civitai.com/)上下载标注有**CKPT**的模型，有模型才能作画。下载的模型放入下载后文件路径下的`models/Stable-diffusion`目录。
5.  使用 双击运行 `webui-user.bat` 。脚本会自动下载依赖，**等待一段时间**（可能很长），程序会输出一个类似 `http://127.0.0.1:7860/` 的地址，在浏览器中输入这个链接开即可。详细可参见[**模型使用**](https://km.woa.com/user/hkinghuang/articles/restore_draft/2298930#%E6%A8%A1%E5%9E%8B%E4%BD%BF%E7%94%A8)。
6.  更新 按下`win+r`输入 cmd，调出命令行窗口。运行： cd PATH_TO_CLONE git pull 请把代码中的： PATH_TO_CLONE 替换为自己下载仓库的目录。

#### **整合包**

觉得麻烦的同学可以使用整合包，解压即用。比如[**独立研究员**](https://space.bilibili.com/250989068)的空间下经常更新整合包。[**秋叶的启动器**](https://www.bilibili.com/video/BV1ne4y1V7QU) 也非常好用，将启动器复制到下载仓库的目录下即可，更新管理会更方便。

![](https://developer.qcloudimg.com/http-save/yehe-170434/730aa330568fb70fb551520feec2ce30.jpg?imageView2/2/w/2560/h/7000)

打开启动器后，可一键启动：

![](https://developer.qcloudimg.com/http-save/yehe-170434/5c864b08e38b813ed5262ad0aeef3529.jpg?imageView2/2/w/2560/h/7000)

如果有其他需求，可以在高级选项中调整配置。

![](https://developer.qcloudimg.com/http-save/yehe-170434/14a07b9f19dbe964aa619c1a5a5f9503.jpg?imageView2/2/w/2560/h/7000)

显存优化根据显卡实际显存选择，不要超过当前显卡显存。不过并不是指定了显存优化量就一定不会超显存，在出图时如果启动了过多的优化项（如高清修复、人脸修复、过大模型）时，依然有超出显存导致出图失败的几率。

xFormers 能极大地改善了内存消耗和速度，建议开启。准备工作完毕后，点击一键启动即可。等待浏览器自动跳出，或是控制台弹出本地 URL 后说明启动成功

![](https://developer.qcloudimg.com/http-save/yehe-170434/37bfb1134b6912b3c0f2449ecbc996ff.jpg?imageView2/2/w/2560/h/7000)

如果报错提示缺少 Pytorch，则需要在启动器中点击配置：

![](https://developer.qcloudimg.com/http-save/yehe-170434/9cd1faae42942ba81ab4d47a55edc9a1.jpg?imageView2/2/w/2560/h/7000)

![](https://developer.qcloudimg.com/http-save/yehe-170434/d338b44102d26d265f44ff406e063688.jpg?imageView2/2/w/2560/h/7000)

Stable Diffusion webui 的更新比较频繁，请根据需求在“版本管理”目录下更新：

![](https://developer.qcloudimg.com/http-save/yehe-170434/df7b8192976c7fe67d1277068c4f130b.jpg?imageView2/2/w/2560/h/7000)

同样地，也请注意插件的更新：

![](https://developer.qcloudimg.com/http-save/yehe-170434/2a1438b9eef1d439bb23f6460ba082b4.jpg?imageView2/2/w/2560/h/7000)

### **关于插件**

Stable Diffusion 可配置大量插件扩展，在 webui 的“扩展”选项卡下，可以安装插件：

![](https://developer.qcloudimg.com/http-save/yehe-170434/651f4ce91c195804fda9ed6a35d3aef6.jpg?imageView2/2/w/2560/h/7000)

点击“加载自”后，目录会刷新，选择需要的插件点击右侧的 install 即可安装。

![](https://developer.qcloudimg.com/http-save/yehe-170434/d3c2b93a912f19fc2b85e1442b7f11d7.jpg?imageView2/2/w/2560/h/7000)

安装完毕后，需要重新启动用户界面：

![](https://developer.qcloudimg.com/http-save/yehe-170434/d45e75f7db6ea1a95bec03628d625af1.jpg?imageView2/2/w/2560/h/7000)

### **文生图最简流程**

1.  选择需要使用的模型（底模），这是对生成结果影响最大的因素，主要体现在画面风格上。

![](https://developer.qcloudimg.com/http-save/yehe-170434/671286a4ab38d8d75fc75a24c84304a7.jpg?imageView2/2/w/2560/h/7000)

1.  在第一个框中填入提示词（Prompt），对想要生成的东西进行文字描述

![](https://developer.qcloudimg.com/http-save/yehe-170434/8d48c759997cbfb2f706ae67f4f2dc58.jpg?imageView2/2/w/2560/h/7000)

1.  在第二个框中填入负面提示词（Negative prompt)，你不想要生成的东西进行文字描述

![](https://developer.qcloudimg.com/http-save/yehe-170434/d7f8dea549719990e460bc7f8a99b602.jpg?imageView2/2/w/2560/h/7000)

1.  选择采样方法、采样次数、图片尺寸等参数。

![](https://developer.qcloudimg.com/http-save/yehe-170434/b6863754a73b867efdcb8a1dac2ccc8e.jpg?imageView2/2/w/2560/h/7000)

-   **Sampler（采样器/采样方法）**选择使用哪种采样器。Euler a（Eular ancestral）可以以较少的步数产生很大的多样性，不同的步数可能有不同的结果。而非 ancestral 采样器都会产生基本相同的图像。DPM 相关的采样器通常具有不错的效果，但耗时也会相应增加。
    -   Euler 是最简单、最快的
    -   Euler a 更多样，不同步数可以生产出不同的图片。但是太高步数 (>30) 效果不会更好。
    -   DDIM 收敛快，但效率相对较低，因为需要很多 step 才能获得好的结果，适合在重绘时候使用。
    -   LMS 是 Euler 的衍生，它们使用一种相关但稍有不同的方法（平均过去的几个步骤以提高准确性）。大概 30 step 可以得到稳定结果
    -   PLMS 是 Euler 的衍生，可以更好地处理神经网络结构中的奇异性。
    -   DPM2 是一种神奇的方法，它旨在改进 DDIM，减少步骤以获得良好的结果。它需要每一步运行两次去噪，它的速度大约是 DDIM 的两倍，生图效果也非常好。但是如果你在进行调试提示词的实验，这个采样器可能会有点慢了。
    -   UniPC 效果较好且速度非常快，对平面、卡通的表现较好，推荐使用。
-   **Sampling Steps（采样步数）**Stable Diffusion 的工作方式是从以随机高斯噪声起步，向符合提示的图像一步步降噪接近。随着步数增多，可以得到对目标更小、更精确的图像。但增加步数也会增加生成图像所需的时间。增加步数的边际收益递减，取决于采样器。一般开到 20~30。
-   不同采样步数与采样器之间的关系：

![](https://developer.qcloudimg.com/http-save/yehe-170434/2f79c4ac7a6390d2f4e5a74408978e09.png?imageView2/2/w/2560/h/7000)

-   **CFG Scale（提示词相关性）**图像与你的提示的匹配程度。增加这个值将导致图像更接近你的提示，但它也在一定程度上降低了图像质量。可以用更多的采样步骤来抵消。过高的 CFG Scale 体现为粗犷的线条和过锐化的图像。一般开到 7~11。CFG Scale 与采样器之间的关系：

![](https://developer.qcloudimg.com/http-save/yehe-170434/9db374c7c75f8421280289a706c82766.jpg?imageView2/2/w/2560/h/7000)

-   **生成批次**每次生成图像的组数。一次运行生成图像的数量为“批次* 批次数量”。
-   **每批数量**同时生成多少个图像。增加这个值可以提高性能，但也需要更多的显存。大的 Batch Size 需要消耗巨量显存。若没有超过 12G 的显存，请保持为 1。
-   **尺寸**指定图像的长宽。出图尺寸太宽时，图中可能会出现多个主体。1024 之上的尺寸可能会出现不理想的结果，推荐使用小尺寸分辨率+高清修复（Hires fix)。
-   **种子**种子决定模型在生成图片时涉及的所有随机性，它初始化了 Diffusion 算法起点的初始值。

理论上，在应用完全相同参数（如 Step、CFG、Seed、prompts）的情况下，生产的图片应当完全相同。

-   **高清修复**

![](https://developer.qcloudimg.com/http-save/yehe-170434/dab6f97a2ee134b9f642554db3c13de1.jpg?imageView2/2/w/2560/h/7000)

通过勾选 "Highres. fix" 来启用。默认情况下，文生图在高分辨率下会生成非常混沌的图像。如果使用高清修复，会型首先按照指定的尺寸生成一张图片，然后通过放大算法将图片分辨率扩大，以实现高清大图效果。最终尺寸为（原分辨率*缩放系数 Upscale by)。

-   放大算法中，Latent 在许多情况下效果不错，但重绘幅度小于 0.5 后就不甚理想。ESRGAN_4x、SwinR 4x 对 0.5 以下的重绘幅度有较好支持。
-   Hires step 表示在进行这一步时计算的步数。
-   Denoising strength 字面翻译是降噪强度，表现为最后生成图片对原始输入图像内容的变化程度。该值越高，放大后图像就比放大前图像差别越大。低 denoising 意味着修正原图，高 denoising 就和原图就没有大的相关性了。一般来讲阈值是 0.7 左右，超过 0.7 和原图基本上无关，0.3 以下就是稍微改一些。实际执行中，具体的执行步骤为 Denoising strength * Sampling Steps。

-   **面部修复**修复画面中人物的面部，但是非写实风格的人物开启面部修复可能导致面部崩坏。
-   **点击“生成”**

![](https://developer.qcloudimg.com/http-save/yehe-170434/ae13330b7f35cac2ad9053247e6dd986.jpg?imageView2/2/w/2560/h/7000)

### **提示词**

提示词所做的工作是缩小模型出图的解空间，即缩小生成内容时在模型数据里的检索范围，而非直接指定作画结果。提示词的效果也受模型的影响，有些模型对自然语言做特化训练，有些模型对单词标签对特化训练，那么对不同的提示词语言风格的反应就不同。

#### **提示词内容**

提示词中可以填写以下内容：

-   自然语言 可以使用描述物体的句子作为提示词。大多数情况下英文有效，也可以使用中文。避免复杂的语法。
-   单词标签 可以使用逗号隔开的单词作为提示词。一般使用普通常见的单词。单词的风格要和图像的整体风格搭配，否则会出现混杂的风格或噪点。避免出现拼写错误。可参考[**Tags | Danbooru (donmai.us)**](https://danbooru.donmai.us/tags)
-   Emoji、颜文字 Emoji (💰👨👩🎅👼🍟🍕) 表情符号也是可以使用并且非常准确的。因为 Emoji 只有一个字符，所以在语义准确度上表现良好。关于 emoji 的确切含义，可以参考[**Emoji List, v15.0 (unicode.org)**](https://unicode.org/emoji/charts/emoji-list.html)，同时 Emoji 在构图上有影响。

![](https://developer.qcloudimg.com/http-save/yehe-170434/331779983984fa16cc05fcc9d5a0b5bb.jpg?imageView2/2/w/2560/h/7000)

💐👩💐

对于使用 Danbooru 数据的模型来说，可以使用西式颜文字在一定程度上控制出图的表情。如：:-) 微笑 :-( 不悦 ;-) 使眼色 :-D 开心 :-P 吐舌头 :-C 很悲伤 :-O 惊讶 张大口 :-/ 怀疑

#### **提示词语法**

根据自己想画的内容写出提示词，多个提示词之间使用英文半角符号 [ , ]，如：

> masterpiece, best quality, ultra-detailed, illustration, close-up, straight on, face focus, 1girl, white hair, golden eyes, long hair, halo, angel wings, serene expression, looking at viewer

一般而言，概念性的、大范围的、风格化的关键词写在前面，叙述画面内容的关键词其次，最后是描述细节的关键词，大致顺序如：

> (画面质量提示词), (画面主题内容)(风格), (相关艺术家), (其他细节)

不过在模型中，每个词语本身自带的权重可能有所不同，如果模型训练集中较多地出现某种关键词，我们在提示词中只输入一个词就能极大地影响画面，反之如果模型训练集中较少地出现某种关键词，我们在提示词中可能输入很多个相关词汇都对画面的影响效果有限。提示词的顺序很重要，越靠后的权重越低。关键词最好具有特异性，譬如 Anime(动漫)一词就相对泛化，而 Jojo 一词就能清晰地指向 Jojo 动漫的画风。措辞越不抽象越好，尽可能避免留下解释空间的措辞。

可以使用括号人工修改提示词的权重，方法如：

-   (word) - 将权重提高 1.1 倍
-   ((word)) - 将权重提高 1.21 倍（= 1.1 * 1.1）
-   [word] - 将权重降低至原先的 90.91%
-   (word:1.5) - 将权重提高 1.5 倍
-   (word:0.25) - 将权重减少为原先的 25%
-   (word) - 在提示词中使用字面意义上的 () 字符

> ( n ) = ( n : 1.1 ) (( n )) = ( n : 1.21 ) ((( n ))) = ( n : 1.331 ) (((( n )))) = ( n : 1.4641 ) ((((( n )))) = ( n : 1.61051 ) (((((( n )))))) = ( n : 1.771561 )

请注意，权重值最好不要超过 1.5。

还可以通过 Prompt Editing 使得 AI 在不同的步数生成不一样的内容，譬如在某阶段后，绘制的主体由男人变成女人。

![](https://developer.qcloudimg.com/http-save/yehe-170434/1b5d1b744b6e5a611fd80ba3210c9d6c.jpg?imageView2/2/w/2560/h/7000)

语法为：

```javascript
[to:when] 在指定数量的 step 后，将to处的提示词添加到提示
[from::when] 在指定数量的 step 后从提示中删除 from处的提示词
[from:to:when] 在指定数量的 step 后将 from处的提示词替换为 to处的提示词
```

复制

> 例如: a [fantasy:cyberpunk:16] landscape 在一开始，读入的提示词为：the model will be drawing a fantasy landscape. 在第 16 步之后,提示词将被替换为：a cyberpunk landscape, 它将继续在之前的图像上计算 又例如，对于提示词为: fantasy landscape with a [mountain:lake:0.25] and [an oak:a christmas tree:0.75][ in foreground::0.6][ in background:0.25][shoddy:masterful:0.5]，100 步采样， 一开始。提示词为：fantasy landscape with a mountain and an oak in foreground shoddy 在第 25 步后，提示词为：fantasy landscape with a lake and an oak in foreground in background shoddy 在第 50 步后，提示词为：fantasy landscape with a lake and an oak in foreground in background masterful 在第 60 步后，提示词为：fantasy landscape with a lake and an oak in background masterful 在第 75 步后，提示词为：fantasy landscape with a lake and a christmas tree in background masterful

提示词还可以轮转，譬如

```javascript
[cow|horse] in a field
```

复制

在第一步时，提示词为“cow in a field”；在第二步时，提示词为"horse in a field."；在第三步时，提示词为"cow in a field" ，以此类推。

![](https://developer.qcloudimg.com/http-save/yehe-170434/71c8ace90e726c7be94238f8d9fd9e2c.gif)

#### **Token**

实际上，程序是将输入的关键词以 Token 的形式传入模型进行计算的：

![](https://developer.qcloudimg.com/http-save/yehe-170434/9ec40637595da8f7f8ca734046271a5c.jpg?imageView2/2/w/2560/h/7000)

“ _(Medieval astronomer using a telescope with a cosmic starry sky in the background.sketch, hand draw style, con, uncomplicated background_ )”转换为 Token ID 即：_263, 10789, 40036, 1996, 320, 19037, 593, 320, 18304, 30963, 2390, 530, 518, 5994, 8, 11, 263, 5269, 267, 2463, 4001, 1844, 267, 5646, 267, 569, 16621, 5994, 264_ 。

一个单词可能对应一个或多个 Token，多个单词也可能对应同一个 Token。

#### **提示词模板**

可参考[**Civitai | Stable Diffusion models, embeddings, hypernetworks and more**](https://civitai.com/)中优秀作品的提示词作为模板。

类似的网站还有：

-   Majinai：[**MajinAI | Home**](https://majinai.art/index.php)
-   词图：[**词图 PromptTool - AI 绘画资料管理网站**](http://www.prompttool.com/NovelAI)
-   Black Lily：[**black_lily**](http://heizicao.gitee.io/novelai/#/book)
-   Danbooru 标签超市：[**Danbooru 标签超市**](https://tags.novelai.dev/)
-   魔咒百科词典：[**魔咒百科词典**](https://aitag.top/)
-   AI 词汇加速器：[**AI 词汇加速器 AcceleratorI Prompt**](https://ai.dawnmark.cn/) NovelAI 魔导书：[**NovelAI 魔导书**](https://thereisnospon.github.io/NovelAiTag/)
-   鳖哲法典：[**鳖哲法典**](http://tomxlysplay.com.cn/#/)
-   Danbooru tag：[**Tag Groups Wiki | Danbooru (donmai.us)**](https://danbooru.donmai.us/wiki_pages/tag_groups)
-   AIBooru：[**AIBooru: Anime Image Board**](https://aibooru.online/)

### **Controlnet**

Controlnet 允许通过线稿、动作识别、深度信息等对生成的图像进行控制。

请注意，在使用前请确保 ControlNet 设置下的路径与本地 Stable Diffusion 的路径同步

![](https://developer.qcloudimg.com/http-save/yehe-170434/5a278f7e780fd0f6ae28c89e3887af58.jpg?imageView2/2/w/2560/h/7000)

#### **基本流程**

![](https://developer.qcloudimg.com/http-save/yehe-170434/679e64e8dbbef962b6d909c5b57d3840.jpg?imageView2/2/w/2560/h/7000)

![](https://developer.qcloudimg.com/http-save/yehe-170434/674b341b919da779f619ae7e2066021c.jpg?imageView2/2/w/2560/h/7000)

-   点击 Enable 启用该项 ControlNet
-   Preprocessor 指预处理器，它将对输入的图像进行预处理。如果图像已经符合预处理后的结果，请选择 None。譬如，图中导入的图像已经是 OpenPose 需要的骨架图，那么 preprocessor 选择 none 即可。
-   在 Weight 下，可以调整该项 ControlNet 的在合成中的影响权重，与在 prompt 中调整的权重类似。Guidance strength 用来控制图像生成的前百分之多少步由 Controlnet 主导生成，这点与[:]语法类似。
-   Invert Input Color 表示启动反色模式，如果输入的图片是白色背景，开启它。
-   RGB to BGR 表示将输入的色彩通道信息反转，即 RGB 信息当做 BGR 信息解析，只是因为 OpenCV 中使用的是 BGR 格式。如果输入的图是法线贴图，开启它。
-   Low VRAM 表示开启低显存优化，需要配合启动参数“--lowvram”。
-   Guess Mode 表示无提示词模式，需要在设置中启用基于 CFG 的引导。
-   Model 中请选择想要使用解析模型，应该与输入的图像或者预处理器对应。请注意，预处理器可以为空，但模型不能为空。

#### **可用预处理/模型**

-   canny 用于识别输入图像的边缘信息。

![](https://developer.qcloudimg.com/http-save/yehe-170434/4044efdd3e47469a9e317da24be4b890.jpg?imageView2/2/w/2560/h/7000)

-   depth 用于识别输入图像的深度信息。

![](https://developer.qcloudimg.com/http-save/yehe-170434/b5c758f5274caa84b49a59077e57a472.jpg?imageView2/2/w/2560/h/7000)

-   hed 用于识别输入图像的边缘信息，但边缘更柔和。

![](https://developer.qcloudimg.com/http-save/yehe-170434/6eb01712ad0078f8ce7fd3cb9d9a7b82.jpg?imageView2/2/w/2560/h/7000)

-   mlsd 用于识别输入图像的边缘信息，一种轻量级的边缘检测。它对横平竖直的线条非常敏感，因此更适用于于室内图的生成。

![](https://developer.qcloudimg.com/http-save/yehe-170434/8d87dd3bbeefae3469600ac85702e6ab.jpg?imageView2/2/w/2560/h/7000)

-   normal 用于识别输入图像的法线信息。

![](https://developer.qcloudimg.com/http-save/yehe-170434/b7986f9ac6863a9a1ef3d2fc12c3d532.jpg?imageView2/2/w/2560/h/7000)

-   openpose 用于识别输入图像的动作信息。

![](https://developer.qcloudimg.com/http-save/yehe-170434/6b9eb56a36a28d82a6b1d63ff9ed0d43.jpg?imageView2/2/w/2560/h/7000)

OpenPose Editor 插件可以自行修改姿势，导出到文生图或图生图。

![](https://developer.qcloudimg.com/http-save/yehe-170434/68c092db551040a3f06aff58bdc55aec.jpg?imageView2/2/w/2560/h/7000)

-   scribble 将输入图像作为线稿识别。如果线稿是白色背景，务必勾选“Invert Input Color”

![](https://developer.qcloudimg.com/http-save/yehe-170434/f739b6ae43c3eb60664c74126e3d6567.jpg?imageView2/2/w/2560/h/7000)

-   fake_scribble 识别输入图像的线稿，然后再将它作为线稿生成图像。

![](https://developer.qcloudimg.com/http-save/yehe-170434/a0b3f4acdc711cdcc3d17df3be7f5fa0.jpg?imageView2/2/w/2560/h/7000)

-   segmentation 识别输入图像各区域分别是什么类型的物品，再用此构图信息生成图像。

![](https://developer.qcloudimg.com/http-save/yehe-170434/260fb4396ab6407d431f4749199c9451.jpg?imageView2/2/w/2560/h/7000)

如果想绘制一张符合 segementation 规范的图像，可以使用以下色表绘制。[**color_coding_semantic_segmentation_classes - Google 表格**](https://docs.google.com/spreadsheets/d/1se8YEtb2detS7OuPE86fXGyD269pMycAWe2mtKUj2W8/edit#gid=0)

![](https://developer.qcloudimg.com/http-save/yehe-170434/94b67d4f54c9ba710921008979f5d99d.png?imageView2/2/w/2560/h/7000)

#### **多 ControlNet 合成**

在 ControlNet 的设置下，可以调整可用 ControlNet 的数量。

![](https://developer.qcloudimg.com/http-save/yehe-170434/f9a452a409336ee0c4d5effba6b78636.jpg?imageView2/2/w/2560/h/7000)

在多个 ControlNet 模式下，结果会将输入的信息合并生成图像：

![](https://developer.qcloudimg.com/http-save/yehe-170434/78a85ea8f1856a65b98fd7cf825a298d.jpg?imageView2/2/w/2560/h/7000)

![](https://developer.qcloudimg.com/http-save/yehe-170434/1ba78f018961dfa035228f6b70ab091b.jpg?imageView2/2/w/2560/h/7000)
