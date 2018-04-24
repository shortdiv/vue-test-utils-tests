import { mount } from '@vue/test-utils'
import sinon from 'sinon'
import ComponentWithLifecycle from '../utils/componentWithLifecycle'

describe('component with lifecycle', () => {
  it('should call updated when data is set', () => {
    const updateEvent = sinon.stub()
    const wrapper = mount(ComponentWithLifecycle, {
      propsData: { updateEvent }
    })
    wrapper.setData({
      name: 'Evan You'
    })
    expect(updateEvent.called).toBe(true)
  })
})
