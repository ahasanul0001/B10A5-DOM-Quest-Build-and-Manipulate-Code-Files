// function showNewWindow(){

// }

function showHiddenSectionById(id, btnID){
    document.getElementById('donation-section').classList.add('hidden')
    document.getElementById('history-section').classList.add('hidden')

    document.getElementById('donation-btn').classList.remove('bg-tia')
    document.getElementById('history-btn').classList.remove('bg-tia')

    document.getElementById(id).classList.remove('hidden');
    document.getElementById(btnID).classList.remove('bg-transparent');
    document.getElementById(btnID).classList.add('bg-tia');
}