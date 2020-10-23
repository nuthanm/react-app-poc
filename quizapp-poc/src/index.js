import React , {Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import quizService from './services/questionbank.js';
import QuestionBox from './components/Questions/questionbox.js';
import Result from './components/Questions/Result.js';

class Question extends Component{
    // Holds the questions from service file.
    state = {
        questionbank : [],
        score:0,
        responses:0
    };

    // getQuestions Function to read each question from service file and set the question in state variable called questionBank.
    getQuestions = () => {
        quizService().then(question => {
            this.setState({
                    questionbank: question
            });
        });
    };

    computedAnswer = (selectedAnswer, correctAnswer) => {
        if(selectedAnswer === correctAnswer)
        {
            this.setState(
                {
                    score: this.state.score + 1
                }
            )
        }

            this.setState(
                {
                    responses: this.state.responses < 5 ? this.state.responses + 1 : 5
                }
            )
        
    }

    // To reset and start fresh
    playAgain = () => {
        this.getQuestions();
        this.setState(
            {
                score :0,
                responses:0
            }
        )
    }
    // To call the above function we have to add this inside componentDidMount function
    componentDidMount(){
        this.getQuestions();
    }
    render(){
        return(
            <div className="container">
                <div className="title"> Quiz App</div>
                {
                    this.state.questionbank.length > 0 && 
                    this.state.responses < 5 &&
                    this.state.questionbank.map
                    (
                        (
                            {question, answers,correct, questionId}
                        ) => 
                        (
                            <QuestionBox 
                                question={question}
                                options={answers} 
                                key={questionId} 
                                selected = {answer => this.computedAnswer(answer, correct)}
                            />
                        )
                    )
                }
                {this.state.responses === 5 ? (<Result score={this.state.score} responses={this.state.responses} playAgain={this.playAgain} />) : null}
            </div>
        );
    }
}

ReactDOM.render(<Question/>, document.getElementById("root"));