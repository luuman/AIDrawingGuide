Midjourney 参数合集
六总
六总​
新加坡国立大学 商业分析硕士
24 人赞同了该文章
​
目录
收起
什么是参数？
基础参数 - Basic parameters - 控制图像的基础样式
Aspect Ratios
Chaos
No
Quality
Seed
Stop
Style
Stylize
模型参数 - Model Version Parameters - 切换生成图像的模型算法
Niji
High Definition
Test
Testp
Version
升频参数 - Upscaler Parameters - 控制生成大图时的算法属性
Uplight
Upbeta
Upanime
其他参数 - 适用于特定早期模型
Creative
Image Weight
Sameseed
Video
模型的默认参数和范围 - 模型V4和V5
重要常用的参数
更多Midjourney学习内容，可查看
什么是参数？
在我们写一个Prompt的时候，可以选择性地在末尾放这个参数（parameter），来控制一张图属性，如大小，高清度之类，如下图中的 --aspect 2:3。参数可以选择放或者不放，可以放一个，也可以放多个。


基础参数 - Basic parameters - 控制图像的基础样式
Aspect Ratios
控制图片长宽比例，默认是1:1
--aspect, or --ar,
例如：生成4:3的图片，--ar 4:3

Chaos
控制图片的创意度和多样性，数字越大，创意性越强，默认为0
--chaos <0-100> or --c
No
控制图片中不要出现的元素
--no
例如：--no dogs, 会尝试从图像中移除狗
Quality
控制图片的精细质量程度 ，默认值是1，数值越大，越多细节吗，但渲染时间越长
--quality <.25, .5, 1, or 2> or --q <.25, .5, 1, or 2>

Seed
控制图片随机性，即相似度设置
--seed <0-4294967295>
Stop
控制图片渲染进程，默认进度是100
--stop <10-100>
Style
模型版本V4之间的切换，注意和下面的Stylize区分，默认是4c
--style <4a, 4b or 4c>
Stylize
控制图片的风格化程度，数值越高图片的艺术性越强，和写的内容偏差就越大，默认是100 （style med）
--stylize or --s

模型参数 - Model Version Parameters - 切换生成图像的模型算法
Niji
动漫风格模型
--niji
High Definition
早起的算法模型，适用于抽象和风景图片
--hd
Test
测试版本模型
--test
Testp
摄影风格的测试算法模型
--testp
Version
切换算法模型版本，目前最新的是V5，默认是V4模型
--version or --v <1-5>
升频参数 - Upscaler Parameters - 控制生成大图时的算法属性
Midjouney刚开始生成的是一个低分辨率的图像选项网格，类似于一个低成本的Demo，然后我们可以基于这个Demo来选择其中喜欢的进行放大并且添加更多的细节，而在这个放大图像的过程中有几种放大模型可以选择。

Uplight
轻型升频，放大图片同时添加少量细节纹理 （1024px）
对早先的模型版本，这个uplight放大器对于面部和表面光滑处理有用
--uplight
Upbeta
Beta升频，放大图片同时不添加细节纹理 (2048px)，适用于面部和表面光滑处理
--upbeta
Upanime
动漫升频，放大图片同时增加动画插画风格 （1024px）
和--niji一起
其他参数 - 适用于特定早期模型
Creative
用于测试算法模型，增加生成图像的创意性
--creative
Image Weight
设置提示内容prompt中图片和文本的权重比例，默认值是 --iw 0.25，数值越大，代表图片的“重要性”对生成的图片风格影响越明显
--iw
Sameseed
控制随机性，为了生成相似图片，类似前面的seed
--sameseed
Video
将图像生成过程输出生成视频，只适用于小图，不适用于upscaling图像
--video
模型的默认参数和范围 - 模型V4和V5

重要常用的参数
aspect ratio --ar
stylize --s
quality --q
no --no
chaos --c
version --v
niji --niji
iw --iw