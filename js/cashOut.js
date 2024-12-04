document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();

const cashOut = document.getElementById('input-cash-out').value;
// console.log(cashOut)

const cashOutNumber = parseFloat(cashOut);
const pinNumber = document.getElementById('input-cash-out-pin').value;
// console.log(pinNumber)

if(pinNumber === '1234'){
    // console.log('Money is reducing')
    const balance = document.getElementById('account-balance').innerText;
    // console.log(balance)
    const balanceNumber = parseFloat(balance);

    const newBalance = balanceNumber - cashOutNumber;
    document.getElementById('account-balance').innerText = newBalance;
}
else{
    alert('Failed To Cash out.Please Try Again!')
}
});