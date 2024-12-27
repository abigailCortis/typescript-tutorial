export function logMethodInfo(origMethod: any, _context: ClassMethodDecoratorContext) {

    function replacementMethod(this: any, ...args: any[]) {
        console.log(`Decorated construct: ${_context.kind}`);
        console.log(`Decorated construct name: ${_context.name as string}`);
        
        const result = origMethod.call(this, ...args);
        return result;
    }

    return replacementMethod;
}