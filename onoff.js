#!/usr/bin/env node
import {Gpio} from 'onoff-debug';

if(process.argv[2] === 'info'){
    Gpio.info();
} else if(process.argv[2] === undefined) {
    console.log('define pin for switch')
} else {
    const pin2 = new Gpio(parseInt(process.argv[2]), 'out', 'both', {reconfigureDirection: false});
    if(pin2.readSync() === 1){
        pin2.writeSync(0);
    } else {
        pin2.writeSync(1);
    }
}


