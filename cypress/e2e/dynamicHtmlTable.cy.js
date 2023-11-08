describe('Testing dynamic html table tag', () => {
  it('scenario_1', () => {
    const data = `[{"name" : "Bob", "age" : 20, "gender": "male"}, {"name": "George", "age" : 42, "gender": "male"}, {"name":
    "Sara", "age" : 42, "gender": "female"}, {"name": "Conor", "age" : 40, "gender": "male"}, {"name":
    "Jennifer", "age" : 42, "gender": "female"}]`;
     cy.visit("https://testpages.herokuapp.com/styled/tag/dynamic-table.html");
     cy.get('details').click();
     cy.get('#jsondata').clear().type(data, {parseSpecialCharSequences: false});
     cy.get('#refreshtable').click();

     cy.get('#dynamictable').contains('Bob');
     cy.get('#dynamictable').contains('George');
     cy.get('#dynamictable').contains('Sara');
     cy.get('#dynamictable').contains('Conor');
     cy.get('#dynamictable').contains('Jennifer');
  })
})