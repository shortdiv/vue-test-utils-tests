import { mount } from '@vue/test-utils'
import ComponentWithLifecycle from '../utils/componentWithLifecycle'

describe('component with lifecycle', () => {
  it('should call updated when data is set', () => {
    const wrapper = mount(ComponentWithLifecycle)
    wrapper.setData({
      name: 'Evan You'
    })
    expect(wrapper.vm.updated).toBe(true)
  })
})
