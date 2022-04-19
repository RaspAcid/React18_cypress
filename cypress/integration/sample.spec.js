describe('My First Test', () => {
  it('renders and behave correctly', () => {
    cy.visit('http://localhost:3000')

    cy.get('#switcher').click()

    cy.get('#greeting').should('to.exist')

    cy.get('#currentDate').should('to.exist')

    cy.get('#switcher').click()

    cy.get('#currentDate').should('not.to.exist')
  })
})