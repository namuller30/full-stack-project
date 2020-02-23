import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10
          },
          {
            name: 'Using props to pass data',
            exercises: 7
          },
          {
            name: 'State of a component',
            exercises: 14
          }
        ]
      }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}  />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = (props) => {
    return (
        <h1>
            <p> {props.course} </p>
        </h1>
    )
}

const Content = (props) => {
    return (
       <> 
        <Part part={props.parts[0].name} exercise={props.parts[0].exercise} />
        <Part part={props.parts[1].name} exercise={props.parts[1].exercise} />
        <Part part={props.parts[2].name} exercise={props.parts[2].exercise} />
        </>
    )
}

const Part = (props) => {
    return (
        <p>
            {props.part} {props.exercise}
        </p>
    )
}

const Total = (props) => {
    return (
        <p> Number of exercises {props.parts[0].exercise + props.parts[1].exercise + props.parts[2].exercise} </p>
    )
}



ReactDOM.render(<App />, document.getElementById('root'))