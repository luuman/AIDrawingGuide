### **提示词**

提示词所做的工作是缩小模型出图的解空间，即缩小生成内容时在模型数据里的检索范围，而非直接指定作画结果。提示词的效果也受模型的影响，有些模型对自然语言做特化训练，有些模型对单词标签对特化训练，那么对不同的提示词语言风格的反应就不同。

#### **提示词内容**

提示词中可以填写以下内容：

-   自然语言 可以使用描述物体的句子作为提示词。大多数情况下英文有效，也可以使用中文。避免复杂的语法。
-   单词标签 可以使用逗号隔开的单词作为提示词。一般使用普通常见的单词。单词的风格要和图像的整体风格搭配，否则会出现混杂的风格或噪点。避免出现拼写错误。可参考[**Tags | Danbooru (donmai.us)**](https://danbooru.donmai.us/tags)
-   Emoji、颜文字 Emoji (💰👨👩🎅👼🍟🍕) 表情符号也是可以使用并且非常准确的。因为 Emoji 只有一个字符，所以在语义准确度上表现良好。关于 emoji 的确切含义，可以参考[**Emoji List, v15.0 (unicode.org)**](https://unicode.org/emoji/charts/emoji-list.html)，同时 Emoji 在构图上有影响。

![](https://user-images.githubusercontent.com/10662852/233848567-64f7125e-e2dd-46f4-9130-553075f3cd3d.jpeg)

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

![](https://user-images.githubusercontent.com/10662852/233848559-d5e33341-0fa1-4172-84fe-bba29ea4d1ec.jpeg)

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

![](https://user-images.githubusercontent.com/10662852/233848564-f8d84de1-5457-4dcc-b5d6-e8aa63919fdf.gif)

#### **Token**

实际上，程序是将输入的关键词以 Token 的形式传入模型进行计算的：

![](https://user-images.githubusercontent.com/10662852/233848562-8c2e0d7b-8682-4512-85a6-d47dd76c33bd.jpeg)

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