<template>
    <a
        class="btn btn-sm fw-bold ms-auto"
        :class="classes"
        @click="$emit('onClick')"
    >
        <img :src="svgUrl" />
        <span class="ms-1">{{ title }}</span>
    </a>
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
        classes: {
            type: String,
        },
    },
};
</script>