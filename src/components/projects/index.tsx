import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./index.css?inline";
import projects from "~/projects";
export default component$(() => {
    useStylesScoped$(styles);
    return (
        <div class="projects">
            {projects.map((item, i) => (
                <div key={i} class="project-card">
                    <h5>{item.name}</h5>
                    <img src={item.image} alt={item.description} height={150} width={220} />

                    <a href={item.demoLink} class="link-button">
                        visit
                    </a>
                </div>
            ))}
        </div>
    );
});
