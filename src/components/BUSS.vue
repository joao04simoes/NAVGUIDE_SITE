<template>
  <div class="compass-container">
    <div class="compass">
      <div class="outer-ring" :style="{ transform: `rotate(${adjustedHeading}deg)` }">
        <span v-for="num in numbers" :key="num" :style="getNumberStyle(num)">{{ num }}</span>
      </div>
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
      numbers: [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330],
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
        let screenOrientation = screen.orientation?.angle || window.orientation || 0;
        this.adjustedHeading = (compassHeading + screenOrientation) % 360;
      }
    },
    getNumberStyle(num) {
      const angle = num * (Math.PI / 180);
      const radius = 90;
      return {
        position: 'absolute',
        transform: `translate(${radius * Math.sin(angle)}px, ${-radius * Math.cos(angle)}px)`,
      };
    }
  }
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
  overflow: hidden;
}

.outer-ring {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
}

.outer-ring span {
  position: absolute;
}

.needle {
  width: 4px;
  height: 100px;
  background: red;
  position: absolute;
  top: 10px;
}
</style>
