interface Librarian {
    doWork: () => void;
}

class ElementarySchoolLibrarian implements Librarian {
    doWork() {
        console.log('Reading to and teaching children...');
    }
}

let kidsLibrarian: Librarian = new ElementarySchoolLibrarian();
kidsLibrarian.doWork();