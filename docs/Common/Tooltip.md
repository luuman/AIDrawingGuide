
<output data-lang="output">
  <div id="tooltip" v-show="tooltipVisible" :style="{ top: tooltipTop + 'px', left: tooltipLeft + 'px' }">
    <img v-if="tooltipImgSrc" :src="tooltipImgSrc" @load="hideLoading" :class="{ 'hidden': loadingVisible }" />
    <div v-if="loadingVisible" class="loadingTip">Loading...</div>
  </div>
</output>