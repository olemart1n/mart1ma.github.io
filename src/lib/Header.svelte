<script>
    import headerTitle from "../assets/nameTitle.png";
    let src = "https://api.iconify.design/devicon:github.svg?color=%23888888";
</script>

<header>
    <a href="main"><img src={headerTitle} alt="title with name" /></a>
    <a href="https://github.com/olemart1n" target="_blank">
        <img {src} class="icon" alt="github Logo" />
    </a>
</header>

<style>
    header {
        display: flex;
        justify-content: space-between;
        padding: 1rem;
    }
</style>
