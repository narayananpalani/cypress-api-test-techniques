describe("Form test", () => {
    it("Can fill the form", () => {
       cy.visit("/");
       cy.get("form");
       cy.get('input[name="name"]')
       .type("Narayanan Palani")
       .should("have.value", "Narayanan Palani");

       cy.get('input[name="email"]')
       .type("np@dev.dev")
       .should("have.value", "np@dev.dev");

       cy.get("textarea")
       .type("Mind you if I ask some silly question?")
       .should("have.value", "Mind you if I ask some silly question?");
       
       cy.server();
       cy.route({
         url: "/users/**",
         method: "POST",
         response: { status: "Form saved!", code: 201 }
       });
   
       cy.get("form").submit();
   
       cy.contains("Form saved!");
      });
});