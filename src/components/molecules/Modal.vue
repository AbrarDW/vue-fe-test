<template>
    <div>
        <div
            ref="modal"
            class="modal fade"
            :class="{ show: active, 'd-block': active }"
            tabindex="-1"
            role="dialog"
        >
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">
                            <span v-if="title"> {{ title }} </span>
                        </h5>
                        <button
                            type="button"
                            class="btn btn-sm btn-secondary close"
                            data-dismiss="modal"
                            aria-label="Close"
                            @click="closeModal"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="active" class="modal-backdrop fade show"></div>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            active: false,
        };
    },
    methods: {
        openModal() {
            this.active = true;
            const body = document.querySelector("body");
            body.classList.add("modal-open")
        },
        closeModal() {
            this.active = false;
            const body = document.querySelector("body");
            body.classList.remove("modal-open")
        }
    },
};
</script>