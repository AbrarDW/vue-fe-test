import { createStore } from "vuex";
import axios from "axios";

export default createStore({
    state: {
        isMobile: false,
        accountBalance: null,
        cards: [],
        selectedCard: {},
    },
    mutations: {
        setIsMobile(state, data) {
            state.isMobile = data;
        },
        setAccountBalance(state, data) {
            state.accountBalance = data;
        },
        setCards(state, data) {
            state.accountBalance = data;
        },
        setSelectedCard(state, data) {
            state.selectedCard = data;
        },
    },
    actions: {
        fetchAllDetails() {
            axios.get(`${window.location.origin}/data.json`).then((res) => {
                const allData = res.data;
                this.commit("setAccountBalance", allData.accountBalance);
                this.commit("setCards", allData.cards);
                this.commit("setSelectedCard", allData.cards[0]);
            });
        },
        changeFreezeStatus() {
            this.getters.getCards.filter((element) => {
                if(element.id == this.getters.getSelectedCard.id) {
                    return element.card_freeze_status = !element.card_freeze_status
                }
            })
        },
        cancelCard() {
            const cards = this.getters.getCards.filter((element) => {
                return element.id != this.getters.getSelectedCard.id
            })
            this.commit("setCards", cards);
            if(cards.length > 0) {
                this.commit("setSelectedCard", cards[0]);
            }
        },
        createCard(state, data) {
            return new Promise(resolve => {
                const newCard = {
                    "id": this.getters.getCards.length + 1,
                    "card_number": data.card_number,
                    "card_cvv": data.card_cvv,
                    "card_expiry": data.card_expiry,
                    "card_name": data.card_name,
                    "card_freeze_status": false,
                    "transactions": []
                }
                this.commit("setCards", [newCard, ...this.getters.getCards]);
                this.commit("setSelectedCard", newCard)
                resolve(true)
            })
        }
    },
    getters: {
        getIsMobile(state) {
            return state.isMobile;
        },
        getAccountBalance(state) {
            return state.accountBalance;
        },
        getCards(state) {
            return state.accountBalance;
        },
        getSelectedCard(state) {
            return state.selectedCard;
        },
        getTransaction(state) {
            if (state.selectedCard.length > 0) {
                return state.selectedCard.transaction;
            }
            return [];
        },
    },
});
