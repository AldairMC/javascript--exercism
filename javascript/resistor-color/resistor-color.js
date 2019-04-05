export const COLORS =  ["black" ,"brown" ,"red" ,"orange" ,"yellow" ,"green" ,"blue" ,"violet" ,"grey" ,"white"];

export const colorCode = (str) => {
    for (let index = 0; index < COLORS.length; index++) {
        if(COLORS[index] === str){
            return index;
        }
    }
}



 