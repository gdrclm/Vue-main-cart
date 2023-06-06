<template>
  <footer class="footer-container">
    <div class="footer-wrapper">
      <div class="email-form">
        <h2>Агрегатор</h2>
        <h3>Подписаться на акции сервисов</h3>
        <form action="/action_page.php">
          <label for="email">
            <div class="email-wrapper">
              <input
                class="email-input"
                placeholder="Электронная почта"
                type="email"
                name="email"
              />
              <div class="submit-wrapper">
                <input class="btn-wrapper" type="submit" value="" />
              </div>
            </div>
          </label>
        </form>
      </div>
      <div class="contact-to">
        <a class="telephone" href="tel:+77079509026">+7 707 950 90 26</a>
        <a
          class="whatsApp-link"
          href="https://api.whatsapp.com/send?phone=910000000000&text=Hello this is the starting message"
          >Написать в WhatsApp</a
        >
        <div class="text-block">
          <span>Политика конфиденциальности</span>
          <span>Пользовательское соглашение</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer-item",
};
</script>

<style lang="scss" scoped>
.footer-container {
  background: #333333;
}
.footer-wrapper {
  max-width: 1216px;
  width: 100%;
  display: flex;
  padding: 40px 0;
  margin: 0 auto;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
}
h2 {
  padding: 40px 50px auto;
  color: #fff;
  margin-bottom: 30px;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
}
h3 {
  color: #ffffff;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 15px;
}
.btn-wrapper {
  background: url("../img/icon-send.svg") no-repeat center center;
  width: 100%;
  background-color: #838383;
  border-radius: 0px 15px 15px 0px;
  padding: 3px 30px 30px 24px;
  outline: none;
  border: none;
  &:focus {
    outline: none;
  }
}
.btn-wrapper input {
  border: none;
}
.submit-wrapper {
  width: 50px;
}
.email-wrapper {
  display: flex;
  width: 289px;
  border: 1px solid #838383;
  border-radius: 15px;
  height: 50px;
}
.email-input {
  border: none;
  width: 100%;

  border-radius: 10px;
  background: unset;
  padding-left: 17px;
  color: #fff;
}
.email-input:focus {
  border-color: green;
  border: none;
}
.email-input:focus-visible {
  outline: none;
  border: none;
}
.whatsApp-link {
  background: #8ac44b;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 54px;
  width: 286px;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
}
.telephone {
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 15px;
  color: #ffffff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}
.contact-to {
  display: flex;

  flex-direction: column;
  align-items: flex-end;
  a {
    margin-bottom: 30px;
  }
}
.text-block {
  display: flex;
  gap: 50px;
  span {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;

    color: #838383;
  }
}
@media (max-width: 1281px) {
  .footer-wrapper {
    flex-direction: row;
    padding-left: 20px;
    padding-right: 20px;
  }
}
@media (max-width: 700px) {
  .footer-wrapper {
    flex-direction: column;
  }
  .email-wrapper {
    margin-bottom: 15px;
  }
  .text-block {
    span {
      text-align: center;
    }
  }
  h2 {
    text-align: center;
  }
  .contact-to {
    align-items: center;
  }
}
</style>
