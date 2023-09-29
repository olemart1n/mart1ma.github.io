import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./index.css?inline";
import languages from "../../languages";
export default component$(() => {
    useStylesScoped$(styles);
    return (
        <div>
            <div class="info">
                <h2>Hi</h2>
                <p>
                    I have just finished a two year study at Noroff Digital media & technology,
                    where i have learned to to code with HTML, CSS & JavaScript.
                    <br /> I find it funny and interesting to create responsive web apps!
                </p>
            </div>
            <div class="experience">
                <h3>Technologies i have experience with</h3>
                <section class="img-section">
                    {languages.map((item) => (
                        <div key={item.name}>
                            <img key={item.name} width={30} height={30} src={item.imageSrc} />
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
});
