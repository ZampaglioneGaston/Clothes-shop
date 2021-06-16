
Cypress.Commands.add('addSpecific', (fixture, item, price) => { 

    cy.fixture(fixture).then((par) => {
        cy.get(par.bestBtn).click();
        cy.get(par.bestContainer).as('Best');
        cy.get('@Best').find(par.prodName).each(($el, i) => {
            cy.get('@Best').eq(i).find(par.price).then(function ($el1) {
                let precio = $el1.text();
                
                if ($el.attr('title') === item && precio.includes(price)) {
                    cy.get('@Best').eq(i).contains('Add to cart').click({ force: true });
                    cy.log('Added');
                    cy.wait(4000);
                    cy.get(this.pageObj.cartLayer).should('be.visible').should('contain.text', item)
                }
            });
        });
    })

});