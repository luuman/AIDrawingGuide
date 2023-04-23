# **Controlnet**

Controlnet 允许通过线稿、动作识别、深度信息等对生成的图像进行控制。

请注意，在使用前请确保 ControlNet 设置下的路径与本地 Stable Diffusion 的路径同步

![](https://user-images.githubusercontent.com/10662852/233848121-0b5dfa1e-7ec0-4075-914e-0e2e9a08a977.jpeg)

## **基本流程**

![](https://user-images.githubusercontent.com/10662852/233848135-c54794d8-3d24-4561-865b-a5d20632593b.jpeg)

![](https://user-images.githubusercontent.com/10662852/233848136-c4918d17-f357-4d31-9157-21d3750e6a00.jpeg)

-   点击 Enable 启用该项 ControlNet
-   Preprocessor 指预处理器，它将对输入的图像进行预处理。如果图像已经符合预处理后的结果，请选择 None。譬如，图中导入的图像已经是 OpenPose 需要的骨架图，那么 preprocessor 选择 none 即可。
-   在 Weight 下，可以调整该项 ControlNet 的在合成中的影响权重，与在 prompt 中调整的权重类似。Guidance strength 用来控制图像生成的前百分之多少步由 Controlnet 主导生成，这点与[:]语法类似。
-   Invert Input Color 表示启动反色模式，如果输入的图片是白色背景，开启它。
-   RGB to BGR 表示将输入的色彩通道信息反转，即 RGB 信息当做 BGR 信息解析，只是因为 OpenCV 中使用的是 BGR 格式。如果输入的图是法线贴图，开启它。
-   Low VRAM 表示开启低显存优化，需要配合启动参数“--lowvram”。
-   Guess Mode 表示无提示词模式，需要在设置中启用基于 CFG 的引导。
-   Model 中请选择想要使用解析模型，应该与输入的图像或者预处理器对应。请注意，预处理器可以为空，但模型不能为空。

## **可用预处理/模型**

-   canny 用于识别输入图像的边缘信息。

![](https://user-images.githubusercontent.com/10662852/233848137-ed0b744f-05cf-448c-8ea4-304da74577cf.jpeg)

-   depth 用于识别输入图像的深度信息。

![](https://user-images.githubusercontent.com/10662852/233848139-ecfc5aa5-8fa5-4d8c-925e-246a78e37044.jpeg)

-   hed 用于识别输入图像的边缘信息，但边缘更柔和。

![](https://user-images.githubusercontent.com/10662852/233848125-92c00e21-10d7-4b82-b155-5c7588e0b5d1.jpeg)

-   mlsd 用于识别输入图像的边缘信息，一种轻量级的边缘检测。它对横平竖直的线条非常敏感，因此更适用于于室内图的生成。

![](https://user-images.githubusercontent.com/10662852/233848126-0e0969a1-45c3-484c-a806-8910330e9298.jpeg)

-   normal 用于识别输入图像的法线信息。

![](https://user-images.githubusercontent.com/10662852/233848140-b92a7e93-a4de-437f-b166-97e1f34ca065.jpeg)

-   openpose 用于识别输入图像的动作信息。

![](https://user-images.githubusercontent.com/10662852/233848124-120d97cd-93a8-4c05-b312-22162898323f.jpeg)

OpenPose Editor 插件可以自行修改姿势，导出到文生图或图生图。

![](https://user-images.githubusercontent.com/10662852/233848127-9c84f048-d6af-4e71-9826-92d8530b56ed.jpeg)

-   scribble 将输入图像作为线稿识别。如果线稿是白色背景，务必勾选“Invert Input Color”

![](https://user-images.githubusercontent.com/10662852/233848143-1ff9d77d-fbf1-4e64-8cf9-f849e9b0e558.jpeg)

-   fake_scribble 识别输入图像的线稿，然后再将它作为线稿生成图像。

![](https://user-images.githubusercontent.com/10662852/233848138-616c0aff-fd55-4346-844b-a3a1e8a58bb6.jpeg)

-   segmentation 识别输入图像各区域分别是什么类型的物品，再用此构图信息生成图像。

![](https://user-images.githubusercontent.com/10662852/233848134-243f82b3-6650-4ba4-9ed8-b1e8c82f6fce.jpeg)

如果想绘制一张符合 segementation 规范的图像，可以使用以下色表绘制。[**color_coding_semantic_segmentation_classes - Google 表格**](https://docs.google.com/spreadsheets/d/1se8YEtb2detS7OuPE86fXGyD269pMycAWe2mtKUj2W8/edit#gid=0)

![](https://user-images.githubusercontent.com/10662852/233848130-697689c6-7b34-41d4-a068-87fac0bc430d.png)

## **多 ControlNet 合成**

在 ControlNet 的设置下，可以调整可用 ControlNet 的数量。

![](https://user-images.githubusercontent.com/10662852/233848142-1c055986-6006-48a9-8fcf-df9c0562d8b4.jpeg)

在多个 ControlNet 模式下，结果会将输入的信息合并生成图像：

![](https://user-images.githubusercontent.com/10662852/233848129-8569b793-177b-42be-9f45-1566f3837365.jpeg)

![](https://user-images.githubusercontent.com/10662852/233848119-844b9576-d760-455f-85fc-06f627735147.jpeg)