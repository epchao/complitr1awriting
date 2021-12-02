import Particle from "./component/particle";
import "./App.css";
import Star from "./component/star";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Particle />
        <div className="text-3xl font-bold z-50">
          <h1>Eugene Chao's COMPLIT R1A Writing Portfolio</h1>
        </div>
        <div className="z-50">
          <Star
          modalTitle="The Shift in the Definition of Fuku - Stand-alone Topic Sentence"
          modalContent="The dishonesty in the Dominican Republic’s authoritarian government due to the dictator, 
          Trujillo and his corruption to accumulate personal wealth and carry out genocide, caused the 
          Dominicians to manifest fukú’s true definition by increasing the popularity of this term during 
          his regime."
          />
          <Star
          modalTitle="The Perfect Leader - Body Paragraph"
          modalContent="At the beginning of Ernesto Guevara and Alberto Granado’s journey, Ernesto Guevara exhibits his charming facial features by convincing a homeowner to host them, meaning he can easily influence potential followers, a vital component of leadership. In the scene where Guevara pleads for shelter and Granado asks for more than the shed that the ranch owner was offering them, the owner mentions that he “likes [Guevara’s] face very much” and that he doesn’t like Granado’s face (Salles, 00:21:57). The yellow lighting resembles a cozy feeling in the cabin and a sense of desperation from the pair. The ranch owner stands aloof, showing that he is difficult to convince and unhappy with their presence when Granado asks for more but shows sympathy for Guevara. Ernesto Guevara and Alberto Granado’s slouching and shivering show that they are powerless and are suffering, hungry, and poor, solely depending on the kind hearts of folks they come across. It is explicit that the ranch owner allowed them to rest the night in his shed because of Guevara’s physical features. Because of Ernesto Guevara’s attractiveness, the owner was more inclined to listen to him based on human instinct. Guevara’s concern invoked an emotion of sadness and a sense of sympathy from the owner, influencing him to let Guevara and Granado stay in the shed. Although this is a soft example of how Che’s appearance benefits him, it makes him a “perfect leader” because he can easily influence people and draw people to him, making it easier to unite people in a common cause."
          />
          <Star
          modalTitle="The Perfect Leader - Thesis Paragraph"
          modalContent="Walter Salles’ film from the adaptation of the memoir, The Motorcycle Diaries, showcases Ernesto “Che” Guevara’s leadership qualities while traveling across South America. The film conveys that Guevara is a well-liked individual because of his unique characteristics: his physical features, conscientiousness, and honesty. This interpretation argues that the protagonist, Guevara, has the “perfect leader” archetype to unite the powerless and oppressed working class in Latin America."
          />
          <Star
          modalTitle="Writing Practice Week 2: Generating Ideas about a Passage - Two Sentences"
          modalContent="In every aspect of life, the Dominicians blamed many unfortunate events based off of 
          fukú, from a family not giving birth to any sons to the assassination of John F. Kennedy, 
          they have created a framework where when a negative consequence occurs, they can 
          simply state that it was because of fukú. Since the word 
          fukú is attached to the dictator, it could imply that in the early days of ruling, the dictator 
          had good reputation and served his purpose, but later on, he abused his powers and made 
          unpopular decisions, causing his people to hate him and fukú was the only way to provide 
          negative feedback to his dictatorship."
          />
          <Star
          modalTitle="Two Inspirational Excerpts"
          modalContent={"The Philosophic and Economic Manuscripts of 1844\n\"Marx saw human life as an active proces of creation and production. Humans act on nature, transforming it to suit their needs. Human life is creative active. In early human existence, humans only needed to produce food to survive, but as human civilization develop (another product of human creativity), human needs expanded.\"\n\nThis extract from Karl Marx's manuscripts are inspirational to me because when he talks about his thoughts on national systems, he elaborates on the root causes of civilization. It's the reason why nations exist, primarily having a source of food. It also reminds me of how civiization has grown immensely since the early times and that I can create something new and revolutionary, just like Karl Marx has done with Marxism. I take from this paragraph that humans have the opportunity to unleash their creativity and it should not be wasted.\n\nThe Motorcycle Diaries\n\"Although nothing cataclysmic marked the transition, the brilliant Inca capital gradually became what it is now, a relic of bygone days. Only recently has the odd modern building gone up, disturbing the architectural harmony, but otherwise all the monuments of colonial splendour are still intact.\"\n\nIt's inspiring to see that Che views these monuments of the past with a connection and a sense of reminiscing the past, even though, he has never been in that time. He prefers the indigenious buildings because it was a world of simplicity, no greed, and no colonization. His opinions are important and even though he is living in the world where this land was colonized, he still feels sympathy for the inhabitants, which inspires me to honor them as well and not forget their history."}
          />
          <Star
          modalTitle="Personal Reflection"
          modalContent="In this course, I learned that college writing has a lot more emphasis on creative arguments, rather than having a plain, simple structure that takes the reader all the way through and that analyzing texts can have a major impact on the reader's perspectives and even shift them. From this course, I've learned to think more about outside perspectives and understand their history and taking a second to just think more about my surroundings. I've also learned that writing needs clear-cut analysis rather than assuming that the reader knows what you are talking about and to always set up context when necessary. I've also learned to think about different aspects when reading such as the setting, movements in the scene, and to visualize that I am in the scene. I will tell my future self to keep persisting when I have writing blocks and that when I am in trouble to always look for another route or way to attack my obstacle because there's not only one way to solve a problem. I also want to say that it is important to search for outside resources because their opinion can change how an essay will come out and reading your own essays can become mentally training, which is why other people reading your essays can unlock ideas."
          />
        </div>
      </header>
      
    </div>
  );
  }

export default App;
