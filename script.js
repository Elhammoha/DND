/* Place all the JavaScript here */

let dndBalance = 0;
let energy = 100;
let totalSupply = 1000000000;

function mine() {
    if (energy > 0) {
        energy--;
        let minedAmount = Math.random() < 0.1 ? 10 : Math.floor(Math.random() * 9) + 1;
        dndBalance += minedAmount;
        totalSupply -= minedAmount;
        document.getElementById('dndBalance').innerText = dndBalance;
        document.getElementById('totalSupply').innerText = totalSupply;
        document.getElementById('energy').innerText = energy;
        document.getElementById('footerEnergy').innerText = energy;
        alert(You mined ${minedAmount} DND!);
        if (energy === 0) {
            setTimeout(() => {
                energy = 100;
                document.getElementById('energy').innerText = energy;
                document.getElementById('footerEnergy').innerText = energy;
            }, 3600000); // 1 hour
        }
    } else {
        alert("You are out of energy. Wait for an hour to recharge.");
    }
}

function showSection(sectionId) {
    document.getElementById('main').classList.add('hidden');
    document.getElementById('referral').classList.add('hidden');
    document.getElementById('wallet').classList.add('hidden');
    document.getElementById(sectionId).classList.remove('hidden');
}

function saveSeedPhrase() {
    const seedPhrase = document.getElementById('seedPhrase').value;
    if (seedPhrase) {
        const walletList = document.getElementById('walletList');
        const walletId = wallet_${Date.now()};
        localStorage.setItem(walletId, seedPhrase);
        const listItem = document.createElement('div');
        listItem.innerText = Wallet ID: ${walletId};
        walletList.appendChild(listItem);
    }
}
