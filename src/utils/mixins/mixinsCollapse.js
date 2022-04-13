import Collapse from 'bootstrap/js/dist/collapse'

export default {
  methods: {
    closeNav () {
      this.collapse.hide()
    },
    toggleNav () {
      this.collapse.toggle()
    }
  },
  mounted () {
    this.collapse = new Collapse(this.$refs.collapse, {
      toggle: false
    })
  }
}
