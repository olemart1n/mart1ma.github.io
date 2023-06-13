<script>
    import ProjectCard from "./ProjectCard.svelte";
    import TechCard from "./TechCard.svelte";
    import projects from "./projects/projects";
    import tech from "./tech";
</script>

<main>
    <section class="intro">
        <div class="text">
            <h3>About me</h3>
            <p>
                I have been studying frontend development at Noroff School of Technology and Media
                for the last two years. Before that i was working with construction.<br /> Coding is
                something i think is really fun, and the interest has just increased in the last
                couple of years. I hope i will find a job where i can work on creating seamless user
                experiences.
                <br />Blockchain tech is also something i am planning to learn more about and i
                intend to do an online course about solidity
            </p>
        </div>
        <div class="tech">
            <h4>Technologies i have worked with</h4>
            <div class="techDiv">
                {#each tech as t}
                    <TechCard src={t.imageSrc} name={t.name} />
                {/each}
            </div>
        </div>
    </section>

    <div class="projects">
        <h1>Projects</h1>
        {#each projects as project}
            <ProjectCard
                imageSrc={project.image}
                name={project.name}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
            />
        {/each}
    </div>
</main>

<style>
    h1 {
        font-family: "Fira Mono";
        width: 100%;
        text-align: center;
    }
    .intro {
        padding: 20px;
        display: grid;
        grid-template-columns: 50% 50%;
    }
    .text {
        border-radius: 5px;
        background-color: rgba(126, 195, 230, 0.5);
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 1.2rem;
        padding: 2rem;
    }
    .text p {
        font-family: Arial, sans-serif;
        line-height: 1.9rem;
        margin: auto;
    }
    .tech {
        background-color: rgba(244, 241, 241, 0.6);
        max-width: 550px;
        box-shadow: var(--shadow-2);
        margin: 2rem auto;
    }
    .techDiv {
        display: grid;
        grid-template-columns: minmax(20px, auto) auto auto;
        grid-gap: 5px;
    }
    .projects {
        display: flex;
        flex-wrap: wrap;
        min-height: 50vh;
        margin: 3rem auto;
        justify-content: space-evenly;
        align-items: center;
        background-color: azure;
    }

    @media (max-width: 650px) {
        .intro {
            display: flex;
            flex-direction: column;
        }
        .projects {
            flex-direction: column;
            width: 90%;
            margin: auto;
        }
        .text p {
            font-size: 14px;
            line-height: 1rem;
        }
        .tech {
            width: 95%;
        }
    }
</style>
