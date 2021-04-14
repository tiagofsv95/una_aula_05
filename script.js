window.onload = function () {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
        .then(dados => {
            let img = document.createElement('img');
            img.src = dados.message;
            document.getElementById('dog_section').appendChild(img)
        })
    getUsersData();
}

function appendUsersTablhe(dados) {
    const usersTable = document.getElementById('users');

    dados.forEach(function(dado) {
        let usersTableRow = document.createElement('tr');
        usersTableRow.className = 'usersTableBodyRow';

        let user = document.createElement('td');
        user.innerText = dado.username;

        let username = document.createElement('td');
        username.innerText = dado.name;

        let email = document.createElement('td');
        email.innerText = dado.email;

        let address = document.createElement('td');
        address.innerText = `${dado.address.street}, ${dado.address.suite} - ${dado.address.city}`;

        let phone = document.createElement('td');
        phone.innerText = dado.phone;

        let website = document.createElement('td');
        website.innerText = dado.website;

        let company = document.createElement('td');
        company.innerText = dado.company.name;

        usersTableRow.append(user, username, email, address, phone, website, company)

        usersTable.append(usersTableRow);
    })
}

function getUsersData() {
    /* /users/{username}/followers */
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(dados => appendUsersTablhe(dados))
}
