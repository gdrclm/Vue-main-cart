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
        class="filter-item last-item"
        textProp="Комментариев"
        value="comments"
      />
    </div>
    <div class="search">
      <img src="../img/icon-search.svg" alt="icon-search" />
    </div>
  </div>
  <div class="total-find">
    <button class="btn-sort">Сортировать</button>
    <span>Найдено 35 предложений</span>
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
  align-items: center;
  padding: 20px 0;
  flex: 1;
  justify-content: space-evenly;
}
.filter-item {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 18.4vw;
  position: relative;

  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-left: 20px;
  }

  &:not(:last-of-type)::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 1px;
    top: 0;
    right: -30%;
    background: #e2e5eb;

    @media (max-width: 76px) {
      display: none;
    }
  }
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
  min-width: 80px;
}
.total-find {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 20px;
  text-align: center;
}
.filter-container {
  margin-bottom: 40px;
  background-color: #f5f8fe;
  border-radius: 15px;
  display: flex;
}
@media (max-width: 1280px) {
  /* .filter-container {
    padding-left: 20px;
  } */
  /* .total-find {
    padding-right: 20px;
  } */
}
@media (max-width: 770px) {
  .filter-wrapper {
    flex-direction: column;
    gap: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    align-items: flex-start;
  }

  .search {
    border-radius: 15px;
  }
}
</style>
