// cau 1
so_chan = []

function findEven(number) {
    for (let i=4; i<=number; i++) {
        if (i%2==0) {
            so_chan += i
        }
    }
}
findEven(10)
console.log(so_chan)

// cau 3
// c1
a = [0,1,2,3,4]
tam_giac = []
function numberOneTriangle() {
    for (let i of a) {
        tam_giac +=1
        console.log(tam_giac)
    }
    
}

numberOneTriangle()

// c2
tam_giac = []
function numberOneTriangle1(n) {
    for (let i=1; i<=n; i++) {
        tam_giac +=1;
        console.log(tam_giac)
    }
}

numberOneTriangle1(5)