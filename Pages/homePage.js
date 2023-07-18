
class homePage{


    elements ={


        loginBtn : () => cy.get("#signin"),


        logOffBtn : () => cy.get("#logout")


    }


    clickOnSignin(){


        this.elements.loginBtn().click()


    }


}


module.exports = new homePage();