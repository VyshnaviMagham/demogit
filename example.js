const puppeteer=require('puppeteer');
(async()=>{
const browser=await puppeteer.launch({headless:false});//launching the browser
const page=await browser.newPage();//open a new page in new tab 
await page.goto('https://github.com');
await page.screenshot({path:'github.png'});

const page1=await browser.newPage();
await page1.goto('https://news.ycombinator.com',{waitUntil:'networkidle2'});
await page1.pdf({path:'hn.pdf',format:'A4'});//display pdf file
})();

//{headless:false}browser will appear on the screen
//{waitUntil:'networkidle2'}wait until network becomes idle