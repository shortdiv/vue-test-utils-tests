import { mount } from '@vue/test-utils'
import Vue from 'vue'
import sinon from 'sinon'
import ComponentWithLifecycle from '../utils/componentWithLifecycle'

describe('component with lifecycle', () => {
  it('should call updated when data is set', () => {
    const updateEvent = sinon.stub()
    const vm = new Vue({
      template: `<div>{{ name }}</div>`,
      data () {
        return {
          name: 'evan'
        }
      },
      updated () {
        updateEvent()
      }
    }).$mount()
    vm.$set(vm, 'name', 'Evan You')
    vm.$nextTick(() => {
      expect(vm.name).toBe('Evan You')
      expect(updateEvent.called).toBe(true)
    })
  })
})
