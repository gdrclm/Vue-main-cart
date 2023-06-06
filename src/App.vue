<template>
  <div class="container">
    <header-item />
    <about-item />
    <filter-item />

    <div class="cart-item-wrapper">
      <cart-item
        :product="{
          name: 'Market Guru',
          description:
            'MPStats предоставляет вам отличный инструмент для изучения рынка и выявления нового потенциала для свежих продуктов. Таблицы предоставляют клиентам возможность изучить каждый продукт, категорию и многое другое. Они включают в себя карточку товара, дающую исчерпывающую информацию о показателях продаж.',
        }"
        :imgSrc="require('./img/mp-stats-img.png')"
        :logoSrc="require('./img/mp-stats-logo.svg')"
        price="100"
        src=""
      />

      <cart-item
        :product="{
          name: 'Seller expert',
          description:
            'Эта аналитическая платформа предназначена для помощи компаниям в улучшении продаж на Wildberries. Она предоставляет комплексный пакет функций, которые помогают оптимизировать трафик и максимизировать коэффициент конверсии, тем самым делая операции более эффективными. Клиенты могут выбирать между несколькими планами подписки, включая промо-вариант',
        }"
        :imgSrc="require('./img/seller-img.png')"
        :logoSrc="require('./img/seller-logo.svg')"
        price="150"
      />
      <cart-item
        :product="{
          name: 'Seller expert',
          description:
            'Эта аналитическая платформа предназначена для помощи компаниям в улучшении продаж на Wildberries. Она предоставляет комплексный пакет функций, которые помогают оптимизировать трафик и максимизировать коэффициент конверсии, тем самым делая операции более эффективными. Клиенты могут выбирать между несколькими планами подписки, включая промо-вариант',
        }"
        :imgSrc="require('./img/guru-img.png')"
        :logoSrc="require('./img/guru-logo.svg')"
        price="150"
      />
    </div>
    <div class="cart-item-wrapper">
      <cart-item
        :product="{
          name: 'Seller expert',
          description:
            'Эта аналитическая платформа предназначена для помощи компаниям в улучшении продаж на Wildberries. Она предоставляет комплексный пакет функций, которые помогают оптимизировать трафик и максимизировать коэффициент конверсии, тем самым делая операции более эффективными. Клиенты могут выбирать между несколькими планами подписки, включая промо-вариант',
        }"
        :imgSrc="require('./img/guru-img.png')"
        :logoSrc="require('./img/guru-logo.svg')"
        price="150"
      />
      <cart-item
        :product="{
          name: 'Seller expert',
          description:
            'Эта аналитическая платформа предназначена для помощи компаниям в улучшении продаж на Wildberries. Она предоставляет комплексный пакет функций, которые помогают оптимизировать трафик и максимизировать коэффициент конверсии, тем самым делая операции более эффективными. Клиенты могут выбирать между несколькими планами подписки, включая промо-вариант',
        }"
        :imgSrc="require('./img/seller-img.png')"
        :logoSrc="require('./img/seller-logo.svg')"
        price="150"
      />
      <cart-item
        :product="{
          name: 'Seller expert',
          description:
            'Эта аналитическая платформа предназначена для помощи компаниям в улучшении продаж на Wildberries. Она предоставляет комплексный пакет функций, которые помогают оптимизировать трафик и максимизировать коэффициент конверсии, тем самым делая операции более эффективными. Клиенты могут выбирать между несколькими планами подписки, включая промо-вариант',
        }"
        :imgSrc="require('./img/mp-stats-img.png')"
        :logoSrc="require('./img/guru-logo.svg')"
        price="150"
      />
    </div>
  </div>
  <footer-item />
</template>
<script>
import HeaderItem from "./components/HeaderItem.vue";
import AboutItem from "./components/AboutItem.vue";
import FilterItem from "./components/FilterItem.vue";
import CartItem from "./components/CartItem.vue";
// import CartAltItem from "./components/CartItem.vue";
import FooterItem from "./components/FooterItem.vue";
export default {
  components: {
    AboutItem,
    FilterItem,
    HeaderItem,
    CartItem,
    // CartAltItem,
    FooterItem,
  },
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss">
.container {
  margin: 0 auto;
  max-width: 1216px;
}
.cart-item-wrapper {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Craftwork Grotesk", Arial, sans-serif;
  list-style-type: none;
}
.reviews {
  width: 804px;
}

.guest-stat {
  background: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: start;

  h2 {
    padding-bottom: 20px;
  }
}
.wrapper {
  display: flex;
  flex-direction: row;
}
.right-section {
  padding-left: 20px;
  width: 392px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
}
.attr-item {
  display: flex;
  flex-direction: column;
  align-items: start;
}
progress {
  width: 315px;
  height: 5px;
  border-radius: 2px;

  &::-webkit-progress-bar {
    margin-top: 2px;
    background-color: #dbdbdb;
    border-radius: 7px;
    height: 8px;
  }
  &::-webkit-progress-value {
    background-color: #8ac44b;

    border-radius: 7px;
    height: 12px;
  }
}
.map {
  height: 415px;
}
.map-title {
  padding: 20px;
}
</style>
