import { mount } from '@vue/test-utils'
import ComponentWithLifecycle from '../utils/componentWithLifecycle'

describe('component with lifecycle', () => {
  it('should call updated when data is set', () => {
    const mockCallback = jest.fn()
    const wrapper = mount(ComponentWithLifecycle, {
      propsData: { updateEvent: mockCallback }
    })
    expect(mockCallback).toHaveBeenCalled()
  })
})
