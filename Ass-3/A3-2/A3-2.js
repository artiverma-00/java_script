function createCounter() {
    let count = 0;  // private variable

    return {
        increment() {
            count++;
            console.log("Current count:", count);
        },

        decrement() {
            count--;
            console.log("Current count:", count);
        },

        show() {
            console.log("Current count:", count);
        }
    };
}
const counter1 = createCounter();
const counter2 = createCounter();

counter1.increment(); // 1
counter1.increment(); // 2

counter2.increment(); // 1 (different counter)
counter2.decrement(); // 0

