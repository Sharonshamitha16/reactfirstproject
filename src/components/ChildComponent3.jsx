export function ChildComponent3() {
    return (<div><h1>Child3</h1><GrandChild1 /><GrandChild2 /></div>)
}

function GrandChild1() {
    return <h1>Grand Child 1 </h1>

}

function GrandChild2() {
    return <h1>Grand Child 2</h1>

}
