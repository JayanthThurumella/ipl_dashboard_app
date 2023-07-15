import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {team} = props

  return (
    <Link to={`/team-matches/${team.id}`} className="link-container">
      <div className="card">
        <img src={team.teamImageUrl} alt={team.name} className="team-image" />
        <p className="name-of-team">{team.name}</p>
      </div>
    </Link>
  )
}
export default TeamCard
