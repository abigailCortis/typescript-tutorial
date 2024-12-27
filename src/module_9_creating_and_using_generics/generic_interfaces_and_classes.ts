interface Inventory<T> {
    getNewestItem: () => T;
    addItem: (newItem: T) => void;
    getAllItems: () => Array<T>;
}

let bookInventory: Inventory<Book>;

// populate the inventory here ...

let allBooks: Array<Book> = bookInventory.getAllItems();

class Catalog<T> implements Inventory<T> {
    private catalogItems = new Array<T>();
    addItem(newItem: T) {
        this.catalogItems.push(newItem);
    }
    // implement other interface methods here
}

let bookCatalog = new Catalog<Book>();