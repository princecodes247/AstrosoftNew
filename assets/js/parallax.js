class Parallax {
    constructor(options) {
        this.options = options;
        this.init();
    }

    init() {
        this.options.conatainer.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
            this.move();
        });
    }

    move() {
        this.options.element.style.backgroundPositionX = this.options.speedX * (this.mouseX - this.options.container.offsetWidth / 2) + 'px';
        this.options.element.style.backgroundPositionY = this.options.speedY * (this.mouseY - this.options.container.offsetHeight / 2) + 'px';
    }
    on(name, listener) {
        if (!_this._events[name]) {
          _this._events[name] = [];
        }
    
        _this._events[name].push(listener);
      }
    
      removeListener(name, listenerToRemove) {
        if (!_this._events[name]) {
          throw new Error(`Can't remove a listener. Event "${name}" doesn't exits.`);
        }
    
        const filterListeners = (listener) => listener !== listenerToRemove;
    
        _this._events[name] = _this._events[name].filter(filterListeners);
      }
      emit(name, data = {}) {
        if (!_this._events[name]) {
          // throw new Error(`Can't emit an event. Event "${name}" doesn't exits.`);
          console.warn(`Can't emit an event. Event "${name}" doesn't exits.`);
          return;
        }
        console.log(data)
        const fireCallbacks = (callback) => {
          callback(data);
        };
    
        _this._events[name].forEach(fireCallbacks);
      }
}
let scene = document.querySelectorAll('.scene');
let parallaxInstance = new Parallax(scene);


// Language: javascript
// TODO:
// [ ] Create a class for the parallax instance

