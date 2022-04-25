<template>
    <div class="card mb-3">
        <div class="card-header py-3">
            <a
                class="text-decoration-none d-flex justify-content-between"
                data-bs-toggle="collapse"
                :href="`#${cardId}`"
                role="button"
                :aria-expanded="expanded"
                :aria-controls="cardId"
            >
                <span>
                    <img :src="titleIcon" v-if="titleIcon" />
                    <span class="fw-bold ms-2">
                        {{ title }}
                    </span>
                </span>
                <span>
                    <img :src="isExpanded ? UpArrow : DownArrow" />
                </span>
            </a>
        </div>
        <div class="collapse" :class="expanded ? 'show' : ''" :id="cardId">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { onMounted, onUnmounted, ref } from "@vue/runtime-core";
import DownArrow from "../../assets/svg/down-arrow.svg";
import UpArrow from "../../assets/svg/down-arrow-1.svg";

export default {
    data() {
        return {
            UpArrow,
            DownArrow,
        };
    },
    props: {
        title: {
            type: String,
            required: true,
        },
        titleIcon: {
            type: String,
        },
        cardId: {
            type: String,
            required: true,
        },
        expanded: {
            type: Boolean,
            default: false,
        },
    },
    setup(props) {
        const isExpanded = ref(false);

        let myCollapsible;
        const changeExpanded = (value) => {
            isExpanded.value = value;
        };
        changeExpanded(props.expanded);

        onMounted(() => {
            myCollapsible = document.getElementById(props.cardId);

            myCollapsible.addEventListener("hidden.bs.collapse", function () {
                changeExpanded(false);
            });
            myCollapsible.addEventListener("shown.bs.collapse", function () {
                changeExpanded(true);
            });
        });
        onUnmounted(() => {
            myCollapsible.removeEventListener(
                "hidden.bs.collapse",
                function () {
                    changeExpanded(false);
                }
            );
            myCollapsible.removeEventListener("shown.bs.collapse", function () {
                changeExpanded(true);
            });
        });

        return {
            isExpanded,
        };
    },
};
</script>