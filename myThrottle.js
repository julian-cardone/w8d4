Function.prototype.myThrottle = function(interval) {
    let tooSoon = false;
    let that = this;
    return function() {
        if (tooSoon === false) {
            tooSoon = true;
            setTimeout(() => {
                tooSoon = false;
            }, interval);
            that();
        } else {
            console.log("Too Soon");
        }
    }
}

class Neuron {
    fire() {
      console.log("Firing!");
    }
  }
  
  const neuron = new Neuron();
  
  neuron.fire = neuron.fire.myThrottle(10000);
  
  const interval = setInterval(() => {
    neuron.fire();
  }, 1000);

setTimeout(() => {clearInterval(interval)}, 10000);
