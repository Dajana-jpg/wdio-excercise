describe('Login Page', async () => {
    it('should not let you log in', async () => {
      await browser.url('https://www.saucedemo.com/');
      const input = await $('#user-name');
      await input.setValue('standar_user');
    });
  
    it('should write out password login error', async () => {
      await browser.url('https://www.saucedemo.com/');
      const input = await $('#password');
      await input.setValue('secret_suce');
    });
  
  });