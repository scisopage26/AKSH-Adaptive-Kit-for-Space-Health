function searchGuidance() {
    const input = document.getElementById("searchInput");
    const query = input.value.toLowerCase().trim();

    const pages = {
        "musculoskeletal": "box1.html",
        "injury": "box1.html",
        "back pain": "box1.html",
        "sprain": "box1.html",
        "dislocation": "box1.html",

        "skin": "box2.html",
        "wound": "box2.html",
        "cut": "box2.html",
        "rash": "box2.html",

        "eye": "box3.html",
        "ent": "box3.html",
        "respiratory": "box3.html",
        "breathing": "box3.html",
        "nasal congestion": "box3.html",

        "gastrointestinal": "box4.html",
        "nausea": "box4.html",
        "diarrhoea": "box4.html",
        "headache": "box4.html",
        "insomnia": "box4.html",
        "space sickness": "box4.html"
    };

    if (pages[query]) {
        window.location.href = pages[query];
    } else {
        alert("No matching guidance found. Please try another search term.");
    }
}
