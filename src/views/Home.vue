<template lang="pug">

.container
    .row.py-4.border-bottom.d-none.d-md-flex
        b-form-group(label="" label-for="search").col-5.mb-0
            input.form-control(id="search-1" name="search" v-model.trim="keyword" placeholder="Search by keywords" )
        pagination(v-model="page" :page-count="pageCount").col-7.col-lg-6.offset-lg-1.text-right
    .row.py-4
        .col-6.px-1.px-sm-3.py-2(v-for="(product, index) in pagedProducts" :key="product.id")
            product-card(:product="pagedProducts[index]").rounded.bg-white.h-100
        .col-12.text-center(v-show="noProductInfo") No Product Found!
        .col-12.text-center.mt-5(v-show="isBusy.value")
            b-spinner
    .row.py-3.border-top.sticky-bottom.bg-light.d-md-none.d-flex
        pagination(v-model="page" :page-count="pageCount").col-12.text-center.mb-2
        b-form-group(label="" label-for="search").col-12.col-md-6.offset-md-3.my-2
            input.form-control(id="search-2" name="search" v-model.trim="keyword" placeholder="Search by keywords" )
</template>

<style lang="scss" scoped>
.spinner-border {
    width: 3rem;
    height: 3rem;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { getAllProducts } from '@/base/product-data';
import ProductModel from '@/models/productModel';
import Pagination from '@/components/Pagination.vue';
import ProductCard from '@/components/ProductCard.vue';
import isBusy from '@/base/isBusy';

@Component({
    components: {
        pagination: Pagination,
        'product-card': ProductCard,
    },
})
export default class Home extends Vue {
    keyword: string = null;
    products: ProductModel[] = [];
    page = 1;
    pageItemCount = 10;
    isBusy = isBusy;

    get pageCount(): number {
        return Math.ceil(this.filteredProducts.length / this.pageItemCount);
    }

    get filteredProducts(): ProductModel[] {
        const k = this.keyword?.toLowerCase();

        return this.products.filter(product => {
            return !k || product.title?.toLowerCase()?.includes(k) || product.tagList.some(tag => tag?.toLowerCase()?.includes(k));
        });
    }

    get pagedProducts() {
        const start = this.pageItemCount * (this.page - 1);
        const end = start + this.pageItemCount;

        return this.filteredProducts.slice(start, end);
    }

    get noProductInfo(): boolean {
        return !this.pagedProducts?.length && !this.isBusy?.value;
    }

    async created() {
        this.products = await getAllProducts();
    }
}
</script>
