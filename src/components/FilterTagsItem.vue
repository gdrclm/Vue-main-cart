<template>
  <div class="tags-container">
    <h3 class="title">Тэги</h3>
    <div class="wrapper-list" style="padding: 20px 50px">
      <label>
        <input class="filter-tag" name="filter-tag" type="checkbox" />
        <span>Все</span>
      </label>
      <label>
        <input type="checkbox" />
        <span>Расположение</span>
      </label>
      <label>
        <input type="checkbox" />
        <span>Питание</span>
      </label>
      <label>
        <input type="checkbox" />
        <span>Интернет</span>
      </label>
      <label>
        <input type="checkbox" />
        <span>Пляж</span>
      </label>
      <label>
        <input type="checkbox" />
        <span>Бассейн</span>
      </label>
      <label>
        <input type="checkbox" />
        <span>Дети</span>
      </label>
      <label>
        <input type="checkbox" />
        <span>Завтрак</span>
      </label>
      <label>
        <input type="checkbox" />
        <span>Обед</span>
      </label>
      <label>
        <input type="checkbox" />
        <span>Ужин</span>
      </label>
      <label>
        <input type="checkbox" />
        <span>Удачное расположение</span>
      </label>
      <label>
        <input type="checkbox" />
        <span>Близко у моря</span>
      </label>
      <label>
        <input type="checkbox" />
        <span>Хороший персонал</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    textProp: String,
  },
  name: "filter-tags-item",
};
</script>

<style lang="scss" scoped>
.wrapper-list {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  padding-bottom: 20px;
}
input {
  display: none;
}
.title {
  padding: 20px;
}
span {
  padding: 10px 20px;
  background: #f5f6fe;
  border-radius: 3px;
  display: flex;

  flex-direction: row;
  align-items: flex-start;
}
</style>
