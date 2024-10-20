import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users =[
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: false
  },
  {
    userName: 'YulICV',
    name: 'Yuliana CV',
    isFollowing: true
  },
  {
    userName: 'aristidevs',
    name: 'AristiDevs',
    isFollowing: false
  },
  {
    userName: 'AlfaOmega',
    name: 'AlfaOmega',
    isFollowing: true
  }
]


export function App(){
  // const format= (userName) => `@${userName}`
  // formattedUserName = (<span>@{userName}</span>)
  return(
    <section className='App'>
      {
        users.map(({userName, name,isFollowing})=>(
          <TwitterFollowCard
          key={userName}
          name={name}
          userName={userName}
          initialIsFollowing={isFollowing}
          
          >
          </TwitterFollowCard>
        )
      )
      }
    </section>
  )
}