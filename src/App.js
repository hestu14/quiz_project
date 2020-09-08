import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      answer: [
        {
          name: "Ederson",
          club: "Man City",
          cleensheet: 16
        },
        {
          name: "Nick Pope",
          club: "Burnley",
          cleensheet: 15
        },
        {
          name: "De Gea",
          club: "Man United",
          cleensheet: 13
        },
        {
          name: "Rui Patricio",
          club: "Wolverhampton",
          cleensheet: 13
        },
        {
          name: "Dean Henderson",
          club: "Sheffield United",
          cleensheet: 13
        },
        {
          name: "Allison",
          club: "Liverpool",
          cleensheet: 13
        },
        {
          name: "Schmeichel",
          club: "Leicester City",
          cleensheet: 13
        },
        {
          name: "Dubravka",
          club: "Newcastle United",
          cleensheet: 11
        },
        {
          name: "Guaita",
          club: "Crystal Palace",
          cleensheet: 10
        },
        {
          name: "Ben Foster",
          club: "Watford",
          cleensheet: 9
        }
      ],
      submitAnswer: '',
      listAnswer: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  dataInput() {
    console.log(this.state.submitAnswer);
    var findAnswer = this.state.answer.find((item) => {
      return item.name == this.state.submitAnswer
    });
    console.log(findAnswer);
    if (findAnswer === undefined) {
      alert("404 not found");
    }
    // else if (findAnswer = this.state.listAnswer.find((item) => {
    //   alert("answered already");
    // }));
    else {
      this.state.listAnswer.push(findAnswer);
    }
    console.log(this.state.listAnswer);
  }


  handleChange(event) {
    this.setState({ submitAnswer: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.dataInput();
  }

  render() {
    var data = this.state.listAnswer.map((item, index) => {
      var id_answer = [item.name, item.club, item.cleensheet].join(" | ");
      return <li className="list-answer" key={index}>{id_answer}</li>
    });

    return (
      <div>
        <div className="form-input">
          <h3>Top 10 Cleansheet Goalkeeper <br></br> EPL 2019/2020 ?</h3>
          <form onSubmit={this.handleSubmit}>
            <input type="text" onInput={this.handleChange} />
            <input type="submit" value="Submit" />
          </form>
        </div>

        {data}
      </div >);
  }
}


export default App;
