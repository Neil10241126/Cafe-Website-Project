import { shallowMount } from '@vue/test-utils';
import ProductCardHor from '@/components/ProductCardHor.vue';
import { createTestingPinia } from '@pinia/testing';
import useCartStore from '@/stores/cart';

describe('ProductCardHor', () => {
  const dummyProps = {
    title: '測試產品',
    description: '這是一個測試描述',
    origin: '台灣',
    acidity: 5,
    imageUrl: 'http://example.com/image.jpg',
    id: '1',
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ProductCardHor, {
      global: {
        plugins: [createTestingPinia()],
      },
      props: {
        ...dummyProps,
      },
    });
  });

  it('當帶入 Props 值時，應正確渲染文字', async () => {
    // Avarange
    await wrapper.setProps({
      price: 100,
      origin_price: 200,
    });

    // Act
    const title = wrapper.find('[data-test="title"]').text();
    const description = wrapper.find('[data-test="description"]').text();
    const origin = wrapper.find('[data-test="origin"]').text();
    const acidity = wrapper.find('[data-test="acidity"]').text();
    const price = wrapper.find('[data-test="price"]').text();
    const originPrice = wrapper.find('[data-test="originPrice"]').text();
    const imageUrl = wrapper.find('[data-test="imageUrl"]').attributes('src');

    // Assertion
    expect(title).toBe(`${dummyProps.title}`);
    expect(description).toBe(`${dummyProps.description}`);
    expect(origin).toBe(`產地: ${dummyProps.origin}`);
    expect(acidity).toBe(`酸度: ${dummyProps.acidity} 分`);
    expect(price).toBe(`NT$ 100`);
    expect(originPrice).toBe(`NT$ 200`);
    expect(imageUrl).toBe(`${dummyProps.imageUrl}`);
  });

  it('當 IsDiscount 為 true 時，應顯示折扣標籤', async () => {
    // Avarange
    await wrapper.setProps({
      price: 100,
      origin_price: 200,
    });

    // Act
    const target = wrapper.find('[data-test="target"]').isVisible();

    // Assertion
    expect(target).toBe(true);
  });

  it('點擊 "加入購物車" 按鈕時調用 addToCart 方法', async () => {
    // 取得 cart 方法
    const cartStore = useCartStore();
    const { addToCart } = cartStore;

    await wrapper.find('[data-test="addButton"]').trigger('click');

    expect(addToCart).toHaveBeenCalledTimes(1);
  });

  it('當 loading 時，隱藏 "加入購物車" 文字', async () => {});

  it.only('當 loading 時，按鈕需要被 "disabled 禁用"', async () => {});
});
