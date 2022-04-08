import { motion } from "framer-motion"
import { ReactComponent as PlusIcon} from "../assets/plus.svg";
import { ReactComponent as CloseIcon} from "../assets/cross.svg";


const InputForm = ({
    title,
    setTitle,
    description,
    setDescription,
    inputActivated,
    setInputActivated,
    cards,
    setCards
}) => {


    const inputTitleHandler = (e) => {
        setTitle(e.target.value)
    };
    const inputDescriptionHandler = (e) => {
        setDescription(e.target.value)
    };

    const submitHandler = (e) => {
        e.preventDefault()
        if (title != ''){
            setCards([
                ...cards,
                {   title: title,
                    description: description, 
                    isOpen: false,  
                    completed: false, 
                    id: Math.random()*1000
                }
            ])
            setTitle('')
            setDescription('')
        }
        setInputActivated(false)
    };

    const closeHandler = () => {
        setTitle('')
        setDescription('')
        setInputActivated(false)
    }

    

  return (
    <motion.form 
        className="input-form"
        layout
    >
        <motion.input 
            type="text" 
            placeholder="Add New"
            onClick={()=> setInputActivated(true)}
            onChange={inputTitleHandler}
            value={title}
            layout='position'
        />

        { inputActivated &&
            <motion.button
                className="close-btn"
                onClick={closeHandler}
                layout
            >
                <CloseIcon />
                
            </motion.button>

        }

        { inputActivated && 

            <motion.div style={{position: "relative"}}>

                <motion.textarea 
                    placeholder="Description"
                    onChange={inputDescriptionHandler}
                    value={description} 
                    layout
                >      
                </motion.textarea>

                <motion.button 
                    className="add-btn"
                    onClick={submitHandler}
                    layout="position"
                >
                    <PlusIcon />
                    
                </motion.button>


            </motion.div>

         }

    </motion.form>
  )
}

export default InputForm