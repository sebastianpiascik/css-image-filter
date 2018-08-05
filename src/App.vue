<template>
  <div id="app">
    <Main/>
  </div>
</template>

<script>
import Main from './components/Main';

export default {
  components: {
    Main,
  },
};
</script>

<style>

input[type="range"] { 
    margin: auto;
    -webkit-appearance: none;
    position: relative;
    overflow: hidden;
    width: 100%;
    cursor: pointer;
    border-radius: 0;
    background-color: transparent;
    border-radius: 10px;
}
input[type=range]:focus {
  box-shadow: none;
  outline: none;
}
input[type="range"]::-webkit-slider-runnable-track {
    background: rgba(0,0,0,0.25);
    height: 10px;
}
input[type="range"]::-moz-range-track {
    background: rgba(0,0,0,0.25);
    height: 10px;
}
input[type="range"]::-ms-track { 
    background: rgba(0,0,0,0.25);
    height: 10px;
}
input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 0px;
    height: 20px;
    background: rgba(255,255,255,0.9);
    box-shadow: -100vw 0px 0 100vw rgba(255,255,255,0.9);
    border: none;
}
input[type="range"]::-moz-range-thumb {
    width: 0px;
    height: 20px;
    background: rgba(255,255,255,0.9);
    box-shadow: -100vw 0px 0 100vw rgba(255,255,255,0.9);
    border: none;
    box-sizing: border-box;
}
input[type="range"]::-ms-thumb { 
    width: 0px;
    height: 20px;
    background: rgba(255,255,255,0.9);
    box-shadow: -100vw 0px 0 100vw rgba(255,255,255,0.9);
    border: none;
    box-sizing: border-box;
}
input[type="range"]::-ms-fill-lower { 
    background: rgba(255,255,255,0.9);
}
input[type="range"]::-ms-ticks-after { 
    display: none; 
}
input[type="range"]::-ms-ticks-before { 
    display: none; 
}
input[type="range"]::-ms-tooltip { 
    display: none;
}

@import url('https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700,800,900&subset=latin-ext');
*{
  font-family: 'Raleway', sans-serif;
}
body{
    background-color:rgb(109, 148, 167);
}

img {
  width: 100%;
}

strong, p{
  font-size: 14px;
  color:#eee;
  font-weight: 500;
  text-transform: capitalize
}

.app {
  margin: 50px 0;
}

.app > div{
}

.app__image{
}

.app__filters{
}

.filters__fiter{
  margin-bottom: 8px;
}

</style>
