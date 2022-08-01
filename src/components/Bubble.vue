<script>
export default {
  mounted() {
    this.timer = setInterval(() => {
      this.bubbleCreate();
    }, 200);
    this.bubbleCreate();
  },
  destoryed() {
    clearInterval(this.timer);
    this.timer = null;
  },
  methods: {
    bubbleCreate() {
      const body = document.getElementById('app');
      const bubble = document.createElement('span');
      // eslint-disable-next-line no-mixed-operators
      const r = Math.random() * 5 + 25; // 25~30
      bubble.className = 'bubble';
      bubble.style.width = `${r}px`;
      bubble.style.height = `${r}px`;
      bubble.style.left = `${Math.random() * innerWidth}px`;
      body.append(bubble);
      setTimeout(() => {
        bubble.remove();
      }, 4000);
    },
  },
};
</script>

