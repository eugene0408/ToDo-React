import { motion } from "framer-motion"
import { ReactComponent as TrashIcon} from "../assets/trash.svg"
import { ReactComponent as CheckedIcon} from "../assets/check.svg"

const Card = ({
    title, 
    content, 
    cards, 
    setCards, 
    card, 
    isOpen
}) => {


    const expandCardHandler = () => {
        setCards(cards.map((el) => {
            if(el.id === card.id){
                return{
                    ...el, isOpen: !el.isOpen
                }      
            }
            return el
        }))
    }

    const completeHandler = (e) => {
        e.stopPropagation()
        setCards(cards.map(el => {
            if(el.id === card.id){
                  return {
                    ...el, completed: !el.completed
                }
            }
            return el
        }))
    }


    const deleteHandler = (e) => {
        e.stopPropagation()
        setCards(cards.filter((el) => el.id !== card.id))
    }


  return (
    <motion.div transition={{layout:{duration: 0.8, type: "spring"}}}
                layout 
                className="card"
                onClick={expandCardHandler}
                style={{borderRadius: "1.2rem", 
                        boxShadow: "0px 10px 25px rgba(#000, 0.5)"
                        }}
                
    >
        <motion.h2 layout="position" className={card.completed ? "completed" : "uncompleted"}>
            {title}
        </motion.h2>

        <motion.div className="buttons-wrapper" 
                    layout="position"
        >

            <button 
                className="chk-btn"
                onClick={completeHandler}
            >
                <CheckedIcon />
            </button>


            <button 
                className="del-btn"
                onClick={deleteHandler}
            >
                <TrashIcon/>
            </button>

        </motion.div>


        {isOpen && 

            <motion.div initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 1, type: "spring"}}
                        className="expand"
            >
                <p>
                    {content}
                </p>
  

            </motion.div>

        }

    </motion.div>
  )
}

export default Card