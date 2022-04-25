<template>
    <div class="card actions-card">
        <div class="d-flex flex-row justify-content-between p-2">
            <action-button
                :svg-url="FreezeCard"
                :title="freezeLabel"
                @onClick="changeFreezeStatus"
            />
            <action-button :svg-url="SpendLimit" title="Set spend limit" />
            <action-button :svg-url="GPay" title="Add to GPay" />
            <action-button :svg-url="ReplaceCard" title="Replace card" />
            <action-button
                :svg-url="CancelCard"
                title="Cancel card"
                @onClick="cancelCard"
            />
        </div>
    </div>
</template>

<script>
import FreezeCard from "../../assets/svg/Freeze card.svg";
import SpendLimit from "../../assets/svg/Set spend limit.svg";
import GPay from "../../assets/svg/GPay.svg";
import ReplaceCard from "../../assets/svg/Replace card.svg";
import CancelCard from "../../assets/svg/Deactivate card.svg";
import ActionButton from "../atoms/ActionButton.vue";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

export default {
    props: {
        card: {
            type: Object,
            required: true,
        },
    },
    components: { ActionButton },
    data() {
        return {
            FreezeCard,
            SpendLimit,
            GPay,
            ReplaceCard,
            CancelCard,
        };
    },
    setup(props) {
        const store = useStore();

        const freezeLabel = computed(() => {
            return props.card.card_freeze_status
                ? "Unfreeze card"
                : "Freeze card";
        });

        const changeFreezeStatus = () => {
            store.dispatch("changeFreezeStatus");
        };

        const cancelCard = () => {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                showCancelButton: true,
                confirmButtonText: "Confirm",
            }).then(function (result) {
                if (result.value) {
                    store.dispatch("cancelCard");
                }
            });
        };
        return {
            freezeLabel,
            changeFreezeStatus,
            cancelCard,
        };
    },
};
</script>