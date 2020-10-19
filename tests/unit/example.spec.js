import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import realstore from "@/store";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});


test('store mutation toggleTermsModal', () => {
  const commitSpy = jest.spyOn(realstore, 'commit');
  realstore.commit('TOGGLE_OPENED');
  expect(realstore.state.woot.isOpened).toBe(true);
  expect(commitSpy).toHaveBeenCalledWith('TOGGLE_OPENED');
});
