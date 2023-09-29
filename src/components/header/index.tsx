import { component$, useStylesScoped$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import styles from "./styles.css?inline";
import { icons } from "~/icons";

export default component$(() => {
    useStylesScoped$(styles);
    const loc = useLocation();
    const navButtonHref = useSignal("/message");
    const navButtonText = useSignal("Message");
    useVisibleTask$(({ track }) => {
        track(() => loc.url.pathname);
        if (loc.url.pathname.includes("message")) {
            navButtonHref.value = "/";
            navButtonText.value = "Back";
        } else {
            navButtonHref.value = "/message";
            navButtonText.value = "Message";
        }
    });
    return (
        <header>
            <ul>
                <li>
                    <a href="https://github.com/olemart1n">
                        <img src={icons[0].link} alt={icons[0].name} width={32} height={32} />
                    </a>
                </li>
                <li>
                    <button>
                        <Link style={{ color: "black" }} href={navButtonHref.value}>
                            {navButtonText.value}
                        </Link>
                    </button>
                </li>
            </ul>
            <h1>
                <i>Frontend developer</i>
            </h1>
        </header>
    );
});
