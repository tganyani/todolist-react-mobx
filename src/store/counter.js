import {makeObservable, observable, computed, action} from 'mobx'

class Counter {
    value = 0
    constructor(value){
        makeObservable(this,{
            value:observable,
            increament: action,
            dencreament:action,
            increamentByValue: action,
            dencreamentByValue: action,
            reset: action,
            setValue: action
        })

        this.value = value
    }

    increament(){
        this.value += 1
    }

    dencreament(){
        this.value -= 1
    }
    increamentByValue(incr){
        this.value += incr
    }
    dencreamentByValue(dencr){
        this.value -= dencr
    }
    reset(){
        this.value = 0
    }
    setValue(x){
        this.value = x
    }
}


export default Counter