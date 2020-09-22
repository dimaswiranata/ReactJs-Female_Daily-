import React, { Component } from 'react'
import { connect } from "react-redux";

import Articles from "components/articles";
import Editors from "components/editors";
import Reviews from "components/reviews";
import Headers from "components/header";
import Footer from "components/footer";
import Category from "components/category";

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
        <Articles data={data.data["latest articles"]}/>
        <Editors data={data.data["editor's choice"]}/>
        <Reviews data={data.data["latest review"]}/>
        <Footer/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { loadData })(Landing)
