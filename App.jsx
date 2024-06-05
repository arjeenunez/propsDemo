function rando() {
    return Math.floor(Math.random() * 3);
};

class App extends React.Component {
    render() {
        const symbols = ["🍉", "🍌", "🍒"];
        return (
            <div>
                <Machine
                    s1={symbols[rando()]}
                    s2={symbols[rando()]}
                    s3={symbols[rando()]}
                />
                <Machine
                    s1={symbols[rando()]}
                    s2={symbols[rando()]}
                    s3={symbols[rando()]}
                />
                <Machine
                    s1={symbols[rando()]}
                    s2={symbols[rando()]}
                    s3={symbols[rando()]}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));