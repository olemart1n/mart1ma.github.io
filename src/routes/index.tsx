import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "./styles.css?inline";
import Canvas from "~/components/canvas";
import Info from "~/components/info";
import Projects from "../components/projects";
export default component$(() => {
    useStylesScoped$(styles);
    return (
        <>
            <Info />
            <div class="section">
                <Projects />
                <div class="canvas-div">
                    <Canvas />
                </div>
            </div>
        </>
    );
});

export const head: DocumentHead = {
    title: "Ole Martin",
    meta: [
        {
            name: "description",
            content: "just a portfolio site",
        },
    ],
};
