<template>
    <div
        class="
            d-flex
            flex-sm-column flex-row flex-grow-1
            align-items-center align-items-sm-start
            px-1 px-sm-3
        "
    >
        <sidebar-brand />

        <ul
            class="
                nav
                flex-sm-column flex-row flex-nowrap flex-grow-1
                mb-sm-auto mb-0
                justify-content-between justify-content-sm-center
                align-items-center align-items-sm-start
                sidebar
            "
            id="menu"
        >
            <li class="nav-item mt-sm-4" v-for="(menu, i) in sidebarMenu" :key="i">
                <sidebar-link :svg-url="menu.icon" :title="menu.name" :is-active="menu.is_active" />
            </li>
        </ul>
    </div>
</template>

<script>
import SidebarBrand from "../molecules/SidebarBrand.vue";
import SidebarLink from "../molecules/SidebarLink.vue";

import Logo1 from "../../assets/svg/Logo-1.svg";
import Card from "../../assets/svg/Card.svg";
import Payments from "../../assets/svg/Payments.svg";
import Credit from "../../assets/svg/Credit.svg";
import Account from "../../assets/svg/Account.svg";

export default {
    components: {
        SidebarBrand,
        SidebarLink,
    },
    data() {
        return {
            sidebarMenu: [
                {
                    icon: Logo1,
                    name: "Home",
                    is_active: false
                },
                {
                    icon: Card,
                    name: "Cards",
                    is_active: true
                },
                {
                    icon: Payments,
                    name: "Payment",
                    is_active: false
                },
                {
                    icon: Credit,
                    name: "Credit",
                    is_active: false
                },
                {
                    icon: Account,
                    name: "Profile",
                    is_active: false
                }
            ]
        };
    },
};
</script>
