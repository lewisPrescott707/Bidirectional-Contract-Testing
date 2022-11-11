describe('Great British Bake Off', () => {
    const url = '/ingredients/chocolate'
    before(() => {
        // setup pact
        // intercept ingredients (chocolate)
    })

    it('Cake ingredients', () => {
        cy.visit(url)
        cy.get('button').click()
        // use pact wait
        cy.contains('li', 'sugar').should('be.visible')
    })
})
