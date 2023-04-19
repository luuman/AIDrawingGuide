
<output data-lang="output">
  <table>
  <thead>
    <tr>
      <template v-for="item in groupSize":key="item">
        <th>$type$</th><th>Description</th>
      </template>
    </tr>
  </thead>
  <tbody v-if="images.$type$">
    <tr v-for="(group, index) in groups(images.$type$)" :key="index">
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
