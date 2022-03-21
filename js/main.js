
async function getRandomAdvice() {
    const resp = await fetch('https://api.adviceslip.com/advice');
    const respData = await resp.json();

    document.querySelector('.advice-number').innerHTML = `Advice #${respData.slip.id}`;
    document.querySelector('.advice-text').innerHTML = `"${respData.slip.advice}"`;

}

getRandomAdvice();



    
    
  
        