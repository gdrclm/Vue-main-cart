<template>
  <div class="star-rate-container">
    <div class="star-rate-wrapper" v-for="n in 5" :key="n">
      <img class="star-rate-img" src="../img/star-rate.svg" alt="star rate" />
    </div>
  </div>
</template>

<script>
export default {
  name: "rate-item",
};
</script>

<style lang="scss" scoped>
.star-rate-container {
  display: flex;
  gap: 5px;
}
.star-rate-wrapper {
  border-radius: 3px;
  background-color: #dbdbdb;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.star-rate-img {
  padding: 7.1px;
}
</style>
