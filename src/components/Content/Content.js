import React, { Component } from 'react';
import './Content.css';

class Content extends Component {

    render() {
        this.state = { open: false };
        return(
            <div>
                <article className="post" id="index">
                    <h2>Hello!</h2>
                    <p>We are Team Gans, a group of motivated computer science students attending Vanderbilt University.  
                    We came together through our Google Developer Student Club chapter and decided to create this project.</p>
                    <div>
                    <h2>Our Mission</h2>

                    <p>Our goal is to responsibly educate and raise awareness of AI ethics. 
                        Having an understanding of how data is used to make predictions allows you to really consider critically how important your data is to others, such as companies and governments, and how they might use it, and also what the limitations of systems are that are used to make consequential decisions about your lives. 
                        We couldn’t think of a better way to learn those skills than through art.</p>
                    </div>
                    <div>
                    <h2>Ethics of Artificial Intelligence and Art</h2>

                    <p>Machine learning seems so pervasive in all parts of our world, but yet it feels so inaccessible, especially coming from an art world. Although it’s becoming more common for artists to collaborate with technologists, we still feel like this partnership is rare and cuts off artists from taking advantage of improving technologies. 
                        While AI and robots will not replace human imagination, they will inspire and expand our creativity. However, AI creativity raises issues in terms of understanding contemporary art from both a computer science and art history perspective. </p>

                    <p>Using machine learning to create art can be a lot of fun, buts how would you answer ethical questions regarding how we should deal with issues of copyright, attribution, prior art, authorship, etc. Is the machine or the human the artist? Who is the author? If your model is based on another artist’s work, should they also receive credit? Does it change if it’s human-machine artwork vs purely machine generated artwork? Another question to consider is whether the final product can really be considered art. There is a necessary relationship between human artists and their artworks, contextualized in history, institutions, styles, and approaches with audiences. Can machines have this same context as human art?  </p>

                    <p>In a way, these questions reflect larger debates about AI in general. This research paper explores potential biases in creating machine art. An artist’s intent and emotions may be overlooked in the process, possibly giving unintended results in the generated art. Additionally, generative art could be embedded with racial, gender, and other discriminatory biases. Should a machine’s artistic choice take the place of a human? Many of these issues are reflected beyond art in other applications of AI decision making. </p>

                    <p>We believe in a symbiotic relationship between human and machine creativity and believe that working in union will maximize the creative potential of both humans and machines. However, there is room for transforming what machine art is and means in our society. This field may be the potential final frontier for AI because of the difficulty of engineering truly creative systems, as well as society’s natural protection over creativity. Will machines reach some form of consciousness that is equivalent to that of humans in order to put emotion and meaning into their artwork? Can machines one day produce art that lives up to human standards? Or, are machines only destined to assist in creation processes?</p>

                    <p>We suppose only time can tell, and who knows? Maybe you will be the one to answer these questions. </p>

                    </div>
                    <h2>Need to protect against biases + inspire social change</h2>
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

export default Content;
