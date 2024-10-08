// document.getElementById('connectButton').addEventListener('click', async () => {
//     if (typeof window.ethereum !== 'undefined') {
//         try {
//             const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
//             document.getElementById('account').innerText = `Connected: ${accounts[0]}`;
//         } catch (error) {
//             console.error('Error connecting to MetaMask:', error);
//         }
//     } else {
//         alert('MetaMask is not installed');
//     }
// });


document.getElementById('connectButton').addEventListener('click', function() {
    
    document.getElementById('loader').style.visibility = 'visible';
    document.getElementById('loader').style.opacity = '1';

    
    setTimeout(function() {
       
        document.getElementById('loader').style.visibility = 'hidden';
        document.getElementById('loader').style.opacity = '0';

        
    }, 3000); 
});
