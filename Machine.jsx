class Machine extends React.Component {
    render() {
        const { s1, s2, s3 } = this.props;
        let msg;
        msg = s1 !== s2 ? "You lose!" : s1 !== s3 ? "You lose!" : "You win!";
        return (
            <div>
                <h3>{s1}{s2}{s3}</h3>
                <p>{ msg }</p>
            </div>
        )
    }
}