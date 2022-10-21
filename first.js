frames = fuction ()
    if ((Math.sqrt(n)).toString().includes('.')){
        var k = n
        while((Math.sqrt(k)).toString().includes('.'))
            k++
        sqrK = Math.sqrt(k)
    }

    const fullObj = []

    if(k) {
        var widthFr = width / sqrK
        
        var heightFr = height / sqrK
        var y = heightFr*(sqrK - Math.ceil(n/sqrK))/2
        if (n % sqrK > 0) {
            var x = widthFr*(sqrK - (n % sqrK))/2
        } 
        else {
            var x = 0
        }
        for (let i = 0; i < Math.ceil(n/sqrK); i++) {
            for(let j = 0; j < sqrK; j++) {
                if (i == 0 && j >= (n % sqrK) && (n % sqrK > 0)) break
                else {
                    let tempObj = {width: Math.round(widthFr), height:  Math.round(heightFr), x:  Math.round(x+widthFr/2), y:  Math.round(y)}
                    fullObj.push(tempObj)
                    x+=widthFr
                }
            }
            x = 0
            y+=heightFr
        }
    }
    else {
        sqrn = Math.sqrt(n)
        var widthFr = width / sqrn
        var heightFr = height / sqrn
        var x = 0, y = 0
        for (let i = 0; i < sqrn; i++) {
            for(let j = 0; j < sqrn; j++) {
                let tempObj = {width: Math.round(widthFr), height:  Math.round(heightFr), x:  Math.round(x+widthFr/2), y:  Math.round(y)}
                fullObj.push(tempObj)
                x+=widthFr
            }
            x = 0
            y+=heightFr
        }
    }

    return fullObj