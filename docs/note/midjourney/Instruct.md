# 指令

| 指令                | 功能                                 |
| ------------------- | ------------------------------------ |
| /imagine            | 生成图像，prompt 后面加描绘词        |
| /show               | 结合任务 ID 生成原图片               |
| /ask                | 获取问题答案                         |
| /info               | 查看基本信息，如订阅状况、工作模式等 |
| /help               | 查看帮助信息                         |
| /prefer remix       | 切换到混合模式                       |
| /prefer option set  | 创建自定义变量                       |
| /prefer suffix      | 指定要添加每个提示末尾的后缀         |
| /prefer option list | 列出之前设置的所有变量               |
| /relax              | 切换到放松模式，生成图的时候较慢     |
| /fast               | 切换到快速模式，生成图的时候较快     |
| /blend              | 切换到图像混合模式，将两张图混合     |
| /stealth            | 切换到隐身模式，生成图只有自己可见   |
| /public             | 切换到公共模式，生成图所有人可见     |
| /settings           | 查看 Midjourney Bot 设置             |
| /subscribe          | 管理订阅，查看订阅情况               |

## 输出

### /imagine

生成图像。在指令后加上描绘词即可生成相应的图像。
### /show

是一个 Midjourney Bot 的指令，用于结合任务 ID 生成原始图片。通常在生成图片任务完成后，Midjourney Bot 会返回任务 ID，你可以使用 /show 指令来查看生成的原始图片。使用 /show 指令时，需要在指令后面加上任务 ID，例如 /show 1234，其中 1234 为任务 ID。这将会返回任务 ID 对应的原始图片。请注意，该指令仅能返回最近生成的 50 张图片中的原始图片。
  下面是优化后的文章，使用 Markdown 输出：

`https://media.discordapp.net/attachments/1093787021706792972/1098129235635355678/mobee_a_street_sceneincrease_the_storyphotoCinematic_d9fd2379-7ca9-411e-b314-842b4499de78.png`

`d9fd2379-7ca9-411e-b314-842b4499de78`

`/show job_id:d9fd2379-7ca9-411e-b314-842b4499de78`

## 提问

### /ask

获取问题答案。在生成图片的过程中，如果有不懂的问题，可以通过该指令提问。

## 信息

### /info

查看基本信息，如订阅状况、工作模式等。

### /help

<details>
<summary>
查看帮助信息。
</summary>

```
<!-- :pinkboat: GETTING STARTED? READ THE QUICK START GUIDE https://docs.midjourney.com/ -->
:pinkboat: 开始使用？请阅读快速入门指南 https://docs.midjourney.com/
<!-- You also get around 25 free trial images! -->
您还可以获得约25张免费试用图片！
<!-- Still having trouble? Post your question to a support channel in https://discord.gg/midjourney -->
如果仍然有问题，请在 https://discord.gg/midjourney 的支持频道中发布您的问题。
<!-- :orangeboat: WEBSITE -->
:orangeboat: 网站
<!-- View all your images and access your account on https://www.midjourney.com/app/ -->
在 https://www.midjourney.com/app/ 上查看所有图片并访问您的账户。
<!-- :greenboat: BASIC COMMANDS -->
:greenboat: 基本指令
<!-- /imagine  Creates an image from text -->
/imagine：使用文本生成一张图片。
<!-- /info  Shows information about your profile and plan and usage. -->
/info：显示您的个人资料、订阅计划和使用情况信息。
<!-- /subscribe  Get a link to the subscription page -->
/subscribe：获取订阅页面链接。
<!-- Full command list and documentation at https://docs.midjourney.com/docs/command-list -->
完整的指令列表和文档请参阅 https://docs.midjourney.com/docs/command-list。
<!-- :blueboat: EXTRA OPTIONS -->
:blueboat: 额外选项
<!-- Parameters are options added to the end of your prompt that change how the image generates. -->
参数是添加到提示末尾的选项，可以改变图片的生成方式。
<!-- Read about parameters and advanced prompting at       https://docs.midjourney.com/docs/parameter-list -->
请阅读有关参数和高级提示的信息 https://docs.midjourney.com/docs/parameter-list。
<!-- :pinkboat: DIRECT MESSAGES -->
:pinkboat: 直接消息
<!-- Subscribers can work in their Direct Messages with the bot. -->
订阅者可以在直接消息中与机器人一起工作。
<!-- Click--> @Midjourney Bot to message the bot. -->
点击 --> @Midjourney Bot 与机器人发送消息。
<!-- Remember to Right-click on the server icon -> Privacy settings -> Allow direct messages -->
记得右键单击服务器图标-> 隐私设置-> 允许直接消息。
<!-- Images generated in DMs are still publicly visible on the website. -->
在直接消息中生成的图片仍然可以在网站上公开查看。
<!-- :orangeboat: OTHER -->
:orangeboat: 其他
<!-- You can cancel or delete a generation by reacting with :x: -->
您可以通过反应:x:取消或删除生成的图片。
<!-- You can add an image to favorites by reacting with :star: -->
您可以通过反应:star:将一张图片添加到收藏夹中。
<!-- You can get a image sent to your DMs by reacting with :envelope: -->
您可以通过反应:envelope:将一张图片发送到您的直接消息中。
<!-- You can add image urls to your message to use them as 'image prompts'https://docs.midjourney.com/docs/image-prompts -->
您可以在消息中添加图片网址作为“图片提示” https://docs.midjourney.com/docs/image-prompts。
```

</details>

## 设置

### /prefer option set

创建自定义变量，例如定义变量 666 为 `--hd --ar 4:3`，之后就可以直接使用该变量。
### /prefer suffix

指定要添加每个提示末尾的后缀，设置后每次会自动在提示内容后面加上后缀。如果需要清空之前的后缀，可以使用 `/prefer suffix clear`。
### /prefer prompt

设置 prompt。
### /prefer quality

设置生成图像的质量，可选值为 25、50、75、95。
### /prefer style

设置生成图像的风格，可选值为 low、med、high、very high。
### /prefer mode

设置生成图像的模式，可选值为 Public mode、Stealth mode、Remix mode、Fast mode、Relax mode。
### /prefer version

设置生成图像的版本，可选值为 v1、v2、v3、v4、v5。
### /prefer niji

打开或关闭 Niji Mode。
### /prefer test

打开或关闭 MJ Test。
### /prefer photo

打开或关闭 MJ Test Photo。
### /prefer suffix`: 该指令用于指定要添加到每个提示末尾的后缀。设置后，每次生成图片时会自动在提示内容后面加上后缀。注意，后缀不支持提示词，只支持参数。如果需要清空之前设置的后缀，只需再次输入
### /prefer suffix`，并将内容留空保存即可。
  例如，如果将后缀设置为 `--ar 16:9`，在生成图片时，该参数就会自动添加到提示内容的末尾。

### /prefer option list`: 该指令用于列出之前所定义的所有变量。例如，如果之前定义了名为 `666` 的自定义变量，使用 `/prefer option list` 指令可以将其列出。
### /prefer remix

打开混音模式，当点击 v1-4 variation 选择项时，可以重新编辑 prompt。
### /relax

切换到放松模式，生成图像的速度较慢。
### /fast

切换到快速模式，生成图像的速度较快。
### /blend

切换到图像混合模式，可以将两张图混合。
### /stealth

切换到隐身模式，生成的图像只有自己可以看到。
### /public

切换到公共模式，所有人都可以看到生成的图像。
### /settings

查看 Midjourney Bot 的设置信息。
  - MJ version：生成图片版本，最新的是 v5。
  - Niji Mode：二次元风格。
    - MJ Test：漫画风格。
    - MJ Test Photo：照片风格。
  - Quality：图片的质量参数，质量越高，图片效果越好。
  - Style：风格参数，low, med, high, very high 四种模式，越高图片越精细。
  - Mode：输出模式，分为 Public mode（公开模式）、Stealth mode（隐私模式）、Remix mode（混音模式）、Fast mode（快速模式）和 Relax mode（放松模式）。

## 付费

### /subscribe

管理订阅，注意保护订阅连接。
