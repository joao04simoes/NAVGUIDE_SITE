<template>
  <div class="compass-container">
    <div class="compass" :style="{ transform: `rotate(${adjustedHeading * -1}deg)` }">
      <div class="needle"></div>
    </div>
    <p>Direção: {{ adjustedHeading.toFixed(2) }}°</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heading: 0,
      adjustedHeading: 0,
    };
  },
  mounted() {
    if (window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", this.updateHeading, true);
    } else {
      alert("O seu dispositivo não suporta a API de orientação.");
    }
  },
  beforeUnmount() {
    window.removeEventListener("deviceorientation", this.updateHeading);
  },
  methods: {
    updateHeading(event) {
      if (event.alpha !== null) {
        let compassHeading = event.alpha;

        // Ajustar a direção dependendo da rotação do ecrã
        let screenOrientation = screen.orientation?.angle || window.orientation || 0;
        this.adjustedHeading = (compassHeading + screenOrientation) % 360;
      }
    },
  },
};
</script>

<style>
.compass-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}

.compass {
  width: 200px;
  height: 200px;
  border: 5px solid black;
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.needle {
  width: 4px;
  height: 100px;
  background: red;
  position: absolute;
  top: 10px;
}
</style>
