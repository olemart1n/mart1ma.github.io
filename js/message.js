const form = document.querySelector("form");
const sendMessage = async (data) => {
    const req = await fetch("https://ulcxpfjjujtdnmvvzzuz.supabase.co/rest/v1/messages", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVsY3hwZmpqdWp0ZG5tdnZ6enV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU5ODA0NzAsImV4cCI6MTk5MTU1NjQ3MH0.Hj3ZcFKXvFm1DRIpYlMsRus1DG-pSl1pzG8iuk2fjoo",
            Prefer: "return:minimal",
            authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVsY3hwZmpqdWp0ZG5tdnZ6enV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU5ODA0NzAsImV4cCI6MTk5MTU1NjQ3MH0.Hj3ZcFKXvFm1DRIpYlMsRus1DG-pSl1pzG8iuk2fjoo",
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
