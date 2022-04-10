<template lang="pug">
div#app.bg-light.min-vh-100
    .container-fluid
        header.row.justify-content-between.align-items.center.text-white.py-3
            h1.mb-0.col-5 {{ $route.name }}
            .col-7.text-right
                router-link(to="/").text-white.text-decoration-none
                    b Store&nbsp;
                    span Challenge

        main.row
            router-view
</template>

<style lang="scss" src="./assets/scss/main.scss"></style>
<style lang="scss" scoped>
@import './assets/scss/variables';

header {
    background-color: $header;
    *,
    h1 {
        font-size: 1.2rem;
    }
}
</style>
