<template>
  <div class="aselect" :data-value="value" :data-list="list">
    <div class="selector" @click="toggle()">
      <div class="label">
        <span>{{ textProp }}</span>
      </div>

      <img
        src="../img/dropdown-arrow.svg"
        alt=""
        class="arrow"
        :class="{ expanded: visible }"
      />

      <div :class="{ hidden: !visible, visible }">
        <ul style="z-index: 1000">
          <li
            :class="{ current: item === value }"
            v-for="item in list"
            @click="select(item)"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    textProp: String,
  },
  name: "ASelect",
  data() {
    return {
      list: ["Orange", "Apple", "Kiwi", "Lemon", "Pineapple"],
      visible: false,
    };
  },
  methods: {
    toggle() {
      this.visible = !this.visible;
    },
    select(option) {
      this.value = option;
    },
  },
};
</script>

<style lang="scss" scoped>
.aselect .selector {
  position: relative;
  display: flex;
  align-items: center;
}
.last-item .selector {
  border: none;
}
.label,
.arrow {
  cursor: pointer;
}
.aselect .arrow {
  width: 20px;
  height: 20px;
  transform: rotateZ(0deg) translateY(0px);
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.59, 1.39, 0.37, 1.01);
}
.aselect .expanded {
  transform: rotateZ(180deg) translateY(2px);
}
.aselect .label {
  display: block;

  font-size: 16px;
  margin-right: 12.2px;
  color: #888;
  span {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;

    color: #333333;
  }
}
.aselect ul {
  width: 100%;
  list-style-type: none;
  padding: 0;
  margin: 0;
  font-size: 16px;
  border: 1px solid gainsboro;
  position: absolute;
  z-index: 1;
  background: #fff;
  top: 60px;
  left: 40px;
}
.aselect li {
  padding: 12px;
  color: #666;
}
.aselect li:hover {
  color: white;
  background: #3b80eb;
}
.aselect .current {
  background: #eaeaea;
}
.aselect .hidden {
  visibility: hidden;
}
.aselect .visible {
  visibility: visible;
}
@media (max-width: 870px) {
  .aselect .selector {
    border: none;
    border-right: none;
  }
}
@media (max-width: 800px) {
  .aselect .selector {
    /* padding: 0 2vw; */
  }
}
@media (max-width: 1280px) {
  .aselect .selector {
    /* padding: 0 4.6vw; */
  }
}
</style>
