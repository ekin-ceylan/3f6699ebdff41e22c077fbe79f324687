<template lang="pug">

.container(v-if="product")
    .row.py-5
        .col-12.col-lg-6.text-center.py-3.py-lg-0.bg-white
            img(:src="product.image.src")
        .col-12.col-lg-6.py-3.py-lg-0
            h2 {{product.title}}
            p {{ price }}
            p.detail(v-for="option in options").mb-1
                b {{ option.name }}&nbsp;
                span {{ option.value }}
            p.detail.mb-1
                b Weight&nbsp;
                span {{ weights }}
            p(v-html="product.body_html").mt-4
</template>

<style lang="scss" scoped>
img {
    height: 400px;
    min-height: 100%;
    object-fit: contain;
}
</style>

<script lang="ts">
import { getProductsById } from '@/base/product-data';
import ProductModel from '@/models/productModel';
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class ProductDetails extends Vue {
    product: ProductModel = null;

    get productId(): number {
        return Number(this.$route.params?.id);
    }

    get price(): string {
        return this.product.variants
            .select(variant => `$${variant.price}`)
            .removeDuplicates()
            .join(', ');
    }

    get weights(): string {
        return this.product.variants.select(variant => `${variant.weight} ${variant.weight_unit}`).join(', ');
    }

    get options(): { name: string; value: string }[] {
        return this.product.options.select(option => ({ name: option.name, value: option.values.join(', ') }));
    }

    async created() {
        this.product = await getProductsById(this.productId);
    }
}
</script>
