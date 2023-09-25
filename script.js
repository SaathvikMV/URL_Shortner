let btn = document.getElementById("shorten");

btn.addEventListener('click', short);

async function short() {
    let lURL = document.getElementById("lurl").value;
    let sURL = document.getElementById("surl");

    try {
        const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${lURL}`);
        const data = await response.json();

        if (data.ok) {
            sURL.value = data.result.short_link2;
            console.log(data);
        } else {
            console.error("Error shortening URL:", data.error_code);
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

let newURL = document.getElementById("surl");
let copyButton = document.getElementById("copy");

copyButton.onclick = () => {
    newURL.select();

    window.navigator.clipboard.writeText(newURL.value);
}