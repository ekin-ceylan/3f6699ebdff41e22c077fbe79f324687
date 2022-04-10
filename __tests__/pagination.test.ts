import { mount } from '@vue/test-utils';
import Vue from 'vue';
import Pagination from '../src/components/Pagination.vue';

const bButton = Vue.extend({
    name: 'b-button',
    template: '<button></button>',
});

describe('pagination TESTS', () => {
    it('if the page-count is 1, the paging is not visible', () => {
        const wrapper = mount(Pagination, {
            propsData: { pageCount: 1 },
            stubs: { bButton },
        });
        const rv = wrapper.html();

        expect(rv).toEqual('');
    });

    it('if the page-count is grater than 1, the paging is visible', () => {
        const wrapper = mount(Pagination, {
            propsData: { pageCount: 2 },
            stubs: { bButton },
        });
        const rv = wrapper.html();

        expect(rv).toContain('div');
    });
});
