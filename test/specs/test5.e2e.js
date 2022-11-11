describe('Test suit 5 ',()=>{
    it('checks if we pressed backspace',async()=>{
        await browser.url('https://the-internet.herokuapp.com/key_presses');
        let inputfield = await $('#target');
        await inputfield.setValue('\uE003')
        let result = await $('#result').getText();
        expect(await result).toHaveTextContaining("You entered: BACK_SPACE")
    })
})