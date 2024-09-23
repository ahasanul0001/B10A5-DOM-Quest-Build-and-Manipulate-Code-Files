const myWallet = document.getElementById('my-balance').innerText;
let myWalletAmount = parseFloat(myWallet);
console.log(myWalletAmount);

document.getElementById('btn-noakhali')
    .addEventListener('click',function(){
        event.preventDefault();

        const totalDonationNoakhali = document.getElementById('total-donation-noakhali').innerText;
        let tdnAmount = parseFloat(totalDonationNoakhali);
        const donationNoakhali = document.getElementById('donate-noakhali').value;
        let dnAmount = parseFloat(donationNoakhali);
        
        if(isNaN(dnAmount) || dnAmount>myWalletAmount || dnAmount<0 || dnAmount.toString()!==donationNoakhali){
            alert("Invalid Donation Amount");
            return;
        }
        else{
            tdnAmount = dnAmount+tdnAmount;
            document.getElementById('total-donation-noakhali').innerText = tdnAmount;
    
            myWalletAmount = myWalletAmount-dnAmount; 
            document.getElementById('my-balance').innerText = myWalletAmount;

            document.getElementById('my_modal_1').classList.remove('hidden');
        }
    });


document.getElementById('btn-feni')
    .addEventListener('click',function(){
        event.preventDefault();

        const totalDonationFeni = document.getElementById('total-donation-feni').innerText;
        let tdfAmount = parseFloat(totalDonationFeni);
        const donationFeni = document.getElementById('donate-feni').value;
        let dfAmount = parseFloat(donationFeni);
        
        if(isNaN(dfAmount) || dfAmount>myWalletAmount || dfAmount<0 || dfAmount.toString()!==donationFeni){
            alert("Invalid Donation Amount");
            return;
        }
        else{
            tdfAmount = dfAmount+tdfAmount;
            document.getElementById('total-donation-feni').innerText = tdfAmount;
 
            myWalletAmount = myWalletAmount-dfAmount; 
            document.getElementById('my-balance').innerText = myWalletAmount;

            document.getElementById('my_modal_2').classList.remove('hidden');
        }
    });


document.getElementById('btn-movement')
    .addEventListener('click',function(){
        event.preventDefault();

        const totalDonationMovement = document.getElementById('total-donation-movement').innerText;
        let tdmAmount = parseFloat(totalDonationMovement);
        const donationMovement = document.getElementById('donate-movement').value;
        let dmAmount = parseFloat(donationMovement);
        
        if(isNaN(dmAmount) || dmAmount>myWalletAmount || dmAmount<0 || dmAmount.toString()!==donationMovement){
            alert("Invalid Donation Amount");
            return;
        }
        else{
            tdmAmount = dmAmount+tdmAmount;
            document.getElementById('total-donation-movement').innerText = tdmAmount;

            myWalletAmount = myWalletAmount-dmAmount; 
            document.getElementById('my-balance').innerText = myWalletAmount;

            document.getElementById('my_modal_3').classList.remove('hidden');
        }
    });


document.getElementById('donation-btn')
    .addEventListener('click',function(){
        showHiddenSectionById('donation-section');
    });

document.getElementById('history-btn')
    .addEventListener('click',function(){
        showHiddenSectionById('history-section');
    });

//blog button
// document.getElementById('btn-blog')
//     .addEventListener('click', function(){
//         window.location.href = 'blog.html'
//     })
//home button
document.getElementById('btn-home')
    .addEventListener('click', function(){
        window.location.href = 'home.html';
    });

