@sealed
class Person { }

function sealed(target: Function) {
    Object.seal(target);
    Object.seal(target.prototype);
}