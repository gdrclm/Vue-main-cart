<template>
  <header class="header-container">
    <span class="title">Агрегатор</span>
  </header>
</template>

<script>
export default {
  name: "header-item",
};
</script>

<style lang="scss" scoped>
.header-container {
  max-width: 100%;
  height: 90px;
  margin-bottom: 50px;
  background: #f5f8fe;
  border-radius: 0px 0px 15px 15px;
  display: flex;
  align-items: center;
  top: -20%;
  left: 0%;
  overflow: hidden;
  z-index: 0;

  span {
    font-size: 24px;
    font-weight: 600;
    padding-left: 40px;
  }
}
</style>
