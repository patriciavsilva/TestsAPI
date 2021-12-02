
Cypress.Commands.add('LoginUser', () => {
    cy.request({ 
        method: "GET",
        failOnStatusCode: false,
        url: 'user/login?username=Patricia&password=123456',
        headers: {
            accept: "application/json"
        } 
    });
})

Cypress.Commands.add('PostUser', () => {
    cy.request({ 
        method: "POST",
        failOnStatusCode: false,
        url: 'user',
        headers: {
            accept: "application/json",
            'Content-Type': 'application/json'
        },
        body:{
            "id": 1,
            "username": "Patriciavsilva",
            "firstName": "Patricia",
            "lastName": "da Silva",
            "email": "patricia@teste.com",
            "password": "123456",
            "phone": "999113102",
            "userStatus": 0
          }

    });
})

Cypress.Commands.add('DeleteUser', () => {
    cy.request({ 
        method: "DELETE",
        failOnStatusCode: false,
        url: 'user/Patriciavsilva',
        headers: {
            accept: "application/json",
            
        }
    });
})        

Cypress.Commands.add('PutUser', () => {
    cy.request({ 
        method: "PUT",
        failOnStatusCode: false,
        url: 'user/Patriciavsilva',
        headers: {
            accept: "application/json",
            'Content-Type': 'application/json'   
        },
        body:{
            "id": 0,
            "username": "Patriciasilva",
            "firstName": "string",
            "lastName": "string",
            "email": "string",
            "password": "string",
            "phone": "string",
            "userStatus": 0
        }
    });
})   
