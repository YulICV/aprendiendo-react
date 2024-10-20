import { useState } from 'react'

export function TwitterFollowCard ({ userName, name, initialIsFollowing}){
  // const imageSrc = `https://unavatar.io/${userName}`
  // const addAt = (userName) => `@${userName}`
  //src= {imageSrc}
  
  // const state =  useState(false)
  // const isFollowing = state[0]
  // const setIsFollowing = state[1]
  const [isFollowing,setIsFollowing] = useState(initialIsFollowing)
  

  const text = isFollowing ? 'Siguiendo': 'Seguir'
  const buttonClassName = isFollowing
   ? 'tw-followCard-button is-following'  
   : 'tw-followCard-button'

   const handleClick = () =>{
    setIsFollowing(!isFollowing)
  }

  return(
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar' alt="avatar de YulICv" src = {`https://unavatar.io/${userName}`}  /> 
          <div className='tw-followCard-info'>
            <strong>{name}</strong>
              <span className='tw-followCard-infoUserName'> @{userName}</span>
          </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
    )
}