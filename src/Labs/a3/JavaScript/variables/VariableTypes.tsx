function VariableTypes() {
    let numberVarible = 123;
    let floatingPointNumber = 234.345;
    let stringVarible = 'Hello World!';
    let booleanVarible = true;
    let isNumber =  typeof numberVarible;
    let isString = typeof stringVarible;
    let isBoolean  = typeof booleanVarible;
    return(
        <div>
            <h2>Varibale Types</h2>
            numberVarible = {numberVarible}<br/>
            floatingPointNumber = {floatingPointNumber}<br/>
            stringVarible = {stringVarible}<br/>
            booleanVarible = {booleanVarible+""}<br/>
            isNumber = {isNumber}<br/>
            isString = {isString}<br/>
            isBoolean = {isBoolean}<br/>
        </div>
    );
}
export default VariableTypes;