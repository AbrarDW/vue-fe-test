<template>
    <ul class="nav card-nav" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
            <a
                class="nav-link no-padding-col fw-bold active"
                id="my-card-tab"
                data-bs-toggle="tab"
                data-bs-target="#my-card"
                role="tab"
                aria-controls="my-card"
                aria-selected="true"
            >
                My debit cards
            </a>
        </li>
        <li class="nav-item" role="presentation">
            <a
                class="nav-link no-padding-col disabled"
                id="all-cards-tab"
                data-bs-toggle="tab"
                data-bs-target="#all-cards"
                role="tab"
                aria-controls="all-cards"
                aria-selected="false"
            >
                All company cards
            </a>
        </li>
    </ul>
</template>
