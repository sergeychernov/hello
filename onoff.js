#!/usr/bin/env node
import {Gpio} from 'onoff-debug';
const pin2 = new Gpio(2, 'out');
if(pin2.readSync() === 1){
    pin2.writeSync(0);
} else {
    pin2.writeSync(1);
}

console.log(pin2.readSync());