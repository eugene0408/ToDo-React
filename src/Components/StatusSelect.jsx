import { motion } from "framer-motion"
import { useState } from "react"



 
const StatusSelect = ({selectedStatus, setSelectedStatus}) => {
    const [statusExpanded, setStatusExpanded] = useState(false)
    const [statusList, setStatusList] = useState([])

    const statuses = ["all", "completed", "uncompleted"]

    const statusExpandHandler = ()=> {
        setStatusList(statuses.filter((el)=> el !== selectedStatus));
        setStatusExpanded(!statusExpanded);
    }

    const statusClickHandler = (e)=> {
        e.stopPropagation()
        setSelectedStatus(e.target.value)
        setStatusExpanded(!statusExpanded);
    }

  return (
    <motion.div
        className="status-select"
        onClick={statusExpandHandler}
        layout
    >

        <motion.button 
            className={`status-btn status-btn__${selectedStatus}`}
             layout="position"
        >
            <motion.h3
                className="status-header"
                layout="position"
                transition={{duration: 0.5, type: "spring"}}
            >
                Display:
            </motion.h3>
                {selectedStatus}       
        </motion.button>

        { statusExpanded &&

            <motion.div 
                className="status-select_expanded"
            >
                {
         
                    statusList.map((el, index) => 
                        (
                            <motion.button
                                className={`status-btn status-btn__${el}`}
                                onClick={statusClickHandler}
                                value={`${el}`}
                                key={Math.random()*1000}
                                layout="position"
                                transition={{duration: index + 0.7, type: "spring"}}
                                initial={{opacity: 0, x: -40}}
                                animate={{opacity: 1, x: 0}}
                            >
                                {el}
                            </motion.button>
                        )
                    )

                }
            </motion.div>

        }
    </motion.div>
  )
}

export default StatusSelect