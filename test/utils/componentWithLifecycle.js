export default {
  name: 'component-with-lifecycle',
  template: `
    <div>{{ name }}</div>
  `,
  props: ['updateEvent'],
  data () {
    return {
      name: 'evan',
    }
  },
  updated () {
    this.$props.updateEvent
  }
}
