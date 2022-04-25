<template>
    <div
        class="debit-card-outer mt-1 text-white"
        :class="currentCard.card_freeze_status ? 'opacity-50' : ''"
    >
        <div class="d-flex btn-card-top-div">
            <icon-button
                :svg-url="EyeSvg"
                :title="showNumber ? 'Hide card number' : 'Show card number'"
                classes="btn-card-top"
                @onClick="showCardNumber"
            />
        </div>
        <div
            class="card card-body debit-card p-4 d-flex"
            :class="
                currentCard.card_freeze_status ? 'bg-secondary' : 'bg-primary'
            "
        >
            <div class="d-flex ms-auto">
                <img :src="FullLogoSvg" />
            </div>
            <div class="my-2 fs-5 fw-bold">{{ currentCard.card_name }}</div>
            <div
                class="my-2 fw-bold card-number"
                v-html="cardNumberDisplay"
            ></div>
            <div class="card-info">
                <span>Thru:</span>
                <span class="ms-1">{{ currentCard.card_expiry }}</span>
                <span class="ms-3">CVV:</span>
                <span class="ms-1">{{ cardCvvDisplay }}</span>
            </div>
            <div class="d-flex ms-auto">
                <img :src="VisaLogoSvg" />
            </div>
        </div>
    </div>
</template>

<script>
import IconButton from "../atoms/IconButton.vue";
import EyeSvg from "../../assets/svg/remove_red_eye-24px.svg";
import FullLogoSvg from "../../assets/svg/Logo-2.svg";
import VisaLogoSvg from "../../assets/svg/Visa Logo.svg";
import { onMounted, ref } from "@vue/runtime-core";

export default {
    props: {
        card: {
            type: Object,
            required: true,
        },
    },
    components: {
        IconButton,
    },
    data() {
        return {
            EyeSvg,
            FullLogoSvg,
            VisaLogoSvg,
        };
    },
    setup(props) {
        const showNumber = ref(false);
        const currentCard = props.card;

        const cardNumberDisplay = ref("");
        const cardCvvDisplay = ref("");

        const maskCardNumber = () => {
            const cardNumberArray = currentCard.card_number.split(" ");
            if (!showNumber.value) {
                for (
                    let index = 0;
                    index < cardNumberArray.length - 1;
                    index++
                ) {
                    cardNumberArray[index] =
                        "<span class='me-2'>&#x2022;&#x2022;&#x2022;&#x2022;</span>";
                }
            }
            cardNumberDisplay.value = cardNumberArray.join(" ");
            cardCvvDisplay.value = showNumber.value
                ? currentCard.card_cvv
                : "***";
        };

        const showCardNumber = () => {
            showNumber.value = !showNumber.value;
            maskCardNumber();
        };

        onMounted(() => {
            maskCardNumber();
        });

        return {
            currentCard,
            cardNumberDisplay,
            cardCvvDisplay,
            showNumber,
            showCardNumber,
        };
    },
};
</script>