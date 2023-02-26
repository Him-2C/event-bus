type Listener = (data: unknown) => void;

class MainEventBus {
  private _events: Record<string, Listener[]> = {};

  private _getListeners = (name: string): Listener[] => {
    if (!this._events[name]) {
      this._events[name] = [];
    }

    return this._events[name];
  };

  subscribe = (name: string, listener: Listener) => {
    this._getListeners(name).push(listener);
  };

  unsubscribe = (name: string, listener: Listener) => {
    const handlers = this._getListeners(name);
    const index = handlers.findIndex((item) => item === listener);

    if (index > -1) {
      handlers.splice(index, 1);
    }
  };

  publish = <T>(name: string, data: T) => {
    this._getListeners(name).forEach((listener) => {
      listener(data);
    });
  };
}

const EventBus = new MainEventBus();
export default EventBus;
