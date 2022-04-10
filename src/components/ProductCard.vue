<template lang="pug">
    .product.d-flex.text-center.text-lg-left.flex-column.flex-lg-row.align-items-top.py-2.px-0.px-sm-2(v-if="product")
        router-link(:to="{ name: productRouteName, params: { id: product.id } }" )
            img(:src="image.src" :alt="image.alt" ).bg-white
        .d-flex.flex-column.pt-2.pt-lg-0.pl-lg-2.flex-grow-1
            router-link(:to="{ name: productRouteName, params: { id: product.id } }" ).mb-2.text-decoration-none
                h3.mb-0 {{ product.title }}
            p.detail.mb-auto
                span {{ price }}
            p.detail(v-for="option in options").mb-1
                b {{ option.name }}&nbsp;
                span {{ option.value }}
</template>
<style lang="scss" scoped>
.product {
    box-shadow: #eee 0 0 10px 1px;
    &:hover {
        box-shadow: #ddd 0 0 15px 5px;
    }
    p {
        font-size: 0.9rem;
    }

    a {
        color: inherit;
        &:hover {
            color: #666666;
        }
    }
    img {
        height: 190px;
        width: 190px;
        max-width: 100%;
        object-fit: contain;
    }
}
</style>
<script lang="ts">
import Image from '@/models/image';
import ProductModel from '@/models/productModel';
import { Component, Prop, Vue } from 'vue-property-decorator';
import '@/base/extensions/Array';
import { routeNames } from '@/router';

@Component({})
export default class ProductCard extends Vue {
    @Prop({ type: Object }) product: ProductModel;

    productRouteName = routeNames.PRODUCT;

    get image(): Image {
        return this.product.image;
    }

    get price(): string {
        return this.product.variants
            .select(variant => `$${variant.price}`)
            .removeDuplicates()
            .join(', ');
    }

    get options(): { name: string; value: string }[] {
        return this.product.options.select(option => ({ name: option.name, value: option.values.join(', ') }));
    }
}
</script>
