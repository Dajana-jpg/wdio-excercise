//prvi pokušaj s duplim- prošlo je 
/* describe('Login Page', async () => {
  it('should let you log in', async () => {
   await browser.url('https://www.saucedemo.com/');
  const input = await $('#user-name', '#password');
   await input.setValue('standard_user', 'secret_sauce');
  });
 });
 */

describe("SwagLabs Demo webs", async () => {
  it("should not let you log in", async () => {
    await browser.url("https://www.saucedemo.com/");

    const usernameInput = await $("#user-name");
    const passwordInput = await $("#password");

    await usernameInput.setValue("stand_user");
    await passwordInput.setValue("secrdasde");

    const loginButton = await $("#login-button");
    await loginButton.click();

    const errorLabel = await $('[data-test="error"]');
    await expect(errorLabel).toHaveText("Epic sadface: Username and password do not match any user in this service");
  });

  it("should not let you log in", async () => {
    const usernameInput = await $("#user-name");
    const passwordInput = await $("#password");
    await usernameInput.setValue("standard_user");
    await passwordInput.setValue("secret_sauce");
    
    const loginButton = await $("#login-button");
    await loginButton.click();

    const heading = await $(".title");
    await expect(heading).toHaveText("PRODUCTS");

  });

it("Logout", async () => {
const loginButton = await $("#react-burger-menu-btn");
await loginButton.click();

const logoutButton = await $("#logout_sidebar_link");
await logoutButton.click();

const login = await $(".login-box");
await expect(login).toBeDisplayed();
});
  
});