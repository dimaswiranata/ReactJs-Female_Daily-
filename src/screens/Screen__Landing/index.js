import React, { Component } from 'react'
import { connect } from "react-redux";

import Articles from "components/articles";
import Editors from "components/editors";
import Matches from "components/matches";
import Reviews from "components/reviews";
import Headers from "components/header";
import Footer from "components/footer";
import Category from "components/category";
import TopBanner from "components/banner/TopBanner";
import Billboard from "components/banner/Billboard";
import BottomBanner from "components/banner/BottomBanner";
import Internal from "components/banner/Internal";
import Popular from "components/popular";
import Trendings from "components/trending";
import Brands from "components/brands";

import { loadData } from "store/actions/data";

class Landing extends Component {

  constructor(props){
    super(props);
    this.refMostPicked = React.createRef();
  }

  componentDidMount(){
    window.title = "Female Daily | Home";
    window.scrollTo(0,0);

    if (!this.props.data.data)
      this.props.loadData(
        `/wp`, 
        'data'
      );
  }

  render() {
    const { data } = this.props;

    console.log(data);

    if (!data.hasOwnProperty("data")) return null;

    return (
      <div>
        <Headers/>
        <Category/>
        <TopBanner/>
        <Billboard/>
        <Editors data={data.data["editor's choice"]}/>
        <Matches/>
        <Internal/>
        <Articles data={data.data["latest articles"]}/>
        <Reviews data={data.data["latest review"]}/>
        <Popular/>
        <Trendings/>
        <Brands/>
        <Footer/>
        <BottomBanner/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { loadData })(Landing)
