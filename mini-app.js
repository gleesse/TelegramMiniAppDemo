document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('paymentForm');
    form.addEventListener('submit', handleFormSubmit);
});

function handleFormSubmit(event) {
    event.preventDefault();

    const Receiver = document.getElementById('receiverName').value;
    const BankAccountNumber = document.getElementById('bankAccount').value;
    const Amount = document.getElementById('amount').value;
    const Note = document.getElementById('note').value;

    const UserInfo = Telegram.WebApp.initData || '';
    document.getElementById('user-info').value = UserInfo;

    const formData = {
        Receiver,
        BankAccountNumber,
        Amount,
        Note,
        UserInfo
    };

    fetch('https://localhost:7151/api/Bill/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
}
