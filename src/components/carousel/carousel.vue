<template lang="html">
  <div>
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="1024"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >

      <!-- Text slides with image -->
      <b-carousel-slide v-for="elem in carrouselItems" :key="elem.key" :caption="elem.caption"
                        :text="elem.text"
                        :img-src="elem.img"
      ></b-carousel-slide>
    </b-carousel>

  </div>
</template>

<script>
import JsonStatic from "@/assets/detalleservicios.json"
export default {
  name : "carrouselBar",
  data () {
    return {
      slide: 0,
      sliding: null,
      carrouselItems : []
    }
  },
  created() {
    //do something after creating vue instance
    this.carrouselItems = JsonStatic.carrousel;
  },
  methods: {
    onSlideStart () {
      this.sliding = true
    },
    onSlideEnd () {
      this.sliding = false
    }
  }
}
</script>

<style lang="css" scoped>
</style>
