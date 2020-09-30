import React, {Component} from 'react' ;
import axios from 'axios';
import { Link } from 'react-router-dom';

const Exercise = props => (
    <tr>
      <td>{props.exercise.username}</td>
      <td>{props.exercise.description}</td>
      <td>{props.exercise.duration}</td>
      <td>{props.exercise.date.substring(0,10)}</td>
      <td>
        <Link to={"/edit/"+props.exercise._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
      </td>
    </tr>
  )


export default class  ExercisesList extends Component{

    constructor(props){
        super(props);
        this.deleteExercise = this.deleteExercise.bind(this)
        this.state=({
            exercises:[]
        })
    }

deleteExercise(id){
    axios.delete('http://localhost:5000/exercise/'+id)
    .then(response => { console.log(response.data)});

  this.setState({
    exercises: this.state.exercises.filter(el => el._id !== id)
  })
    
}

componentDidMount(){
axios.get('http://localhost:5000/exercise/')
.then(res=>{
    this.setState({exercises:res.data})
})
.catch(err=>console.log(err))
}

exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
    })
  }

            render(){
                return(
                    <div>
                        <h3>Logged Exercises</h3>
                        <table className="table"> 
                        <thead className="thead-light">
                        <tr>
                        <th>Username</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Date</th>
                        <th>Durations</th>
                        </tr>
                        </thead>
                        <tbody>
                        { this.exerciseList() }    
                        </tbody>    
                        </table> 
                    </div>
                )
            }


}