export function ChildComponent2() {
    return (<div><h1>Child2</h1>
        <GrandChild2 />
    </div>)
}
function GrandChild2() {
    return (<div><h1>Grandchild2</h1><Great_Grand_child1 /><Great_Grand_child2 /></div>)


}
function Great_Grand_child1() {
    return <h1>Great Grand Child 1 </h1>
}

function Great_Grand_child2() {
    return <h1>Great Grand child2 </h1>
}