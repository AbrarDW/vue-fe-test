<template>
    <Carousel
        :settings="settings"
        :breakpoints="breakpoints"
        @update:modelValue="updateCurrentCard"
        v-if="cards.length > 0"
    >
        <Slide v-for="card in cards" :key="card.id">
            <div class="carousel__item">
                <debit-card :card="card" />
            </div>
        </Slide>
        <template #addons>
            <Pagination />
        </template>
    </Carousel>
    <div class="card border-0" v-else>
        <div
            class="alert alert-info w-100 h-100"
        >
            <h1>Oops! no cards to show!</h1>
            Please add new cards.
        </div>
    </div>
</template>

<script>
import DebitCard from "../molecules/DebitCard.vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { useStore } from "vuex";

import "vue3-carousel/dist/carousel.css";

export default {
    props: {
        cards: {
            type: Array,
            required: true,
        },
    },
    components: {
        DebitCard,
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    setup(props) {
        const store = useStore();

        const settings = {
            itemsToShow: 1.1,
        };
        const breakpoints = {
            700: {
                itemsToShow: 1,
            },
        };

        const updateCurrentCard = (index) => {
            store.commit("setSelectedCard", props.cards[index]);
        };

        return {
            settings,
            breakpoints,
            updateCurrentCard,
        };
    },
};
</script>