import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class Home extends Component {
  state = {isLoading: true, iplTeams: []}

  componentDidMount() {
    this.getIplData()
  }

  getIplData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const iplData = await response.json()

    const updatedIplData = iplData.teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))

    this.setState({isLoading: false, iplTeams: updatedIplData})
  }

  renderLoading = () => (
    // eslint-disable-next-line react/no-unknown-property
    <div testid="loader" className="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  renderIplTeams = () => {
    const {iplTeams} = this.state

    return (
      <div className="cards-container">
        {iplTeams.map(eachTeam => (
          <TeamCard team={eachTeam} key={eachTeam.id} />
        ))}
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="bg-container">
        <div className="main-heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="main-heading">IPL Dashboard</h1>
        </div>
        {isLoading ? this.renderLoading() : this.renderIplTeams()}
      </div>
    )
  }
}

export default Home
