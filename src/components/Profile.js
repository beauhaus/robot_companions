import React from 'react';
import styled from 'styled-components';

import FirstNameChecker from './validate/FirstNameChecker';
import LastNameChecker from './validate/LastNameChecker';
import EmailChecker from './validate/EmailChecker';
import ZipChecker from './validate/ZipChecker';
import USStatesChecker from './validate/USStatesChecker';

const StyledProfile = styled.div`
    height: 73.5vh;
    background: #cfcfcf;
    color: #1c1841;
`
class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.handleEmail = this.handleEmail.bind(this);
        this.state = {
            emailBool: ''
        }
    }

    handleEmail(e) {
        const verifiedEmail = validator.isEmail(e.target.value);
        this.setState({
            emailBool: verifiedEmail
        });
    }
    handleFirstName(e) {
        //char only
    }
    render() {
        return (
            <StyledProfile className="profile">
            <FirstNameChecker/>
            <LastNameChecker/>
            <EmailChecker/>
            <ZipChecker/>
            <USStatesChecker />
        </StyledProfile>
        )
    }
}
export default Profile;

    /*

    class Search extends Component {
  state = {
    searchTerm: '',
  };

  handleSearchTermChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      < div className="search">
        < div>
          < h1>reactApp< /h1>
          < input onChange={this.handleSearchTermChange} value={this.state.searchTerm} type="text" placeholder="search" />
          ...
          ...

*/