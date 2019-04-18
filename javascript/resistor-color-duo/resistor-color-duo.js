const COLORS =  ["black" ,"brown" ,"red" ,"orange" ,"yellow" ,"green" ,"blue" ,"violet" ,"grey" ,"white"]; 
export const value = (arr) => Number(arr.map(i => COLORS.indexOf(i)).join(""))