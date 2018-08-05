<template>
  <div class="container">
      <div class="app row align-items-center justify-content-center">
        <div class="app__image col-md-8">
          <img src="../assets/bg.jpg" class="img img-responsive" :style="filters" />
        </div>
        <div class="app__filters col-md-12 mt-5">
          <div class="row filters__fiter">
            <div class="col-md-4">
              <strong>Grayscale ({{grayscale}})</strong>
            </div>
            <div class="col-md-8">
              <input type="range" v-model="grayscale" max="1" min="0" step="0.01" />
            </div>
          </div>
          <div class="row filters__fiter">
            <div class="col-md-4">
              <strong>Sepia ({{sepia}})</strong>
            </div>
            <div class="col-md-8">
              <input type="range" v-model="sepia" max="1" min="0" step="0.01" />
            </div>
          </div>
          <div class="row filters__fiter">
            <div class="col-md-4">
              <strong>Saturate ({{saturate}})</strong>
            </div>
            <div class="col-md-8">
              <input type="range" v-model="saturate" max="1" min="0" step="0.01" />
            </div>
          </div>
          <div class="row filters__fiter">
            <div class="col-md-4">
              <strong>Hue Rotate ({{hueRotate}} deg)</strong>
            </div>
            <div class="col-md-8">
              <input type="range" v-model="hueRotate" max="360" min="0" step="1" />
            </div>
          </div>
          <div class="row filters__fiter">
            <div class="col-md-4">
              <strong>Invert ({{invert}})</strong>
            </div>
            <div class="col-md-8">
              <input type="range" v-model="invert" max="1" min="0" step="0.01" />
            </div>
          </div>
          <div class="row filters__fiter">
            <div class="col-md-4">
              <strong>Brightness ({{brightness}})</strong>
            </div>
            <div class="col-md-8">
              <input type="range" v-model="brightness" max="3" min="0" step="0.01" />
            </div>
          </div>
          <div class="row filters__fiter">
            <div class="col-md-4">
              <strong>Contrast ({{contrast}})</strong>
            </div>
            <div class="col-md-8">
              <input type="range" v-model="contrast" max="1" min="0" step="0.01" />
            </div>
          </div>
          <div class="row filters__fiter">
            <div class="col-md-4">
              <strong>Blur ({{blur}}px)</strong>
            </div>
            <div class="col-md-8">
              <input type="range" v-model="blur" max="50" min="0" step="0.1" />
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
      grayscale: 0,
      sepia: 0,
      saturate: 1,
      hueRotate: 0,
      invert: 0,
      brightness: 1,
      contrast: 1,
      blur: 0,
      suffix: {
        hueRotate: 'deg',
        blur: 'px'
      }
    };
  },
  computed: {
    filters() {
      const toDash = (str) => str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
      return {
        filter: Object.entries(this._data)
          .filter(item => typeof (item[1]) !== 'object')
          .map(item => `${toDash(item[0])}(${item[1]}${this.suffix[item[0]] || ''})`).join(' ')
      }
    }
  }
};
</script>

<style>

</style>
