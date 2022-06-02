import React from 'react'
import styles from "../Styles/PaginationBtns.module.scss";

const PaginationsBtns = ({ data, page, handleData, setPage }) => {

    //PAGINACION
    const handleDataPrev = (url) => {
        if (page > 1) {
            handleData(url)
            setPage(page - 1)
            window.scrollTo(0, 0)
        }
    }
    const handleDataNext = (url) => {
        handleData(url)
        setPage(page + 1)
        window.scrollTo(0, 0)
    }

    return (
        <div>
            {
                data.results?.length >= 20
                    ? <div className={styles.page_btns}>
                        <button onClick={() => handleDataPrev(data.info.prev)}>
                            <i className="fa-solid fa-angles-left"></i>
                        </button>
                        <span>{page}</span>
                        <button onClick={() => handleDataNext(data.info.next)}>
                            <i className="fa-solid fa-angles-right"></i>
                        </button>
                    </div>
                    : null
            }
        </div>
    )
}

export default PaginationsBtns