const dropzone = document.querySelector(".dropzone");

dropzone.addEventListener("drop", (e) => {
    // Prevents file from being opened
    e.preventDefault();
    const dataTransfer = e.dataTransfer;
    if (dataTransfer.items) {
        const itemsLength = dataTransfer.items.length;
        for (let i = 0; i < itemsLength; i++) {
            if (dataTransfer.items[i].kind === "file") {
                const file = dataTransfer.items[i].getAsFile();
                console.log(`file dropped with name: ${file.name}`);
            }
        }
    } else {
        const filesLength = dataTransfer.files.length;
        for (let i = 0; i < filesLength; i++) {
            const file = dataTransfer.files[i];
            console.log(`file dropped with name: ${file.name}`);
        }
    }
});

dropzone.addEventListener("dragover", (e) => {
    // Prevents file from being opened
    e.preventDefault();
});
