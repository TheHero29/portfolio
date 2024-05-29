import Header from "../../Header"

function Home(){
    return (
        <div>
            <Header />
            <div class="about-me">
                <div class="left">
                    <h1>
                        Hello All! I am Loukik
                    </h1>
                    <p>
                        I like computers. 
                    </p>
                </div>
                <div class="right">
                    <img src="#"></img>
                </div>
            </div>
            <div class="what-I-do">
                <h1>What I do?</h1>
                <div class="dsa">
                    <h2>
                        Data stucture and Algorithms
                    </h2>
                    <p>
                        I solve questions on leetcode, codechef. I use java.
                    </p>
                </div>
                <div class="web-dev">
                    <h2>
                        Web Development
                    </h2>
                    <p>
                        Learning web development. I know HTML,CSS and javascript. Currently learning React.
                    </p>
                </div><div class="backend">
                    <h2>
                        Backend and Databases
                    </h2>
                    <p>
                        I've used sping-boot and currently leaning MySQL.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Home
