import { shallowMount, mount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg1 = '1 message';
    const msg2 = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      props: { msg2, msg: msg1 },
    });
    console.log(msg1);
    expect(wrapper.text()).toMatch(msg2);
  });
});
