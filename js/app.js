// login button event handler 

const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function () {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const loginAreaa = document.getElementById("bank");
    loginAreaa.style.display = "block";
})
// Deposit button event handler 
const depositBtn = document.getElementById('addDeposit')
depositBtn.addEventListener('click', function () {
    const depositAmount = document.getElementById('depositAmount').value;
    const depositNumber = parseFloat(depositAmount)
    // console.log(depositNumber);

    const cD = document.getElementById('cD').innerText
    const cDN = parseFloat(cD)
    const tD = depositNumber + cDN

    document.getElementById('cD').innerText = tD;


    const tB = document.getElementById('tB').innerText
    const tBN = parseFloat(tB)
    const mA = depositNumber + tBN;

    document.getElementById('tB').innerText = mA;

})
const withdrawBtn = document.getElementById('addWithdraw')
withdrawBtn.addEventListener('click', function () {
    const withdrawAmount = document.getElementById('withdrawAmount').value
    const withdrawNumber = parseFloat(withdrawAmount)
    console.log(withdrawNumber);
    const cW = document.getElementById('cW').innerText
    const cWN = parseFloat(cW)
    const tW = withdrawNumber + cWN

    document.getElementById('cW').innerText = tW;


    const tB = document.getElementById('tB').innerText
    const tBN = parseFloat(tB)
    const mA = tBN - withdrawAmount;

    document.getElementById('tB').innerText = mA;
})