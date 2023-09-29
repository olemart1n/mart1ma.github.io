import { component$, useStylesScoped$, useTask$ } from "@builder.io/qwik";
import { routeAction$, useNavigate } from "@builder.io/qwik-city";
import { Form } from "@builder.io/qwik-city";
import { createServerClient } from "supabase-auth-helpers-qwik";
import styles from "./index.css?inline";

export const useSupabaseLogin = routeAction$(async (form, requestEv) => {
    const { message, email } = form;
    console.log(message, email);
    const supabase = createServerClient(
        "https://ulcxpfjjujtdnmvvzzuz.supabase.co",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVsY3hwZmpqdWp0ZG5tdnZ6enV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU5ODA0NzAsImV4cCI6MTk5MTU1NjQ3MH0.Hj3ZcFKXvFm1DRIpYlMsRus1DG-pSl1pzG8iuk2fjoo",
        requestEv
    );

    const { data, error } = await supabase.from("messages").insert([{ message, email }]).select();
    if (error) console.log({ status: error, message: error.message });
    if (error) return { status: error, message: error };

    return { statusMessage: "success", data: data };
});
export default component$(() => {
    useStylesScoped$(styles);
    const nav = useNavigate();
    const action = useSupabaseLogin();
    useTask$(({ track }) => {
        track(() => action.value);
        if (!action.value) return;
        if (action.value.statusMessage === "success") {
            nav("/");
        }
    });
    return (
        <div class="form">
            <Form
                action={action}
                preventdefault:submit
                style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                }}
            >
                <textarea
                    rows={10}
                    name="message"
                    id="message"
                    placeholder="Write here"
                    required
                    minLength={5}
                />
                <input type="email" name="email" id="name" placeholder="your email" required />
                <button type="submit">Send</button>
            </Form>
        </div>
    );
});
