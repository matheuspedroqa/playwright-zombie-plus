const { test: base, expect } = require('@playwright/test')
const { MoviesPage } = require('../pages/MoviesPage')
const { LoginPage } = require('../pages/LoginPage')
const { Toast } = require('../pages/Components')
const { executeSQL } = require('../support/database')
const { LandingPage } = require('../pages/LandingPage')



const test = base.extend({
    page: async ({ page }, use) => {
        await use({
            ...page,
            landing: new LandingPage(page),
            login: new LoginPage(page),
            movies: new MoviesPage(page),
            toast: new Toast(page)
        })
    }
})

export { test, expect }