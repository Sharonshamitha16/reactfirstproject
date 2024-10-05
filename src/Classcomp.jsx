import { Component } from "react";
export default class ClassBasedComp extends Component {
    constructor() { 
        super();
        
        this.state = {
            count: 0,
            username:""
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this) 
    }
    increment() {
        this.setState({ count: this.state.count + 1 }) // this won't work until and unless we bind the function through this

    }
    decrement() {
        this.setState({ count: this.state.count - 1 })

    }
    render() {
        console.log(this.state);

        return (
            <div className="flex justify-center item-center mx-20">

                <p className="flex gap-4">
                    {this.state.count}
                </p>
                < div className="flex gap-4">
                    <button onClick={this.increment} className="px-4 py-1.5 rounded bg-blue-200">
                        Increment
                    </button>
                    <button onClick={this.decrement} className="px-4 py-1.5 rounded bg-blue-200">
                        Decrement
                    </button>
                </div>
            </div>
        )
    }
}