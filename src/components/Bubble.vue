<script>
export default {
  mounted() {
    this.timer = setInterval(() => {
      this.bubleCreate();
    }, 200);
    this.bubleCreate();
  },
  destoryed() {
    clearInterval(this.timer);
    this.timer = null;
  },
  methods: {
    bubleCreate() {
      const body = document.getElementById('app');
      const buble = document.createElement('span');
      // eslint-disable-next-line no-mixed-operators
      const r = Math.random() * 5 + 25; // 25~30
      buble.style.width = `${r}px`;
      buble.style.height = `${r}px`;
      buble.style.left = `${Math.random() * innerWidth}px`;
      body.append(buble);
      setTimeout(() => {
        buble.remove();
      }, 4000);
    },
  },
};
</script>

<style>
body {
  position: relative;
  overflow-x: hidden;
  height: 100vh;
}

span {
  position: absolute;
  bottom: 0;
  background: radial-gradient(
    circle at 72% 28%,
    #fff 3px,
    #ff7edf 8%,
    #5b5b5b,
    #aad7f9 100%
  );
  box-shadow: inset 0 0 6px #fff, inset 3px 0 6px #eaf5fc,
    inset 2px -2px 10px #efcde6, inset 0 0 60px #f9f6de, 0 0 20px #fff;
  border-radius: 50%;
  animation: myMove 4s linear infinite;
}

@keyframes myMove {
  0% {
    transform: translateY(0%);
    opacity: 1;
  }

  50% {
    transform: translate(10%, -1000%);
  }

  75% {
    transform: translate(-20%, -1200%);
  }

  99% {
    opacity: 0.9;
  }

  100% {
    transform: translateY(-1800%) scale(1.5);
    opacity: 0;
  }
}
</style>

