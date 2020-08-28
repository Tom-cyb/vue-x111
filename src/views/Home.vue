<template>
  <div class="Home">
    <yx types="primary">常用</yx>
    <yx>默认</yx>
    <yx types="danger" size="small">删除</yx>
    <yx types="success" size="mini">成功</yx>
  </div>
</template>

<script>
import yx from "../linet/btn.vue";
export default {
  name: "Home",
  components: { yx },
};
</script>
