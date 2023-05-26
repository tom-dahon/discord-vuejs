import { shallowMount } from '@vue/test-utils';
import Home from './Home.vue';

describe('Home.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.element).toMatchSnapshot();
  });
});