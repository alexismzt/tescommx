<template>
  <div id="ribbon">
    <span class="msg">{{message}}</span>
    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
  </div>
</template>
<script>
export default {
  name: "",
  props: ['message'],
  data: () => ({

  })
}
</script>
<style lang="css" scoped>
#ribbon{
  position: absolute;
  width: 100%;
  height: 25%;
  display: inline-block;
  left: 0px;
  right: 0px;
  margin-left: 0px;
  margin-top: 0px;
  background-color: royalblue;
  margin-top: 1.5rem;
}
.msg{
  font-size: 1.8rem;
}
</style>
