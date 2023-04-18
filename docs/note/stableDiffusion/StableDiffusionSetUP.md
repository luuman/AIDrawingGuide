# StableDiffusion 安装教程

## 电脑配置要求

### 1. Windows

系统：Windows 10 及以上

CPU：无硬性要求，不是古董机一般都行

运行内存（内存条）：8G 以上

硬盘空间：至少准备 20G 空间

显卡（重点）：

- A 卡：A 卡无法实现运算加速，但是可以用 CPU 运算来替代，虽然速度比显卡慢几到几十倍，但是能正常出图

- N 卡：恭喜你，N卡完美支持作图加速，显卡内存（显存）要求最少**4G**以上，最好是 20 系以后的 N 卡（显卡最前面的数字表明第几代，如 2060，2080ti 等，通常被称为 20 系，3060 等通常被称为 30 系，以此类推）

- 如何查看显存大小：右键点击电脑最下方的任务栏，选择任务管理器，选择第二个性能选项卡，在最下方一般是显卡（GPU）的详细信息，单击后可以右侧看到显卡内存。

![[20230416151901.png]]

### 2. Mac🍎

系统：最近几个版本都可以

CPU：Intel 芯片的需要有独显，M 芯片的均可

运行内存：8G 以上

硬盘空间：至少准备 10G 空间

显卡：

- M 芯片：M 芯片集成图形处理模块，可以直接用，但是速度肯定比不上独立显卡。
- Intel 芯片：最好不要使用 CPU 来做运算，也就是说你的 Mac 要加配独立显卡才建议使用。

## 安装教程

### Windows 用户安装

#### 1. 下载

Windows 用户可以直接下载一键傻瓜版安装包
下载地址（最新版 Stable diffusion v4）：

- 百度盘：https://pan.baidu.com/s/1TK7UyX5lgNjdwdfcmYCI5Q

- 夸克盘：https://pan.quark.cn/s/6e430227ce3d

- 提取码：c132

  ![[20230416202749.png]]

#### 2. 安装依赖

运行“**启动器运行依赖**”这个文件，等待自动安装完成即可

#### 3. 解压并运行 Stable diffusion

先解压 sd-webui-aki-v4，接着找到“**A 启动器.exe**”文件运行即可。

![[20230416203723.png]]

看到以上的界面，就是封装好的傻瓜版 Stable diffusion 启动器，点击一键启动，软件会自动运行，并打开浏览器进入画图页面。

![[20230416205045.png]]

---

### Mac 用户安装 🍎

#### 1. 安装 homebrew 工具

打开终端（Terminal），输入：

```bash
/bin/bash -c "$(curl -fsSL https://gitee.com/ineo6/homebrew-install/raw/master/install.sh)"
```

安装完成后使用以下命令检测是否安装成功 homebrew
`

```bash
brew -v
```

#### 2. 安装 python

打开终端（Terminal），输入：

```bash
brew install cmake protobuf rust python@3.10 git wget
```

#### 3. 安装 git

`

```bash
brew install git
```

#### 4. 下载 Stable diffusion 项目到本地

这个就是 Stable diffusion 软件的本体，有了它才可以开始正式作图

```git
git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui
```

#### 5. 下载 Stable diffusion 基础模型

有了 Stable diffusion 软件本体之后，就可以自由去各种开源社区（比如[C 站](https://civitai.com/)，Hugging Face 等）选择任意你喜欢的风格的模型下载，并放到 Stable diffusion 软件目录当中就可以了。
这里以 stable diffusion 2.0 训练模型为例，到 Hugging face 里下载最基础的一个模型作为演示，跳转到该[模型网站](https://huggingface.co/stabilityai/stable-diffusion-2)。


![[20230416200024.png]]

选择“Files and Versions”选项卡，并点击我们需要下载的测试基础模型，然后找到左上角的 download 点击并下载

![[20230416195651.png]]

下载好后，把下载好的 ckpt 文件放在“你的用户名”> Stable-diffusion-webui>Models>Stable-diffusion 文件夹里，如:
`/Users/richardlee/Stable-diffusion-webui>Models>Stable-diffusion/`

#### 6. 开始运行 ⛽️

打开终端，使用 cd 命令进入到 Stable diffusion 文件夹中

```bash
cd stable-diffusion-webui
```

打开 stable-diffusion-webui，输入以下命令运行：

```bash
./webui.sh
```

这一步可能需要花费较长时间，因为会下载几个 sd 必需的应用，比如 gfpgan 等，耐心等待一会 ☕️。

当终端里出现如下字样，表明安装成功
`Running on local URL: )
`To create a public link, set share=True` in launch().`

#### 7. 打开网页开始绘图 ✍️

打开浏览器，输入**http://127.0.0.1:7860**即可进入 stable-diffusion 页面，整体的页面如图所示。

![[20230416201029.png]]

## 常见问题

> 1.为什么要本地用 AI 绘图

用自己的算力，不用给算力平台交费。可以说完全免费。没有 nsfw 的限制。不用排队，速度更快。

> 2．安装好后，关闭电脑，下次如何打开 stable-diffusion-webui

重复第六第七步即可。Terminal 先输入 cd stable-diffusion-webui，回车，接着输入./webui.sh 回车，然后在浏览器打开[http://127.0.0.1:7860](https://link.zhihu.com/?target=http%3A//127.0.0.1%3A7860)即可

> 3.安装 homebrew，安装 git，安装 stable-diffusion-webui 等总是遇到报错或者长时间没有变化怎么办？

检查自己的网络，是否顺畅访问搜索网站，是否能正常打开网页，是否能正常访问外网，切换内外网尝试。

> 4.如何像作者一样，画出很好看很真实的小姐姐？

在[http://civitai.com](https://link.zhihu.com/?target=http%3A//civitai.com)下载相应人像基础训练模型包（如 Chillmix）和 Lora 包（如 koreanDollLikeness_v15）。在后面的内容中会详细介绍。

> 5.如何控制人物动作或者姿势

用提示词 prompt 控制，或者用新特性 ControlNet，后面会发文讲，敬请期待。（记得关注作者）

> 6.如何切换模型

先下载相关 ckpt 或者 safetensors 文件放到上面第 5 步提到的 models>Stable-diffusion 文件夹里面，接着在 webui 界面左上角的“stable diffusion checkepoint”右侧（类似下图）点击刷新，接着左侧选择你新下载的模型。选择后等 1 分钟，就可以使用了。

> 7.为什么我生成图像这么慢？

（1）检查图像大小，图像大小尽量用默认的 512\*512，直接生成大图像算力会成倍增加，速度变慢。至于分辨率太低的问题，后续可以在 extra 里面放大图片。

（2）检查是否开启了 hirex.fix 功能，这个会比较费算力。如果勾选了把勾去掉就行。

（3）硬件性能问题，如果你是 m2 或者 m1 max， m1 pro 之类的高性能芯片，16g 内存以上，那么生成一张 20step 的图不会太慢。但是如果像我一样 m1，8g 内存，生成一张图一两分钟是正常的。

（4）后台开太多软件，绘图需要算力和内存较大，建议先关闭其他不用的程序。

> 8.如何写 prompt 提示词

（1）搜索引擎搜索 ai 绘图 prompt 或者 ai 绘图 提示词教程，会有很多介绍。

（2）自己先用中文描述，用翻译软件翻译成英文放进去。

（3）直接问 chatgpt，bing gtp 等 ai 智能问答平台。
