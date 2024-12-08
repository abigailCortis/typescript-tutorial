class ReferenceItem {
    title: string = "";
    printItem(): void { 
      // print something here
    }
  }
  
  class Journal extends ReferenceItem {
    constructor() {
      super();
    }
  
    contributors: string[] = [];
  }