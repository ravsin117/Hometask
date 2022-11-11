describe('Test suit 3',()=>{
    it('switch to middle frame and verify text',async()=>{
        await browser.url('https://the-internet.herokuapp.com/nested_frames');
        await browser.pause(2000);
        // const midFrame = await $('frame[src="/frame_middle"]')
        // console.log("```````````````",midFrame)
        // browser.frame(midFrame.value);
        // await browser.switchToFrame(midFrame);
        // const textContent = await $('#content');
        // console.log('`````````````````````',textContent.getText());
        let element = await browser.findElement("css selector",'frame[src="/frame_middle"]');
        console.log("`````````````````````````````````",element)
        // await browser.switchToFrame(element);
        
    })
})