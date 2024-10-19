import './App.css'
import { TwitterFollowCard } from './assets/TwitterFollowCard'

export function App(){
  // const format= (userName) => `@${userName}`
  // formattedUserName = (<span>@{userName}</span>)
  return(
    <section className='App'>
      <TwitterFollowCard userName="YulICV" name="Yuliana Cruz Vivas"/>
      <TwitterFollowCard userName="midudev" name="Miguel Ángel Durán"/>
      <TwitterFollowCard userName="alfaomega" name="AlfaOmega"/>
      <TwitterFollowCard userName="Arara" name="Arara"/>
    </section>
  )
}