<template>
  <div class="cart-container">
    <img width="392" :src="imgSrc" alt="img product" class="product-image" />
    <div class="cart-description">
      <div class="cart-title">
        <img :src="logoSrc" alt="logoSrc" />

        <div class="list-services"></div>
        <hr />
        <div class="rate-and-massages">
          <div rating>
            <img src="" alt="rating" />
            <h2>4.5</h2>
          </div>
          <div>
            <img src="" alt="messages" />
            <h2>3</h2>
          </div>
        </div>
        <hr />
        <p>{{ product.description }}</p>
      </div>
      <div class="product-total">
        <h2>от {{ price }} ₽/мес.</h2>
        <div class="btns">
          <button>Сайт</button>
          <button>Обзор</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { src: "../img/services/KazanExpress.svg", alt: "KazanExpress" },
        { src: "../img/services/Lamoda.svg", alt: "Lamoda" },
        { src: "../img/services/OZON.svg", alt: "OZON" },
        { src: "../img/services/OZON.svg", alt: "OZON" },
        { src: "../img/services/OZON.svg", alt: "OZON" },
      ],
    };
  },
  name: "cart-alter-item",
  props: {
    product: {
      type: Object,
      required: true,
    },
    imgSrc: {
      type: String,
      required: true,
    },
    logoSrc: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-container {
  width: 392px;
}
.cart-title {
  display: flex;
  justify-content: center;
}
</style>
