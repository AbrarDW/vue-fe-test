<template>
    <card-collapse
        card-id="recents"
        title="Recent"
        :title-icon="TransactionCardIcon"
        :expanded="true"
    >
        <span v-if="card && card.transactions && card.transactions.length > 0">
            <ul
                class="list-group list-group-flush"
                v-if="card && card.transactions"
            >
                <li
                    class="list-group-item border-0"
                    v-for="(transaction, i) in card.transactions"
                    :key="i"
                >
                    <transaction-card
                        :title="transaction.title"
                        :date="transaction.date"
                        :rate="transaction.rate"
                        :type="transaction.type"
                        :category="transaction.category"
                    >
                    </transaction-card>
                </li>
            </ul>
            <div class="card-footer text-center">
                View all card transactions.
            </div>
        </span>
        <span v-else>
            <div class="card-footer text-center">
                No transactions for this card.
            </div>
        </span>
    </card-collapse>
</template>

<script>
import CardCollapse from "../atoms/CardCollapse.vue";
import TransactionCard from "../molecules/TransactionCard.vue";
import TransactionCardIcon from "../../assets/svg/Group 11889-1.svg";

export default {
    props: {
        card: {
            type: Object,
            required: true,
        },
    },
    components: {
        TransactionCard,
        CardCollapse,
    },
    data() {
        return {
            TransactionCardIcon,
        };
    },
};
</script>