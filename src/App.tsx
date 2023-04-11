import React, {useState} from "react";
import BottomSheetModal from "./variant2/BottomSheetModal";
import styles from "./variant1/BottomSheetModal.module.scss"

const App: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <div className={styles.centerContainer}>
                <button className={styles.openButton} onClick={openModal}>
                    Открыть
                </button>
            </div>

            <BottomSheetModal isOpen={isModalOpen} onClose={closeModal}>
                <h2>Заголовок модального окна</h2>
                <p>Текст внутри модального окна</p>
                {/* Вставьте дополнительный контент здесь */}
            </BottomSheetModal>
        </div>
    );
};

export default App;
