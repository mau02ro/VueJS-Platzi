class PlatziReactive {
  // Dependencias
  deps = new Map();

  constructor(options) {
    this.origen = options.data();

    const self = this;

    //destino
    this.$data = new Proxy(this.origen, {
      get(target, name) {
        if (Reflect.get(target, name)) {
          self.track(target, name);
          return Reflect.get(target, name);
        }
        console.warn("La propiedad ", name, " no existe");
        return "";
      },
      set(target, name, value) {
        Reflect.set(target, name, value);

        self.trigger(name);
      },
    });
  }

  track(target, name) {
    if (!this.deps.has(name)) {
      const effect = () => {
        document.querySelectorAll(`*[p-text=${name}]`).forEach((element) => {
          this.pText(element, target, name);
        });
      };

      this.deps.set(name, effect);
    }
  }

  trigger(name) {
    const effect = this.deps.get(name);
    effect();
  }

  mount() {
    document.querySelectorAll("*[p-text]").forEach((element) => {
      this.pText(element, this.$data, element.getAttribute("p-text"));
    });

    document.querySelectorAll("*[p-model]").forEach((element) => {
      const name = element.getAttribute("p-model");
      this.pModel(element, this.$data, name);

      element.addEventListener("input", () => {
        Reflect.set(this.$data, name, element.value);
      });
    });
  }

  pText(element, target, name) {
    element.innerText = Reflect.get(target, name);
  }

  pModel(element, target, name) {
    // element.value = target[name];
    element.value = Reflect.get(target, name);
  }
}

var Platzi = {
  createApp(options) {
    return new PlatziReactive(options);
  },
};
