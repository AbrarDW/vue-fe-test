<template>
    <card-collapse
        card-id="detailCard"
        title="Card details"
        :title-icon="DetailIcon"
    >
        <ul class="list-group list-group-flush">
            <li class="list-group-item border-0">An item</li>
            <li class="list-group-item border-0">A second item</li>
            <li class="list-group-item border-0">A third item</li>
        </ul>
        <div class="card-footer text-center">View all</div>
    </card-collapse>
</template>

<script>
import CardCollapse from "../atoms/CardCollapse.vue";
import DetailIcon from "../../assets/svg/Group 11889.svg";

export default {
    components: {
        CardCollapse,
    },
    data() {
        return {
            DetailIcon,
        };
    },
};
</script>