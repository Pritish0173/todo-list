class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            input: "",
            time: "",

        };
    }

    render() {
        return (
            <div>
                <h1>Tasks</h1>
                <br></br>
                <br></br>

                <table>
                    <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Task</th> 
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.tasks.map((tasks,i) =>
                            <tr key={i}>
                                <td>{i+1}</td>
                                <td>{tasks}</td>
                                <td><button class="delete" onClick={() => { this.deleteTask(tasks)}}>X</button></td>
                            </tr>
                        )}    
                    </tbody>               
                </table>
                <br></br>
                <br></br>
                <div>
                    <h5>Number of Tasks: {this.state.tasks.length}</h5>
                </div>
                <br></br>
                <div>
                    <input onChange={this.updateInput} value={this.state.input} /> Task
                    <br></br>
                    <br></br>
                    <input type="datetime-local" onChange={this.updateTime} value={this.state.time} /> Time
                    <br></br>
                    <br></br>

                    <button class="btn" onClick={() => { this.addTask(this.state.input)}}>Add Task</button>
                    <button class="btn" onClick={this.updateTasks}>Update Task</button>
                </div>

            </div>
        )
    }

    // deleteTask(i){
    //     let todos = this.state.tasks.slice();
    //     todos.splice(i, 1);
    //     this.setState({
    //         tasks: todos
    //     });
    // }

    deleteTask(i){
        alert("This task is going to be deleted")
        this.setState((state) => ({
            tasks: state.tasks.filter(el => el != i )
        }));
    }


    updateInput = (event) => {
        this.setState({ 
            input: event.target.value 
        });
    }

    updateTime = (event) => {
        this.setState({ 
            time: event.target.value 
        });
    }

    addTask(i) {
        this.setState(state => ({
            tasks: [...state.tasks, state.input],
            input: ""
        }));
        this.startDelete(i)
        
    }


    startDelete(i){

        // const timer = this.state.time;        

        setTimeout(() => {
            this.deleteTask(i)
          }, 10000)
      

    }
    


    updateTasks  = () => {
        localStorage.setItem("tasks",JSON.stringify(this.state.tasks));
    }




    componentDidMount(){
        const tasks = localStorage.getItem("tasks");
        if(tasks!=null){
            this.setState({
                tasks:JSON.parse(tasks)
            });

        }
        
    }




}

ReactDOM.render((
    <div>
        <App />
    </div>
), document.querySelector("#app"));