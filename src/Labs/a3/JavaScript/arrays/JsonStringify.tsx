function JsonStringify() {
    const squares = [1, 4, 9, 16, 25, 36];
    console.log(JSON.stringify(squares));
    return (
        <>
            <h3>JSON Stringify</h3>
            squares = {JSON.stringify(squares)}<br/>
        </>
    );
}
export default JsonStringify;