import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class TeamMatches extends Component {
  state = {isLoading: true, teamMatchesData: []}

  componentDidMount() {
    this.getTeamMatchesData()
  }

  getTeamMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const teamMatches = await response.json()

    const updatedData = {
      teamBannerUrl: teamMatches.team_banner_url,
      latestMatchDetails: {
        umpires: teamMatches.latest_match_details.umpires,
        result: teamMatches.latest_match_details.result,
        manOfTheMatch: teamMatches.latest_match_details.man_of_the_match,
        id: teamMatches.latest_match_details.id,
        date: teamMatches.latest_match_details.date,
        venue: teamMatches.latest_match_details.venue,
        competingTeam: teamMatches.latest_match_details.competing_team,
        competingTeamLogo: teamMatches.latest_match_details.competing_team_logo,
        firstInnings: teamMatches.latest_match_details.first_innings,
        secondInnings: teamMatches.latest_match_details.second_innings,
        matchStatus: teamMatches.latest_match_details.match_status,
      },
      recentMatches: teamMatches.recent_matches.map(eachTeam => ({
        umpires: eachTeam.umpires,
        result: eachTeam.result,
        manOfTheMatch: eachTeam.man_of_the_match,
        id: eachTeam.id,
        date: eachTeam.date,
        venue: eachTeam.venue,
        competingTeam: eachTeam.competing_team,
        competingTeamLogo: eachTeam.competing_team_logo,
        firstInnings: eachTeam.first_innings,
        secondInnings: eachTeam.second_innings,
        matchStatus: eachTeam.match_status,
      })),
    }

    this.setState({isLoading: false, teamMatchesData: updatedData})
  }

  renderLoading = () => (
    // eslint-disable-next-line react/no-unknown-property
    <div testid="loader" className="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  renderTeamMatches = () => {
    const {teamMatchesData} = this.state

    return (
      <div className="team-match">
        <img
          className="banner"
          src={teamMatchesData.teamBannerUrl}
          alt="team banner"
        />
        <h1 className="heading">Latest Matches</h1>
        <LatestMatch latestMatchDetails={teamMatchesData.latestMatchDetails} />
        <div className="match-card-container">
          {teamMatchesData.recentMatches.map(eachTeam => (
            <MatchCard cardDetails={eachTeam} key={eachTeam.id} />
          ))}
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="team-matches-container">
        {isLoading ? this.renderLoading() : this.renderTeamMatches()}
      </div>
    )
  }
}

export default TeamMatches
