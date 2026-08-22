const searchForm = document.getElementById("searchForm");

searchForm.addEventListener("submit", function(event) {
    // stop the page from reloading and handle submit ourselves
    event.preventDefault();

    // get form data and convert it to an object (which is basically a dictionary in this case)
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    // set google search url
    const googleUrl = new URL("https://google.com/search");

    // set params from form data
    const params = new URLSearchParams({
        q: data.q,
        hl: data.language
    });

    // add hideAI param separately so we can evaluate whether to add
    //  udm=14 or not
    if (data.hideAI) {
        params.set("udm", "14");
    };

    // set url to params
    googleUrl.search = params.toString()

    // send user to generated url
    window.location.href = googleUrl.href;
})