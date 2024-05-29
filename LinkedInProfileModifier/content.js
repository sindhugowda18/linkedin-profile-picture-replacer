// URL of the image to replace profile pictures
const replacementImageUrl = chrome.runtime.getURL("images/icon48.png");
const replacementImageUrlSet = chrome.runtime.getURL("images/icon128.png");

// Function to replace profile pictures
function replaceProfilePictures() {
    const profilePictures = document.querySelectorAll('img.feed-shared-actor__avatar-image, img.ivm-view-attr__img--centered'); // Updated selectors

    profilePictures.forEach(picture => {
        picture.src = replacementImageUrl;
        picture.srcset = replacementImageUrlSet; // For responsive images
    });
}

// Observe DOM changes to handle dynamically loaded content
const observer = new MutationObserver(replaceProfilePictures);
observer.observe(document.body, { childList: true, subtree: true });

// Initial call to replace profile pictures on page load
replaceProfilePictures();
