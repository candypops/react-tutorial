import { useState } from "react";

export function TwitterFollowCard({ name, userName }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const text = isFollowing ? "Following" : "Follow";
  const styles = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/twitter/${userName}`}
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={styles} onClick={handleClick}>
        <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-stopFollow'>Unfollow</span>
        </button>
      </aside>
    </article>
  );
}
