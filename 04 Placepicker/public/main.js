function showConfirmationModal() {
    console.log("Showing Modal...");
}

document.addEventListener('htmx:beforeRequest', showConfirmationModal);