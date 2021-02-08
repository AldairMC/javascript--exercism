export default class Words {
    count = (str: string) => {
        const _result = {} as any
        const words = str.split(/\s+|\t|\n/)
        words.map(element => {
            if(!(element in _result)){
                _result[element] = 1
            }else{
                _result[element] = _result[element] +1
            }
        })
        return _result
    }
}