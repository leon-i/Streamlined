import React from 'react';
import { connect } from 'react-redux';
import { requestShow } from "../../actions/show_actions";

class QueueItems extends React.Component{
    componentDidMount(){
        this.props.requestShow(this.props.title)
    }
    render(){
        if (!this.props.show) return null;
        debugger
        return (
          <div>
              <h1>{this.props.title}</h1>
            
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500${this.props.show.networks[0].logo_path}`}
                alt=""
              />
            </div>
          </div>
        );
    }
}


const msp = state => ({
    show: state.entities.shows.detail
})

const mdp = (dispatch) => ({
  requestShow: (title) => dispatch(requestShow(title)),
});

export default connect(msp, mdp)(QueueItems);