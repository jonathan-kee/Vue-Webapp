<template>
  <div class="col-full" 
  :class="$style.centered"
  >
    <h1 :class="$style.headingLarge">Not Found</h1>
    <p class="text-large" 
    :class="$style.textLarge"
    >
    Oopsie! looks like the page you are finding does not exist.
      <router-link :to="{name:'Home'}">
        go home instead?
      </router-link>
    </p>
  </div>
</template>

<script>
  export default{}
</script>

<style module>
.headingLarge{
    font-size : 100px;
}
.textLarge{
    font-size: 50px;
    font-weight: 100;
}
.centered{
    text-align: center;
}
</style>