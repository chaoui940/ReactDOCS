function tick() {
    let element (
    <div>
        <h1>Hi</h1>
        <h2>it is {new Date().toLocaleDateString()}</h2>
    </div>
    );
    ReactDOM.render(element , document.getElementById('root'));
}
setInterval(tick,1000);