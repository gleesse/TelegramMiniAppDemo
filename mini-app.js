document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('paymentForm');
    form.addEventListener('submit', handleFormSubmit);
});

function handleFormSubmit(event) {
    event.preventDefault();

    const receiverName = document.getElementById('receiverName').value;
    const bankAccount = document.getElementById('bankAccount').value;
    const amount = document.getElementById('amount').value;
    const note = document.getElementById('note').value;

    const userInfo = Telegram.WebApp.initData || '';
    const formData = {
        receiverName,
        bankAccount,
        amount,
        note,
        userInfo
    };

    Telegram.WebApp.sendData(JSON.stringify(formData));
}