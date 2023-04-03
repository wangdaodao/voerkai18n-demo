<template>
  <div id="app">
    <div>
      <select name="lang" id="lang" @change="languages" v-model="value">
        <option value="zh">zh</option>
        <option value="tw">tw</option>
        <option value="en">en</option>
      </select>
    </div>
    <div id="nav">
      <router-link to="/">{{ t('首页') }}</router-link>
      |
      <router-link to="/about">{{ t('关于') }}</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    //这里存放数据
    return {
      value: 'zh',
    };
  },
  methods: {
    languages(val) {
      localStorage.setItem('lang', val);
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
