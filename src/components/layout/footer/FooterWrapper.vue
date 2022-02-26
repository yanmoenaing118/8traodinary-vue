<template>
<div class="wrapper">
    <div class="logo">
        <img src="https://midas.venuslab.co/logo.png" alt="Midas Creative Footer Logo">
    </div>

    <nav>
        <div>
            <h3>Office</h3>
            <ul>
                <li>
                    <address>
                        <strong>Yangon</strong>
                        <div>
                            Fancy House Myanmar 56B <br> Kabar Aye Pagoda Road Yangon 11081
                        </div>
                    </address>
                </li>
                <li>
                    <div>
                        <strong>Singapore</strong>
                    </div>
                </li>
            </ul>
        </div>

        <div>
            <h3>Contact</h3>
            <ul>
                <li>
                    <a href="#">example@midascrative.com</a>
                </li>
                <li>
                    <a href="#">+959 7680 47177</a>
                </li>
            
            </ul>
        </div>

        <div>
            <h3>Others</h3>
            <ul>
                <li>Other One</li>
                <li>Other Two</li>
                <li>Other Three</li>
            </ul>
        </div>
    </nav>
</div>
</template>

<style scoped>
.wrapper {
    width: 100%;
    width: var(--max-width);
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 0 5vw 0;
}

nav {
    margin-left: auto;
    display: flex;
    gap: var(--space-11);
}

h3 {
    display: inline-block;
}

h3::after {
    content: "";
    display: table;
    height: 1px;
    width: 150%;
    background-color: #fff;
    position: absolute;
    bottom: 0;
    left: 0;

}

ul {
    list-style-type: none;
}

address div {
    padding-left: var(--space-4);
}

li {
    margin: var(--space-8) 0;
}

strong {
    font-size: 18px;
}

</style>