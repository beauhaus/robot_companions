import React from 'react';
import styled from 'styled-components';

import FirstNameChecker from './FirstNameChecker';
import LastNameChecker from './LastNameChecker';
import EmailChecker from './EmailChecker';

const StyledProfile = styled.div`
    height: 73.5vh;
    background: #cfcfcf;
    color: #1c1841;
`
const EmailLabel = styled.label`
    background-color: ${props =>props.isTrue? "green":"red"};
    color: wheat;
    background:#brown;
    transition:all 1s ease;
}
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