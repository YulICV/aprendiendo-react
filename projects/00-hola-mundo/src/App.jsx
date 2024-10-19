import './App.css'
import { TwitterFollowCard } from './assets/TwitterFollowCard'

export function App(){
  // const format= (userName) => `@${userName}`
  // formattedUserName = (<span>@{userName}</span>)
  return(
    <section className='App'>
      <TwitterFollowCard isFollowing userName="YulICV" name="Yuliana Cruz Vivas"/>
      <TwitterFollowCard isFollowing ={false} userName="midudev" name="Miguel Ángel Durán"/>
      <TwitterFollowCard isFollowing userName="alfaomega" name="AlfaOmega"/>
      <TwitterFollowCard isFollowing userName="Arara" name="Arara"/>
    </section>
  )
}