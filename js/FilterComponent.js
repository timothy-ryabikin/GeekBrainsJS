Vue.component('filter-comp', {
    props: ['search'],
    data() {
        return {
            localSearch: this.search
        }
    },
    template: `<form action="#" class="search-form" @submit.prevent="$root.filterCatalog(localSearch)">
    <input type="text" class="search-field" v-model="localSearch">
    <button type="submit" class="btn-search">
        <i class="fas fa-search"></i>
    </button>
</form>`
})