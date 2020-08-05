import React from 'react'

import Head from '../components/Head'
import Menu from '../components/Menu'
import Profile from '../components/Profile'
import LargeCard from '../components/cards/LargeCard'

interface HomeProps {}

interface HomeState {
  currentPage: string,
  translate: number,
  pageWidth: number
}

export default class Home extends React.Component<HomeProps, HomeState> {

  state: HomeState;

  constructor(props: HomeProps) {
    super(props);

    this.state = {
      currentPage: "Experience",
      translate: 0,
      pageWidth: 800
    }
  }

  componentDidMount = () => {
    window.addEventListener('wheel', this.handleScroll);
  }

  updatePage = (page: string, width: number) => {
    this.setState({
      currentPage: page,
      translate: 0,
      pageWidth: width
    });
  }

  handleScroll = (event) => {
    let itemTranslate = this.state.translate + (event.wheelDelta/2)
    
    if(itemTranslate > 0 || itemTranslate*-1 > (this.state.pageWidth +(100000/window.innerWidth))) return;

    console.log(itemTranslate*-1);
    console.log(this.state.pageWidth + (100000/window.innerWidth));

    this.setState({
      translate: itemTranslate
    });
  }


  getPageContent = () => {
    switch(this.state.currentPage){
      case "About Me":
        return (
          <>
            <div className="flex_row">
            </div>
          </>
        )
        break;
      case "Experience":
        return (
          <>
            <div className="flex_row">
              <LargeCard 
                title="Voxion" 
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              />
              <LargeCard 
                title="Voxion" 
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              />
              <LargeCard 
                title="Voxion" 
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              />
              <LargeCard 
                title="Voxion" 
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              />
            </div>
          </>
        )
        break;
      case "Projects":
        return (
          <>
            <p>3</p>
          </>
        )
        break;
    }
  }

  render() {

    let css = {
        transform: 'translate('+this.state.translate+'px, 0px)'
    }

    return (
      <>
        <Head title="Sam Bunger" description="About Sam"/>
        <div className="content">
          <div className="sidebar">
            <Profile imageSource="../static/img/profile_2.jpg" linkedinUrl="https://www.linkedin.com/in/sam-bunger/" githubUrl="https://github.com/sam-bunger"/>
            <Menu menuUpdater={this.updatePage} />
          </div>
          <div className="page_content">
            <h1 className="page_content_title">{this.state.currentPage}</h1>
            <div id="inner_content" className="page_content_inner" style = {css}>
              {this.getPageContent()}
            </div>
          </div>
        </div>
      </>
    );
  }
}