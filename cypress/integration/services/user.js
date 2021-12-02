/// <reference types="cypress" />

describe('Consultar usuários de um PetShop', () => {
    it('Realizar login de um usuário', () => {
        cy.LoginUser().then((resLogin)=> {
            expect(resLogin.status).to.eq(200)
            expect(resLogin.body).to.be.not.null
            expect(resLogin.body.code).exist
        })
    });

    it('Criar um usuário', () => {
        cy.PostUser().then((resPostUser)=> {
            expect(resPostUser.status).to.eq(200)
            expect(resPostUser.body).to.be.not.null
            expect(resPostUser.body.code).exist
        })    
    });

    it('Deletar um usuário', () => {
        cy.DeleteUser().then((resDelUser)=> {
            expect(resDelUser.status).to.eq(404)
            expect(resDelUser.body).to.be.not.null
        })    
    });

    it.only('Atualizar um usuário', () => {
        cy.PutUser().then((resPutUser)=> {
            expect(resPutUser.status).to.eq(200)
            expect(resPutUser.body).to.be.not.null
            expect(resPutUser.body.code).exist
        })    
    });
})



