export default {
  name: 'component-with-lifecycle',
  template: `
    <div>{{ name }}</div>
  `,
  data () {
    return {
      name: 'evan',
      updated: false
    }
  },
  updated () {
    this.updated = true
  }
}
