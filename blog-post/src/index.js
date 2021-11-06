import React from 'react'
import ReactDOM from 'react-dom'
import profile1 from './image/pic-1.jpg'
import profile2 from './image/pic-2.jpg'
import profile3 from './image/pic-3.jpg'
import SingleComment from './SingleComment'
import UserCard from './UserCard'

const App = () => {
  return(
    <div className='ui comments'>
      <UserCard>
        <div>
          Hello mein Name ist fj, ich 20 Jahre alt und komme aus kamerun.
        </div>
      </UserCard>
      <UserCard>
        <SingleComment 
        name='Alex' 
        date='Todat at 5:00PM'
        text = 'it is cool'
        pixture = {profile1}/>
      </UserCard>
      <UserCard>
      <SingleComment 
      name='Jack' 
      date='Todat at 5:00PM'
      text='excellent job'
      pixture = {profile2}
      />
      </UserCard>
      <UserCard>
      <SingleComment 
      name='Sarah' 
      date='Todat at 6:00PM'
      text='no kidding...'
      pixture = {profile3}
      />
      </UserCard>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)