describe('Great British Bake Off', () => {
    before(() => {
        // setup pact
        // intercept ingredients (chocolate)
    })

    it('Cake ingredients', () => {
        cy.visit('/ingredients/chocolate')
        cy.get('button').click()
        // use pact wait
        cy.contains('li', 'sugar').should('be.visible')
    })
})
