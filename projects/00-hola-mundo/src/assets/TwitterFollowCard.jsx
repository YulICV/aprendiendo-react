export function TwitterFollowCard ({ userName, name, isFollowing }){
  // const imageSrc = `https://unavatar.io/${userName}`
  // const addAt = (userName) => `@${userName}`
  //src= {imageSrc}
  const text = isFollowing ? 'Siguiendo': 'Seguir'
  const buttonClassName = isFollowing
   ? 'tw-followCard-button is-following'  
   : 'tw-followCard-button'

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
        <button className={buttonClassName}>
          {text}
        </button>
      </aside>
    </article>
    )
}