describe('Integration Example', () => {
  it('should load the website', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-testid=page2]').click();
    cy.url().should('eq', 'http://localhost:3000/page2');
  });
});
