<template lang="pug">
div(v-if="pageCount > 1")
    b-button#btn-prev(@click="previousPage" squared variant="light" :disabled="pageNo === 1").p-0.mr-1
        i.fas.fa-angle-left

    b-button(v-for="n in pageCount" squared @click="setPage(n)" :key="n" variant="light" :class="{ active: pageNo === n }").p-0.mx-0.mx-sm-1.border-secondary {{ n }}

    b-button#btn-next(@click="nextPage" squared variant="light" :disabled="pageNo == pageCount").p-0.ml-1
        i.fas.fa-angle-right
</template>

<style lang="scss" scoped>
@import './../../node_modules/bootstrap/scss/functions';
@import './../../node_modules/bootstrap/scss/variables';
@import './../../node_modules/bootstrap/scss/mixins';

button {
    background-color: transparent !important;
    border-width: 0px;
    font-weight: 600;
    text-align: center;
    min-width: 35px;
    height: 35px;
    font-weight: 700;
    font-size: 0.9rem;
    line-height: 1.5rem;

    @include media-breakpoint-up(sm) {
        min-width: 45px;
        height: 45px;
    }

    &.active {
        border-width: 3px;
    }
}
</style>

<script lang="ts">
import { Component, Vue, Prop, Model, Watch } from 'vue-property-decorator';

@Component({})
export default class Pagination extends Vue {
    @Model('input') pageNo: number;
    @Prop({ type: Number }) pageCount: number;

    @Watch('pageCount', { immediate: true, deep: true })
    onPageCountChange(val) {
        this.setPage(Math.min(this.pageNo, val) || 1);
    }

    setPage(page: number) {
        this.$emit('input', page);
    }
    nextPage() {
        this.$emit('input', this.pageNo + 1);
    }
    previousPage() {
        this.$emit('input', this.pageNo - 1);
    }
}
</script>
