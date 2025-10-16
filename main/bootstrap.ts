// Basic Functions
function print(input:any) {
    console.log(input)
}

// Object Shapes
interface  BaseLogic {
    A: number;
    B: number;
    Out: number;
}

const AND: BaseLogic = {
    A: 1,
    B: 0,
    Out: 0,


}
print(AND.A)
