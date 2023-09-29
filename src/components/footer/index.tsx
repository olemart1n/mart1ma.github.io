import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { useServerTimeLoader } from "~/routes/layout";
import styles from "./footer.css?inline";

export default component$(() => {
    useStylesScoped$(styles);
    const serverTime = useServerTimeLoader();

    return (
        <footer>
            <div class="container">
                <a href="https://www.builder.io/" target="_blank" class="anchor">
                    <span>Ole Martin Snoen</span>
                    <span class="spacer">|</span>
                    <span>{serverTime.value.date.substring(0, 10)}</span>
                </a>
            </div>
        </footer>
    );
});
