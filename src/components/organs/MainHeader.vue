<template>
    <div :class="isMobile ? 'bg-dark text-white' : ''">
        <div class="col-12">
            <top-header />
        </div>
        <div class="col-12 card-tabs">
            <card-tabs />
        </div>
    </div>
</template>

<script>
import TopHeader from "../molecules/TopHeader.vue";
import CardTabs from "../molecules/CardTabs.vue";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";

export default {
    components: {
        TopHeader,
        CardTabs,
    },
    setup() {
        const store = useStore();
        const isMobile = computed(() => {
            return store.getters.getIsMobile;
        });
        return {
            isMobile,
        };
    },
};
</script>