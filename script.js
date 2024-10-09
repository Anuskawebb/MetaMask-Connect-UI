const tryAgainButton = document.querySelector('.try-again-btn');
const metamaskLogo = document.querySelector('.metamask-logo');
const polygonLogo = document.querySelector('.polygon-logo');
const loadingAnimation = document.querySelector('.loading');

// Initially show only the MetaMask logo
polygonLogo.style.opacity = '0';
polygonLogo.style.transform = 'scale(0)';

let isLoading = false;

tryAgainButton.addEventListener('click', () => {
    if (!isLoading) {
        isLoading = true;
        loadingAnimation.style.display = 'block';

        
        toggleLogos();
    }
});

function toggleLogos() {
    // Zoom out MetaMask logo and zoom in Polygon logo
    metamaskLogo.style.transform = 'scale(0)';
    metamaskLogo.style.opacity = '0';
    polygonLogo.style.opacity = '1';
    polygonLogo.style.transform = 'scale(1)';

    
    setTimeout(() => {
        // Zoom out Polygon logo and zoom in MetaMask logo
        polygonLogo.style.transform = 'scale(0)';
        polygonLogo.style.opacity = '0';
        metamaskLogo.style.opacity = '1';
        metamaskLogo.style.transform = 'scale(1)';

       
        if (isLoading) {
            setTimeout(toggleLogos, 900); 
        }
    }, 900); 
}
