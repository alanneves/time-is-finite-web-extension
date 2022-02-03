<template>
  <div class="popup">
    <button @click="changeName()">Clique aqui!</button>
    {{name}}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  data() {
    return {
      name: 'Alan',
    };
  },
  methods: {
    changeName() {
      this.name = 'Reno';
    },
  },
});
</script>

<style scoped lang="scss">
.popup {
  width: 295px;
  height: 320px;
}
</style>
