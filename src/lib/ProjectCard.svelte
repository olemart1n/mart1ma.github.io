<script>
    export let imageSrc;
    export let name;
    export let demoLink;
    export let ghLink;
    import { fade, fly } from "svelte/transition";
    let visible = false;
</script>

<div class="project" on:mouseenter={() => (visible = true)} on:mouseleave={() => (visible = false)}>
    <h3 class={visible ? "h3" : ""}>{name}</h3>
    <figure>
        <img src={imageSrc} alt="This project's name is {name}" />
    </figure>
    {#if visible}
        <div class="project_links" transition:fade>
            <a href={ghLink} class="anchor-button">Github</a>
            <a href={demoLink} class="anchor-button">Demo</a>
        </div>
    {/if}
</div>

<style>
    .project {
        border-radius: 5px;
        box-shadow: var(--shadow-1);
        display: flex;
        flex-direction: column;
        height: 250px;
        position: relative;
        overflow: hidden;
    }
    .project_links {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(110, 31, 31, 0.2);
        display: flex;
        place-content: center;
        align-items: center;
        justify-content: space-around;
    }
    h3 {
        background-color: rgb(219, 219, 219);
        text-align: center;
    }
    .h3 {
        background-color: rgb(185, 246, 253);
    }
    img {
        border-radius: 5px;
        max-width: 400px;
    }

    .anchor-button {
        background-color: aqua;
        padding: 10px 20px;
        border: 1px solid var(--color-border);
        border-radius: 5px;
        color: var(--color-black);
    }

    @media (max-width: 650px) {
        .project {
            flex-direction: column;
            width: 90%;
            height: fit-content;
            margin: 2rem auto;
        }
        img {
            border-radius: 5px;
            max-width: 100%;
        }
    }
</style>
