<template>
    <div class="d-flex d-sm-none p-2">
        <img class="ms-auto" :src="LogoSvg" />
    </div>
    <div class="me-auto">Account Balance</div>
    <div class="d-flex align-items-center justify-content-between">
        <div>
            <span class="badge bg-primary align-text-top px-2"> S$ </span>
            <span class="fs-4 ms-2 fw-bold"> 3,000 </span>
        </div>

        <icon-button
            :svg-url="isMobile ? AddCardSvg : AddCardSvgWhite"
            title="New Card"
            :classes="
                !isMobile
                    ? 'btn-add-card btn-secondary text-white'
                    : 'btn-add-card'
            "
            @onClick="addNewCard"
        />
    </div>
    <Teleport to="#modal-section">
        <modal ref="createNewCardModal" title="Add new card">
            <div class="row">
                <div class="col">
                    <div class="mb-3">
                        <label for="card_name" class="form-label">
                            Card Name
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            :class="{ 'is-invalid': error != '' }"
                            v-model="card_name"
                            id="card_name"
                        />
                        <div
                            id="card_name_validation"
                            class="invalid-feedback"
                            v-if="error"
                        >
                            {{ error }}
                        </div>
                    </div>
                    <button
                        class="btn btn-primary d-flex ms-auto"
                        @click="createNew"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </modal>
    </Teleport>
</template>

<script>
import IconButton from "../atoms/IconButton.vue";
import LogoSvg from "../../assets/svg/Logo.svg";
import AddCardSvg from "../../assets/svg/add.svg";
import AddCardSvgWhite from "../../assets/svg/add2.svg";
import { useStore } from "vuex";
import { computed, ref } from "@vue/runtime-core";
import Modal from "./Modal.vue";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

export default {
    components: {
        IconButton,
        Modal,
    },
    data() {
        return {
            LogoSvg,
            AddCardSvg,
            AddCardSvgWhite,
        };
    },
    setup() {
        const store = useStore();
        const isMobile = computed(() => {
            return store.getters.getIsMobile;
        });
        const createNewCardModal = ref(null);
        const card_name = ref("");
        const error = ref("");

        const addNewCard = () => {
            createNewCardModal.value.openModal();
        };

        const numberGenrator = (digit) => {
            return Math.random()
                .toString()
                .concat("0".repeat(3))
                .substr(2, digit);
        };
        const createNew = async () => {
            error.value = "";
            const regex = /^[a-zA-Z\s]*$/;
            if (card_name.value == "" || !regex.test(card_name.value)) {
                error.value = "Please enter valid name";

                if (card_name.value == "") {
                    error.value = "Card name is required";
                }
            } else {
                const cardNumberArray = [];

                for (let index = 0; index < 4; index++) {
                    cardNumberArray[index] = numberGenrator(4);
                }
                const date = new Date();
                const expiryMonth = String(date.getMonth()).padStart(2, "0");
                const expiryYear = (date.getFullYear() + 3)
                    .toString()
                    .substr(2, 2);
                const data = {
                    card_name: card_name.value,
                    card_number: cardNumberArray.join(" "),
                    card_cvv: numberGenrator(3),
                    card_expiry: `${expiryMonth}/${expiryYear}`,
                };
                const cardCreated = await store.dispatch("createCard", data);
                if(cardCreated) {
                    card_name.value = "";
                    createNewCardModal.value.closeModal();
                    Swal.fire('New card added!', '', 'success')
                }
            }
        };

        return {
            isMobile,
            createNewCardModal,
            card_name,
            error,
            addNewCard,
            createNew,
        };
    },
};
</script>