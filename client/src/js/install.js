const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    //if not in the downloaded app
    if (!window.navigator.standalone) {
        event.preventDefault();
        // Show the button
        butInstall.style.display = 'block';
    }
    
    // TODO: Implement a click event handler on the `butInstall` element
    butInstall.addEventListener('click', async () => {
        // Show the prompt
        event.prompt();
        //disable the button
        butInstall.setAttribute('disabled', true);
    });
});


// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // Hide the install button
    butInstall.style.display = 'none';
    // Show a message indicating that the PWA has been installed
    alert('The PWA has been installed!');
    console.log('Success!', 'appinstalled', event);
});
