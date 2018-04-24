export default {
  name: 'component-with-lifecycle',
  template: `
    <div>{{ name }}</div>
  `,
  props: ['updateEvent'],
  data () {
    return {
      name: 'evan',
      updated: false
    }
  },
  updated () {
    this.$props.updateEvent()
  }
}
