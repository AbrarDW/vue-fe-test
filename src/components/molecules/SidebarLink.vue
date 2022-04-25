<template>
    <a
        :href="url"
        class="
            nav-link
            px-sm-0 px-2
            d-sm-block d-flex
            flex-column
            align-items-center
        "
        :class="isActive ? 'active fw-bold' : ''"
    >
        <img :src="svgUrl" height="25" />
        <span class="ms-sm-3 d-sm-inline" :class="isMobile ? 'font-sm' : ''">{{
            title
        }}</span>
    </a>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
    props: {
        url: {
            type: String,
            default: "#",
        },
        svgUrl: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        isActive: {
            type: Boolean,
            default: false,
        },
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