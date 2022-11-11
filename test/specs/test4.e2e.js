
describe('Test suit 4',()=>{
    it('Move mouse to profile-2',async()=>{
        await browser.url('https://the-internet.herokuapp.com/hovers');
        await browser.pause(4000)
        await $('a[href="/users/2"]').moveTo(30,60);
        await $('a[href="/users/2"]').moveTo(130,160);
        await browser.pause(4000);
    })
})