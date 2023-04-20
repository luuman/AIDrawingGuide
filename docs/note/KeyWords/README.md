# 关键词绘画指令集合
# 风格

[common](./Common/Table.md?type=Style ':include :type=text')

# 精度

[common](./Common/Table.md?type=Accuracy ':include :type=text')

# 视角

[common](./Common/Table.md?type=AngleOfView ':include :type=text')

# 渲染

[common](./Common/Table.md?type=Rendering ':include :type=text')

# 照明

[common](./Common/Table.md?type=Illumination ':include :type=text')

# 场景

[common](./Common/Table.md?type=Scene ':include :type=text')

# 媒介

[common](./Common/Table.md?type=Medium ':include :type=text')

# 光线

[common](./Common/Table.md?type=Light ':include :type=text')

# 摄影视角

[common](./Common/Table.md?type=ShootingAngle ':include :type=text')
<!-- 
# 关键词



<output data-lang="output">
  <table>
  <thead>
    <tr>
      <template v-for="item in groupSize":key="item">
        <th>Style</th><th>Description</th>
      </template>
    </tr>
  </thead>
  <tbody v-if="images.Style">
    <tr v-for="(group, index) in groups(images.Style)" :key="index">
      <template v-for="item in group":key="item.title">
        <td>
          <i @click="copyText" :title="item.title">{{ item.title }}</i>
        </td>
        <td>
          <template v-if="item.image">
            <a class="tt-image"  @mouseover="showTooltipDebounced" @mouseout="hideTooltip" :href="`${item.image}?width=400&height=400`" target="_blank">{{ item.content }}</a>
          </template>
          <template v-else>
            {{ item.content }}
          </template>
        </td>
      </template>
    </tr>
    </tbody>
  </table>
</output>

## 风格

<output data-lang="output">
  <table>
  <thead>
    <tr>
      <template v-for="item in groupSize":key="item">
        <th>Style</th><th>Description</th>
      </template>
    </tr>
  </thead>
  <tbody v-if="images.Accuracy">
    <tr v-for="(group, index) in groups(images.Accuracy)" :key="index">
      <template v-for="item in group":key="item.title">
        <td>
          <i @click="copyText" :title="item.title">{{ item.title }}</i>
        </td>
        <td>
          <template v-if="item.image">
            <a class="tt-image"  @mouseover="showTooltipDebounced" @mouseout="hideTooltip" :href="`${item.image}?width=400&height=400`" target="_blank">{{ item.content }}</a>
          </template>
          <template v-else>
            {{ item.content }}
          </template>
        </td>
      </template>
    </tr>
    </tbody>
  </table>
</output>

## 精度

<output data-lang="output">
  <table>
  <thead>
    <tr>
      <template v-for="item in groupSize":key="item">
        <th>Style</th><th>Description</th>
      </template>
    </tr>
  </thead>
  <tbody v-if="images.AngleOfView">
    <tr v-for="(group, index) in groups(images.AngleOfView)" :key="index">
      <template v-for="item in group":key="item.title">
        <td>
          <i @click="copyText" :title="item.title">{{ item.title }}</i>
        </td>
        <td>
          <template v-if="item.image">
            <a class="tt-image"  @mouseover="showTooltipDebounced" @mouseout="hideTooltip" :href="`${item.image}?width=400&height=400`" target="_blank">{{ item.content }}</a>
          </template>
          <template v-else>
            {{ item.content }}
          </template>
        </td>
      </template>
    </tr>
    </tbody>
  </table>
</output>

## 视角

<output data-lang="output">
  <table>
  <thead>
    <tr>
      <template v-for="item in groupSize":key="item">
        <th>Style</th><th>Description</th>
      </template>
    </tr>
  </thead>
  <tbody v-if="images.Rendering">
    <tr v-for="(group, index) in groups(images.Rendering)" :key="index">
      <template v-for="item in group":key="item.title">
        <td>
          <i @click="copyText" :title="item.title">{{ item.title }}</i>
        </td>
        <td>
          <template v-if="item.image">
            <a class="tt-image"  @mouseover="showTooltipDebounced" @mouseout="hideTooltip" :href="`${item.image}?width=400&height=400`" target="_blank">{{ item.content }}</a>
          </template>
          <template v-else>
            {{ item.content }}
          </template>
        </td>
      </template>
    </tr>
    </tbody>
  </table>
</output>

## 渲染

<output data-lang="output">
  <table>
  <thead>
    <tr>
      <template v-for="item in groupSize":key="item">
        <th>Style</th><th>Description</th>
      </template>
    </tr>
  </thead>
  <tbody v-if="images.Illumination">
    <tr v-for="(group, index) in groups(images.Illumination)" :key="index">
      <template v-for="item in group":key="item.title">
        <td>
          <i @click="copyText" :title="item.title">{{ item.title }}</i>
        </td>
        <td>
          <template v-if="item.image">
            <a class="tt-image"  @mouseover="showTooltipDebounced" @mouseout="hideTooltip" :href="`${item.image}?width=400&height=400`" target="_blank">{{ item.content }}</a>
          </template>
          <template v-else>
            {{ item.content }}
          </template>
        </td>
      </template>
    </tr>
    </tbody>
  </table>
</output>

## 场景

<output data-lang="output">
  <table>
  <thead>
    <tr>
      <template v-for="item in groupSize":key="item">
        <th>Style</th><th>Description</th>
      </template>
    </tr>
  </thead>
  <tbody v-if="images.Scene">
    <tr v-for="(group, index) in groups(images.Scene)" :key="index">
      <template v-for="item in group":key="item.title">
        <td>
          <i @click="copyText" :title="item.title">{{ item.title }}</i>
        </td>
        <td>
          <template v-if="item.image">
            <a class="tt-image"  @mouseover="showTooltipDebounced" @mouseout="hideTooltip" :href="`${item.image}?width=400&height=400`" target="_blank">{{ item.content }}</a>
          </template>
          <template v-else>
            {{ item.content }}
          </template>
        </td>
      </template>
    </tr>
    </tbody>
  </table>
</output>

## 媒介

<output data-lang="output">
  <table>
  <thead>
    <tr>
      <template v-for="item in groupSize":key="item">
        <th>Style</th><th>Description</th>
      </template>
    </tr>
  </thead>
  <tbody v-if="images.Medium">
    <tr v-for="(group, index) in groups(images.Medium)" :key="index">
      <template v-for="item in group":key="item.title">
        <td>
          <i @click="copyText" :title="item.title">{{ item.title }}</i>
        </td>
        <td>
          <template v-if="item.image">
            <a class="tt-image"  @mouseover="showTooltipDebounced" @mouseout="hideTooltip" :href="`${item.image}?width=400&height=400`" target="_blank">{{ item.content }}</a>
          </template>
          <template v-else>
            {{ item.content }}
          </template>
        </td>
      </template>
    </tr>
    </tbody>
  </table>
</output>


<output data-lang="output">
  <div id="tooltip" v-show="tooltipVisible" :style="{ top: tooltipTop + 'px', left: tooltipLeft + 'px' }">
    <img v-if="tooltipImgSrc" :src="tooltipImgSrc" @load="hideLoading" :class="{ 'hidden': loadingVisible }" />
    <div v-if="loadingVisible" class="loading">Loading...</div>
  </div>
</output>
<div id="tooltip"></div> -->

[common](./Common/Tooltip.md?type=Style ':include :type=text')
