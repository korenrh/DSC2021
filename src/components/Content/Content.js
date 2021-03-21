import React, { Component } from 'react';
import './Content.css';

class Content extends Component {
    state = { clicked: false}

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }

    render() {
        return(
            <div>
                <article className="post" id="index">
                    <h2>Hello!</h2>
                    <p>We are Team Gans, a group of motivated computer science students attending Vanderbilt University.  
                    We came together through our Google Developer Student Club chapter and decided to create this project.</p>
                    <div className="title">
                    <h2>Our Mission</h2>

                    <p>Our goal is to responsibly educate and raise awareness of AI ethics. 
                        Having an understanding of how data is used to make predictions allows you to really consider critically how important your data is to others, such as companies and governments, and how they might use it, and also what the limitations of systems are that are used to make consequential decisions about your lives. 
                        We couldn’t think of a better way to learn those skills than through art.</p>
                    </div>
                    <h2>Ethics of AI + art</h2>
                    <p> 
                        From reading resumes to credit score evaluations to healthcare to judicial sentencing, AI is increasingly automating human decision making based on “learned” information. 
                        These predictive models are based on past decisions; however, unless these automated decision-making tools are built to dismantle structural inequities, they will ultimately only reinforce such structures.  
                        For example, Researcher's from Google’s Deepmind concluded in a recent paper that “artificial intelligence (AI) systems will be designed and deployed unfairly for queer individuals” via this published paper.
                    </p>
                    <p>
                        Oppressive algorithms, generally, are not intentionally malicious. 
                        Consider machine learning algorithms as a mirror reflecting the world. 
                        Still, it is a world that came to be thanks to centuries of bias. Many of these models encoded human prejudice, misunderstanding, and bias into the software systems that increasingly manage our lives. 
                        Explicit prejudices aren’t leading to biased outcomes-- it’s just history repeating itself.
                    </p>
                    <p>
                        As we move forward to a world in which AI is making even larger scale decisions in arenas like warfare, we first need to tackle the basics. 
                        Those who are first to notice biases tend to be those from the minoritized community that such algorithms are targeting or ignoring, so having a diverse AI team can mitigate upholding structural inequities.
                    </p>
                    <p>
                        AI has the power to uplift humanity if done correctly. 
                        Humans are capable of moral imagination, and it’s imperative that we are actively choosing to embed better values into our algorithms to ensure a more equitable society. 
                    </p>

                    <p>
                        If you’d like to learn more, further reading on bias and its impact on algorithms and society can be found in the following books:
                    </p>
                    <p>Weapons of Math Destruction: How Big Data Increases Inequality and Threatens Democracy by Cathy O'Neil<br></br></p>
                    <p>Hello World: Being Human in the Age of Algorithms by Hannah Fry<br></br></p>
                    <p>Invisible Women: Data Bias in a World Designed for Men by Caroline Criado Perez</p>
            </article>
            </div>
        )
    }
}

export default Content