<template>
  <div class="about-container">
    <div class="img-wrapper">
      <h1>
        Агрегатор сервисов <br />
        аналитики маркетплейсов
      </h1>
      <img src="../img/wave-1.png" alt="image Sochy Park" />
      <div class="about-status">Обновлено: 06.05.2023</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about-item",
};
</script>

<style lang="scss" scoped>
.about-container {
  display: flex;
  gap: 20px;
  margin-bottom: 80px;
}
.title-name {
  font-weight: 700;
  font-size: 36px;
  line-height: 43px;
}
.img-wrapper {
  position: relative;
  width: 100%;

  h1 {
    color: #fff;
    padding-top: 50px;
    font-weight: 600;
    font-size: 36px;
    line-height: 43px;
    text-align: center;
    padding-bottom: 30px;
    z-index: 1000;
  }
  img {
    width: fit-content;
    position: absolute;
    top: 0%;
    left: 0%;
    z-index: 0;
    overflow: hidden;
    z-index: -1;
    background-color: #3b80eb;
    border-radius: 15px;
  }
}
.about-status {
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  width: 302px;
  height: 49px;
  background: #333333;
  border-radius: 10px;
  margin: 0 auto;
  margin-bottom: 50px;
  z-index: 1001;
}
</style>
