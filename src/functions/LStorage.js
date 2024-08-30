class LStorage {
  #key = 'data';

  getItems() {
    const data = JSON.parse(localStorage.getItem(this.#key));
    return data ? data : [];
  };

  saveItem(todoItem) {
    const data = this.getItems();

    const item = {
      ...todoItem,
      id: Date.now(),
      created_at: new Date().toISOString(),
    };

    data.push(item)

    localStorage.setItem(this.#key, JSON.stringify(data));

    return item;
  };

  getItem(id) {
    return this.getItems().find(item => {
      return item.id === id
    });
  }

  removeItem(id) {
    const data = this.getItems().filter(item => {
      return item.id !== id
    });
    localStorage.setItem(this.#key, JSON.stringify(data));

    return id;
  }

  changeItem(newItem) {
    const data = this.getItems().map(item => {
      return newItem.id === item.id ? newItem : item;
    })

    localStorage.setItem(this.#key, JSON.stringify(data));
    return newItem;
  }
}

const storage = new LStorage();

export default storage;
