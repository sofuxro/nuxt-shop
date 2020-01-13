<template>
    <footer>
        <nav>
            <div class="container">
                <div class="row">
                    <nuxt-link to="/faqs">FAQS</nuxt-link>
                    <nuxt-link to="/about">About</nuxt-link>
                    <nuxt-link to="/contact">Contact</nuxt-link>
                </div>
            </div>
        </nav>
        <div class="footer__credentials">
            This project is open source on
            <a href="#" class="simple-link">github</a>, hosted with Netlify, and
            made Made with passion in
            <i
                class="footer__country"
                title="România"
                deluminate_imagetype="png"
            ></i>
            by
            <a
                class="simple-link"
                href="http://claudiu.limban.ro/"
                title="Front-end Developer"
                >Claudiu Limban</a
            >
        </div>
    </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer__credentials {
    background-color: #1c1c1c;
    padding: 20px;
    box-shadow: inset 0 10px 40px -10px rgba(0, 0, 0, 0.15);
    justify-content: center;
    letter-spacing: 1.1px;
    text-align: center;
    font-weight: 100;
    color: rgba(255, 255, 255, 0.5);
}

.footer__country {
    width: 35px;
    height: 25px;
    background-image: url('~static/romania.png');
    margin: 0 4px;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    vertical-align: middle;
    transition: filter 0.2s ease-out;
    display: inline-block;

    &:hover {
        filter: grayscale(0);
    }
}

footer {
    background-color: #1e1e1e;
    nav {
        a {
            padding: 0 12px;
            border-right: 1px solid #424242;
            color: white;
            text-decoration: none;
            transition: color 0.2s ease-out;
            text-transform: uppercase;
            font-size: 12px;
            font-weight: 100;
            &:hover {
                color: $appOrange;
            }
        }
    }
}
</style>
