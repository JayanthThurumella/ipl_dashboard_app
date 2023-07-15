import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props

  return (
    <div className="latest-matches-container">
      <div className="sub-container-1">
        <p className="team-name">{latestMatchDetails.competingTeam}</p>
        <p className="match-date">{latestMatchDetails.date}</p>
        <p className="match-details">{latestMatchDetails.venue}</p>
        <p className="match-details">{latestMatchDetails.result}</p>
      </div>
      <img
        src={latestMatchDetails.competingTeamLogo}
        className="team-logo"
        alt={`latest match ${latestMatchDetails.competingTeam}`}
      />
      <div className="sub-container-2">
        <p className="sub-headings">First Innings</p>
        <p className="team-details">{latestMatchDetails.firstInnings}</p>
        <p className="sub-headings">Second Inning</p>
        <p className="team-details">{latestMatchDetails.secondInnings}</p>
        <p className="sub-headings">Man Of The Match</p>
        <p className="team-details">{latestMatchDetails.manOfTheMatch}</p>
        <p className="sub-headings">Umpires</p>
        <p className="team-details">{latestMatchDetails.umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
