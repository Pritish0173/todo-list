class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            input: "",

        };
    }

    render() {
        return (
            <div>
                <h1>Tasks</h1>
                <br></br>
                <br></br>

                <table>
                    <tr>
                        <th>S.No.</th>
                        <th>Task</th> 
                        <th>Action</th>
                    </tr>
                    {this.state.tasks.map((tasks,i) =>
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>{tasks}</td>
                            <td><button class="delete" onClick={() => { this.deleteTask(i)}}>X</button></td>
                        </tr>
                    )}                   
                </table>
                <br></br>
                <br></br>
                <div>
                    <h5>Number of Tasks: {this.state.tasks.length}</h5>
                </div>
                <br></br>
                <div>
                    <input onChange={this.updateInput} value={this.state.input} />
                    <button class="btn" onClick={this.addTask}>Add Task</button>
                </div>

            </div>
        )
    }

    deleteTask(i){
        let todos = this.state.tasks.slice();
        todos.splice(i, 1);
        this.setState({
            tasks: todos
        });
    }


    updateInput = (event) => {
        this.setState({ 
            input: event.target.value 
        });
    }

    addTask = () => {
        this.setState(state => ({
            tasks: [...state.tasks, state.input],
            input: ""
        }))
    }

}

ReactDOM.render((
    <div>
        <App />
    </div>
), document.querySelector("#app"));