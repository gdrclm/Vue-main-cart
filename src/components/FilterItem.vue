<template>
  <div class="filter-container">
    <div class="filter-wrapper">
      <filter-field-item
        class="filter-item"
        textProp="Маркетплейсы"
        value="Marketplaces"
      />
      <filter-field-item
        class="filter-item"
        textProp="Рейтинг"
        value="rating"
      />
      <filter-field-item
        class="filter-item"
        textProp="Стоимость"
        value="coast"
      />
      <filter-field-item
        class="filter-item"
        textProp="Запросов"
        value="requests"
      />
      <filter-field-item
        class="filter-item"
        textProp="Комментариев"
        value="comments"
      />
      <div class="search">
        <img src="../img/icon-search.svg" alt="icon-search" />
      </div>
    </div>
    <div class="total-find">
      <button class="btn-sort">Сортировать</button>
      <span>Найдено 35 предложений</span>
    </div>
  </div>
</template>

<script>
import FilterFieldItem from "./FilterFieldItem.vue";
export default {
  components: {
    FilterFieldItem,
  },
  name: "filter-item",
};
</script>

<style lang="scss" scoped>
.filter-wrapper {
  display: flex;
  flex-direction: row;
  background-color: #f5f8fe;
  border-radius: 15px;
  align-items: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
}
.filter-item {
  background-color: #f5f8fe;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
}

.btn-sort {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 18px 30px;
  background: #f5f8fe;
  border-radius: 15px;
  border: none;
  font-weight: 500;
  font-size: 16px;
}
.search {
  width: 80px;
  height: 60px;
  background: rgb(51, 51, 51);
  border-radius: 0px 15px 15px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.total-find {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
}
.filter-container {
  margin-bottom: 20px;
}
</style>
