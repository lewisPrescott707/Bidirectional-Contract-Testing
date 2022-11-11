describe('Great British Bake Off', () => {
    const url = '/ingredients/chocolate'
    before(() => {
        // setup pact
        cy.setupPact('bake-off-ui', 'ingredients-api')
        // intercept ingredients (chocolate)
        cy.intercept(`http://localhost:5000/ingredients/chocolate`,
        {
          statusCode: 200,
          body: ["sugar"],
          headers: { 'access-control-allow-origin': '*' }
        }).as('ingredients')
    })

    it('Cake ingredients', () => {
        cy.visit(url)
        cy.get('button').click()
        // use pact wait
        cy.usePactWait('ingredients').its('response.statusCode').should('eq', 200)
        cy.contains('li', 'sugar').should('be.visible')
    })
})
