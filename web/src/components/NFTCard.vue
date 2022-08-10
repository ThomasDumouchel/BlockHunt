<template>
    <v-card class="card">
        <div class="card__product-img">
            <img class="card__img" alt="product-image" :src="img" />
        </div>
        <div class="card__content">
            <p class="card__name">{{ name }}</p>
            <p class="card__description" v-if="description">
                {{ description }}
            </p>
        </div>
        <div class="card__footer">
            <p class="card__autor">
                Creation of
                <span class="card__autor--alt-color">{{ autor }}</span>
            </p>
        </div>
    </v-card>

</template>

<script>
export default {
    props: {
        img: {
            type: String,
            default: "",
            required: true,
        },
        name: {
            type: String,
            default: "",
            required: true,
        },
        description: {
            type: String,
            default: "",
        },
        autor: {
            type: String,
            default: "",
        },
        index: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped lang="scss">
img{
    max-width: 100%;
    max-height: 100%;
}
.card {
    background-color: #15263f;
    color: #8bacd9;
    border-radius: 16px;
    padding: 12px;
    width: 200px;
    box-shadow: 0 25px 50px 0 rgba(0, 0, 0, 0.1);

    .card__product-img {
        position: relative;
        border-radius: 8px;
        overflow: hidden;
        width: 100%;
    }

    .card__content {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 24px 0 12px 0;

        .card__name {
            width: 100%;

            color: white;
            font-size: 20px;
            font-weight: bold;
        }

        .card__description {
            width: 100%;
            font-size: 12px;
            line-height: 2.6rem;
            font-weight: lighter;
        }

        .card__content-bottom {
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding-top: 4px;

            > * {
                display: flex;
                align-items: center;
                font-weight: 600;
            }
        }
    }

    .card__footer {
        display: flex;
        align-items: center;
        border-top: 1px solid #2e405a;
        padding-top: 12px;

        .card__autor--alt-color {
            color: white;
            font-size: 12px;
        }
    }
}

//Transition
.fade-enter-active,
.fade-leave-active {
    transition: 0.25s ease-out;
}

.fade-leave-to,
.fade-enter-from {
    opacity: 0;
}
</style>