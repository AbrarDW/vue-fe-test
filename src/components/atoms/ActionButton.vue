<template>
    <button
        class="btn btn-sm d-flex flex-column align-items-center"
        @click="$emit('onClick')"
    >
        <img :src="svgUrl" />
        <span> {{ title }} </span>
    </button>
</template>

<script>
export default {
    props: {
        svgUrl: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
    },
};
</script>