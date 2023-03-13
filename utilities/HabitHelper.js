import * as React from 'react';

export function test() {
    return 'test worked';
}

export function toggleIsRunning() {
    const [isRunning, setIsRunning] = React.useState(false);
    return [() => setIsRunning(!isRunning), isRunning];
}

export function secondsToTime(totalSeconds) {
    const totalMinutes = Math.floor(totalSeconds / 60);

    const seconds = totalSeconds % 60;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    if (hours) {
        return hours + ':' + minutes + ':' + seconds; 
    } else {
        return minutes + ':' + seconds;
    }
}

//function useForceUpdate() {
//    const [value, setValue] = React.useState(0);
//    return [() => setValue(value + 1), value];
//}
