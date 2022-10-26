// getting the HTML element 
const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt the user to select a media stream and the pass that to out video element and then it is going to play
async function selectMediaStream() {
    // use a try and catch statement as that anything that needs to be resolved after we complete our call will wait until the try has completed
    // then we are going to use the catch statement to catch any errors 
    try {
        // we are going to be working with the Screen Capture API, you can read more about it here https://developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture
        // we are capturing live screen contents (we are letting the user decide which window/screen they want to share)
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        // we then apply the src of the video element as the media stream that we selected above
        videoElement.srcObject = mediaStream;
        // when the video has finished loading we then do something in a function
        videoElement.onloadedmetadata = () => {
            // we then play the video element
            videoElement.Play();
        }
    } catch (error) {
        // Catch Erros Here
        console.log('whoops, error here:', error)
    }
}

// when the button is clicked to whatever is in the function
button.addEventListener('click', async () => {
    // Disable the button
    button.disabled = true;
    // Start Picture in Picture (read more here https://css-tricks.com/an-introduction-to-the-picture-in-picture-web-api/)
    await videoElement.requestPictureInPicture();
    // reset the button
    button.disable = false;
});

// On Load
selectMediaStream();