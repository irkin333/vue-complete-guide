export const textCountMixin = {
  computed: {
    countedText() {
      return this.text + ' (' + this.text.length + ')';
    }
  }
};
