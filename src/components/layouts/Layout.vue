<template>
  <div class="vn-layout">
    <div class="vn-layout header" v-if="hasSlot('header')">
      <slot name="header"></slot>
    </div>
    <template v-else/>
    <div class="vn-layout main">
      <div class="vn-layout west" v-if="hasSlot('west')">
        <slot name="west"></slot>
      </div>
      <template v-else/>
      <div class="vn-layout middle">
        <slot></slot>
      </div>
      <div class="vn-layout east" v-if="hasSlot('east')">
        <slot name="east"></slot>
      </div>
      <template v-else/>
    </div>
    <footer class="vn-layout footer" v-if="hasSlot('footer')">
      <slot name="footer"></slot>
    </footer>
    <template v-else/>
  </div>
</template>

<script>
export default {
  methods: {
    hasSlot (name = 'default') {
      return !!this.$slots[name] || !!this.$scopedSlots[name]
    }
  }
}
</script>

<style lang="scss" scoped>
  .vn-layout {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  .vn-layout.header,
  .vn-layout.west,
  .vn-layout.east,
  .vn-layout.footer {
    flex: 0;
  }

  .vn-layout.main {
    display: flex;
    flex-direction: row;
    flex: 1;
  }

  .vn-layout.middle {
    flex: 1;
  }
</style>
