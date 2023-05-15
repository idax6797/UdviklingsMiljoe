describe('My First Test', () => {
  it('test', function() {
    cy.visit('https://webhay.dk/devevnv/');
    cy.get('input').clear('G');
    cy.get('input').type('Gå en tur{enter}');
    cy.get('.todoName').click();
    cy.get('button').click();
  });
})