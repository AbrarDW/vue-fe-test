<template>
    <a
        href="/"
        class="
            d-none d-sm-block d-flex
            align-items-center
            pt-sm-5
            text-decoration-none
            position-absolute
            pe-4
        "
    >
        <img :src="AspireLogo" width="100" />
        <p class="text-muted font-sm py-3">
            Trusted way of banking for 3,000+ SMEs and startups in Singapore
        </p>
    </a>
</template>

<script>
import AspireLogo from "../../assets/svg/Aspire Logo.svg";
export default {
    data() {
        return {
            AspireLogo,
        };
    },
};
</script>