import { useState, useEffect } from 'react';
import Card from './Components/Card';
import './App.css';
import InputForm from './Components/InputForm';
import StatusSelect from './Components/StatusSelect';

function App() {
  // States
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [inputActivated, setInputActivated] = useState(false)
  const [cards, setCards] = useState([])
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [filteredCards, setFilteredCards] = useState([])


  // Run once on start
  useEffect(() => {
    getCardsFromLocal();
  }, [] );

  // Effect
  useEffect(()=>{
    filterHandler();
    saveCardsToLocal();
    }, [cards, selectedStatus]);



  //  Display filtered cards
  const filterHandler = () => {
    switch (selectedStatus){

      case "completed":
        setFilteredCards(cards.filter(card => card.completed === true));
        break;
      case "uncompleted":
        setFilteredCards(cards.filter(card => card.completed === false));
        break;
      default:
        setFilteredCards(cards);
        break;

    }
  }



  // Save to local storage
  const saveCardsToLocal = () => {
    localStorage.setItem("cards", JSON.stringify(cards))
  }

  const getCardsFromLocal = () => {
    if(localStorage.getItem("cards") === null){
      localStorage.setItem("cards", JSON.stringify([]))
    }else{
      let localCards = JSON.parse(localStorage.getItem("cards"))
      setCards(localCards)
    }
  }


  return (
    <div className="App">

      <div className="forms-container">

        <InputForm
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
            inputActivated={inputActivated}
            setInputActivated={setInputActivated}
            cards={cards}
            setCards={setCards}
        />

        <StatusSelect 
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
        />

      </div>

     
      <div className="cards-container">
 
        <div className="cards-wrapper">
            
          {filteredCards.map((card) => (

            <Card 
              cards={cards}
              setCards={setCards}
              card = {card}
              title={card.title}
              content={card.description}
              isOpen={card.isOpen}
              key={card.id}
            />

          ))}

        </div>


      </div>

    </div>
  );
}

export default App;


