export default function Conditions() {
    let age = 30;

    if (age > 18) {
        return <Success />;
    } else {
        return <Failure />;
    }
}

function Success() {
    return <h2>Eligible to vote</h2>;
}
function Failure() {
    return <h2>Not Eligible to vote</h2>;
}
