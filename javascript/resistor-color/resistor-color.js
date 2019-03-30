export const colorCode = (str) =>{
    var code = ["black" ,"brown" ,"red" ,"orange" ,"yellow" ,"green" ,"blue" ,"violet" ,"grey" ,"white"];
 
    for (let index = 0; index < code.length; index++) {
        if(code[index] === str){
            return index;
        }
    }
}

export const COLORS = ( ) => {
    return ["black" ,"brown" ,"red" ,"orange" ,"yellow" ,"green" ,"blue" ,"violet" ,"grey" ,"white"];
}

 