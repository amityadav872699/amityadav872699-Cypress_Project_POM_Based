
import homePage from "../../Pages/homepage"
import loginPage from "../../Pages/loginPage"

it('Should login to inventory page', () =>{


    cy.visit("https://bstackdemo.com/")
    homePage.clickOnSignin();
    loginPage.login();

        homePage.elements.logOffBtn().should('have.text','Logout')


})

