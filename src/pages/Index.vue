<template>
    <Layout class="Index container">
        <!-- Learn how to use images here: https://gridsome.org/docs/images -->
        <g-image alt="Example image" src="~/favicon.png" width="135" />

        <h1 class="mt-5">Nombre de la empresa o persona</h1>

        <p class="mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
            excepturi labore tempore expedita, et iste tenetur suscipit
            explicabo! Dolores, aperiam non officia eos quod asperiores
        </p>

        <a href="tel:+5212345667890" class="Index__datos flex flex-row">
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M13 16H11V18H13V16Z" fill="currentColor" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 4C5 2.89543 5.89543 2 7 2H17C18.1046 2 19 2.89543 19 4V20C19 21.1046 18.1046 22 17 22H7C5.89543 22 5 21.1046 5 20V4ZM7 4H17V20H7L7 4Z"
                    fill="currentColor"
                />
            </svg>
            <h1 class="ml-1">1234567890</h1>
        </a>
        <a href="mailto:correo@gmail.com" class="Index__datos flex flex-row">
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"
                    fill="currentColor"
                />
            </svg>
            <h1 class="ml-1">correo@gmail.com</h1>
        </a>
        <a
            href="http://maps.google.com/?daddr=1+Infinite+Loop,+Cupertino+CA"
            class="Index__datos flex flex-row"
        >
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.06298 10.063 6.27212 12.2721 6.27212C14.4813 6.27212 16.2721 8.06298 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16755 11.1676 8.27212 12.2721 8.27212C13.3767 8.27212 14.2721 9.16755 14.2721 10.2721Z"
                    fill="currentColor"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.39409 5.48178 3.79417C8.90918 0.194243 14.6059 0.054383 18.2059 3.48178C21.8058 6.90918 21.9457 12.6059 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.97318 6.93028 5.17324C9.59603 2.3733 14.0268 2.26452 16.8268 4.93028C19.6267 7.59603 19.7355 12.0268 17.0698 14.8268Z"
                    fill="currentColor"
                />
            </svg>
            <h1 class="ml-1">Dirección que puedes abrir en Maps</h1>
        </a>
        <FooterApp class="Index__footer absolute" />
    </Layout>
</template>

<script>
import FooterApp from "../components/FooterApp.vue";
export default {
    components: { FooterApp },
    metaInfo: {
        title: "Hello, world!"
    }
};
</script>

<style lang="scss">
.Index {
    &__datos {
        margin-top: 2rem;
    }
    &__footer {
        bottom: 0;
        left: 0;
    }
}
</style>
