function Pyramid(base,increment) {
    let heigh=0;
    let stoneCount=0;
    let marbelCount=0;
    let lapisCount=0;
    let goldCount=0;
      if (base %2==0) {
          for (let i = base; i >=2; i-=2) {
            let currlapisCount=0
            heigh++
            if (i==2) {
              goldCount=i*i;
            }else{
             let currmarbelCount=i*4-4
            let currstoneCount= i*i-currmarbelCount
            if (heigh%5==0) {
             currlapisCount =i*i-currstoneCount
             currmarbelCount-= i*4-4
          }
          marbelCount+=currmarbelCount;
          stoneCount+=currstoneCount;
          lapisCount+=currlapisCount;
        }
      }
      }else{
          for (let i = base; i >=1; i-=2) {
            let currlapisCount=0
            heigh++
            if (i==1) {
              goldCount=i*i;
            }else{
               let currmarbelCount=i*4-4
            let currstoneCount= i*i-currmarbelCount
            if (heigh%5==0) {
             currlapisCount =i*i-currstoneCount
             currmarbelCount-= i*4-4
          }
          marbelCount+=currmarbelCount;
          stoneCount+=currstoneCount;
          lapisCount+=currlapisCount;
       }  
      }
    }
    console.log(`Stone required: ${Math.round(stoneCount*increment)}`);
    console.log(`Marble required: ${Math.round(marbelCount*increment)}`);
    console.log(`Lapis Lazuli required: ${Math.round(lapisCount*increment)}`);
    console.log(`Gold required: ${Math.round(goldCount*increment)}`);
    console.log(`Final pyramid height: ${Math.floor(heigh*increment)}`);
  }
 