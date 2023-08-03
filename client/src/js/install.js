const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Store the event to be used later for prompting the installation
    window.deferredPrompt = event;
    // Show the "Install" button by removing the 'hidden' class
    butInstall.classList.toggle('hidden',false)
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    // Retrieve the deferred prompt event from the window object
    const promptEvent = window.deferredPrompt;
    // If there's no prompt event, exit the function    
    if(!promptEvent) {
        return;
    }
    // Show the installation prompt
    promptEvent.prompt();
    // Set the deferred prompt to null since the installation prompt was shown   
    window.deferredPrompt = null;
    // Hide the "Install" button by adding the 'hidden' class
    butInstall.classList.toggle('hidden', true)
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // Clear the deferred prompt since the app is now installed
    window.deferredPrompt = null;
});
