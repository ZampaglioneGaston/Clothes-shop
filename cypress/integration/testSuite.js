/// <reference types="Cypress"/> 

describe("Store", function () {

    beforeEach(function () {
        cy.visit("/");
        cy.fixture('pageObj').then((par) =>{
            this.pageObj = par
        })
    })


    it('List', function () {
        cy.addSpecific('pageObj', 'Printed Dress', '26.00');
    });

    it('Invoke', function () {
        cy.get(this.pageObj.womenDrop).invoke('attr', 'style', 'display:block').find('li').each(($el, i) => {
            cy.get($el).should('be.visible');
        });
    });
});