<template>
    <div class="card d-flex flex-row p-1 transaction-card">
        <div
            class="alert alert-info rounded-circle p-0 align-self-start"
            v-if="category == 'Shopping'"
        >
            <img class="m-3" :src="FileStorageIcon" />
        </div>
        <div
            class="alert alert-primary rounded-circle p-0 align-self-start"
            v-if="category == 'Travel'"
        >
            <img class="m-3" :src="FlightsIcon" />
        </div>
        <div
            class="alert alert-danger rounded-circle p-0 align-self-start"
            v-if="category == 'Entertainment'"
        >
            <img class="m-3" :src="MegaphoneIcon" />
        </div>
        <div class="d-flex flex-column flex-grow-1 mx-3 mb-1">
            <span class="fw-bold">{{ title }}</span>
            <span class="text-muted">{{ date }}</span>
            <a
                class="
                    text-decoration-none
                    pointer-none
                    mt-1
                    btn-trasanction
                    d-flex
                    align-items-center
                "
                href="#"
            >
                <span class="badge rounded-pill bg-secondary me-1">
                    <img :src="SmallCardIcon" />
                </span>
                {{ detail }}
            </a>
        </div>
        <div class="fw-bold d-flex flex-nowrap price-display" :class="rateClass">
            {{ rateDisplay }}
            <img :src="NextIcon" />
        </div>
    </div>
</template>

<script>
import FileStorageIcon from "../../assets/svg/file-storage.svg";
import FlightsIcon from "../../assets/svg/flights.svg";
import MegaphoneIcon from "../../assets/svg/megaphone.svg";
import SmallCardIcon from "../../assets/svg/business-and-finance.svg";
import NextIcon from "../../assets/svg/next.svg";

export default {
    data() {
        return {
            FileStorageIcon,
            FlightsIcon,
            MegaphoneIcon,
            SmallCardIcon,
            NextIcon,
        };
    },
    props: {
        title: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        rate: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
    },
    computed: {
        detail() {
            let text;
            switch (this.type) {
                case "Credit":
                    text = "Refund on debit card";
                    break;
                case "Debit":
                    text = "Charged to debit card";
                    break;
                default:
                    break;
            }
            return text;
        },
        rateDisplay() {
            let text;
            switch (this.type) {
                case "Credit":
                    text = `+S$ ${this.rate}`;
                    break;
                case "Debit":
                    text = `-S$ ${this.rate}`;
                    break;
                default:
                    break;
            }
            return text;
        },
        rateClass() {
            let text;
            switch (this.type) {
                case "Credit":
                    text = "font-primary";
                    break;
                case "Debit":
                    text = "";
                    break;
                default:
                    break;
            }
            return text;
        },
    },
};
</script>