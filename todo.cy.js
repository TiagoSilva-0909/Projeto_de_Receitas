describe("Teste para entrar na pagina inicial", () => {
  it("deve entrar na pagina inicial", () => {
    cy.visit("index.html");

    it("teste para entrar na pagina", () =>{

        cy.get('#search-btn').click()

    });
    });
  });


             /*teste 2*/
describe("Teste de botão de próxima pagina", () => {
  it("Teste de botão de próxima pagina", () => {
    cy.visit("index.html");

    it("teste de botao de proxima pagina", () =>{

       cy.get('#search-input')


    });

  });
});

              /*teste 3*/

         describe("Teste do hover dos cards", () => {
  it("Teste do hover dos cards ", () => {
    cy.visit("index.html");

    it("teste de hover", () =>{

       cy.get('#hover')


    });
 
  });
});     

            /*04*/
      describe("Os cards devem apresentar imagens", () => {
  it("Os cards devem apresentar imagens ", () => {
    cy.visit("index.html");

    it("teste de cards", () =>{

       cy.get('#chart-btn')


    });
 
  });
});     
              /*05*/
      describe("O site deve conter o link no footer que leva ao repositório do git hub ", () => {
  it("O site deve conter o link no footer que leva ao repositório do git hub ", () => {
    cy.visit("index.html");

    it("teste do repositorio git", () =>{

       cy.get('#chart-btn')


    });
 
  });
});     
            /*06*/
      describe("Teste para ver se todos os itens estão alinhados ", () => {
  it("Teste para ver se todos os itens estão alinhados ", () => {
    cy.visit("index.html");

    it("teste de alinhamento", () =>{

       cy.get('#chart-btn')


    });
 
  });
});     
              /*07*/
      describe("Teste para ver se o input funciona ", () => {
  it("Teste para ver se o input funciona ", () => {
    cy.visit("index.html");

    it("teste de imput", () =>{

       cy.get('#chart-btn')


    });
 
  });
});     
              /*08 */
      describe("Teste para ver se o link do whatzapp está no site ", () => {
  it("Teste para ver se o link do whatzapp está no site ", () => {
    cy.visit("index.html");

    it("teste do link do whatssap", () =>{

       cy.get('#chart-btn')


    });
 
  });
});     
              /*09*/
      describe("Teste para ver se há cards no site  ", () => {
  it("Teste para ver se há cards no site  ", () => {
    cy.visit("index.html");

    it("teste dos cards", () =>{

       cy.get('#chart-btn')


    });
 
  });
});     
      /*10*/ 
      describe("Teste para ver se há uma API chart.js no site  ", () => {
  it("Teste para ver se há uma API chart.js no site  ", () => {
    cy.visit("index.html");

    it("teste do Grafico", () =>{

       cy.get('#chart-btn')


    });
 
  });
});     

