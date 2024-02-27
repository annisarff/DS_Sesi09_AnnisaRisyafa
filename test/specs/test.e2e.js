const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
//         await LoginPage.open()

//         await LoginPage.login('tomsmith', 'SuperSecretPassword!')
//         await expect(SecurePage.flashAlert).toBeExisting()
//         await expect(SecurePage.flashAlert).toHaveTextContaining(
//             'You logged into a secure area!')
//     })
// })

describe('Swag Labs', () => {
    it('should login with standard_user credentials', async () =>{
        // TODO : akan dibuat skenario positif case
        await LoginPage.open()
        await LoginPage.login()
    })
    it('should get login error with locked_out_user credentials', async () =>{
        // TODO : akan dibuat skenario negatif case
        await LoginPage.open()
        await LoginPage.login()
        await LoginPage.validateLockedOutUserError()
    })
    
})