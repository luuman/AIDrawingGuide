# **模型**

# **模型下载**

模型能够有效地控制生成的画风和内容。常用的模型网站有：

> [**Civitai | Stable Diffusion models, embeddings, hypernetworks and more**](https://civitai.com/) > [**Models - Hugging Face**](https://huggingface.co/models) > [**SD - WebUI 资源站**](https://www.123114514.xyz/models/ckpt) > [**元素法典 AI 模型收集站 - AI 绘图指南 wiki (aiguidebook.top)**](https://aiguidebook.top/index.php/model/) > [**AI 绘画模型博物馆 (subrecovery.top)**](https://aimodel.subrecovery.top/)

# **模型安装**

下载模型后需要将之放置在指定的目录下，请注意，不同类型的模型应该拖放到不同的目录下。模型的类型可以通过[**Stable Diffusion 法术解析**](https://spell.novelai.dev/)检测。

![aaf4f437dbdecc004e9bc03ed97a89f4](https://user-images.githubusercontent.com/10662852/233846442-23df040d-76ab-43bd-b9ad-822bbcc0daa9.jpeg)

-   大模型（Ckpt）：放入 models\Stable-diffusion

![](https://user-images.githubusercontent.com/10662852/233846405-d8347889-32c4-4091-acc3-e907063eb202.jpeg)

-   VAE 模型：一些大模型需要配合 vae 使用，对应的 vae 同样放置在 models\Stable-diffusion 或 models\VAE 目录，然后在 webui 的设置栏目选择。

![](https://user-images.githubusercontent.com/10662852/233846461-a557a50e-5acc-4a02-ab2e-c3f1c8fc4796.jpeg))

![](https://user-images.githubusercontent.com/10662852/233846416-90900676-f86f-4ee5-b476-7cc52165773f.jpeg))

![](https://user-images.githubusercontent.com/10662852/233847700-485561ab-af91-4534-9778-fb099b58f336.jpeg)

-   Lora/LoHA/LoCon 模型：放入 extensions\sd-webui-additional-networks\models\lora，也可以在 models/Lora 目录

![](https://user-images.githubusercontent.com/10662852/233846470-1e24a9ee-5d9f-4671-8c95-8e0291690620.jpeg))

![](https://user-images.githubusercontent.com/10662852/233846404-3c5664fb-3887-4fa1-9aa2-392b36a76427.jpeg))

-   Embedding 模型：放入 embeddings 目录

![](https://user-images.githubusercontent.com/10662852/233846422-40412ddf-3962-4355-a7e6-5f01d9125403.jpeg)

# **模型使用**

-   Checkpoint(ckpt)模型 对效果影响最大的模型。在 webui 界面的左上角选择使用。

![](https://user-images.githubusercontent.com/10662852/233846411-f226b2ff-6dc8-4e8b-8fe1-ef0ad7e91c54.jpeg)

一些模型会有触发词，即在提示词内输入相应的单词才会生效。

-   Lora 模型 / LoHA 模型 / LoCon 模型

对人物、姿势、物体表现较好的模型，在 ckpt 模型上附加使用。在 webui 界面的 Additional Networks 下勾线 Enable 启用，然后在 Model 下选择模型，并可用 Weight 调整权重。权重越大，该 Lora 的影响也越大。不建议权重过大（超过 1.2），否则很容易出现扭曲的结果。

![](https://user-images.githubusercontent.com/10662852/233846397-4dd36f52-1c70-4439-9abd-df66f669455d.jpeg)

多个 lora 模型混合使用可以起到叠加效果，譬如一个控制面部的 lora 配合一个控制画风的 lora 就可以生成具有特定画风的特定人物。因此可以使用多个专注于不同方面优化的 Lora，分别调整权重，结合出自己想要实现的效果。

LoHA 模型是一种 LORA 模型的改进。

LoCon 模型也一种 LORA 模型的改进，泛化能力更强。

-   Embedding

对人物、画风都有调整效果的模型。在提示词中加入对应的关键词即可。大部分 Embedding 模型的关键词与文件名相同，譬如一个名为为“SomeCharacter.pt”的模型，触发它的关键词检索“SomeCharacter”。

# **模型训练**

## **环境搭建**

以[**GitHub - bmaltais/kohya_ss**](https://github.com/bmaltais/kohya_ss)为例，它提供了在 Windows 操作系统下的 GUI 训练面板。

如果需要在 Linux 上部署且需要 GUI，请参考[**GitHub - P2Enjoy/kohya_ss-docker: This is the tandem repository to exploit on linux the kohya_ss training webui converted to Linux. It uses the fork in the following link**](https://github.com/P2Enjoy/kohya_ss-docker)

![](https://user-images.githubusercontent.com/10662852/233846455-56b07f51-77bc-4da2-b679-ec97effdee34.jpeg)

需要保证设备拥有 Python 3.10.6 及 git 环境。

1.  首先，以管理员模式启动 Powershell，执行“Set-ExecutionPolicy Unrestricted”命令，并回答“A"。然后可以关闭该窗口。

![](https://user-images.githubusercontent.com/10662852/233846425-e8358ce3-7219-4b2b-ab3f-fe600cebe2e3.jpeg)

1.  启动一个普通的 Powershell 窗口，在需要克隆该仓库的路径下，执行以下命令：

```javascript
git clone https://github.com/bmaltais/kohya_ss.git
cd kohya_ss

python -m venv venv
.\venv\Scripts\activate

pip install torch==1.12.1+cu116 torchvision==0.13.1+cu116 --extra-index-url https://download.pytorch.org/whl/cu116
pip install --use-pep517 --upgrade -r requirements.txt
pip install -U -I --no-deps https://github.com/C43H66N12O12S2/stable-diffusion-webui/releases/download/f/xformers-0.0.14.dev0-cp310-cp310-win_amd64.whl

cp .\bitsandbytes_windows\*.dll .\venv\Lib\site-packages\bitsandbytes\
cp .\bitsandbytes_windows\cextension.py .\venv\Lib\site-packages\bitsandbytes\cextension.py
cp .\bitsandbytes_windows\main.py .\venv\Lib\site-packages\bitsandbytes\cuda_setup\main.py
accelerate config
```

复制

在执行“accelerate config”后，它将询问一些设置选项。请按照以下选项依次选择：

> This machine No distributed training NO NO NO all fp16

30 系、40 系显卡可选择安装 CUDNN：

```javascript
.\venv\Scripts\activate
python .\tools\cudann_1.8_install.py
```

复制

## **环境更新**

如果需要更新仓库，请执行以下命令：

```javascript
git pull
.\venv\Scripts\activate
pip install --use-pep517 --upgrade -r requirements.txt
```

复制

## **界面启动**

在 Powershell 中执行：

```javascript
.\gui.ps1
```

复制

双击 gui.bat 也可以。弹出以下界面后，直接访问 URL 即可。

![](https://user-images.githubusercontent.com/10662852/233846457-c02e8166-d861-47e5-bca1-c9c847d6b5b8.jpeg)

![](https://user-images.githubusercontent.com/10662852/233846409-f5099239-2ec2-4bed-a222-2d2c2f418ac1.jpeg)

## **训练流程**

模型训练主要有三种结果：欠拟合，效果好，过拟合。欠拟合：模型完全没有从数据集中学习到经验，对各种输入都得出差距很大的结果。效果好：模型不仅对训练集中的输入有接近的结果，对不来自训练集中的输入也有接近的效果。过拟合：模型只训练集中的输入有非常非常接近的结果，对不来自训练集中的输入给出差距很大的结果。

### **1. 准备训练集**

图片尽可能高清，风格统一但内容形式多样（譬如动作多样、服装多样）。

![](https://user-images.githubusercontent.com/10662852/233846446-f4eb3a31-898b-4f64-9f2a-68de36a7b309.jpeg)

样本数量可能影响到拟合结果。

样本量太少，模型可能欠拟合；样本量过大，模型可能过拟合。

> 譬如让一个人学习英语，只给他几条例句去看，他可能什么都没学会【欠拟合】；给了它几十亿条例句去看，他可能只会根据别人说的话查字典一样回话，如果字典里没有就完全不会说了【过拟合】

### **2. 图片裁剪**

将训练集裁剪为多个尺寸相同的图片。可以在 SD webui 界面中自动裁剪，也可以手动裁切。

![](https://user-images.githubusercontent.com/10662852/233846468-111e4640-8e0e-4d8a-82e2-48161b0271b4.jpeg)

一般使用的图片尺寸是 512*512，也可更换为其他尺寸，尺寸越大占用显存越高，但对细节的捕捉也会越好。

### **3. 图片打标**

-   关键词生成 可以在训练环境的页面下打标：

![](https://user-images.githubusercontent.com/10662852/233846453-13642344-2f11-4724-9837-215d869beb33.jpeg)

也可以在 sd webui 的页面下打标：

![](https://user-images.githubusercontent.com/10662852/233846465-1031149c-08e5-4e17-8992-90497d4c5860.jpeg)

![](https://user-images.githubusercontent.com/10662852/233846401-3cc61014-ec46-4bb5-a061-08b7593bc49a.jpeg)

比较这几种不同的打标器的效果，在同一输入下：

![](https://user-images.githubusercontent.com/10662852/233846439-9a1f3008-841b-4329-bf8a-ecc4dab5262c.jpeg)

_【本义：一个在铁匠铺里打铁的男铁匠】_

打标器

效果

效果（中文翻译）

Stable Diffusion webui-训练-图像预处理-BLIP

a man in a kitchen with a fire in the fireplace and a hammer in his hand and a hammer in his other hand

一个男人在厨房里，壁炉里生着火，手里拿着锤子，另一只手拿着锤子

Stable Diffusion webui-训练-图像预处理-deepbooru

1boy, black_gloves, gloves, indoors, male_focus, shirt, short_sleeves, solo

一个男孩，黑色手套，手套，室内，男人特写，衬衫，短袖，单人

Stable Diffusion webui-Tagger(WD14)

1boy, cooking, frying pan, male focus, solo, gloves, apron, fire, brown footwear, black gloves, boots, stove, kitchen, holding, facial hair, bandana, blue shirt, shirt

一个男孩，烹饪，煎锅，男人特写，单人，手套，围裙，火，棕色鞋，黑色手套，靴子，炉子，厨房，握着，胡子，头巾，蓝色衬衫，衬衫

kohya webui-Utilities-Captioning-BLIP Captioning

a man is working on a piece of metal

一个男人正在加工一块金属

kohya webui-Utilities-Captioning-GIT Captioning

a drawing of a blacksmith with a hammer and a glove on his hand.

一幅画，画的是一个手上戴着手套、拿着锤子的铁匠。

**打标对图片的描述越准越好，如果条件允许，尝试人工打标。**

-   关键词合并 在生成出的关键词中，我们需要把与训练目标强相关的关键词划为一个统一的特征表述。以"1boy, cooking, frying pan, male focus, solo, gloves, apron, fire, brown footwear, black gloves, boots, stove, kitchen, holding, facial hair, bandana, blue shirt, shirt"为例，假如我们的训练对象就是一个男性大胡子，那么他必然始终携带着”男人、胡子“这两个要素，那么我们可以用一个词总结这个角色，例如用”Smith“替代”1boy,facial hair"，整条句子将变为：

-

-

原关键词

1boy, cooking, frying pan, male focus, solo, gloves, apron, fire, brown footwear, black gloves, boots, stove, kitchen, holding, facial hair, bandana, blue shirt, shirt

合并后

Smith, cooking, frying pan, male focus, solo, gloves, apron, fire, brown footwear, black gloves, boots, stove, kitchen, holding, bandana, blue shirt, shirt

以此类推，我们需要为目标绑定什么要素，就将它从关键词中删去。而类似于动作、背景这种与对象绑定关系不紧密，在日后生成图期间需要改变的，就保留在关键词中。

-   编组 一些具有同组关系的图片可以利用关键词引导 AI 去归纳它们。譬如，我们训练的对象 Smith 有三张图，分别是全图、背景、前景，那么我可以如此处理：

![](https://user-images.githubusercontent.com/10662852/233846452-e45a41d8-55f9-403f-ae3a-2aa9115baf15.png)

### **4. 正则化**

训练集中的每张图片通常能被分解为两大部分：“训练目标+其他要素”，依然以 Smith 为例：

-

完整内容

训练目标

其他要素

在铁匠铺里打铁的铁匠 Smith

Smith

铁匠铺、打铁、铁匠

其中，”铁匠铺、打铁、铁匠“都是模型中已有的内容，称为“先验知识”。我们需要将这部分知识为 AI 指明，省去重新学习这部分内容的时间；也能引导 AI 明确学习的目标，让模型具有更好的泛化性。

> 正则化通过降低模型的复杂性提高泛化能力。模型越复杂，模型的泛化能力越差，要达到相同的泛化能力，越复杂的模型需要的样本数量就越多，为了提高模型的泛化能力，需要正则化来限制模型复杂度。

正则化的标签需要与训练集中的 Class 相对应，图片数量也要一致。正则化不是必须的，可以根据训练集的情况和训练目的的不同来调整。同一张图片不允许在训练集和正则化中同时出现。

### **5. 文件路径组织**

在训练前，我们需要用特定的方式组织文件路径：譬如，训练目标是一群女孩，其中有一位名为 sls 的女孩好一位名为 cpc 的女孩，那么文件路径应该为：

> ●train_girls ----○10_sls 1girl ----○10_cpc 1girl ●reg_girls ----○1_1girl

其中，train_girls 目录下放置的是训练集，命名规则是“训练次数_<标识符> <类别>”，如“10_sls 1girl”表示“名为 sls 的对象，她是一个女孩（类别），这个文件夹下的训练集每个训练 10 次”。

reg_girls 目录下放置的是正则化内容。命名规则是“训练次数_<类别>”，如“1_1girl“表示”文件夹下的图片都是一个女孩，不重复使用数据“。*需要日后补充

### **6. 训练参数**

在 kohya webui 界面训练时，ckpt 与 lora 训练方法类似。

**a. 底模**

![](https://user-images.githubusercontent.com/10662852/233846420-32e7c004-7cd0-4d90-8cdd-39ff1ae68794.jpeg)

它表明我们此次训练将以哪个模型为基础进行训练。这个模型需要根据自己的需求选择。如果很明确自己的目标是属于某一大类下的分支，那么可以用接近这一大类的模型进行训练。譬如想训练一个二次元角色，那么可以使用二次元的底模（如 NovelAI）进行训练。如果自己的像训练的目标需要比较好的泛化性，可以使用 sd 模型，因为它包含的人物、物品、风格最多。如果模型为 sd2.0，则需要勾选 v2 和 v_parameterization

![](https://user-images.githubusercontent.com/10662852/233846440-907be024-eeb3-40e3-85fb-6c123f21ad8e.jpeg)

**b. 最大分辨率 Max resolution**

Training parameters 下的 Max Resolution 用于指定当前输入训练集图片的分辨率，请与文件夹内的保持一致。如果尺寸不一会被裁切。

![](https://user-images.githubusercontent.com/10662852/233846459-1ced1017-fea1-4bf9-848d-5359287e01c9.jpeg)

**c. Epoch**

![](https://user-images.githubusercontent.com/10662852/233846394-85f19637-d2ba-41de-b76d-382745358b3a.jpeg)

Epoch 是指一次将训练集中的所有样本训练一次（即对每个样本完成一次正向传播与一次反向传播）的过程。有时，由于一个训练样本过于庞大，它会被分成多个小块分批学习，每个小块就叫 batch。

> 在深度学习中，程序通过不断地将数据集在神经网络中往复传递来更新网络中的权重，以此建立对目标的拟合关系，因此只有反复地迭代才能增强数据集的拟合度。随着 epoch 的增加，模型将从**欠拟合**（右一，表示即便是来自于数据集中的输入，模型也很难达到它应该有的结果，类似于“只做题库里的题都做不对的差生”）变为**过拟合**（左一，表示模型对于来自于数据集中的输入，总能精确地达到对应的对结果，但是如果输入一旦有些许偏差，比如输入一些不是训练集中的输入，那结果就会很差，类似于“只会做题库里的题的书呆子”）。我们希望能达到中间的效果，即对训练集输出相对准确的结果，又对不在训练集里的输入也有较好的表现。这种特征就叫**泛化**。

![](https://user-images.githubusercontent.com/10662852/233846399-b6e31bdb-39a1-4418-8da4-47f921575ea4.jpeg)

因此，我们需要不少于一个 epoch 才能建立起较好的拟合关系，当然也不能太多。对于不同的数据集，使用的 epoch 都可能有所不同。

**d. Batch size**

![](https://user-images.githubusercontent.com/10662852/233846448-99fdf314-df75-4cbd-8acc-453e64fd3a8d.jpeg)

batch size 表示训练时的批量大小，也就是一次训练中选取的样本数量。这个参数对性能有一定要求，如果性能足够，增加 batch size 在理论上会提高模型的准确性。如果数据集样本量较小，Batch Size 可以等于样本数量，即把所有数据集一起输入网络进行训练，这样做的效果也很好；但是如果样本量较大，这肯定让设备吃不消，因此需要减小 Batch Size。但是，如果 Batch Size 太小，那么意味着在一个 Epoch 中迭代的次数也会减小，训练时权重的调整速度变慢，为了抵消这种影响，还得提高 epoch 才能有更好的效果。**所以 Batch Size 与 Epoch 参数二者是相辅相成的**，他们二者的关系就好比一次刷多少题和总共刷多少次题。合适的 batch size 应该让 GPU 正好满载运行。

**e. Save every N epochs**

![](https://user-images.githubusercontent.com/10662852/233846406-975fb0cf-675b-46c2-9220-2c166319fc48.jpeg)

每 N 个 Epoch 保存一次

**f. 学习率 Learning Rate**

![](https://user-images.githubusercontent.com/10662852/233846414-1c253440-4ab4-40bc-9457-b12dfc985b69.jpeg)

学习率指的是一次迭代（即输入一个样本对它学习，并用此次学习的经验调整神经网络）的步长。这个值越大，表明一次学习对模型的影响越大。为了让学习循序渐进，学习率不应该太高，我们需要 AI 在训练中反复总结一点点经验，最后累积为完整的学习成果。合理的学习率会让学习过程收敛，Loss 达到足够低。

> 学习率太低，容易出现局部最优解，类似于“一个开车的 AI 稀里糊涂地开完全程，车技很菜”；学习率太高，容易使得模型不收敛，找不到解，类似于“一个开车的 AI 完全不会开车，只会原地打圈瞎操作”。

**g. 学习率调度器 Learning Rate Scheduler**

![](https://user-images.githubusercontent.com/10662852/233846407-f9945711-5488-4676-9b6e-e8989c6c0170.jpeg)

学习率调度器是一种用于动态调整学习率的技术，它可以在训练过程中根据模型的表现自动调整学习率，以提高模型的训练效果和泛化能力。通常，学习率在训练开始时设置为比较高的值，允许 AI“在一次训练中学得更多更快”。随着训练的进行，学习率会降低，逐步收敛到最优。在训练过程中降低学习率也称为**退火**或**衰减**。

-   adafactor：自适应学习率。
-   constant ：恒定，学习率不变。
-   constant_with_warmup：恒定预热。学习率在开始会增大一点，然后退回原学习率不变。
-   Cosine：使用余弦函数来调整学习率，使其在训练过程中逐渐降低。常被称为余弦退火。
-   cosine_with_restarts：余弦退火重启。在 consine 的基础上每过几个周期将进行一次重启，该值在选择后可以设定。
-   linear：线性。学习率线性下降。
-   Polynomial：使用多项式函数来调整学习率。

**h.学习率预热比例 LR warmup**

![](https://user-images.githubusercontent.com/10662852/233846467-4d46863c-debc-4a28-beb4-34f1f8c6819e.jpeg)

刚开始训练时模型的权重是随机初始化的，如果此时选择一个较大的学习率，可能会带来模型的不稳定。学习率预热就是在刚开始训练的时候先使用一个较小的学习率，先训练一段时间，等模型稳定时再修改为预先设置的学习率进行训练。

> 例如，假设我们在训练神经网络时设置了一个学习率为 0.1，预热比例为 0.1。则在训练的前 10% 的迭代次数中，我们会逐渐将学习率从 0.01 增加到 0.1，然后在剩余的训练迭代次数中使用设定的学习率 0.1。

**i. 优化器 Optimizer**

![](https://user-images.githubusercontent.com/10662852/233846433-7d266a2f-3c3d-465b-af6e-f486dbded135.jpeg)

在训练神经网络时，我们需要在反向传播中逐步更新模型的权重参数。优化器的作用就是根据当前模型计算结果与目标的偏差，不断引导模型调整权重，使得偏差不断逼近最小。Adafactor 和 Lion 是推荐使用的优化器。

-   Adam：一种常用的梯度下降算法，被广泛应用于神经网络模型的优化中。它结合了动量梯度下降和自适应学习率方法的优点，既可以加快收敛速度，又可以避免学习率调整不当导致的振荡和陷入局部最优解。并且对于不同的参数有不同的学习率，更加适用于高维度的参数空间。
-   AdamW：对 Adam 算法的改进方案，对惩罚项参数进行控制，能更好地控制模型的复杂度，防止模型过拟合，提高泛化性能。
-   AdamW8bit：8bit 模式的 AdamW，能降低显存占用，略微加快训练速度。
-   Adafactor：自适应优化器，对 Adam 算法的改进方案，降低了显存占用。参考学习率为 0.005 [**1**](https://wandb.ai/yepster/tpu-t5-base/reports/Adafactor-learning-rate-0-005-seems-best-for-t5-base-training--VmlldzoxNTgyODIw) 。
-   DAdaptation[**2**](https://arxiv.org/pdf/2301.07733.pdf)：自适应优化器，比梯度下降（SGD）方法更加稳定有效、使用时请将学习率设置为 1。
-   Lion[**3**](https://github.com/google/automl/tree/master/lion)：自适应优化器，节省更多显存、速度更快，与 AdamW 和 Adafactor 相比有 15%左右的加速。参考学习率为 0.001。
-   SGDNesterov：一种常用的优化算法，基于梯度下降（SGD）方法进行优化，通过引入动量的概念加速收敛速度。
-   SGDNesterov8bit：8bit 模式的 SGDNesterov，能降低显存占用，略微加快训练速度。

**j. Text Encoder 与 Unet**

![](https://user-images.githubusercontent.com/10662852/233846451-e6c84b97-f535-4b66-b206-3010d68bc7e1.jpeg)

机器不能直接识别人类的语言，Text Encoder 是一种用于将文本数据转换为机器可读形式的模型或算法。对于输入的一串提示词，程序会将它们分解为一个个标记（Token）输入给 Text Encoder（一个 Token 通常代表着一个特征），这样一句话就能被转为一个向量为机器所识别 [**4**](https://medium.com/analytics-vidhya/nlp-text-encoding-a-beginners-guide-fa332d715854)

Unet 是一种用于图像分割的深度学习模型，它的作用是将图像分割为多个不同的构成部分。经过训练后，它可以来填充图像中缺失或损坏的部分，或者对灰度草图进行着色。[**5**](https://medium.com/analytics-vidhya/painting-sketches-with-ml-33a3ece74d31)

![](https://user-images.githubusercontent.com/10662852/233846428-5fb7f657-712e-4d3c-98e2-3d0cd4533f87.jpeg)

我们可以为它们设置不同的学习率，分别对应了“识别文字描述”和“识别图片”的能力。

> 在原版 Dreambooth 训练中，我们只能让 AI 学习 UNET 模型，XavierXiao 改进添加了额外训练 Text Encoder [**6**](https://github.com/XavierXiao/Dreambooth-Stable-Diffusion/) ，在本文使用的仓库中就沿用了这种改进。

**k. Network Rank(Dimension)**

![](https://user-images.githubusercontent.com/10662852/233846466-277dfd71-e640-4cee-b3d0-2f5d29e75a58.jpeg)

表示神经网络的维度，维度越大，模型的表达能力就越强。如果训练 lora，该值不要超过 64；如果训练 loha，该值不要超过 32；如果训练 locon，该值不要超过 12 [**参考**](https://github.com/KohakuBlueleaf/LyCORIS) ，但还是要根据具体的训练目标来定，如果目标比较简单，就完全不需要太高的 Rank。

> 在神经网络中，每一层都由许多个神经元节点构成，它们纵横交错构成了一个 N 维空间。维度越大，代表模型中就越多的神经元节点可以处理各种要素。——当然，这也意味着模型的训练难度就越大，也可能变得更容易过拟合，它可能需要更多的、更准确的数据集，更大的迭代次数。

**l. Network Alpha**

![](https://user-images.githubusercontent.com/10662852/233846431-eedd79e8-6304-4c47-bcdd-dd6aae37555e.jpeg)

对模型过拟合的惩罚权重。它表示对模型在训练时出现完全拟合（即输出结果与样本一致）时的惩罚的权重，适当提高它可以增加模型的泛化能力（当然也不能太高）。目前经验认为设置为 alpha 设置在 1 以下效果更好 [**参考**](https://github.com/KohakuBlueleaf/LyCORIS)。

> 举一个通俗的例子，一个学生在抄学霸的作业，为了不与学霸的结果完全相同，他需要对每个答案做一些小小的改动。对老师而言，一个完全照抄答案的学生约等于一个只会抄不会想的学生，而能稍作修改的学生说明还有对题目思考理解的能力。所以我们要稍微地“惩罚”那些只会照抄的学生，引导学生自己思考。因此这个值不能太低（完全不惩罚照抄），也不能太高（太大的惩罚让学渣完全不能从学霸的答案里获得参考）。

**m. Caption Dropout**

![](https://user-images.githubusercontent.com/10662852/233846408-52e3cbf5-ecb0-4cf6-a2b5-d137a6c52615.jpeg)

Dropout 是在深度学习中一种防止过拟合的技术，在训练中，可能模型会反复计算某些节点，随着训练的进行，这可能导致错误的路径依赖，即模型会变得总是依赖这些节点解决问题，就像某个学生碰巧刷到了几道解题方法相似的题目，就误认为所有的题目都要用这种解题方法。Dropout 的解决方法是随机关闭某些神经元，迫使模型在训练时减少神经元之间的依赖关系，从而让神经网络的泛化能力更强。当然，在实际使用模型的时候，Dropout 是关闭的。

在训练中，我们也可以随机将一些训练集的标记（Caption）剔除。在 Drop out caption every n epochs 中，我们可以指定每隔多少 epoch 就剔除一些标记；在 Rate of caption dropout 中，我们可以指定剔除几成的标记。

**n. Noise Offset**

![](https://user-images.githubusercontent.com/10662852/233846463-3a12bf55-32cf-4098-8380-7ca06f96d256.jpeg)

在原版的 Stable Diffusion 中，模型得出的图片在亮度上总是很平均，亮的场景不够亮，暗的场景不够暗，而且用传统的训练方法也无法让它学会避免这个问题 [**7**](https://www.crosslabs.org//blog/diffusion-with-offset-noise) 。一般输入 0.1。

通过 Noise Offset，我们可以让图像在亮和暗上的表现更加明显（右图）。

![](https://user-images.githubusercontent.com/10662852/233846402-9f74785d-8235-47d0-ad44-f35b612fa098.jpeg)

**o.xformers**

![](https://user-images.githubusercontent.com/10662852/233846438-8a0fe39b-d70d-464f-b6d0-4f96a4a1af9e.jpeg)

Xformers 是一个用于加快图像生成速度并减少显存占用的库。

**p. Gradient checkpointing**

![](https://user-images.githubusercontent.com/10662852/233846417-edd12f3e-6d0a-418f-b2ba-0062d38e3329.jpeg)

梯度检查点（Gradient checkpointing）是一种在训练模型时减少显存占用的方法，但是会增加训练时长。它避免在训练期间一次计算所有权重，而是逐步计算权重，从而减少训练所需的显存量。关闭它不会影响模型的准确性，但打开它后我们可以使用更大的 Batch Size。

> 虽然单次训练的时长可能增加了我们单次训练的时长，但如果我们增大了 Batch Size，总的学习时间实际上可能会更快。

**q. shuffle caption**

![](https://user-images.githubusercontent.com/10662852/233846412-dcba31c8-cf75-4151-9c66-cac5e3b9f326.jpeg)

打开它，可以让训练时训练集的标签被打乱（Shuffle，洗牌）。如输入"铁匠铺，工人，打铁"，可能被转换为”铁匠铺，打铁，工人“或”工人，铁匠铺，打铁“。

这种操作通常用于增强模型对于不同文本顺序的鲁棒性，从而提高模型的泛化能力。打乱操作可以多次进行，从而更大程度地增加数据的随机性。

Shuffle caption 可以在多种相似的图像中使用。如果差异较大，就不要使用了。

> 在每一个 epoch 中，输入的前 4 个 token 会被当做触发词，此外的 token 会被当做排除集。ai 会将排除集中的元素在素材中删除后，把素材的剩余部分学进前 4 个 token 中。因此，如果不开启 keep tokens，在进行打乱后，打标中的每一个 tag 在足够多的 epoch 后，都将成为触发词。

![](https://user-images.githubusercontent.com/10662852/233846462-860aaaa2-9170-4c18-a254-2a7b4bf7d265.jpeg)

**r. Token**

![](https://user-images.githubusercontent.com/10662852/233846423-34d6baff-f691-4960-aa1a-da4d0e3a9240.jpeg)

如果你的 Caption 比较长，那么可以扩充一次输入允许的 Token 量。如果不是必要，保持默认值 75。

**s. Clip Skip**

![](https://user-images.githubusercontent.com/10662852/233846449-d1f02419-bf04-4650-bb43-736809f7f4c5.jpeg)

Clip 是一个转换提示词为 Token 形式的神经网络，是模型理解文字的源头。

它开启与否与底模有关。譬如，一些模型在第一层的神经网络将输入的词转换为 Token 读取，传输给下一层网络，但是通过 Clip Skip，我们可以手动控制跳过 Stable Diffusion 的 Clip 阶段，直接使用模型的 Tokenizer 对某些层级直接传输 Token 进去。**有些时候**调整这个参数可以让结果更好。

默认情况下 SD2.0 使用倒数第二层接收 Token，因此不要在 SD2.0 学习中指定。

## **风格训练**

训练集尽可能包含该画风对不同事物的描绘。

> ● 尽可能对训练集进行正则化。如果数据足够大，可以将数据二分，一部分作为训练集，一部分作为正则化图集。如果数据不够大，可以先用高学习率快速训练出一个临时模型，用它产出接近于该画风的图片，然后将它投入训练集。● 如果是小模型，可以在生成时变更大模以调整生成效果；如果是大模型，可以通过模型融合以调整效果。● 模型效果不好不一定是模型不好，提示词与最终的效果有非常大的关系。

## **人物训练**

训练集尽可能包含人物在不同角度的画面。

> 如果人物图像很少，可以通过一下方式扩充训练集：● 镜像 ● 用高学习率快速训练出一个临时模型，用它产出人物的新图，将新图投入训练集