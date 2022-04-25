<template>
    <div
        class="col-12 col-lg-6 p-0 p-sm-3"
        :class="isMobile ? 'bg-dark text-white' : ''"
    >
        <card-carousel
            :cards="cards"
            v-if="cards"
            :key="cardCarouselUpdateKey"
        />
        <card-actions :card="selectedCard" />
    </div>
    <div class="col-12 col-lg-6 p-3 bg-white text-black">
        <card-details :card="selectedCard" />
        <recent-transactions :card="selectedCard" />
    </div>
</template>

<script>
import CardCarousel from "../components/organs/CardCarousel.vue";
import CardActions from "../components/organs/CardActions.vue";
import RecentTransactions from "../components/organs/RecentTransactions.vue";
import CardDetails from "../components/organs/CardDetails.vue";
import { useStore } from "vuex";
import { computed, ref, watch } from "@vue/runtime-core";

export default {
    components: {
        CardCarousel,
        CardActions,
        RecentTransactions,
        CardDetails,
    },
    setup() {
        const store = useStore();

        const cardCarouselUpdateKey = ref(0);

        const isMobile = computed(() => {
            return store.getters.getIsMobile;
        });

        const cards = computed(() => {
            return store.getters.getCards;
        });

        const selectedCard = computed(() => {
            return store.getters.getSelectedCard;
        });

        watch(cards, () => {
            cardCarouselUpdateKey.value++;
        });

        return {
            cardCarouselUpdateKey,
            isMobile,
            cards,
            selectedCard,
        };
    },
};
</script>
