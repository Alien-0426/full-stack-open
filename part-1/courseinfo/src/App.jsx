const App = () => {
  const course = 'Half Stack application development'
  return (
    <div>
      <Header course={course} />
      <Content />
      <Total />
    </div>
  )
}

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Parts = [
  {
    id: 1,
    part: 'Fundamentals of React',
    exercises: 10
  },
  {
    id: 2,
    part: 'Using props to pass data',
    exercises: 7
  },
  {
    id: 3,
    part: 'State of a component',
    exercises: 14
  }
]

const Part = (props) => {
  return (
    <>
      <p>{props.part} {props.exercises}</p>
    </>
  )
}

const Content = () => {
  const lists = Parts.map(
    (list) => {
        return (
            <Part part={list.part} exercises={list.exercises} />
        )
    }
  )
  return lists
}

const Total = () => {
  let num = 0
  Parts.forEach(
    (list) => {
      num += list.exercises
    })
  return (
    <>
      <p>Number of exercises {num}</p>
    </>
  )
}

export default App