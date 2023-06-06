<template>
  <div class="cart-container">
    <img :src="imgSrc" alt="img product" class="product-image" />

    <div class="cart-title">
      <img class="cart-logo" :src="logoSrc" alt="logoSrc" />
    </div>
    <div class="list-services">
      <img src="../img/services/KazanExpress.svg" alt="KazanExpress" />
      <img src="../img/services/Lamoda.svg" alt="Lamoda" />
      <img src="../img/services/OZON.svg" alt="OZON" />
      <img src="../img/services/Sberbank.svg" alt="Sberbank" />
      <img src="../img/services/WildBerries.svg" alt="WildBerries" />
    </div>

    <div class="rate-and-massages">
      <div class="rating">
        <img src="../img/icon-star.svg" alt="rating" />
        <h2>4.5</h2>
      </div>
      <div class="messages">
        <img src="../img/icon-message.svg" alt="messages" />
        <h2>3</h2>
      </div>
    </div>
    <div class="cart-requests">
      <span>Запросов: от 200 до 13400</span>
    </div>
    <div class="cart-description">
      <div class="description-wrapper">
        <span class="product-description">{{ product.description }}</span>
      </div>
      <div class="product-total">
        <h2>от {{ price }} ₽/мес.</h2>
        <div class="btns">
          <button class="btn"><span>Сайт</span></button>
          <button class="btn"><span>Обзор</span></button>
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
      ],
    };
  },
  name: "cart-item",
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
.cart-logo {
  margin: 10px auto;
}

.list-services {
  display: flex;
  gap: 20px;
  flex-direction: row;
  margin-bottom: 20px;
  justify-content: center;
}
.cart-requests {
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #e2e5eb;
  margin-left: 20px;
  margin-right: 20px;
}
.rating {
  display: flex;
  flex-direction: row;
}
.messages {
  display: flex;
  flex-direction: row;
}
.rate-and-massages {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 15px;
  padding-bottom: 15px;
  border-top: 1px solid #e2e5eb;
  border-bottom: 1px solid #e2e5eb;
  margin: auto 20px;
  margin-bottom: 20px;
}

.cart-container {
  background: #f5f8fe;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
}

.product-image {
  width: 100%;
}
.cart-description {
  padding: 0 20px;
}
.description-wrapper {
  height: 206px;
  border-bottom: 1px solid #e2e5eb;
}
.product-description {
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  border-bottom: 1px solid #e2e5eb;
}
.product-total {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    margin: 20px auto;
  }
  .btns {
    width: 100%;
    height: 50px;
    gap: 10px;
    display: flex;
    margin-bottom: 20px;
  }
  .btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 1px solid #333333;
    border-radius: 10px;
    flex: 1;
  }
  .btn:hover {
    border: none;
    background: #3b80eb;
    span {
      color: #fff;
    }
  }
}
@media (max-width: 415px) {
  .product-image {
    width: 100%;
    height: -webkit-fill-available;
  }
}
</style>
