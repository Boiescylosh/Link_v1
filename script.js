const info = {
    Quotes: "NYARI APA CYUK?",
};

function checkProject() {
    if (info.name) {
        console.log("Checking project: " + info.name);
        console.log("Status: Ready to use");
    } else {
        console.log("Project info not found!");
    }
}

// Jalankan fungsi
checkProject();
