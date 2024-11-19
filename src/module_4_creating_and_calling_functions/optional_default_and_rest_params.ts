// optional age param
// optional params must be after all required params
function CreateCustomer(name: string, age?: number) { }

// default param
function GetBookByTitle(title: string = 'The C Programming Language'){ }

// rest params
function GetBooksReadForCust(name: string, ...bookIds: number[]) { }