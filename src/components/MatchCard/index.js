import './index.css'

const MatchCard = props => {
  const {cardDetails} = props

  const matchStatus = cardDetails.matchStatus === 'Won' ? 'won' : 'lost'
  return (
    <div className="card-container">
      <img
        className="rival-team-logo"
        src={cardDetails.competingTeamLogo}
        alt={`competing team ${cardDetails.competingTeam}`}
      />
      <p className="rival-team-name">{cardDetails.competingTeam}</p>
      <p className="match-results">{cardDetails.result}</p>
      <p className={matchStatus}>{cardDetails.matchStatus}</p>
    </div>
  )
}

export default MatchCard
