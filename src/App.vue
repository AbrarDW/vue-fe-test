<template>
    <div class="container-fluid overflow-hidden">
        <div class="row vh-100 overflow-auto">
            <div
                class="
                    col-12 col-sm-3 col-xl-2
                    px-sm-4 px-0
                    d-flex
                    fixed-bottom
                    sticky-sm-top
                "
                :class="isMobile ? 'bg-white' : 'bg-dark'"
            >
                <sidebar />
            </div>
            <div class="col-12 col-sm-9 col-xl-10 h-sm-100 px-sm-5 pt-sm-4">
                <main
                    class="overflow-auto px-sm-5 pt-sm-5 d-flex flex-column"
                    :class="isMobile ? 'row' : ''"
                >
                    <main-header />
                    <div
                        class="
                            d-flex
                            flex-column flex-lg-row
                            p-0 p-sm-3
                            mb-sm-5
                        "
                        :class="!isMobile ? 'shadow bg-body rounded my-3' : ''"
                    >
                        <cards-page />
                    </div>
                </main>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from "./components/organs/Sidebar.vue";
import MainHeader from "./components/organs/MainHeader.vue";
import CardsPage from "./views/CardsPage.vue";
import { onMounted, onUnmounted, ref, watchEffect } from "@vue/runtime-core";
import { useStore } from "vuex";

export default {
    components: {
        Sidebar,
        MainHeader,
        CardsPage,
    },
    setup() {
        const store = useStore();

        const isMobile = ref(false);

        const detectMobile = () => {
            isMobile.value = window.innerWidth <= 600;
        };
        detectMobile();

        watchEffect(() => {
            store.commit("setIsMobile", isMobile.value)
        });

        onMounted(() => {
            window.addEventListener("resize", detectMobile);
            store.dispatch("fetchAllDetails");
        });
        onUnmounted(() => window.removeEventListener("resize", detectMobile));

        return {
            isMobile,
        };
    },
};
</script>