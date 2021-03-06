import React from "react"
import "./MemesLink"
import meme from "./MemesLink";

class MemeGenerator extends React.Component {
    constructor(){
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        fetch("http://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({ allMemeImgs: memes })

            })
        console.log("Len is:", this.state.allMemeImgs.length)
    }

    handleChange(event){

        const{name,value}= event.target
        this.setState({
            [name]: value
        })

    }
    handleSubmit(event){
        event.preventDefault()
        const randNum = (Math.floor(Math.random() * meme.length))
        console.log("Num is:", randNum)
        console.log("Len is:", meme.length)
        const randMemeImg = meme[randNum].url

        this.setState({randomImg: randMemeImg })
    }

    render(){
        return(
            <div>

                <h1 className="new-style">MEME GENERATOR SECTION</h1>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input
                    type="text"
                    name="topText"
                    placeholder="Top Text"
                    value={this.state.topText}
                    onChange={this.handleChange}
                    />

                    <input
                        type="text"
                        name="bottomText"
                        placeholder="Bottom Text"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />

                    <button>Gen</button>
                </form>

                <div className="meme">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>

                </div>
            </div>
        )
    }


}

export default MemeGenerator