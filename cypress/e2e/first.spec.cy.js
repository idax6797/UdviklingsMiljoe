describe('My First Test', () => {
  it('test', function() {
    cy.visit('http://localhost:5173/');
    cy.get('input').clear('G');
    cy.get('input').type('Gå en tur{enter}');
    cy.get('.todoName').click();
    cy.get('button').click();
  });
})