const form = document.querySelector("form");
const sendMessage = async (data) => {
    const req = await fetch("https://ulcxpfjjujtdnmvvzzuz.supabase.co/rest/v1/messages", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3b3ZzZnVzemRtZWp0dHp5YXh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEwOTYxMzEsImV4cCI6MjAxNjY3MjEzMX0.6wuvaGnZUCIfTId2zf824syV2m2qQK0neUIVjn_2mZI",
            Prefer: "return:minimal",
            authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3b3ZzZnVzemRtZWp0dHp5YXh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEwOTYxMzEsImV4cCI6MjAxNjY3MjEzMX0.6wuvaGnZUCIfTId2zf824syV2m2qQK0neUIVjn_2mZI",
        },
        body: JSON.stringify(data),
    });
    const res = await req.json();
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    let inputValues = {};
    for (const entry of formData.entries()) {
        // let newData = { ...data, value };
        // data = newData;
        inputValues[entry[0]] = entry[1];
    }
    const data = sendMessage(inputValues);
    setTimeout(() => {
        document.location.href = "/";
    }, 300);
});
