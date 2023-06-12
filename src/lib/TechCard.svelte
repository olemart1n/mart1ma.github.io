<script>
    export let src;
    export let name;
</script>

<div>
    <img {src} alt={name} />
    <p>{name}</p>
</div>

<style>
    div {
        margin: 1rem;
        text-align: center;
    }
    img {
        height: 2rem;
    }
    @media (max-width: 650px) {
        img {
            height: 1.6rem;
        }
    }
</style>
